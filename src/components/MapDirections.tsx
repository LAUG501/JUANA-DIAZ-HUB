// components/MapDirections.tsx
"use client";
import { FormEvent } from "react";

export default function MapDirections() {
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
    <section className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-3xl overflow-hidden shadow-lg h-[420px]">
        <iframe
          title="Map - Juana Díaz Hub"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${destQuery}&output=embed`}
        />
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <h3 className="text-2xl font-semibold mb-2">Getting Here</h3>
        <p className="text-sm text-gray-600 mb-6">
          Plan your route from anywhere in Puerto Rico. Driving, transit, or walking.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="origin"
            placeholder="Enter your starting point (e.g., Ponce, PR)"
            className="w-full rounded-lg border p-3"
          />
          <button className="rounded-lg bg-primary px-5 py-3 font-semibold text-white" type="submit">
            Get Directions
          </button>
        </form>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          {[
            ["San Juan", "San%20Juan%2C%20PR"],
            ["Mayagüez", "Mayaguez%2C%20PR"],
            ["Ponce", "Ponce%2C%20PR"],
            ["Fajardo", "Fajardo%2C%20PR"],
          ].map(([label, o]) => (
            <a
              key={label}
              className="rounded-lg border px-4 py-3 text-center hover:bg-gray-50"
              href={`https://www.google.com/maps/dir/?api=1&origin=${o}&destination=${destQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              From {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
