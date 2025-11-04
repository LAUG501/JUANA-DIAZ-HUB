import "server-only";

import crypto from "crypto";
import { cookies } from "next/headers";

export type SessionRole = "admin";

export type SessionUser = {
  email: string;
  name: string;
  role: SessionRole;
};

export type SessionPayload = SessionUser & {
  exp: number; // seconds since epoch
};

export const SESSION_COOKIE_NAME = "jd-session";
const SESSION_TTL_SECONDS = 60 * 60 * 24; // 24 hours

function requireAuthSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET is not configured");
  }
  return secret;
}

function createSignature(base: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(base).digest("base64url");
}

export function encodeSession(payload: SessionUser): string {
  const secret = requireAuthSecret();
  const session: SessionPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };

  const json = JSON.stringify(session);
  const base = Buffer.from(json, "utf8").toString("base64url");
  const signature = createSignature(base, secret);
  return `${base}.${signature}`;
}

export function decodeSession(token: string | undefined): SessionPayload | null {
  if (!token) {
    return null;
  }

  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    return null;
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    return null;
  }

  const [base, signature] = parts;
  const expectedSignature = createSignature(base, secret);

  const provided = Buffer.from(signature, "base64url");
  const expected = Buffer.from(expectedSignature, "base64url");

  if (provided.length !== expected.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(provided, expected)) {
    return null;
  }

  const json = Buffer.from(base, "base64url").toString("utf8");
  const payload = JSON.parse(json) as SessionPayload;

  if (payload.exp < Math.floor(Date.now() / 1000)) {
    return null;
  }

  return payload;
}

export function getAdminConfig(): SessionUser | null {
  const email = process.env.ADMIN_EMAIL;
  if (!email) {
    return null;
  }

  const name = process.env.ADMIN_NAME ?? "Community Admin";
  return {
    email,
    name,
    role: "admin",
  } satisfies SessionUser;
}

function getPlaintextPassword(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  return password && password.length > 0 ? password : null;
}

function getHashedPassword(): string | null {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  return hash && hash.length > 0 ? hash.toLowerCase() : null;
}

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function safeCompare(expected: string, actual: string): boolean {
  const expectedBuffer = Buffer.from(expected, "utf8");
  const actualBuffer = Buffer.from(actual, "utf8");

  if (expectedBuffer.length !== actualBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, actualBuffer);
}

export function validateAdminCredentials(email: string, password: string): boolean {
  const adminConfig = getAdminConfig();
  if (!adminConfig) {
    return false;
  }

  if (adminConfig.email.toLowerCase() !== email.toLowerCase()) {
    return false;
  }

  const hashedPassword = getHashedPassword();
  if (hashedPassword) {
    const candidateHash = hashPassword(password);
    if (hashedPassword.length !== candidateHash.length) {
      return false;
    }
    return safeCompare(hashedPassword, candidateHash);
  }

  const plaintextPassword = getPlaintextPassword();
  if (!plaintextPassword) {
    return false;
  }

  return safeCompare(plaintextPassword, password);
}

export function createSessionCookie(payload: SessionUser) {
  return {
    name: SESSION_COOKIE_NAME,
    value: encodeSession(payload),
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
    secure: process.env.NODE_ENV === "production",
  };
}

export function destroySessionCookieOptions() {
  return {
    name: SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 0,
    secure: process.env.NODE_ENV === "production",
  };
}

export function getSessionFromCookies(store?: ReturnType<typeof cookies>): SessionUser | null {
  const cookieStore = store ?? cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const payload = decodeSession(token);
  if (!payload) {
    return null;
  }
  const { email, name, role } = payload;
  return { email, name, role };
}
