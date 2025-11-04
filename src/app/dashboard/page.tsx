import { redirect } from "next/navigation";
import { getSessionFromCookies } from "../../lib/auth";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const session = getSessionFromCookies(cookies());
  if (!session || session.role !== "admin") {
    redirect("/login?reason=auth");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-heading">Welcome back, {session.name}!</h1>
      <p className="text-slate-600 dark:text-slate-300">
        You are signed in as the administrator. From here you can manage community content,
        approve forum posts, and coordinate upcoming events.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Next steps</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>• Plan the next wave of community events and feature them on the calendar.</li>
          <li>• Review new directory submissions and approve verified businesses.</li>
          <li>• Post a weekly challenge to keep the community engaged.</li>
        </ul>
      </div>
    </div>
  );
}
