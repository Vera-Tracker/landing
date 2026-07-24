-- Run this in the Supabase SQL editor to create the waitlist table.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  ibd_type text not null check (
    ibd_type in ('crohns', 'ulcerative_colitis', 'prefer_not_to_say')
  ),
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- If you use the anon key instead of the service role key, allow inserts only:
create policy "Allow public waitlist inserts"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Optional: block all reads from anon (manage signups in the dashboard)
-- No select policy for anon = no public reads.
