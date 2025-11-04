import { NextResponse } from "next/server";
import {
  createSessionCookie,
  getAdminConfig,
  validateAdminCredentials,
} from "../../../../lib/auth";

type LoginRequest = {
  email?: string;
  password?: string;
};

type ErrorCode =
  | "MISSING_FIELDS"
  | "INVALID_CREDENTIALS"
  | "NOT_CONFIGURED"
  | "SERVER_ERROR";

function errorResponse(code: ErrorCode, status: number) {
  return NextResponse.json({ error: code }, { status });
}

export async function POST(request: Request) {
  let body: LoginRequest;
  try {
    body = await request.json();
  } catch (error) {
    return errorResponse("MISSING_FIELDS", 400);
  }

  const email = body.email?.trim();
  const password = body.password;

  if (!email || !password) {
    return errorResponse("MISSING_FIELDS", 400);
  }

  const adminConfig = getAdminConfig();
  if (!adminConfig) {
    return errorResponse("NOT_CONFIGURED", 503);
  }

  const isValid = validateAdminCredentials(email, password);
  if (!isValid) {
    return errorResponse("INVALID_CREDENTIALS", 401);
  }

  try {
    const response = NextResponse.json({
      user: {
        email: adminConfig.email,
        name: adminConfig.name,
        role: adminConfig.role,
      },
    });
    response.cookies.set(createSessionCookie(adminConfig));
    return response;
  } catch (error) {
    return errorResponse("SERVER_ERROR", 500);
  }
}
