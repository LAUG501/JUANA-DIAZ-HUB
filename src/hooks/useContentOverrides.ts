"use client";

import { useEffect, useState } from "react";

type OverrideMap = Record<string, string>;

type Options = {
  page: string;
  language: "en" | "es";
};

export function useContentOverrides({ page, language }: Options) {
  const [overrides, setOverrides] = useState<OverrideMap>({});

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(`/api/content/blocks?page=${encodeURIComponent(page)}&language=${language}`, {
          cache: "no-store",
        });
        if (!response.ok) return;
        const data = (await response.json()) as { blocks?: Array<{ key: string; content: string; language: string }> };
        if (!active || !data.blocks) return;
        const map: OverrideMap = {};
        for (const block of data.blocks) {
          if (block.language === language) {
            map[block.key] = block.content;
          }
        }
        setOverrides(map);
      } catch (error) {
        console.error("Failed to load content overrides", error);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [page, language]);

  return overrides;
}
