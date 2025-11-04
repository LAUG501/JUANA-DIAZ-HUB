import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  SESSION_COOKIE_NAME,
  destroySessionCookieOptions,
  getSessionFromCookies,
} from "../../../../lib/auth";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME);
  const session = getSessionFromCookies(cookieStore);
  if (!session) {
    const response = NextResponse.json({ authenticated: false }, { status: 401 });
    if (token) {
      response.cookies.set(destroySessionCookieOptions());
    }
    return response;
  }

  return NextResponse.json({
    authenticated: true,
    user: session,
  });
}
