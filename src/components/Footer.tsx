"use client";

import Link from "next/link";
import { useLanguage } from "./providers/language-context";

/**
 * Footer component.
 * Contains site navigation, social links, and a short tagline.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const { dictionary } = useLanguage();
  const quickLinks = dictionary.nav.items.slice(0, 5);
  const resourceLinks = [
    { href: "/analytics", label: dictionary.footer.analyticsLink },
    { href: "/waiting-list", label: dictionary.footer.waitlistLink },
    { href: "/contact", label: dictionary.footer.supportLink },
  ];
  const socialLinks: { href: string; label: string; icon: "facebook" | "instagram" | "youtube" | "tiktok" | "x" }[] = [
    { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
    { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
    { href: "https://www.youtube.com", label: "YouTube", icon: "youtube" },
    { href: "https://www.tiktok.com", label: "TikTok", icon: "tiktok" },
    { href: "https://twitter.com", label: "X", icon: "x" },
  ];

  const renderIcon = (icon: (typeof socialLinks)[number]["icon"]) => {
    switch (icon) {
      case "facebook":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 4.87 3.44 8.92 7.94 9.78v-6.91H7.45v-2.87h2.49V9.83c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.2.19 2.2.19v2.41h-1.24c-1.22 0-1.6.76-1.6 1.55v1.87h2.72l-.43 2.87h-2.29v6.91C18.56 20.98 22 16.93 22 12.06Z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="12" cy="12" r="3.5" />
            <circle cx="17" cy="7" r="1" fill="currentColor" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21.6 7.2a2.4 2.4 0 0 0-1.68-1.68C18.2 5 12 5 12 5s-6.2 0-7.92.52A2.4 2.4 0 0 0 2.4 7.2 25.9 25.9 0 0 0 2 12a25.9 25.9 0 0 0 .4 4.8 2.4 2.4 0 0 0 1.68 1.68C5.8 19 12 19 12 19s6.2 0 7.92-.52a2.4 2.4 0 0 0 1.68-1.68A25.9 25.9 0 0 0 22 12a25.9 25.9 0 0 0-.4-4.8ZM10.5 15.15V8.85L15.75 12Z" />
          </svg>
        );
      case "tiktok":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21 7.5a6.51 6.51 0 0 1-4.1-1.43v7.54a5.4 5.4 0 1 1-5.4-5.4c.19 0 .38.01.57.03v3.07a2.37 2.37 0 1 0 1.68 2.26V2.5h2.83A3.68 3.68 0 0 0 19 5.76 3.7 3.7 0 0 0 21 6.4Z" />
          </svg>
        );
      case "x":
      default:
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 4h3.52l4.1 5.77L16.82 4H20l-6.28 7.5L20 20h-3.52l-4.18-5.88L7.18 20H4l6.5-7.72Z" />
          </svg>
        );
    }
  };

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 text-slate-800 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-heading text-2xl text-primary dark:text-secondary">{dictionary.nav.brand}</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{dictionary.footer.tagline}</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-500 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:border-secondary dark:hover:text-secondary"
              >
                <span className="sr-only">{social.label}</span>
                {renderIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading text-lg">{dictionary.footer.quickLinks}</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-primary dark:hover:text-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading text-lg">{dictionary.footer.resourcesTitle}</h4>
          <ul className="space-y-2 text-sm">
            {resourceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-primary dark:hover:text-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 font-heading text-lg">{dictionary.footer.stayConnected}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-300">{dictionary.footer.newsletterHelper}</p>
          <form className="flex overflow-hidden rounded-full border border-slate-200/80 bg-white/70 shadow-sm transition focus-within:border-primary dark:border-slate-700/80 dark:bg-slate-900/50">
            <input
              type="email"
              placeholder={dictionary.footer.placeholder}
              className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none dark:text-slate-100"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
            >
              {dictionary.footer.subscribeCta}
            </button>
          </form>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading text-lg">{dictionary.footer.contactTitle}</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <span className="font-semibold text-slate-800 dark:text-slate-100">{dictionary.footer.contactEmailLabel}:</span> team@juanadiazhub.org
            </li>
            <li>
              <span className="font-semibold text-slate-800 dark:text-slate-100">{dictionary.footer.contactPhoneLabel}:</span> +1 (787) 555-0129
            </li>
            <li>
              <span className="font-semibold text-slate-800 dark:text-slate-100">{dictionary.footer.contactAddressLabel}:</span> Calle Ramón Emeterio Betances 12, Juana Díaz, PR
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-4 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
        &copy; {year} {dictionary.nav.brand}. {dictionary.footer.copyrightSuffix}
      </div>
    </footer>
  );
}