import "server-only";

import crypto from "crypto";
import { readDatabase, writeDatabase, withTimestamps } from "./database";

export type ContentInput = {
  page: string;
  key: string;
  language: "en" | "es";
  content: string;
  userId?: string;
};

export async function getContent(page: string, key: string, language: "en" | "es") {
  const db = await readDatabase();
  return (
    db.contentBlocks.find(
      (block) => block.page === page && block.key === key && block.language === language,
    ) ?? null
  );
}

export async function setContent(input: ContentInput) {
  const db = await readDatabase();
  let block = db.contentBlocks.find(
    (existing) =>
      existing.page === input.page && existing.key === input.key && existing.language === input.language,
  );
  if (block) {
    block.content = input.content;
    block.updatedAt = new Date().toISOString();
    block.updatedBy = input.userId;
  } else {
    block = withTimestamps({
      id: crypto.randomUUID(),
      page: input.page,
      key: input.key,
      language: input.language,
      content: input.content,
      updatedBy: input.userId,
    });
    db.contentBlocks.push(block);
  }
  await writeDatabase(db);
  return block;
}

export async function listPageContent(page: string) {
  const db = await readDatabase();
  return db.contentBlocks.filter((block) => block.page === page);
}
