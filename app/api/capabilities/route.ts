import { NextResponse } from "next/server";

// /api/capabilities
// Purpose: Single discovery endpoint
// - Returns the upstream Hono API's OpenAPI JSON so you can discover
//   all available operations. We do NOT duplicate individual endpoints in
//   this Next.js app — you should call the Hono API directly per the spec.
//
// How to use (examples):
// - Fetch capabilities from this app during local dev:
//   curl -sS "http://localhost:3000/api/capabilities" | jq '.info.title'
// - Then call the upstream Hono API directly using paths/methods from the spec:
//   curl -sS "https://kibu-api-hono.vercel.app/organizations/org_123"
//
// Notes:
// - Errors: 502 = upstream OpenAPI fetch error; 500 = local fetch failure.
const baseUrl = "https://kibu-api-hono.vercel.app";

export async function GET() {
  const url = `${baseUrl}/openapi.json`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    const spec = await res.json().catch(() => null);
    if (!res.ok || !spec) {
      return NextResponse.json({ error: "upstream openapi fetch failed", status: res.status }, { status: 502 });
    }
    return NextResponse.json(spec);
  } catch {
    return NextResponse.json({ error: "capabilities fetch failed" }, { status: 500 });
  }
}


