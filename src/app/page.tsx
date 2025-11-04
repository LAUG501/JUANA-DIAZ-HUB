import Hero from "../components/Hero";
import Card from "../components/Card";
import LoginSlider from "../components/LoginSlider";
import MapDirections from "../components/MapDirections";
import Link from "next/link";

const primaryHighlights = [
  {
    title: "Community directory",
    description: "Browse verified businesses, non-profits, and creative studios ready to collaborate.",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    href: "/directory",
  },
  {
    title: "Events calendar",
    description: "Track cultural festivals, civic meetings, and learning labs happening every week.",
    imageUrl: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81c?auto=format&fit=crop&w=1200&q=80",
    href: "/event-calendar",
  },
  {
    title: "Local stories",
    description: "Discover voices from across Juana Díaz sharing triumphs, traditions, and fresh ideas.",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    href: "/local-stories",
  },
];

const communityPaths = [
  {
    title: "Guides & toolkits",
    description: "Step-by-step resources for launching projects, hosting events, and caring for neighbors.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    href: "/guides",
  },
  {
    title: "Learning hub",
    description: "Micro-courses and workshops designed with local educators and mentors.",
    imageUrl: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=1200&q=80",
    href: "/learning-hub",
  },
  {
    title: "Volunteer network",
    description: "Sign up for cultural festivals, safety teams, and mutual aid efforts.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    href: "/volunteer",
  },
];

const stats = [
  { value: "250+", label: "Verified businesses" },
  { value: "365", label: "Annual events tracked" },
  { value: "140", label: "Mentors supporting residents" },
  { value: "5K", label: "Forum participants" },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="surface">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="eyebrow">Start here</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Plan your next move in Juana Díaz</h2>
            <p className="muted mx-auto max-w-2xl">
              Explore curated directories, event calendars, and storytelling hubs designed to keep residents, visitors, and the diaspora connected.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {primaryHighlights.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} href={item.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow">One hub, many journeys</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Connect with the programs that fit you</h2>
            <p className="muted">
              Whether you are launching a business, planning a festival, or checking on loved ones after a storm, Juana Díaz Hub centralizes trustworthy information and warm community support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/forum"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
              >
                Join the community forum
              </Link>
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
              >
                Review safety resources
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-muted">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <p className="eyebrow">Keep going</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Deepen your impact</h2>
            <p className="muted mx-auto max-w-2xl">
              Take advantage of mentorship, workshops, and volunteer opportunities that keep the town thriving.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {communityPaths.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} href={item.href} />
            ))}
          </div>
        </div>
      </section>

      <LoginSlider />

      <MapDirections />

      <section className="surface">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Stay in the loop</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Weekly highlights delivered to you</h3>
            <p className="muted">
              Receive bilingual recaps of new events, business openings, scholarships, and safety alerts every Thursday.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              className="h-12 flex-1 rounded-full border border-slate-200/80 bg-white/80 px-5 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
              type="email"
              placeholder="you@email.com"
            />
            <button
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
              type="button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
