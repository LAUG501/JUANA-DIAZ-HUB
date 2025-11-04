"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LanguageToggle from "../../components/LanguageToggle";
import ThemeToggle from "../../components/ThemeToggle";
import { useLanguage } from "../../components/providers/language-context";

type ErrorCode =
  | "MISSING_FIELDS"
  | "INVALID_CREDENTIALS"
  | "NOT_CONFIGURED"
  | "SERVER_ERROR";

const gradientBackground =
  "absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl dark:from-secondary/20 dark:via-transparent dark:to-primary/20";

export default function LoginPage() {
  const { dictionary } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const reason = searchParams.get("reason");
  const loginRequired = reason === "auth";

  const strength = useMemo(() => {
    if (!password) {
      return { level: 0, label: "", tone: "text-slate-400" };
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const level = Math.min(3, Math.max(1, score));
    const label =
      level === 3
        ? dictionary.auth.strong
        : level === 2
        ? dictionary.auth.medium
        : dictionary.auth.weak;
    const tone =
      level === 3
        ? "text-primary dark:text-secondary"
        : level === 2
        ? "text-amber-500"
        : "text-rose-500";

    return { level, label, tone };
  }, [password, dictionary.auth.medium, dictionary.auth.strong, dictionary.auth.weak]);

  const errorMessages: Record<ErrorCode, string> = {
    MISSING_FIELDS: dictionary.auth.missingFields,
    INVALID_CREDENTIALS: dictionary.auth.invalidCredentials,
    NOT_CONFIGURED: dictionary.auth.notConfigured,
    SERVER_ERROR: dictionary.auth.serverError,
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: ErrorCode };
        const code = data.error ?? "SERVER_ERROR";
        setFormError(errorMessages[code] ?? dictionary.auth.serverError);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setFormError(dictionary.auth.serverError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/60">
        <span className={gradientBackground} aria-hidden="true" />
        <div className="absolute right-6 top-6 hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6 px-8 py-10 md:px-12 md:py-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:bg-secondary/10 dark:text-secondary">
              {dictionary.auth.communityBadge}
            </span>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-heading font-semibold text-slate-900 md:text-4xl dark:text-white">
                  {dictionary.auth.title}
                </h1>
                <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
                  {dictionary.auth.subtitle}
                </p>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary dark:text-secondary">
                {dictionary.auth.adminOnly}
              </p>
              {loginRequired && (
                <div className="rounded-2xl border border-amber-300 bg-amber-50/80 px-4 py-3 text-sm text-amber-700 dark:border-amber-500/60 dark:bg-amber-500/10 dark:text-amber-200">
                  {dictionary.auth.loginRequired}
                </div>
              )}
              {formError && (
                <div className="rounded-2xl border border-rose-300 bg-rose-50/80 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/60 dark:bg-rose-500/10 dark:text-rose-200">
                  {formError}
                </div>
              )}
            </div>
            <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {dictionary.auth.passwordStrength}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {dictionary.auth.requirements.map((requirement) => (
                  <li key={requirement} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary dark:from-secondary dark:to-primary" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative rounded-t-[3rem] border-t border-slate-200/60 bg-white/80 px-8 py-10 backdrop-blur md:rounded-none md:border-l dark:border-slate-800/60 dark:bg-slate-950/60">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {dictionary.auth.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/40"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled={submitting}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {dictionary.auth.passwordLabel}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/40"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  disabled={submitting}
                  required
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span>{dictionary.auth.passwordStrength}</span>
                    <span className={strength.tone}>{strength.label}</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((segment) => (
                      <span
                        key={segment}
                        className={`h-2 flex-1 rounded-full transition-all ${
                          strength.level >= segment
                            ? "bg-gradient-to-r from-primary via-secondary to-primary dark:from-secondary dark:via-primary dark:to-secondary"
                            : "bg-slate-200 dark:bg-slate-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:text-secondary dark:focus:ring-secondary" disabled />
                  <span>{dictionary.auth.rememberMe}</span>
                </label>
                <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                  {dictionary.auth.contactAdmin}
                </span>
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 dark:focus:ring-secondary/50 dark:focus:ring-offset-slate-950"
                disabled={submitting}
              >
                {submitting ? dictionary.auth.signingIn : dictionary.auth.signIn}
              </button>
              <div className="relative text-center text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                <span className="bg-white px-4 dark:bg-slate-950">{dictionary.auth.orContinue}</span>
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary/40"
                  disabled
                >
                  <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="#4285f4" d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.3H272v95.1h147.5c-6.4 34.5-25.8 63.7-55 83.2v68h88.9c52.1-48 80.1-118.7 80.1-195.9" />
                    <path fill="#34a853" d="M272 544.3c74.7 0 137.3-24.7 183.1-67l-88.9-68c-24.7 16.6-56.3 26.5-94.2 26.5-72.5 0-134-48.9-155.9-114.5h-92.3v71.9c45.8 90.7 139.8 151.1 248.2 151.1" />
                    <path fill="#fbbc04" d="M116.1 321.3c-10.6-31.9-10.6-66.4 0-98.3v-71.9h-92.3c-38.8 77.6-38.8 164.6 0 242.2z" />
                    <path fill="#ea4335" d="M272 107.7c39.7-.6 77.9 14 107 41.2l79.8-79.8C412.4 24.7 349.7 0 272 0 163.6 0 69.6 60.4 23.8 151.1l92.3 71.9C137.9 135.4 199.4 86.5 272 86.5" />
                  </svg>
                  {dictionary.auth.google}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary/40"
                  disabled
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M22.5 12.07c0-5.76-4.67-10.43-10.43-10.43S1.64 6.31 1.64 12.07c0 5.2 3.8 9.53 8.77 10.34v-7.32H7.9V12.07h2.5V9.76c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.55v1.97h2.72l-.43 3.02h-2.29v7.32c4.97-.8 8.77-5.14 8.77-10.34"
                    />
                  </svg>
                  {dictionary.auth.facebook}
                </button>
              </div>
            </form>
            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
              {dictionary.auth.noAccount}{" "}
              <Link href="/contact" className="font-semibold text-primary hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/90">
                {dictionary.auth.createAccount}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
