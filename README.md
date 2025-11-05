# Juana Díaz Hub

A full-stack learning community portal built with **Next.js 14**, **React Server Components**, and a lightweight encrypted JSON datastore. The platform blends public storytelling with authenticated tools for administrators, mentors, and residents.

Key highlights:

- OAuth-ready single sign-on (Google, Facebook, TikTok) plus secure admin credentials.
- Left-rail dashboard with pinned hub navigation, live language + theme toggles, and per-route "new" indicators.
- Dynamic forum backed by server APIs for threads, replies, and appreciations.
- Rich tagging, moderation, and analytics workflows so admins can curate discussions without leaving the dashboard.
- AI Lab for testing curated API keys, logging usage, and publishing an RSS feed of provider updates.
- School workspace where learners progress through conversational AI lessons and mark steps complete.
- Inline CMS blocks so admins can edit home, explore, and history copy without touching code.
- Unified inbox and member directory so administrators can respond to community messages, audit roles, and manage SSO access in one place.

## Getting started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
npm start
```

Project layout:

- `src/app` – App Router routes (dashboard, forum, ai-lab, school, etc.).
- `src/components` – Reusable UI (navigation, forms, AI chat, school checklists).
- `src/lib` – Server utilities for auth, content editing, forum, AI providers, and courses.
- `data/database.json` – Encrypted JSON datastore persisted on disk during development.

## Environment variables

Copy `.env.example` to `.env.local` and populate the following values:

| Variable | Required | Description |
| --- | --- | --- |
| `AUTH_SECRET` | ✅ | 32+ character string used to sign and encrypt session cookies and secrets. |
| `ADMIN_EMAIL` | ✅ | Email address allowed to sign in with credentials. |
| `ADMIN_NAME` | ❌ | Optional friendly display name on the dashboard. |
| `ADMIN_PASSWORD_HASH` | ✅ | SHA-256 hash of the admin password (recommended). |
| `OAUTH_REDIRECT_BASE` | ✅ | Base URL for OAuth callbacks (e.g. `http://localhost:3000`). |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | ✅ | Google OAuth credentials. |
| `FACEBOOK_CLIENT_ID` / `FACEBOOK_CLIENT_SECRET` | ✅ | Facebook OAuth credentials. |
| `TIKTOK_CLIENT_ID` / `TIKTOK_CLIENT_SECRET` | ✅ | TikTok OAuth credentials. |
| `SITE_URL` | ✅ | Public site URL used inside RSS feeds. |
| `AI_PROXY_ENDPOINT` | ❌ | Optional proxy endpoint if you want to forward prompts to a hosted LLM. |
| `ALLOW_SELF_SERVICE_SIGNUP` | ❌ | Set to `true` to allow non-admin credential signups during testing. |

To create a password hash run:

```bash
node -e "console.log(require('crypto').createHash('sha256').update('your-password').digest('hex'))"
```

## Authentication & sessions

- OAuth flows live under `src/app/api/oauth/[provider]/route.ts` and redirect back to `/login`.
- Signed cookies (`jd_session_v2`) store hashed tokens. Session lookups happen through the `lib/auth.ts` helper.
- API routes for login, logout, and session introspection live under `src/app/api/auth/*`.

## Content editing

Administrators can update key marketing copy via the dashboard:

- The `/api/content/blocks` route stores overrides in `data/database.json` with AES-256-GCM encryption.
- Pages request overrides through the `useContentOverrides` hook (client) or `getContentValue` helper (server).

## Forum

- Forum data is persisted in the JSON datastore (`forumThreads`, `forumPosts`, `forumLikes`).
- Server actions live in `src/lib/forum-service.ts` and power API routes in `src/app/api/forum/...`.
- The main listing (`/forum`) renders server-side, while composers and like buttons run on the client.

## AI Lab

- Providers and usage logs live in `aiProviders` and `apiUsage` collections.
- `src/lib/ai-service.ts` manages encryption, optional proxy calls, usage logging, and RSS generation.
- `/ai-lab` surfaces a chat panel and a usage table; `/api/ai/rss` emits a consumable RSS feed.

## School

- Seeded course content lives in the datastore (`courses`, `lessons`, `lessonSteps`).
- Learner progress is tracked in `lessonProgress` via `/api/school/progress`.
- `/school` lists sprints, while `/school/[slug]` renders step-by-step checklists that mark completion client-side.

## Data persistence

All server-side features read/write to `data/database.json`. During development the file is committed to disk so you can inspect or reset state. In production you would replace this layer with a managed database (PostgreSQL, PlanetScale, etc.) and port the `lib/*-service.ts` helpers accordingly.

## Testing & linting

No automated tests are bundled yet. Run `npm run lint` and `npm run build` before deploying. The build step exercises server routes, ensuring the JSON datastore seeds correctly.

## Deployment notes

- Configure the environment variables listed above in your hosting provider (Vercel, Render, DigitalOcean).
- Ensure `data/database.json` is writable or replace the persistence layer with a database driver in production.
- OAuth providers must include the redirect URL `${OAUTH_REDIRECT_BASE}/api/oauth/<provider>?step=callback` in their dashboards.

## Contributing

1. Fork the repository and create a feature branch.
2. Add or update modules under `src/lib` and `src/app/api` to expose server functionality.
3. Keep UI strings bilingual by updating `src/components/providers/language-context.tsx`.
4. Submit a PR describing the feature set, required env vars, and any migration steps.

Together we can keep the Juana Díaz Hub growing as a bilingual, AI-assisted space for neighbors to learn, build, and celebrate.
