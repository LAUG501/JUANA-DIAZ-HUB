import "server-only";

import { NextResponse } from "next/server";
import { generateState, storeStateCookie, consumeStateCookie, requireEnv } from "./auth";
import { upsertUserByProvider } from "./user-service";
import { createSession } from "./auth";
import { NextRequest } from "next/server";

export type OAuthProvider = "google" | "facebook" | "tiktok";

type ProviderConfig = {
  authorizeUrl: string;
  tokenUrl: string;
  scope: string;
  profileUrl: string;
  profileFields: string;
};

export function getProviderConfig(provider: OAuthProvider): ProviderConfig {
  switch (provider) {
    case "google":
      return {
        authorizeUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenUrl: "https://oauth2.googleapis.com/token",
        scope: "openid email profile",
        profileUrl: "https://www.googleapis.com/oauth2/v3/userinfo",
        profileFields: "",
      };
    case "facebook":
      return {
        authorizeUrl: "https://www.facebook.com/v18.0/dialog/oauth",
        tokenUrl: "https://graph.facebook.com/v18.0/oauth/access_token",
        scope: "email public_profile",
        profileUrl: "https://graph.facebook.com/me",
        profileFields: "id,name,email,picture",
      };
    case "tiktok":
      return {
        authorizeUrl: "https://www.tiktok.com/v2/auth/authorize/",
        tokenUrl: "https://open.tiktokapis.com/v2/oauth/token/",
        scope: "user.info.basic,user.email",
        profileUrl: "https://open.tiktokapis.com/v2/user/info/",
        profileFields: "",
      };
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}

export function buildAuthorizeUrl(provider: OAuthProvider, returnTo?: string) {
  const config = getProviderConfig(provider);
  const { state, nonce } = generateState();
  storeStateCookie({ state, nonce, provider, returnTo });

  const redirectBase = requireEnv("OAUTH_REDIRECT_BASE");
  const clientId = requireEnv(`${provider.toUpperCase()}_CLIENT_ID`);
  const redirectUri = `${redirectBase}/api/oauth/${provider}?step=callback`;
  const url = new URL(config.authorizeUrl);
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", config.scope);
  url.searchParams.set("state", state);
  if (provider === "google") {
    url.searchParams.set("nonce", nonce);
    url.searchParams.set("access_type", "offline");
    url.searchParams.set("prompt", "consent");
  }
  if (provider === "tiktok") {
    url.searchParams.set("state", state);
    url.searchParams.set("nonce", nonce);
    url.searchParams.set("client_key", clientId);
  }
  return NextResponse.redirect(url.toString());
}

export function validateCallbackState(provider: OAuthProvider, providedState: string | null) {
  const stored = consumeStateCookie();
  if (!stored || stored.provider !== provider || !providedState || stored.state !== providedState) {
    return { valid: false as const };
  }
  return { valid: true as const, stored };
}

export type OAuthProfile = {
  id: string;
  email: string;
  name: string;
  image?: string;
};

async function fetchJson(url: string, init?: RequestInit) {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`OAuth request failed: ${response.status}`);
  }
  return (await response.json()) as Record<string, unknown>;
}

async function exchangeToken(
  provider: OAuthProvider,
  code: string,
  redirectUri: string,
): Promise<{ accessToken: string; idToken?: string; refreshToken?: string }> {
  const clientId = requireEnv(`${provider.toUpperCase()}_CLIENT_ID`);
  const clientSecret = requireEnv(`${provider.toUpperCase()}_CLIENT_SECRET`);
  const config = getProviderConfig(provider);

  if (provider === "google") {
    const response = await fetchJson(config.tokenUrl, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }).toString(),
    });
    return {
      accessToken: String(response.access_token ?? ""),
      idToken: response.id_token ? String(response.id_token) : undefined,
      refreshToken: response.refresh_token ? String(response.refresh_token) : undefined,
    };
  }

  if (provider === "facebook") {
    const url = new URL(config.tokenUrl);
    url.searchParams.set("client_id", clientId);
    url.searchParams.set("client_secret", clientSecret);
    url.searchParams.set("redirect_uri", redirectUri);
    url.searchParams.set("code", code);
    const response = await fetchJson(url.toString());
    return {
      accessToken: String(response.access_token ?? ""),
    };
  }

  if (provider === "tiktok") {
    const response = await fetchJson(config.tokenUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_key: clientId,
        client_secret: clientSecret,
        code,
        grant_type: "authorization_code",
      }),
    });
    const data = response.data as Record<string, unknown> | undefined;
    return {
      accessToken: String((data?.access_token ?? response.access_token) ?? ""),
      refreshToken: data?.refresh_token ? String(data.refresh_token) : undefined,
    };
  }

  throw new Error(`Unsupported provider: ${provider}`);
}

async function fetchProfile(provider: OAuthProvider, accessToken: string, fields: string): Promise<OAuthProfile> {
  const config = getProviderConfig(provider);
  if (provider === "facebook") {
    const url = new URL(config.profileUrl);
    url.searchParams.set("fields", fields);
    url.searchParams.set("access_token", accessToken);
    const json = await fetchJson(url.toString());
    return {
      id: String(json.id ?? ""),
      email: String(json.email ?? ""),
      name: String(json.name ?? "Facebook User"),
      image: typeof json.picture === "object" && json.picture && "data" in json.picture
        ? String((json.picture as any).data?.url ?? "")
        : undefined,
    };
  }

  if (provider === "tiktok") {
    const response = await fetchJson(config.profileUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ fields: ["open_id", "display_name", "email", "avatar_url"] }),
    });
    const data = response.data as { user: Record<string, unknown> } | undefined;
    const user = data?.user ?? {};
    return {
      id: String(user.open_id ?? ""),
      email: String(user.email ?? `${user.open_id ?? ""}@tiktok.local`),
      name: String(user.display_name ?? "TikTok Creator"),
      image: user.avatar_url ? String(user.avatar_url) : undefined,
    };
  }

  const json = await fetchJson(config.profileUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return {
    id: String(json.sub ?? json.id ?? ""),
    email: String(json.email ?? ""),
    name: String(json.name ?? `${provider} user`),
    image: json.picture ? String(json.picture) : undefined,
  };
}

export async function handleOAuthCallback(request: NextRequest, provider: OAuthProvider) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const validation = validateCallbackState(provider, state);
  if (!validation.valid || !code) {
    return NextResponse.redirect(`/login?error=${encodeURIComponent("oauth_failed")}`);
  }

  const redirectBase = requireEnv("OAUTH_REDIRECT_BASE");
  const redirectUri = `${redirectBase}/api/oauth/${provider}?step=callback`;

  try {
    const token = await exchangeToken(provider, code, redirectUri);
    const config = getProviderConfig(provider);
    const profile = await fetchProfile(provider, token.accessToken, config.profileFields);

    if (!profile.email) {
      return NextResponse.redirect(`/login?error=${encodeURIComponent("missing_email")}`);
    }

    const user = await upsertUserByProvider({
      email: profile.email,
      name: profile.name,
      image: profile.image,
      provider,
      providerId: profile.id,
      locale: "en",
    });

    await createSession(user.id);
    const destination = validation.stored.returnTo ?? "/dashboard";
    return NextResponse.redirect(destination);
  } catch (error) {
    console.error("OAuth callback failure", error);
    return NextResponse.redirect(`/login?error=${encodeURIComponent("oauth_failed")}`);
  }
}


