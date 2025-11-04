// components/LoginSlider.tsx
"use client";
import { useEffect, useState, FormEvent } from "react";

type SlideKey = "login" | "register" | "recover";
const slides: { key: SlideKey; title: string; subtitle: string }[] = [
  { key: "login", title: "Member Login", subtitle: "Access your dashboard and favorites." },
  { key: "register", title: "Create Account", subtitle: "Join the Juana Díaz Hub community." },
  { key: "recover", title: "Password Reset", subtitle: "Recover access to your account." },
];

export default function LoginSlider() {
  const [active, setActive] = useState<SlideKey>("login");

  useEffect(() => {
    const id = setInterval(() => {
      setActive((s) => (s === "login" ? "register" : s === "register" ? "recover" : "login"));
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const submit = (e: FormEvent) => e.preventDefault();

  return (
    <section className="surface">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Account access</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Everything you need to stay connected</h2>
          <p className="mt-2 text-sm text-white/80 md:text-base md:text-white/70 lg:max-w-xl dark:text-slate-300">
            Jump into discussions, manage event RSVPs, and track your neighborhood alerts in one responsive dashboard.
          </p>
        </div>
        <div className="flex gap-2 self-start rounded-full bg-white/40 p-2 shadow-inner backdrop-blur dark:bg-slate-900/60">
          {slides.map((s) => (
            <button
              key={s.key}
              aria-label={`Go to ${s.title}`}
              onClick={() => setActive(s.key)}
              className={`h-2.5 w-8 rounded-full transition ${active === s.key ? "bg-primary dark:bg-secondary" : "bg-white/60 dark:bg-slate-700"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {slides.find((s) => s.key === active)?.title}
            </h3>
            <p className="muted">
              {slides.find((s) => s.key === active)?.subtitle}
            </p>
          </div>

          <form className="space-y-4" onSubmit={submit}>
            {active !== "register" ? (
              <>
                <input className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100" type="email" placeholder="Email" />
                <input className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100" type="password" placeholder="Password" />
              </>
            ) : (
              <>
                <input className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100" placeholder="Full name" />
                <input className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100" type="email" placeholder="Email" />
                <input className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100" type="password" placeholder="Password" />
              </>
            )}
            <button className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90" type="submit">
              {active === "login" ? "Sign in" : active === "register" ? "Create account" : "Send reset link"}
            </button>
          </form>
          <p className="text-xs text-white/80 dark:text-slate-400">(Authentication wiring comes next — UI is ready.)</p>
        </div>

        <div className="space-y-6">
          <div className="surface-muted">
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">Why join?</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Save favorite venues and get realtime reminders.</li>
              <li>Publish announcements with bilingual reach.</li>
              <li>Earn badges through weekly community challenges.</li>
            </ul>
          </div>
          <div className="surface-muted">
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">Coming soon</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Resident verification for municipal services.</li>
              <li>Business analytics dashboard with seasonal trends.</li>
              <li>Mobile push alerts for weather and safety updates.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
