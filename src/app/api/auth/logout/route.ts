import { NextResponse } from "next/server";
import { destroySessionCookieOptions } from "../../../../lib/auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(destroySessionCookieOptions());
  return response;
}
