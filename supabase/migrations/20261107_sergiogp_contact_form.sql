-- Inbound messages from the personal website. No public read access.
create table public."forms-sergiogp" (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  constraint forms_sergiogp_name_length check (char_length(btrim(name)) between 1 and 100),
  constraint forms_sergiogp_email_length check (char_length(email) between 3 and 254),
  constraint forms_sergiogp_email_format check (email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  constraint forms_sergiogp_message_length check (char_length(btrim(message)) between 1 and 5000)
);

alter table public."forms-sergiogp" enable row level security;
revoke all on table public."forms-sergiogp" from public, anon, authenticated;
grant insert (name, email, message) on table public."forms-sergiogp" to anon;

create policy "Website visitors can submit contact messages"
  on public."forms-sergiogp"
  for insert
  to anon
  with check (true);

comment on table public."forms-sergiogp" is
  'Contact requests submitted from sergiogp.com; anonymous visitors can insert but cannot read, edit, or delete.';
