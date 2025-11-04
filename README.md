Here’s an **updated and polished version** of the README that keeps original clarity but adds:

* ✨ **Dark mode** mention throughout
* 🇪🇸 **Full Spanish translation mode**
* 🤖 **AI Assistant system (local or API-connected)**
* 💡 **Community-driven mission statement**
* 🧠 **Forward-looking roadmap**

---

# Juana Díaz Hub

Juana Díaz Hub is a professional, educational, and community-driven platform that celebrates and connects the vibrant town of **Juana Díaz, Puerto Rico**.
Built with **Next.js 14** and **Tailwind CSS**, the site combines a modern dark/light design system, full Spanish translation, and an upcoming **AI Assistant** capable of operating both via API and in a local intranet environment — empowering local access even when offline.

The project’s purpose is simple yet ambitious:

> **To give Juana Díaz a digital home — one that reflects its people, stories, and future.**

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
npm start
```

This project uses the **Next.js App Router** (v13+) with page routes organized inside the `src/app` directory.
Each folder under `app` corresponds to a route (for example, `src/app/forum/page.tsx` renders the **Forum** page).

---

## 🗂️ Project Structure

| Path                 | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `src/app`            | Page routes (e.g. `home`, `explore`, `directory`, `event-calendar`). |
| `src/components`     | Reusable UI components (`Navbar`, `Footer`, `Hero`, `Card`).         |
| `src/styles`         | Global styles powered by Tailwind CSS.                               |
| `tailwind.config.js` | Custom color palette, typography, and dark-mode configuration.       |
| `next.config.js`     | App Router and internationalization (i18n) setup.                    |
| `package.json`       | Dependencies and scripts.                                            |

---

## 🎨 Design Tokens & Branding

Juana Díaz Hub’s design system draws inspiration from the region’s **natural colors and cultural energy**.

| Token          | Hex                                                       | Description                          |
| -------------- | --------------------------------------------------------- | ------------------------------------ |
| `primary`      | `#FF6F61`                                                 | Sunset orange — buttons & highlights |
| `secondary`    | `#3AAFA9`                                                 | Ocean blue — secondary accents       |
| `accent`       | `#79C753`                                                 | Caribbean green — visual balance     |
| `neutralLight` | `#F0E5DA`                                                 | Sand tone — light background         |
| `neutralDark`  | `#2C7E3C`                                                 | Palm green — dark foreground         |
| Fonts          | Montserrat (heading), Open Sans (body), Pacifico (accent) |                                      |

**Dark Mode** is supported site-wide, respecting the user’s system preference and toggleable manually via the UI.

---

## 🌐 Language Support

The entire site supports **bilingual content (English + Spanish)**.
Text elements, UI labels, and navigation links automatically switch language based on user preference or browser locale.

Planned next step: integrate **Next-Intl** or **i18next** for deeper runtime translations and CMS-driven multilingual content.

---

## 🔒 Features Implemented

* **Multi-page routing** with 30+ sections: home, explore, forum, nightlife, culture, travel tips, learning hub, blog, guides, gallery, events, notices, user dashboard, legal pages, and more.
* **Reusable components** for hero banners, navigation, cards, and footers.
* **Fully responsive** Tailwind layout optimized for mobile-first design.
* **Accessibility** with semantic HTML and descriptive metadata.
* **Admin authentication** via signed HTTP-only cookies with login/logout routes and protected dashboard access.
* **Dark-mode aware UI** ensuring consistent visuals across devices.
* **Dynamic localization** groundwork for Spanish content translation.

---

## 🧠 Configuring Admin Access

1. Duplicate the example environment file:

   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials:

   | Variable              | Description                                             |
   | --------------------- | ------------------------------------------------------- |
   | `AUTH_SECRET`         | Random string to sign cookies (`openssl rand -hex 32`). |
   | `ADMIN_EMAIL`         | Admin sign-in email.                                    |
   | `ADMIN_NAME`          | Optional display name for dashboard.                    |
   | `ADMIN_PASSWORD_HASH` | SHA-256 hash of admin password.                         |
   | `ADMIN_PASSWORD`      | Plain-text alternative (development only).              |

   To generate a hash:

   ```bash
   node -e "console.log(require('crypto').createHash('sha256').update('your-password').digest('hex'))"
   ```

3. Restart the dev server.

4. Visit `/login` and enter your admin credentials.

> The bilingual login form offers live password-strength feedback and placeholders for future OAuth logins (Google/Facebook).

---

## 🤖 AI Assistant (In Development)

The Juana Díaz Hub includes an upcoming **AI Assistant** — a bilingual chatbot that serves as a **concierge for the community**.

### Planned capabilities:

* Real-time Q&A about local events, safety alerts, and business directories.
* Translation between English ↔ Spanish for public posts or forum content.
* Local-only mode for intranet deployments — **no external API required**.
* Optional integration with OpenAI, Hugging Face, or on-prem LLMs.
* Custom command shortcuts (e.g., `summarizer`, `weather`, `directory lookup`).

This assistant aims to become the **digital heart** of the Juana Díaz community — informative, private, and grounded in local data.

---

## 🧩 Extending the Project

* Integrate a **headless CMS** (Contentful, Strapi, or Directus) for live content updates.
* Expand authentication to full **user accounts**, roles, and OAuth.
* Add **API routes** for forum posts, events, and directory submissions.
* Connect **Google Maps** for geo data and **Mailchimp** for newsletters.
* Deploy **analytics** and **SEO schema** for visibility.
* Localize all content via i18n and CMS synchronization.

---

## 🗺️ Future Roadmap

1. **AI Assistant Launch** — bilingual, locally-deployable concierge.
2. **CMS Integration** — live homepage/content editing.
3. **Community Forum Backend** — with moderation tools.
4. **User Profiles & Memberships** — dashboard for locals and visitors.
5. **Data Portability** — offline sync for intranet setups (schools, libraries).
6. **Progressive Web App (PWA)** support for offline access.

---

## 🙏 Acknowledgements

This project draws inspiration from **the spirit of Juana Díaz** — its culture, innovation, and sense of community.
What began as a design experiment is becoming a **living civic platform**, uniting technology and local identity.

> *“Built for the people of Juana Díaz — by those who believe in its future.”*

---


## 🌍 Live Demo

Check out the **Juana Díaz Hub** live demo:
👉 [**Visit the Live Site**](https://juana-diaz-laug501.vercel.app/)

> ⚠️ **Note:** Registration and full member accounts are not yet active — this is an ongoing **hobby project** under active development.
> You’re welcome to explore all public areas, test the design, and share feedback on the experience. Every suggestion helps shape the final release!

---

## 💌 Join the Waiting List

Be the first to know when new features go live — including event listings, community forums, the AI assistant, and local directory submissions.

➡️ **[Join the Waiting List]([https://juana-diaz-laug501.vercel.app/waiting-list])**

> Once registration opens, early supporters will receive exclusive access to the private beta and invitations to upcoming local events integrated directly into the site.

---

## 🧭 Project Vision

Juana Díaz Hub is more than a website — it’s a **digital home for the community**, combining culture, education, and innovation in one place.

Even in its beta stage, the platform already highlights:

* Bilingual interface (🇺🇸 English + 🇪🇸 Español)
* Responsive dark/light design
* Local stories, guides, and resources
* Early foundation for AI-powered assistance and event discovery

---

## ⭐ Feedback Welcome

Since this project is community-driven, **all feedback is welcome** — design, navigation, performance, accessibility, or new feature ideas.

Feel free to:

* Open a [GitHub issue](https://github.com/your-username/juana-diaz-hub/issues)
* Leave a message via the contact form on the demo site
* Or simply share your thoughts on social media with the tag **#JuanaDiazHub**

---

> ✨ *This is just the beginning — Juana Díaz Hub will keep evolving as an open, creative space for the people who make the town special.*

---

Would you like me to merge this seamlessly into your **full README** so you can paste one unified document (including your earlier sections + this live-demo update)?


