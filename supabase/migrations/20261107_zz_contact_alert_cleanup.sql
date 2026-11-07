-- The personal form keeps its data in Supabase. Remove the incorrectly
-- coupled email notification and prepare a marker for ChatGPT checks.
drop trigger if exists sergiogp_form_insert_notice on public."forms-sergiogp";
drop function if exists sergiogp_internal.dispatch_form_notice();
drop function if exists sergiogp_internal.retry_pending_forms();
drop schema if exists sergiogp_internal;
drop index if exists public.forms_sergiogp_pending_notices;

alter table public."forms-sergiogp"
  drop column if exists notification_status,
  drop column if exists notification_attempts,
  drop column if exists notification_attempted_at,
  drop column if exists notified_at,
  drop column if exists notification_error,
  add column if not exists chatgpt_alerted_at timestamptz;

-- Existing submissions predate the new ChatGPT alert and have already been
-- handled; keep their name, email and message unchanged.
update public."forms-sergiogp"
set chatgpt_alerted_at = now()
where chatgpt_alerted_at is null;

comment on column public."forms-sergiogp".chatgpt_alerted_at is
  'Timestamp set after the personal ChatGPT scheduled task reports a new form.';
