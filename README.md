# Vera Landing

AI-powered IBD companion waitlist site — built for early demand validation (including YC).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion
- Supabase (`waitlist` table)

## Getting started

```bash
cd landing
npm install
cp .env.example .env.local
# fill in Supabase values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run [`supabase/waitlist.sql`](supabase/waitlist.sql).
3. Copy Project URL into `NEXT_PUBLIC_SUPABASE_URL`.
4. Prefer `SUPABASE_SERVICE_ROLE_KEY` for server-side inserts (never ship this to the browser).  
   Or use the anon key with the insert-only RLS policy from the SQL file.
5. Redeploy / restart `npm run dev`.

Export waitlist rows from the Supabase Table Editor for YC metrics.

Without env vars configured, the form validates client-side and returns a friendly error (signups are not stored).

## Deploy (Vercel)

1. Set the Vercel project root to `landing` (or deploy from this folder).
2. Add the same env vars as `.env.example`.
3. Deploy.

## Brand

Primary green sampled from the Vera logo: `#407048`.
