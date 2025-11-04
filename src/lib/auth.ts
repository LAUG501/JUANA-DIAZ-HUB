import "server-only";

import crypto from "crypto";
import { cookies } from "next/headers";
import { readDatabase, writeDatabase, withTimestamps, type SessionRecord } from "./database";

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin" | "moderator";
  image?: string;
  locale: "en" | "es";
};

const SESSION_COOKIE_NAME = "jd_session_v2";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
const STATE_COOKIE_NAME = "jd_oauth_state";

function requireSecret(): Buffer {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET must be at least 32 characters long");
  }
  return Buffer.from(secret, "utf8");
}

function signValue(value: string): string {
  const secret = requireSecret();
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(value);
  return hmac.digest("base64url");
}

function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function encodeCookiePayload(token: string, issuedAt: number): string {
  const base = Buffer.from(JSON.stringify({ token, issuedAt }), "utf8").toString("base64url");
  const signature = signValue(base);
  return `${base}.${signature}`;
}

function decodeCookiePayload(raw?: string): { token: string; issuedAt: number } | null {
  if (!raw) return null;
  const [base, signature] = raw.split(".");
  if (!base || !signature) return null;
  const expected = signValue(base);
  const provided = Buffer.from(signature, "base64url");
  const actual = Buffer.from(expected, "base64url");
  if (provided.length !== actual.length) return null;
  if (!crypto.timingSafeEqual(provided, actual)) return null;
  const json = Buffer.from(base, "base64url").toString("utf8");
  try {
    const payload = JSON.parse(json) as { token: string; issuedAt: number };
    if (!payload?.token || typeof payload.issuedAt !== "number") {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(userId: string) {
  const db = await readDatabase();
  const sessionToken = crypto.randomBytes(32).toString("hex");
  const session: SessionRecord = withTimestamps({
    id: crypto.randomUUID(),
    userId,
    token: hashToken(sessionToken),
    expiresAt: new Date(Date.now() + SESSION_DURATION_MS).toISOString(),
  });
  db.sessions = db.sessions.filter((record) => record.userId !== userId);
  db.sessions.push(session);
  await writeDatabase(db);

  const payload = encodeCookiePayload(sessionToken, Date.now());
  cookies().set({
    name: SESSION_COOKIE_NAME,
    value: payload,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

export async function destroySession() {
  const db = await readDatabase();
  const cookieStore = cookies();
  const cookiePayload = decodeCookiePayload(cookieStore.get(SESSION_COOKIE_NAME)?.value);
  if (cookiePayload) {
    const hashed = hashToken(cookiePayload.token);
    db.sessions = db.sessions.filter((session) => session.token !== hashed);
    await writeDatabase(db);
  }
  cookies().set({
    name: SESSION_COOKIE_NAME,
    value: "",
    maxAge: 0,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = cookies();
  const raw = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const payload = decodeCookiePayload(raw);
  if (!payload) return null;

  const db = await readDatabase();
  const hashed = hashToken(payload.token);
  const session = db.sessions.find((record) => record.token === hashed);
  if (!session) return null;
  if (new Date(session.expiresAt).getTime() < Date.now()) {
    db.sessions = db.sessions.filter((record) => record.id !== session.id);
    await writeDatabase(db);
    return null;
  }

  const user = db.users.find((record) => record.id === session.userId);
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    image: user.image,
    locale: user.locale,
  } satisfies SessionUser;
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16);
  const hash = crypto.pbkdf2Sync(password, salt, 100_000, 32, "sha256");
  return `${salt.toString("hex")}:${hash.toString("hex")}`;
}

export function verifyPassword(password: string, hashed?: string): boolean {
  if (!hashed) return false;
  const [saltHex, hashHex] = hashed.split(":");
  if (!saltHex || !hashHex) return false;
  const salt = Buffer.from(saltHex, "hex");
  const expected = Buffer.from(hashHex, "hex");
  const actual = crypto.pbkdf2Sync(password, salt, 100_000, 32, "sha256");
  if (actual.length !== expected.length) return false;
  return crypto.timingSafeEqual(actual, expected);
}

export function encrypt(value: string): string {
  const secret = requireSecret();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-gcm", secret.subarray(0, 32), iv);
  const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]).toString("base64url");
}

export function decrypt(payload: string): string {
  const buffer = Buffer.from(payload, "base64url");
  const iv = buffer.subarray(0, 16);
  const tag = buffer.subarray(16, 32);
  const data = buffer.subarray(32);
  const secret = requireSecret();
  const decipher = crypto.createDecipheriv("aes-256-gcm", secret.subarray(0, 32), iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  return decrypted.toString("utf8");
}

export function generateState(): { state: string; nonce: string } {
  return {
    state: crypto.randomBytes(24).toString("base64url"),
    nonce: crypto.randomBytes(24).toString("base64url"),
  };
}

export function storeStateCookie(payload: { state: string; nonce: string; provider: string; returnTo?: string }) {
  const json = JSON.stringify(payload);
  const signed = encodeCookiePayload(json, Date.now());
  cookies().set({
    name: STATE_COOKIE_NAME,
    value: signed,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 15,
  });
}

export function consumeStateCookie(): { state: string; nonce: string; provider: string; returnTo?: string } | null {
  const raw = cookies().get(STATE_COOKIE_NAME)?.value;
  cookies().set({ name: STATE_COOKIE_NAME, value: "", path: "/", maxAge: 0 });
  const payload = decodeCookiePayload(raw);
  if (!payload) return null;
  try {
    return JSON.parse(payload.token) as { state: string; nonce: string; provider: string; returnTo?: string };
  } catch {
    return null;
  }
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

