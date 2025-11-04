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
  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://youtube.com", label: "YouTube" },
  ];

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
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25Z" />
                  <path d="M15.75 8.25h-1.5c-.621 0-1.125.504-1.125 1.125V10.5h2.25l-.3 2.25h-1.95v6h-2.25v-6h-1.5V10.5h1.5v-1.2c0-1.578 1.272-2.85 2.85-2.85h1.5Z" />
                </svg>
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