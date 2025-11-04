"use client";

import { useState } from "react";

type Step = {
  id: string;
  prompt: string;
  guidance: string;
  completed: boolean;
};

export default function StepChecklist({ steps }: { steps: Step[] }) {
  const [localSteps, setLocalSteps] = useState(steps);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleStep = async (stepId: string) => {
    if (pendingId) return;
    const snapshot = localSteps.map((step) => ({ ...step }));
    setPendingId(stepId);
    setError(null);
    setLocalSteps((current) => current.map((step) => (step.id === stepId ? { ...step, completed: true } : step)));
    try {
      const response = await fetch("/api/school/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stepId }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Unable to update progress.");
      }
    } catch (err) {
      console.error(err);
      setLocalSteps(snapshot);
      setError(err instanceof Error ? err.message : "Unable to update progress.");
    } finally {
      setPendingId(null);
    }
  };

  return (
    <div className="space-y-3">
      <ul className="space-y-3">
        {localSteps.map((step) => {
          const isPending = pendingId === step.id;
          return (
            <li
              key={step.id}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm transition dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-4">
                <button
                  type="button"
                  onClick={() => toggleStep(step.id)}
                  disabled={step.completed || isPending}
                  className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold transition ${
                    step.completed
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-slate-300 bg-white text-slate-500 hover:border-primary hover:text-primary"
                  } ${isPending ? "opacity-60" : ""}`}
                >
                  {step.completed ? "✓" : ""}
                </button>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{step.prompt}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{step.guidance}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {error ? <p className="text-xs font-semibold text-rose-500">{error}</p> : null}
    </div>
  );
}
