// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

type HeroStat = {
  value: string;
  label: string;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  stats: HeroStat[];
};

export default function Hero({ eyebrow, title, description, primaryAction, secondaryAction, stats }: HeroProps) {
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
        <p className="eyebrow text-white/80">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={primaryAction.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryAction.label}
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
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
