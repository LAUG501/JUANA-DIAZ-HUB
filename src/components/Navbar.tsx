"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./providers/language-context";

type AuthenticatedUser = {
  email: string;
  name: string;
  role: string;
};

/**
 * Navigation bar component with sidebar layout on desktop and drawer on mobile.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<AuthenticatedUser | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { dictionary } = useLanguage();

  const navItems = dictionary.nav.items;
  const { openMenu, closeMenu, dashboard, signOut: signOutLabel } = dictionary.actions;

  useEffect(() => {
    let active = true;
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/auth/session", {
          cache: "no-store",
        });
        if (!active) return;
        if (!response.ok) {
          setSession(null);
          return;
        }
        const data = (await response.json()) as { authenticated: boolean; user?: AuthenticatedUser };
        if (data.authenticated && data.user) {
          setSession(data.user);
        } else {
          setSession(null);
        }
      } catch (error) {
        if (active) {
          setSession(null);
        }
      }
    };

    fetchSession();

    return () => {
      active = false;
    };
  }, []);

  const filteredNavItems = useMemo(() => {
    if (!session) {
      return navItems;
    }
    return navItems.filter((item) => item.href !== "/login");
  }, [navItems, session]);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setSession(null);
      setIsOpen(false);
      router.push("/");
      router.refresh();
    } finally {
      setSigningOut(false);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-slate-200/70 lg:bg-white/70 lg:px-6 lg:py-10 lg:text-slate-900 lg:shadow-sm lg:backdrop-blur dark:lg:border-slate-800/60 dark:lg:bg-slate-950/60 dark:lg:text-slate-100">
        <Link
          href="/"
          className="inline-flex items-center text-xl font-heading font-semibold tracking-tight text-slate-900 transition hover:text-primary dark:text-white dark:hover:text-secondary"
        >
          {dictionary.nav.brand}
        </Link>

        <nav className="mt-10 flex flex-1 flex-col gap-1 text-base">
          {filteredNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`group relative flex items-center gap-3 rounded-xl px-4 py-2 font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-primary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                  : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition ${
                  isActive(item.href)
                    ? "bg-primary dark:bg-secondary"
                    : "bg-slate-300 group-hover:bg-primary dark:bg-slate-600 dark:group-hover:bg-secondary"
                }`}
              />
              <span>{item.label}</span>
            </Link>
          ))}
          {session ? (
            <Link
              href="/dashboard"
              aria-current={isActive("/dashboard") ? "page" : undefined}
              className={`group relative mt-2 flex items-center gap-3 rounded-xl px-4 py-2 font-semibold transition-colors ${
                isActive("/dashboard")
                  ? "bg-primary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                  : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition ${
                  isActive("/dashboard")
                    ? "bg-primary dark:bg-secondary"
                    : "bg-slate-300 group-hover:bg-primary dark:bg-slate-600 dark:group-hover:bg-secondary"
                }`}
              />
              <span>{dashboard}</span>
            </Link>
          ) : null}
        </nav>

        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {session ? (
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {signingOut ? "..." : signOutLabel}
            </button>
          ) : null}
        </div>
      </aside>

      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur lg:hidden dark:border-slate-800/60 dark:bg-slate-950/70">
        <Link
          href="/"
          className="text-lg font-heading font-semibold text-slate-900 transition hover:text-primary dark:text-white dark:hover:text-secondary"
        >
          {dictionary.nav.brand}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
            aria-expanded={isOpen}
            aria-label={isOpen ? closeMenu : openMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-30 bg-slate-900/40" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="fixed inset-y-0 right-0 z-40 w-72 max-w-full overflow-y-auto border-l border-slate-200 bg-white px-6 py-8 shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {dictionary.nav.mobileMenuLabel}
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
                aria-label={closeMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2 text-base">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-2 font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                      : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {session ? (
                <Link
                  href="/dashboard"
                  aria-current={isActive("/dashboard") ? "page" : undefined}
                  className={`rounded-xl px-4 py-2 font-semibold transition-colors ${
                    isActive("/dashboard")
                      ? "bg-primary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                      : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {dashboard}
                </Link>
              ) : null}
            </nav>

            {session ? (
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="mt-8 w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {signingOut ? "..." : signOutLabel}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
