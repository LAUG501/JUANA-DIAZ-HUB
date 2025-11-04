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

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 text-slate-800 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-heading text-xl text-primary dark:text-secondary">
            {dictionary.nav.brand}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {dictionary.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-lg">{dictionary.footer.quickLinks}</h4>
          <ul className="space-y-2 text-sm">
            {dictionary.nav.items.slice(1, 5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary dark:hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-heading text-lg">{dictionary.footer.stayConnected}</h4>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
            {dictionary.footer.newsletterHelper}
          </p>
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
      </div>
      <div className="border-t border-slate-200/60 py-4 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
        &copy; {year} {dictionary.nav.brand}. {dictionary.footer.copyrightSuffix}
      </div>
    </footer>
  );
}