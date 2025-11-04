"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./providers/language-context";

type IconName =
  | "home"
  | "explore"
  | "forum"
  | "nightlife"
  | "culture"
  | "safety"
  | "travel"
  | "directory"
  | "events"
  | "blog"
  | "about"
  | "history"
  | "waiting"
  | "analytics"
  | "contact"
  | "login"
  | "default"
  | "messages"
  | "courses"
  | "updates"
  | "settings";

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "home":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 4l9 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-5.25V14.25h-4.5V20H4.5A1.5 1.5 0 0 1 3 18.5Z" />
        </svg>
      );
    case "explore":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m10 14 1.2-4.8L16 8l-1.2 4.8Z" />
        </svg>
      );
    case "forum":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v6A2.5 2.5 0 0 1 16.5 14H12l-4 4v-4H7.5A2.5 2.5 0 0 1 5 11.5Z"
          />
        </svg>
      );
    case "nightlife":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.8 3.6L18 7.2l-3 3 0.6 4.2-3.6-1.8-3.6 1.8L9 10.2 6 7.2l4.2-0.6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6" />
        </svg>
      );
    case "culture":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18v2.5a5.5 5.5 0 0 1-5.5 5.5H8.5A5.5 5.5 0 0 1 3 7.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 13v3.5A3.5 3.5 0 0 0 11.5 20h1A3.5 3.5 0 0 0 16 16.5V13" />
        </svg>
      );
    case "safety":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3 4 6v6c0 4.418 2.686 8.418 8 9 5.314-.582 8-4.582 8-9V6Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.5 1.5 3.5-3.5" />
        </svg>
      );
    case "travel":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 20h14a2 2 0 0 0 2-2v-6H3v6a2 2 0 0 0 2 2Z" />
        </svg>
      );
    case "directory":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8.5h8M8 12h5" />
        </svg>
      );
    case "events":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3" />
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16" />
        </svg>
      );
    case "blog":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M7 16h4" />
        </svg>
      );
    case "about":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9h.01" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "history":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h9a3 3 0 0 1 3 3v13l-3-2-3 2V7a3 3 0 0 0-3-3H6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v13a3 3 0 0 0 3 3h1" />
        </svg>
      );
    case "waiting":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h12v2l-4 4 4 4v6H6v-6l4-4-4-4Z" />
        </svg>
      );
    case "analytics":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M8 15v4M12 11v8M16 7v12" />
        </svg>
      );
    case "contact":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 8 5 8-5" />
        </svg>
      );
    case "login":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V4a2 2 0 0 1 2-2h5v20h-5a2 2 0 0 1-2-2v-1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H7m0 0 3-3m-3 3 3 3" />
        </svg>
      );
    case "messages":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H13l-4 3v-3H6.5A2.5 2.5 0 0 1 4 12.5Z" />
        </svg>
      );
    case "courses":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 9h7M10 13h7M7 9h.01M7 13h.01" />
        </svg>
      );
    case "updates":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20h4" />
        </svg>
      );
    case "settings":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12 4 1.2 2.4 2.7.4-1.9 1.9.4 2.7L12 10.6l-2.4 1.4.4-2.7-1.9-1.9 2.7-.4Z"
          />
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h2M18 12h2M12 20v-2M12 6V4" />
        </svg>
      );
    default:
      return <span className="h-2 w-2 rounded-full bg-current" aria-hidden />;
  }
}

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
  const [searchTerm, setSearchTerm] = useState("");
  const [isAllPagesOpen, setIsAllPagesOpen] = useState(false);
  const [seenRoutes, setSeenRoutes] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const allPagesRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const stored = window.localStorage.getItem("jd-nav-seen");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSeenRoutes(parsed);
        }
      }
    } catch {
      setSeenRoutes([]);
    }
  }, []);

  const markSeen = useCallback((href: string) => {
    const normalized = href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href;
    setSeenRoutes((previous) => {
      if (previous.includes(normalized)) {
        return previous;
      }
      const updated = [...previous, normalized];
      if (typeof window !== "undefined") {
        window.localStorage.setItem("jd-nav-seen", JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const isRouteNew = useCallback(
    (href: string) => {
      const normalized = href !== "/" && href.endsWith("/") ? href.slice(0, -1) : href;
      return !seenRoutes.includes(normalized);
    },
    [seenRoutes],
  );

  useEffect(() => {
    const matched = navItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
    if (matched) {
      markSeen(matched.href);
    }
  }, [markSeen, navItems, pathname]);

  useEffect(() => {
    if (!isAllPagesOpen) {
      return;
    }
    const handleClick = (event: MouseEvent) => {
      if (!allPagesRef.current) return;
      if (!allPagesRef.current.contains(event.target as Node)) {
        setIsAllPagesOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAllPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isAllPagesOpen]);

  const filteredNavItems = useMemo(() => {
    if (!session) {
      return navItems;
    }
    return navItems.filter((item) => item.href !== "/login");
  }, [navItems, session]);

  const displayedNavItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return filteredNavItems;
    }
    return filteredNavItems.filter((item) => item.label.toLowerCase().includes(term));
  }, [filteredNavItems, searchTerm]);

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

  const resolveIcon = (href: string): IconName => {
    if (href === "/") return "home";
    if (href.startsWith("/explore")) return "explore";
    if (href.startsWith("/forum")) return "forum";
    if (href.startsWith("/nightlife")) return "nightlife";
    if (href.startsWith("/culture")) return "culture";
    if (href.startsWith("/safety")) return "safety";
    if (href.startsWith("/travel-tips")) return "travel";
    if (href.startsWith("/directory")) return "directory";
    if (href.startsWith("/event-calendar")) return "events";
    if (href.startsWith("/blog")) return "blog";
    if (href.startsWith("/about-us/juana-diaz")) return "history";
    if (href.startsWith("/about-us")) return "about";
    if (href.startsWith("/waiting-list")) return "waiting";
    if (href.startsWith("/analytics")) return "analytics";
    if (href.startsWith("/contact")) return "contact";
    if (href.startsWith("/ai-assistant")) return "messages";
    if (href.startsWith("/login")) return "login";
    return "default";
  };

  const firstName = session?.name?.split(" ")[0] ?? "";
  const panelSubtitle = session
    ? dictionary.nav.panelSubtitle.replace("{name}", firstName || session.name)
    : dictionary.nav.panelGuestSubtitle;

  const quickActions = [
    {
      icon: "messages" as const,
      label: dictionary.actions.messages,
      value: session ? "3" : "0",
      href: session ? "/dashboard#messages" : "/forum",
    },
    {
      icon: "courses" as const,
      label: dictionary.actions.courses,
      value: session ? "2" : "0",
      href: "/learning-hub",
    },
    {
      icon: "updates" as const,
      label: dictionary.actions.updates,
      value: session ? "5" : "3",
      href: "/event-calendar",
    },
  ];

  const dashboardHref = session ? "/dashboard" : "/login";

  return (
    <>
      <aside className="hidden lg:block lg:w-80 lg:shrink-0">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden border-r border-slate-200/70 bg-white/75 px-6 py-8 text-slate-900 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60 dark:text-slate-100">
          <div className="flex-1 overflow-y-auto pr-2">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-heading font-semibold tracking-tight text-slate-900 transition hover:text-primary dark:text-white dark:hover:text-secondary"
            >
              {dictionary.nav.brand}
            </Link>

            <div className="mt-8">
              <label htmlFor="sidebar-search" className="sr-only">
                {dictionary.actions.searchPlaceholder}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400 dark:text-slate-500">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
                    <circle cx="11" cy="11" r="7" />
                  </svg>
                </span>
                <input
                  id="sidebar-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={dictionary.actions.searchPlaceholder}
                  className="w-full rounded-full border border-slate-200/70 bg-white/80 py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm transition focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
                />
              </div>
            </div>

            <nav className="mt-8 flex flex-col gap-1 text-base">
              {displayedNavItems.length ? (
                displayedNavItems.map((item) => {
                  const active = isActive(item.href);
                  const fresh = isRouteNew(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => markSeen(item.href)}
                      className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                        active
                          ? "bg-primary/15 text-primary shadow-sm dark:bg-secondary/15 dark:text-secondary"
                          : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
                      }`}
                    >
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition ${
                          active
                            ? "border-primary text-primary dark:border-secondary dark:text-secondary"
                            : "border-transparent bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800/50 dark:text-slate-300 dark:group-hover:text-secondary"
                        }`}
                      >
                        <Icon name={resolveIcon(item.href)} />
                      </span>
                      <span className="font-semibold">{item.label}</span>
                      {fresh ? (
                        <span className="ml-auto inline-flex h-2 w-2 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(115,103,240,0.25)] transition group-hover:shadow-[0_0_0_4px_rgba(115,103,240,0.45)] dark:bg-primary" aria-hidden />
                      ) : null}
                    </Link>
                  );
                })
              ) : (
                <p className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">{dictionary.actions.noResults}</p>
              )}
              {session ? (
                <Link
                  href="/dashboard"
                  aria-current={isActive("/dashboard") ? "page" : undefined}
                  onClick={() => markSeen("/dashboard")}
                  className={`group mt-3 flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                    isActive("/dashboard")
                      ? "bg-primary/15 text-primary shadow-sm dark:bg-secondary/15 dark:text-secondary"
                      : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition ${
                      isActive("/dashboard")
                        ? "border-primary text-primary dark:border-secondary dark:text-secondary"
                        : "border-transparent bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800/50 dark:text-slate-300 dark:group-hover:text-secondary"
                    }`}
                  >
                    <Icon name="analytics" />
                  </span>
                  <span className="font-semibold">{dashboard}</span>
                </Link>
              ) : null}
            </nav>

            <div ref={allPagesRef} className="mt-6">
              <button
                type="button"
                onClick={() => setIsAllPagesOpen((previous) => !previous)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
                aria-expanded={isAllPagesOpen}
              >
                <span>{dictionary.nav.allPages}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isAllPagesOpen ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isAllPagesOpen ? (
                <div className="mt-3 space-y-4 rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm shadow-lg dark:border-slate-700/80 dark:bg-slate-950/80">
                  <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">{dictionary.nav.quickAccess}</p>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    {navItems.map((item) => (
                      <Link
                        key={`all-${item.href}`}
                        href={item.href}
                        onClick={() => {
                          markSeen(item.href);
                          setIsAllPagesOpen(false);
                        }}
                        className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/15 dark:hover:text-secondary"
                      >
                        <span>{item.label}</span>
                        {isRouteNew(item.href) ? (
                          <span className="inline-flex h-2 w-2 rounded-full bg-primary dark:bg-secondary" aria-hidden />
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="border-t border-slate-200/70 pt-6 dark:border-slate-800/70">
            <div className="surface-muted rounded-2xl border border-slate-200/60 p-5 shadow-sm dark:border-slate-800/60">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{dictionary.nav.panelTitle}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{panelSubtitle}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="group rounded-xl border border-slate-200/70 bg-white/80 px-3 py-3 text-center text-xs font-semibold text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-secondary dark:hover:text-secondary"
                  >
                    <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white dark:bg-secondary/15 dark:text-secondary dark:group-hover:bg-secondary dark:group-hover:text-slate-950">
                      <Icon name={action.icon} />
                    </div>
                    <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{action.value}</p>
                    <p>{action.label}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href={dashboardHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
                >
                  {dictionary.actions.viewDashboard}
                </Link>
                <Link
                  href="/settings"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/70 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
                >
                  {dictionary.actions.globalSettings}
                </Link>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Link
                href="/settings"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
                aria-label={dictionary.actions.settings}
              >
                <Icon name="settings" />
              </Link>
            </div>

            {session ? (
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="mt-4 w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {signingOut ? "..." : signOutLabel}
              </button>
            ) : null}
          </div>
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
          <div className="fixed inset-y-0 right-0 z-40 w-80 max-w-full overflow-y-auto border-l border-slate-200 bg-white px-6 py-8 shadow-xl dark:border-slate-800 dark:bg-slate-950">
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

            <div className="mt-6">
              <label htmlFor="drawer-search" className="sr-only">
                {dictionary.actions.searchPlaceholder}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400 dark:text-slate-500">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
                    <circle cx="11" cy="11" r="7" />
                  </svg>
                </span>
                <input
                  id="drawer-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={dictionary.actions.searchPlaceholder}
                  className="w-full rounded-full border border-slate-200/70 bg-white/80 py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm transition focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
                />
              </div>
            </div>

            <nav className="mt-6 flex flex-col gap-2 text-base">
              {(displayedNavItems.length ? displayedNavItems : filteredNavItems).map((item) => {
                const fresh = isRouteNew(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2 transition ${
                      isActive(item.href)
                        ? "bg-primary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                        : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
                    }`}
                    onClick={() => {
                      markSeen(item.href);
                      setIsOpen(false);
                    }}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800/60 dark:text-slate-300">
                      <Icon name={resolveIcon(item.href)} />
                    </span>
                    <span className="font-semibold">{item.label}</span>
                    {fresh ? <span className="ml-auto inline-flex h-2 w-2 rounded-full bg-primary dark:bg-secondary" aria-hidden /> : null}
                  </Link>
                );
              })}
              {session ? (
                <Link
                  href="/dashboard"
                  aria-current={isActive("/dashboard") ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2 transition ${
                    isActive("/dashboard")
                      ? "bg-primary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                      : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-secondary/10 dark:hover:text-secondary"
                  }`}
                  onClick={() => {
                    markSeen("/dashboard");
                    setIsOpen(false);
                  }}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800/60 dark:text-slate-300">
                    <Icon name="analytics" />
                  </span>
                  <span className="font-semibold">{dashboard}</span>
                </Link>
              ) : null}
            </nav>

            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="rounded-xl border border-slate-200/70 bg-white/80 px-2.5 py-3 text-center text-xs font-semibold text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-secondary dark:hover:text-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-secondary/15 dark:text-secondary">
                      <Icon name={action.icon} />
                    </div>
                    <p className="mt-1 text-base font-bold text-slate-900 dark:text-white">{action.value}</p>
                    <p>{action.label}</p>
                  </Link>
                ))}
              </div>

              <Link
                href={dashboardHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.actions.viewDashboard}
              </Link>

              <Link
                href="/settings"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/70 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {dictionary.actions.globalSettings}
              </Link>

              {session ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  disabled={signingOut}
                  className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {signingOut ? "..." : signOutLabel}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
