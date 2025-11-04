"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./providers/language-context";

const assistantHref = "/ai-assistant";

type AuthenticatedUser = {
  email: string;
  name: string;
  role: string;
};

type ToolbarIcon = "home" | "explore" | "events" | "forum" | "messages";

function QuickLinkIcon({ icon }: { icon: ToolbarIcon }) {
  switch (icon) {
    case "home":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11 12 4l9 7v8a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1Z" />
        </svg>
      );
    case "explore":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m10 14 1.2-4.8L16 8l-1.2 4.8Z" />
        </svg>
      );
    case "events":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3" />
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h16" />
        </svg>
      );
    case "forum":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5v6A2.5 2.5 0 0 1 15.5 15H12l-4 4v-4H8.5A2.5 2.5 0 0 1 6 12.5Z" />
        </svg>
      );
    default:
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H13l-4 3v-3H6.5A2.5 2.5 0 0 1 4 12.5Z" />
        </svg>
      );
  }
}

export default function UserToolbar() {
  const { dictionary } = useLanguage();
  const router = useRouter();
  const [session, setSession] = useState<AuthenticatedUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    const loadSession = async () => {
      try {
        const response = await fetch("/api/auth/session", { cache: "no-store" });
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
      } catch {
        if (active) setSession(null);
      }
    };
    loadSession();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const initials = useMemo(() => {
    if (!session?.name) {
      return "JD";
    }
    const parts = session.name.split(" ");
    const first = parts[0]?.charAt(0).toUpperCase() ?? "";
    const second = parts[1]?.charAt(0).toUpperCase() ?? "";
    return `${first}${second}` || first || "JD";
  }, [session]);

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setMenuOpen(false);
      router.refresh();
    }
  };

  const quickLinks = dictionary.toolbar.quickLinks;
  const menu = dictionary.toolbar.accountMenu;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-slate-800/60 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8">
        <div className="min-w-0 flex-1 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-secondary">
              {dictionary.toolbar.quickLinksTitle}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{dictionary.toolbar.quickLinksSubtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700/70 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white dark:bg-secondary/15 dark:text-secondary dark:group-hover:bg-secondary dark:group-hover:text-slate-950">
                  <QuickLinkIcon icon={item.icon} />
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold leading-tight">{item.label}</span>
                  <span className="text-[11px] font-medium text-slate-500 transition group-hover:text-primary dark:text-slate-400 dark:group-hover:text-secondary">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:self-start">
          <Link
            href={assistantHref}
            className="relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20 dark:border-secondary/40 dark:bg-secondary/20 dark:text-secondary dark:hover:bg-secondary/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75 dark:bg-secondary/60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary dark:bg-secondary" />
            </span>
            {dictionary.toolbar.aiAssistant}
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white dark:bg-secondary dark:text-slate-950">
              {dictionary.toolbar.aiNew}
            </span>
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              <span className="text-sm font-semibold">{initials}</span>
            </button>
            {menuOpen ? (
              <div className="absolute right-0 mt-3 w-80 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-xl ring-1 ring-slate-900/5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/95">
                <div className="space-y-2 border-b border-slate-200/70 px-5 py-4 dark:border-slate-800/70">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{menu.accountName}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{menu.handle}</p>
                  <Link
                    href="/profile"
                    className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    {menu.viewProfile}
                  </Link>
                </div>
                <div className="divide-y divide-slate-200/70 text-sm dark:divide-slate-800/70">
                  <div className="space-y-1 px-5 py-3">
                    <Link
                      href="/settings"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.switchAccount}
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.studio}
                    </Link>
                    <Link
                      href="/settings#membership"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.premium}
                    </Link>
                    <Link
                      href="/settings#purchases"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.purchases}
                    </Link>
                  </div>
                  <div className="space-y-1 px-5 py-3 text-sm text-slate-600 dark:text-slate-300">
                    <p className="rounded-lg px-3 py-2 transition hover:bg-slate-100/60 dark:hover:bg-slate-800/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{menu.appearance}</span>: {menu.deviceTheme}
                    </p>
                    <p className="rounded-lg px-3 py-2 transition hover:bg-slate-100/60 dark:hover:bg-slate-800/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{menu.language}</span>: {menu.english}
                    </p>
                    <p className="rounded-lg px-3 py-2 transition hover:bg-slate-100/60 dark:hover:bg-slate-800/60">{menu.restricted}</p>
                    <p className="rounded-lg px-3 py-2 transition hover:bg-slate-100/60 dark:hover:bg-slate-800/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{menu.location}</span>: {menu.locationValue}
                    </p>
                    <p className="rounded-lg px-3 py-2 transition hover:bg-slate-100/60 dark:hover:bg-slate-800/60">{menu.keyboard}</p>
                  </div>
                  <div className="space-y-1 px-5 py-3">
                    <Link
                      href="/settings"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.globalSettings}
                    </Link>
                    <Link
                      href="/sitemap"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.help}
                    </Link>
                    <Link
                      href="/contact"
                      className="block rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {menu.feedback}
                    </Link>
                    <Link
                      href={assistantHref}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-primary transition hover:bg-primary/10 dark:text-secondary dark:hover:bg-secondary/15"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{menu.assistant}</span>
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white dark:bg-secondary dark:text-slate-950">
                        {menu.newLabel}
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="w-full rounded-lg px-3 py-2 text-left font-semibold text-slate-700 transition hover:bg-primary/10 hover:text-primary dark:text-slate-200 dark:hover:bg-secondary/15 dark:hover:text-secondary"
                    >
                      {menu.signOut}
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
