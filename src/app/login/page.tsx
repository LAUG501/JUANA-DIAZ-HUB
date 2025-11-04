"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LanguageToggle from "../../components/LanguageToggle";
import ThemeToggle from "../../components/ThemeToggle";
import { useLanguage } from "../../components/providers/language-context";

const gradientBackground =
  "absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl dark:from-secondary/20 dark:via-transparent dark:to-primary/20";

const oauthIcon = (provider: "google" | "facebook" | "tiktok") => {
  switch (provider) {
    case "google":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="#4285F4"
            d="M23.52 12.273c0-.815-.073-1.6-.209-2.364H12v4.476h6.484c-.28 1.5-1.126 2.772-2.396 3.624v3.01h3.867c2.26-2.082 3.565-5.15 3.565-8.746Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.962-1.073 7.95-2.907l-3.867-3.01c-1.073.72-2.446 1.148-4.083 1.148-3.138 0-5.797-2.118-6.748-4.96H1.216v3.107C3.192 21.44 7.272 24 12 24Z"
          />
          <path
            fill="#FBBC04"
            d="M5.252 14.27c-.24-.72-.378-1.49-.378-2.27s.138-1.55.378-2.27V6.623H1.216A11.957 11.957 0 0 0 0 12c0 1.948.466 3.79 1.216 5.377z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.762 0 3.337.607 4.58 1.8l3.435-3.435C17.957 1.114 15.235 0 12 0 7.272 0 3.192 2.56 1.216 6.623L5.252 9.73C6.203 6.868 8.862 4.75 12 4.75Z"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
          <path fill="#1877F2" d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.026 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.412c0-3.007 1.793-4.667 4.533-4.667 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.929-1.953 1.88v2.259h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.099 24 12.073Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="#EE1D52"
            d="M9.5 5.5v11.1a3.4 3.4 0 1 1-3.4-3.4c.2 0 .4 0 .6.1V10a6.5 6.5 0 1 0 6.4 6.5V4.5c.9 1 2.1 1.7 3.5 1.8v-2a4.4 4.4 0 0 1-2.6-1.7 4.5 4.5 0 0 1-.9-2.4H11.5v14.6a3.4 3.4 0 1 1-3.4-3.4c.2 0 .3 0 .5.1V5.5Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function LoginPage() {
  const { dictionary } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const reason = searchParams.get("reason");
  const loginRequired = reason === "auth";
  const error = searchParams.get("error");

  const oauthErrorMessage = error ? dictionary.auth.oauthError : null;

  const passwordStrength = useMemo(() => {
    if (!password) {
      return { level: 0, label: "", tone: "text-slate-400" };
    }
    let score = 0;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const level = Math.min(3, Math.max(1, score));
    const label =
      level === 3 ? dictionary.auth.strong : level === 2 ? dictionary.auth.medium : dictionary.auth.weak;
    const tone =
      level === 3
        ? "text-primary dark:text-secondary"
        : level === 2
        ? "text-amber-500"
        : "text-rose-500";
    return { level, label, tone };
  }, [password, dictionary.auth.strong, dictionary.auth.medium, dictionary.auth.weak]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name: displayName }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        const message =
          payload.error === "Account not found"
            ? dictionary.auth.notConfigured
            : payload.error === "Invalid credentials"
            ? dictionary.auth.invalidCredentials
            : payload.error === "Missing credentials"
            ? dictionary.auth.missingFields
            : dictionary.auth.serverError;
        setFormError(message);
        return;
      }

      const destination = searchParams.get("returnTo") ?? "/dashboard";
      router.push(destination);
      router.refresh();
    } catch (err) {
      setFormError(dictionary.auth.serverError);
    } finally {
      setSubmitting(false);
    }
  };

  const oauthProviders: Array<{ provider: "google" | "facebook" | "tiktok"; label: string; accent: string }> = [
    { provider: "google", label: dictionary.auth.google, accent: "border-sky-400/40" },
    { provider: "facebook", label: dictionary.auth.facebook, accent: "border-blue-500/40" },
    { provider: "tiktok", label: dictionary.auth.tiktok, accent: "border-rose-500/40" },
  ];

  const handleOAuth = (provider: "google" | "facebook" | "tiktok") => {
    const destination = searchParams.get("returnTo") ?? "/dashboard";
    const url = `/api/oauth/${provider}?returnTo=${encodeURIComponent(destination)}`;
    window.location.href = url;
  };

  return (
    <section className="relative mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/60">
        <span className={gradientBackground} aria-hidden />
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
              {(formError || oauthErrorMessage) && (
                <div className="rounded-2xl border border-rose-300 bg-rose-50/80 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/60 dark:bg-rose-500/10 dark:text-rose-200">
                  {formError ?? oauthErrorMessage}
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
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{dictionary.auth.ssoTitle}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{dictionary.auth.ssoSubtitle}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {oauthProviders.map((option) => (
                  <button
                    key={option.provider}
                    type="button"
                    onClick={() => handleOAuth(option.provider)}
                    className={`group flex h-full items-center justify-center gap-2 rounded-2xl border bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-secondary/60 dark:hover:text-secondary ${option.accent}`}
                  >
                    {oauthIcon(option.provider)}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative rounded-t-[3rem] border-t border-slate-200/60 bg-white/85 px-8 py-10 backdrop-blur md:rounded-none md:border-l dark:border-slate-800/60 dark:bg-slate-950/60">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{dictionary.auth.manualTitle}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{dictionary.auth.manualSubtitle}</p>
            </div>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Display name
                </label>
                <input
                  id="name"
                  type="text"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/40"
                  placeholder="Community Admin"
                  autoComplete="name"
                />
              </div>
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
                    <span className={passwordStrength.tone}>{passwordStrength.label}</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((segment) => (
                      <span
                        key={segment}
                        className={`h-2 flex-1 rounded-full transition-all ${
                          passwordStrength.level >= segment
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
                  {dictionary.auth.rememberMe}
                </label>
                <Link href="/settings" className="font-medium text-primary hover:underline dark:text-secondary">
                  {dictionary.auth.forgotPassword}
                </Link>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-70 dark:from-secondary dark:via-primary dark:to-secondary"
              >
                <span className="relative z-10">
                  {submitting ? dictionary.auth.signingIn : dictionary.auth.signIn}
                </span>
              </button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                {dictionary.auth.noAccount}{" "}
                <Link href="/waiting-list" className="font-semibold text-primary hover:underline dark:text-secondary">
                  {dictionary.auth.createAccount}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
