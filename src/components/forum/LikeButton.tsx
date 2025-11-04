"use client";

import { useState } from "react";
import { useLanguage } from "../providers/language-context";

type Props = {
  threadSlug: string;
  initialCount: number;
  initialLiked: boolean;
};

export default function LikeButton({ threadSlug, initialCount, initialLiked }: Props) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(initialLiked);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const { language, dictionary } = useLanguage();
  const copy = dictionary.forum.like;

  const handleClick = async () => {
    if (pending) return;
    setPending(true);
    setError(null);
    try {
      const response = await fetch(`/api/forum/threads/${threadSlug}/like`, { method: "POST" });
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; liked?: boolean; count?: number; error?: string }
        | null;
      if (!response.ok || !payload?.ok) {
        setError(payload?.error ?? copy.error);
        return;
      }
      if (typeof payload.count === "number") {
        setCount(payload.count);
      }
      if (typeof payload.liked === "boolean") {
        setLiked(payload.liked);
      }
    } catch (err) {
      console.error(err);
      setError(copy.error);
    } finally {
      setPending(false);
    }
  };

  const formatter = new Intl.NumberFormat(language === "es" ? "es-PR" : "en-US");
  const labelTemplate = liked ? copy.likedLabel : copy.label;
  const label = labelTemplate.replace("{count}", formatter.format(count));

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={pending}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
          liked
            ? "border-emerald-400/60 bg-emerald-100/60 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/50 dark:bg-emerald-500/20 dark:text-emerald-200"
            : "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 focus-visible:outline-primary dark:border-secondary/40 dark:bg-secondary/20 dark:text-secondary dark:hover:bg-secondary/30"
        }`}
      >
        <span className={`inline-flex h-2 w-2 rounded-full ${liked ? "bg-emerald-500" : "bg-primary dark:bg-secondary"}`} aria-hidden />
        {label}
      </button>
      {error ? <p className="text-xs font-semibold text-rose-500">{error}</p> : null}
    </div>
  );
}
