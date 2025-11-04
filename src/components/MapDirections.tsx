// components/MapDirections.tsx
"use client";
import { FormEvent } from "react";

type MapDirectionsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  originPlaceholder: string;
  buttonLabel: string;
  quickLinks: { label: string; origin: string }[];
  fromLabel: string;
};

export default function MapDirections({ copy }: { copy: MapDirectionsCopy }) {
  const destQuery = encodeURIComponent("Juana Díaz Hub, Juana Díaz, Puerto Rico");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const origin = String(data.get("origin") || "").trim();
    const url = origin
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${destQuery}`
      : `https://www.google.com/maps/dir/?api=1&destination=${destQuery}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="surface p-0 overflow-hidden">
        <iframe
          title="Map - Juana Díaz Hub"
          className="h-[380px] w-full rounded-3xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${destQuery}&output=embed`}
        />
      </div>

      <div className="surface">
        <div className="space-y-6">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.title}</h3>
            <p className="muted mt-2">{copy.description}</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              name="origin"
              placeholder={copy.originPlaceholder}
              className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
            />
            <button className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90" type="submit">
              {copy.buttonLabel}
            </button>
          </form>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {copy.quickLinks.map(({ label, origin }) => (
              <a
                key={label}
                className="surface-card px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:text-primary dark:text-slate-200 dark:hover:text-secondary"
                href={`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                {copy.fromLabel} {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
