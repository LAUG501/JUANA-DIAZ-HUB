// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary text-white">
      <Image
        src="https://images.unsplash.com/photo-1526481280695-3c46917b11d4?auto=format&fit=crop&w=2200&q=80"
        alt="Juana Díaz coastline at sunset"
        fill
        className="absolute inset-0 -z-10 object-cover opacity-40 mix-blend-luminosity"
        sizes="100vw"
        priority
      />
      <div className="relative z-10 px-6 py-20 md:px-12 lg:px-16">
        <p className="eyebrow text-white/80">Community-first platform</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
          Juana Díaz Hub
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/80">
          Your digital plaza for stories, business connections, cultural heritage, and civic action across Juana Díaz and the
          south coast of Puerto Rico.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
          >
            Explore the directory
          </Link>
          <Link
            href="/event-calendar"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See what&apos;s happening
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[{ value: "250+", label: "Local businesses highlighted" }, { value: "365", label: "Annual cultural & civic events tracked" }, { value: "8", label: "Neighborhood spotlights with bilingual stories" }].map((stat) => (
            <div key={stat.label} className="stat-block">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
