import { NextRequest } from "next/server";
import { buildAuthorizeUrl, handleOAuthCallback, type OAuthProvider } from "../../../../lib/oauth";

export async function GET(request: NextRequest, { params }: { params: { provider: OAuthProvider } }) {
  const provider = params.provider;
  if (!["google", "facebook", "tiktok"].includes(provider)) {
    return new Response("Unsupported provider", { status: 400 });
  }
  const url = new URL(request.url);
  const step = url.searchParams.get("step");
  const returnTo = url.searchParams.get("returnTo") ?? undefined;

  if (!step) {
    return buildAuthorizeUrl(provider, returnTo);
  }

  if (step === "callback") {
    return handleOAuthCallback(request, provider);
  }

  return new Response("Unsupported step", { status: 400 });
}
