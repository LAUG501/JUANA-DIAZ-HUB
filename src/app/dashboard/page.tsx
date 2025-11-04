import { redirect } from "next/navigation";
import { getSessionFromCookies } from "../../lib/auth";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function DashboardPage() {
  const session = getSessionFromCookies(cookies());
  if (!session || session.role !== "admin") {
    redirect("/login?reason=auth");
  }

  return (
    <div className="space-y-10">
      <section className="surface">
        <div className="space-y-6">
          <p className="eyebrow">Administrator</p>
          <div className="space-y-3">
            <h1 className="text-3xl font-heading text-slate-900 dark:text-white">
              Welcome back, {session.name}!
            </h1>
            <p className="muted text-base">
              You are signed in as the administrator. Monitor community submissions, coordinate programming,
              and keep residents informed from one central workspace.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "12", label: "Pending directory approvals" },
              { value: "7", label: "Events awaiting review" },
              { value: "3", label: "Safety alerts to publish" },
            ].map((metric) => (
              <div key={metric.label} className="surface-muted">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Priority checklist</h2>
            <p className="muted">
              Tackle these items to keep the hub running smoothly for the community this week.
            </p>
          </div>
          <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <li className="surface-card">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Update the event calendar</p>
                <p className="muted">
                  Publish the latest municipal meetings and cultural pop-ups so residents can RSVP in time.
                </p>
                <Link
                  className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
                  href="/event-calendar"
                >
                  Open calendar →
                </Link>
              </div>
            </li>
            <li className="surface-card">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Approve new directory listings</p>
                <p className="muted">
                  Review business submissions for accuracy, accessibility details, and bilingual service options.
                </p>
                <Link
                  className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
                  href="/directory"
                >
                  Go to directory →
                </Link>
              </div>
            </li>
            <li className="surface-card">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Record a weekly spotlight</p>
                <p className="muted">
                  Highlight a mentor, volunteer crew, or local artist to keep the forum inspired and active.
                </p>
                <Link
                  className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
                  href="/local-stories"
                >
                  Share a story →
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Quick links</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[{
              label: "Review volunteer signups",
              description: "Coordinate hydration stations, safety ambassadors, and event hospitality crews.",
              href: "/volunteer",
            },
            {
              label: "Check scholarship pipeline",
              description: "Approve new funding opportunities and feature upcoming deadlines.",
              href: "/scholarships",
            },
            {
              label: "Monitor weather alerts",
              description: "Verify the latest warnings and translate updates for bilingual notifications.",
              href: "/weather-alerts",
            },
            {
              label: "Visit the forum",
              description: "Respond to resident feedback and pin important threads for visibility.",
              href: "/forum",
            },
            {
              label: "Plan workshops",
              description: "Coordinate facilitators, materials, and registration limits for upcoming trainings.",
              href: "/workshops",
            },
            {
              label: "Update public notices",
              description: "Post civic announcements, permitting deadlines, and meeting agendas.",
              href: "/public-notices",
            }].map((link) => (
              <Link key={link.label} href={link.href} className="surface-card block h-full">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{link.label}</p>
                  <p className="muted text-sm">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
