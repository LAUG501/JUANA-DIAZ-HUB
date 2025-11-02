// components/LoginSlider.tsx
"use client";
import { useEffect, useState, FormEvent } from "react";

type SlideKey = "login" | "register" | "recover";
const slides: { key: SlideKey; title: string; subtitle: string }[] = [
  { key: "login",    title: "Member Login",   subtitle: "Access your dashboard and favorites." },
  { key: "register", title: "Create Account", subtitle: "Join the Juana Díaz Hub community." },
  { key: "recover",  title: "Password Reset", subtitle: "Recover access to your account." },
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
    <section className="rounded-3xl bg-white shadow-lg p-6 md:p-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading">Account Access</h2>
        <div className="flex gap-2">
          {slides.map((s) => (
            <button
              key={s.key}
              aria-label={`Go to ${s.title}`}
              onClick={() => setActive(s.key)}
              className={`h-2 w-8 rounded-full ${active === s.key ? "bg-primary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">
            {slides.find((s) => s.key === active)?.title}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            {slides.find((s) => s.key === active)?.subtitle}
          </p>

          <form className="space-y-4" onSubmit={submit}>
            {active !== "register" && (
              <>
                <input className="w-full rounded-lg border p-3" type="email" placeholder="Email" />
                <input className="w-full rounded-lg border p-3" type="password" placeholder="Password" />
              </>
            )}
            {active === "register" && (
              <>
                <input className="w-full rounded-lg border p-3" placeholder="Full name" />
                <input className="w-full rounded-lg border p-3" type="email" placeholder="Email" />
                <input className="w-full rounded-lg border p-3" type="password" placeholder="Password" />
              </>
            )}
            <button className="rounded-lg bg-primary px-4 py-2 font-semibold text-white" type="submit">
              {active === "login" ? "Sign in" : active === "register" ? "Create account" : "Send reset link"}
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">
            (Auth wiring later: NextAuth/Clerk/Auth.js — UI is ready.)
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6">
          <h4 className="font-semibold mb-2">Why join?</h4>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            <li>Save favorite venues and events</li>
            <li>Business owner tools & analytics</li>
            <li>Community forums and alerts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
