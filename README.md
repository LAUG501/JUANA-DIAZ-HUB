# Juana Diaz Hub

Juana Diaz Hub is a professional, educational and community‑driven website designed to showcase the vibrant town of Juana Diaz, Puerto Rico. The site is built with **Next.js 14** and **Tailwind CSS**, leveraging a headless CMS (such as Contentful or Strapi) for content management and offering features including a forum, event calendar, directory and blog.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
npm start
```

This repository uses the Next.js App Router (available from Next.js 13 onward) and organizes pages in the `src/app` directory. Each folder under `app` corresponds to a route on the website. For example, `src/app/forum/page.tsx` renders the **Forum** page.

## Project Structure

- `src/app` – Application routes and pages (e.g. `home`, `directory`, `event-calendar`).
- `src/components` – Reusable UI components such as `Navbar`, `Footer`, `Hero` and `Card`.
- `src/styles` – Global CSS powered by Tailwind CSS.
- `tailwind.config.js` – Customizes the design tokens (colors, fonts, spacing).
- `package.json` – Defines dependencies and scripts.
- `next.config.js` – Next.js configuration enabling the App Router.

## Design Tokens

The Tailwind configuration defines a set of custom colors and fonts to align with the Juana Diaz Hub brand:

- `primary` (#FF6F61) – Sunset orange used for buttons and highlights
- `secondary` (#3AAFA9) – Ocean blue used for secondary elements
- `accent` (#79C753) – Caribbean green accent color
- `neutralLight` (#F0E5DA) – Light background color (sand)
- `neutralDark` (#2C7E3C) – Dark foreground color (palm green)
- `heading` font – Montserrat
- `body` font – Open Sans
- `accent` font – Pacifico

## Features Implemented

-The project now ships with a lightweight back‑end for secure administrator sign‑in, while still providing a strong foundation for future expansion. Key features include:

- **Multi‑page routing** with 30+ pages covering home, explore, forum, nightlife, culture, safety, travel tips, directory with subcategories, learning hub, events, blog, guides, stories, gallery, videos, news, notices, weather alerts, user dashboard, profile, legal pages and sitemap.
- **Reusable components** for navigation, footers, cards and hero sections.
- **Responsive design** using Tailwind’s grid system and mobile-first utilities.
- **Accessibility considerations** such as semantic HTML and descriptive text.
- **Admin authentication** powered by signed HTTP‑only cookies, including login/logout API routes and protected dashboard access.

## Configuring Admin Access

1. Copy `.env.example` to `.env.local` and populate the values:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Description |
   | --- | --- |
   | `AUTH_SECRET` | Random string used to sign session cookies (generate with `openssl rand -hex 32`). |
   | `ADMIN_EMAIL` | Email address required to sign in as the administrator. |
   | `ADMIN_NAME` | Optional friendly display name shown on the dashboard. |
   | `ADMIN_PASSWORD_HASH` | SHA‑256 hash of the admin password (recommended). |
   | `ADMIN_PASSWORD` | Plaintext password alternative if a hash is not provided. |

   To generate a SHA‑256 hash for `ADMIN_PASSWORD_HASH` run:

   ```bash
   node -e "console.log(require('crypto').createHash('sha256').update('your-password').digest('hex'))"
   ```

2. Restart the development server so Next.js can read the environment variables.

3. Visit `/login`, enter the configured admin email/password, and you will be redirected to the protected dashboard.

The login form also provides context in English and Spanish, live password strength hints, and disabled placeholders for future social sign‑in providers (Google/Facebook) that can be wired up once OAuth credentials are available.

## Extending This Project

- Integrate a headless CMS (e.g. Contentful) to dynamically source content for directory listings, blog posts, events and more.
- Expand the authentication system with database-backed user accounts, role management and OAuth providers.
- Build out **API routes** under `src/app/api` for forum posts, event submissions and directory search.
- Connect external services such as **Google Maps** for location information and **Mailchimp** for newsletter subscriptions.

## Acknowledgements

This project is inspired by detailed design blueprints for brand guardianship, UX architecture and community engagement. The current implementation serves as a starting point for a full‑featured community portal that can continue to grow with user contributions and additional functionality.