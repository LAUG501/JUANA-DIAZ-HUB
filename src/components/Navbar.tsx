"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./providers/language-context";

type AuthenticatedUser = {
  email: string;
  name: string;
  role: string;
};

/**
 * Navigation bar component.
 * Responsive, mobile-friendly with theme and language toggles.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<AuthenticatedUser | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  const router = useRouter();
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 text-slate-900 shadow-sm backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-950/70 dark:text-slate-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-heading font-semibold tracking-tight text-slate-900 transition hover:text-primary dark:text-white dark:hover:text-secondary"
        >
          {dictionary.nav.brand}
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {filteredNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/10 dark:hover:text-secondary"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {session && (
            <li>
              <Link
                href="/dashboard"
                className="rounded-full px-3 py-2 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/10 dark:hover:text-secondary"
              >
                {dashboard}
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          {session ? (
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white md:inline-flex dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {signingOut ? "..." : signOutLabel}
            </button>
          ) : null}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white md:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
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

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 px-6 pb-6 pt-4 shadow-lg dark:border-slate-800 dark:bg-slate-950/90">
          <div className="flex items-center justify-end gap-3 pb-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <ul className="space-y-2 text-sm font-medium">
            {filteredNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-2 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/10 dark:hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {session && (
              <li>
                <Link
                  href="/dashboard"
                  className="block rounded-xl px-4 py-2 transition-colors hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/10 dark:hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {dashboard}
                </Link>
              </li>
            )}
          </ul>
          {session && (
            <button
              onClick={handleSignOut}
              disabled={signingOut}
              className="mt-4 w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {signingOut ? "..." : signOutLabel}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
