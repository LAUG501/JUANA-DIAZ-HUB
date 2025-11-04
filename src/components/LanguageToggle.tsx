"use client";

import { useLanguage } from "./providers/language-context";

export default function LanguageToggle() {
  const { language, setLanguage, dictionary } = useLanguage();
  const isEnglish = language === "en";

  const handleClick = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-10 items-center gap-1 rounded-full border border-slate-300 bg-white/70 px-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary dark:focus:ring-offset-slate-950"
      aria-label={dictionary.actions.languageToggle}
    >
      <span className={isEnglish ? "text-primary dark:text-secondary" : "text-slate-500 dark:text-slate-400"}>
        {dictionary.actions.english.slice(0, 2)}
      </span>
      <span className="text-xs text-slate-400 dark:text-slate-500">|</span>
      <span className={!isEnglish ? "text-primary dark:text-secondary" : "text-slate-500 dark:text-slate-400"}>
        {dictionary.actions.spanish.slice(0, 2)}
      </span>
      <span className="sr-only">{language === "en" ? dictionary.actions.spanish : dictionary.actions.english}</span>
    </button>
  );
}
