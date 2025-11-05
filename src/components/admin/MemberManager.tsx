"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../providers/language-context";

type Member = {
  id: string;
  name: string;
  email: string;
  role: "user" | "moderator" | "admin";
  provider: string;
  createdAt: string;
  locale?: string;
};

type Status = { type: "idle" | "saving" | "success" | "error"; message?: string; memberId?: string };

export default function MemberManager() {
  const { dictionary } = useLanguage();
  const copy = dictionary.admin.members;
  const [members, setMembers] = useState<Member[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/admin/users", { cache: "no-store" });
        if (!active) return;
        if (!response.ok) {
          setMembers([]);
          setLoading(false);
          return;
        }
        const data = (await response.json()) as { users: Member[] };
        setMembers(data.users ?? []);
      } catch (error) {
        console.error("Failed to load members", error);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  const filteredMembers = useMemo(() => {
    if (!query.trim()) return members;
    const lower = query.trim().toLowerCase();
    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(lower) ||
        member.email.toLowerCase().includes(lower) ||
        member.provider.toLowerCase().includes(lower),
    );
  }, [members, query]);

  const handleRoleChange = async (memberId: string, role: "user" | "moderator" | "admin") => {
    setStatus({ type: "saving", memberId, message: copy.status.updating });
    try {
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: memberId, role }),
      });
      if (!response.ok) {
        throw new Error("Failed to update role");
      }
      setMembers((previous) =>
        previous.map((member) => (member.id === memberId ? { ...member, role } : member)),
      );
      setStatus({ type: "success", memberId, message: copy.status.updated });
    } catch (error) {
      console.error("Unable to update member role", error);
      setStatus({ type: "error", memberId, message: copy.status.error });
    }
  };

  return (
    <section className="surface space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.title}</h2>
        <p className="muted text-sm">{copy.description}</p>
        <div className="relative max-w-md">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
        <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
          <thead className="bg-slate-50/80 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3">{copy.table.name}</th>
              <th className="px-4 py-3">{copy.table.email}</th>
              <th className="px-4 py-3">{copy.table.provider}</th>
              <th className="px-4 py-3">{copy.table.joined}</th>
              <th className="px-4 py-3">{copy.table.locale}</th>
              <th className="px-4 py-3">{copy.table.role}</th>
              <th className="px-4 py-3 text-right">{copy.table.actions}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-200">
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  {copy.status.updating}
                </td>
              </tr>
            ) : filteredMembers.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  {copy.empty}
                </td>
              </tr>
            ) : (
              filteredMembers.map((member) => {
                const activeStatus = status.memberId === member.id ? status : { type: "idle" as const };
                return (
                  <tr key={member.id} className="align-middle">
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{member.name}</td>
                    <td className="px-4 py-3 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {member.email}
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary dark:text-secondary">
                      {member.provider}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
                      {new Date(member.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">{member.locale ?? "—"}</td>
                    <td className="px-4 py-3">
                      <select
                        value={member.role}
                        onChange={(event) =>
                          handleRoleChange(member.id, event.target.value as "user" | "moderator" | "admin")
                        }
                        className="rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/20"
                      >
                        <option value="user">{copy.roleOptions.user}</option>
                        <option value="moderator">{copy.roleOptions.moderator}</option>
                        <option value="admin">{copy.roleOptions.admin}</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide">
                      {activeStatus.type === "saving" ? (
                        <span className="text-amber-500">{copy.status.updating}</span>
                      ) : activeStatus.type === "success" ? (
                        <span className="text-emerald-500">{copy.status.updated}</span>
                      ) : activeStatus.type === "error" ? (
                        <span className="text-rose-500">{copy.status.error}</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
