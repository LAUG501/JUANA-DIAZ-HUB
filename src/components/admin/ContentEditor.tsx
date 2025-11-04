"use client";

import { useState } from "react";

type Props = {
  page: string;
  contentKey: string;
  label: string;
  language: "en" | "es";
  initialContent: string;
};

export default function ContentEditor({ page, contentKey, label, language, initialContent }: Props) {
  const [value, setValue] = useState(initialContent);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const handleSave = async () => {
    setStatus("saving");
    try {
      const response = await fetch("/api/content/blocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, key: contentKey, content: value, language }),
      });
      if (!response.ok) {
        throw new Error("Failed to save");
      }
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 1500);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{label}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {page} · {language.toUpperCase()}
          </p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={status === "saving"}
          className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white transition hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 dark:bg-secondary dark:hover:bg-secondary/80"
        >
          {status === "saving" ? "Saving..." : status === "saved" ? "Saved" : "Save"}
        </button>
      </div>
      <textarea
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (status === "saved") setStatus("idle");
        }}
        rows={6}
        className="w-full rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm text-slate-800 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/20"
      />
      {status === "error" && (
        <p className="text-xs font-semibold text-rose-500">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
