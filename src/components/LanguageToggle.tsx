"use client";

import { useLanguage } from "./providers/language-context";

export default function LanguageToggle() {
  const { language, setLanguage, dictionary } = useLanguage();

  const handleClick = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
      aria-label={dictionary.actions.languageToggle}
      aria-pressed={language === "es"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 3 3.75 6 3.75 9s-1.25 6-3.75 9c-2.5-3-3.75-6-3.75-9S9.5 6 12 3Z"
        />
      </svg>
      <span className="sr-only">
        {language === "en" ? dictionary.actions.spanish : dictionary.actions.english}
      </span>
    </button>
  );
}
