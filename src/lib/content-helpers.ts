import "server-only";

import { getContent } from "./content-service";

export async function getContentValue({
  page,
  key,
  language,
  fallback,
}: {
  page: string;
  key: string;
  language: "en" | "es";
  fallback: string;
}) {
  const record = await getContent(page, key, language);
  return record?.content ?? fallback;
}
