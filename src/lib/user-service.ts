import "server-only";

import crypto from "crypto";
import { readDatabase, writeDatabase, withTimestamps, type UserRecord, type UserRole } from "./database";

export type CreateUserInput = {
  email: string;
  name: string;
  image?: string;
  locale?: "en" | "es";
  provider: "google" | "facebook" | "tiktok" | "credentials";
  providerId: string;
  passwordHash?: string;
};

export async function findUserByEmail(email: string) {
  const db = await readDatabase();
  return db.users.find((user) => user.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function findUserByProvider(provider: string, providerId: string) {
  const db = await readDatabase();
  return db.users.find((user) => user.provider === provider && user.providerId === providerId) ?? null;
}

export async function getUserById(id: string) {
  const db = await readDatabase();
  return db.users.find((user) => user.id === id) ?? null;
}

export async function createUser(input: CreateUserInput, role: UserRole = "user"): Promise<UserRecord> {
  const db = await readDatabase();
  const record: UserRecord = withTimestamps({
    id: crypto.randomUUID(),
    email: input.email.toLowerCase(),
    name: input.name,
    image: input.image,
    locale: input.locale ?? "en",
    provider: input.provider,
    providerId: input.providerId,
    role,
    passwordHash: input.passwordHash,
  });
  db.users.push(record);
  await writeDatabase(db);
  return record;
}

export async function updateUser(id: string, updates: Partial<Omit<UserRecord, "id" | "createdAt" | "updatedAt">>) {
  const db = await readDatabase();
  const user = db.users.find((record) => record.id === id);
  if (!user) return null;
  Object.assign(user, updates);
  user.updatedAt = new Date().toISOString();
  await writeDatabase(db);
  return user;
}

export async function listUsers() {
  const db = await readDatabase();
  return db.users
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      provider: user.provider,
      createdAt: user.createdAt,
      locale: user.locale,
    }));
}

export async function updateUserRole(id: string, role: UserRole) {
  return updateUser(id, { role });
}

export async function upsertUserByProvider(input: CreateUserInput, roleHint?: UserRole) {
  const existing = await findUserByProvider(input.provider, input.providerId);
  if (existing) {
    const updates: Partial<UserRecord> = {
      name: input.name,
      image: input.image,
      locale: input.locale ?? existing.locale,
      email: input.email.toLowerCase(),
    };
    await updateUser(existing.id, updates);
    return await getUserById(existing.id);
  }
  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const role: UserRole = input.email.toLowerCase() === adminEmail ? "admin" : roleHint ?? "user";
  return createUser(input, role);
}

export async function ensureAdminAccount() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  if (!adminEmail || !adminPasswordHash) {
    return;
  }
  const existing = await findUserByEmail(adminEmail);
  if (!existing) {
    await createUser(
      {
        email: adminEmail,
        name: process.env.ADMIN_NAME ?? "Community Admin",
        provider: "credentials",
        providerId: "admin",
        passwordHash: adminPasswordHash,
        locale: "en",
      },
      "admin",
    );
  }
}
