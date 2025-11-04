"use client";

import { useLanguage } from "./providers/language-context";
import { useThemeMode } from "./providers/theme-provider";

export default function ThemeToggle() {
  const { toggleTheme, theme, mounted } = useThemeMode();
  const { dictionary } = useLanguage();

  const isDark = theme === "dark";
  const label = isDark ? dictionary.actions.lightMode : dictionary.actions.darkMode;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
      aria-label={dictionary.actions.themeToggle}
      aria-pressed={isDark}
    >
      {mounted ? (
        isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M21.752 15.002A9.718 9.718 0 0 1 12.004 21a9.72 9.72 0 0 1-8.71-5.246.75.75 0 0 1 .98-1.02 7.72 7.72 0 0 0 6.2 0 7.72 7.72 0 0 0 4.02-4.02 7.72 7.72 0 0 0 0-6.2.75.75 0 0 1 1.02-.98 9.72 9.72 0 0 1 5.236 8.71c0 .607-.052 1.206-.15 1.796a.75.75 0 0 1-1.45.26Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 3.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5A.75.75 0 0 1 12 3.75Zm5.303 2.197a.75.75 0 0 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.061-1.061ZM18.75 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 18.75 12Zm-2.386 5.043a.75.75 0 0 1 1.06 0l1.06 1.061a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.061ZM12 18.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18.75Zm-5.303-2.197a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.061-1.061a.75.75 0 0 1 1.06 0ZM4.5 12a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1 0-1.5H3.75A.75.75 0 0 1 4.5 12Zm2.447-5.197a.75.75 0 0 1-1.06 1.06L4.826 6.802a.75.75 0 0 1 1.06-1.06l1.061 1.06ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z" />
          </svg>
        )
      ) : (
        <span className="h-5 w-5 rounded-full bg-slate-200/70 dark:bg-slate-700/70" aria-hidden />
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}
