import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RegisterPayload = {
  email?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request): Promise<NextResponse> {
  let payload: RegisterPayload = {};

  try {
    payload = (await request.json()) as RegisterPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "INVALID_BODY" },
      { status: 400 },
    );
  }

  const email = payload.email?.trim() ?? "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "INVALID_EMAIL" },
      { status: 400 },
    );
  }

  // TODO: Replace this stub with real storage (e.g., email service, DB).
  console.log("[register] new lead", {
    email,
    source: payload.source ?? "landing",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
