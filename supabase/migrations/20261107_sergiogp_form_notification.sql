-- Add a server-side notification without exposing mail credentials in the website.
-- Create Vault secret "sergiogp_form_webhook" before enabling the trigger.
create extension if not exists pg_net with schema extensions;
create extension if not exists pg_cron with schema pg_catalog;

alter table public."forms-sergiogp"
  add column notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sending', 'sent', 'unknown', 'failed')),
  add column notification_attempts smallint not null default 0
    check (notification_attempts between 0 and 3),
  add column notification_attempted_at timestamptz,
  add column notified_at timestamptz,
  add column notification_error text;

create index forms_sergiogp_pending_notices
  on public."forms-sergiogp" (created_at)
  where notification_status = 'pending' and notification_attempts < 3;

create schema if not exists sergiogp_internal;
revoke all on schema sergiogp_internal from public, anon, authenticated;

create function sergiogp_internal.dispatch_form_notice()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  webhook_secret text;
begin
  select decrypted_secret into webhook_secret
  from vault.decrypted_secrets
  where name = 'sergiogp_form_webhook'
  limit 1;

  if webhook_secret is null then
    raise warning 'sergiogp form notification secret missing';
    return new;
  end if;

  perform net.http_post(
    url := 'https://aldrax-operaciones.vercel.app/api/sergiogp-notify',
    body := jsonb_build_object(
      'type', 'INSERT', 'schema', 'public', 'table', 'forms-sergiogp',
      'record', jsonb_build_object('id', new.id)
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-sergiogp-webhook', webhook_secret
    ),
    timeout_milliseconds := 10000
  );
  return new;
exception when others then
  -- A notification outage must never discard a contact form submission.
  raise warning 'sergiogp form notification queue failed (%).', sqlstate;
  return new;
end;
$$;

revoke all on function sergiogp_internal.dispatch_form_notice()
  from public, anon, authenticated;

create trigger sergiogp_form_insert_notice
  after insert on public."forms-sergiogp"
  for each row execute function sergiogp_internal.dispatch_form_notice();

create function sergiogp_internal.retry_pending_forms()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  webhook_secret text;
begin
  if not exists (
    select 1 from public."forms-sergiogp"
    where notification_status = 'pending' and notification_attempts < 3
  ) then
    return;
  end if;

  select decrypted_secret into webhook_secret
  from vault.decrypted_secrets
  where name = 'sergiogp_form_webhook'
  limit 1;
  if webhook_secret is null then
    raise warning 'sergiogp form notification secret missing';
    return;
  end if;

  perform net.http_post(
    url := 'https://aldrax-operaciones.vercel.app/api/sergiogp-notify',
    body := '{"type":"RETRY"}'::jsonb,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-sergiogp-webhook', webhook_secret
    ),
    timeout_milliseconds := 10000
  );
exception when others then
  raise warning 'sergiogp form notification retry queue failed (%).', sqlstate;
end;
$$;

revoke all on function sergiogp_internal.retry_pending_forms()
  from public, anon, authenticated;

select cron.schedule(
  'sergiogp-form-notification-retry',
  '*/5 * * * *',
  'select sergiogp_internal.retry_pending_forms();'
);
