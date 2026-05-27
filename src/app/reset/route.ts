import { NextResponse } from "next/server";

/**
 * /reset
 *
 * One-shot escape hatch for users whose browser cached stale data
 * (Service Workers, redirect rules, etc.) from the OLD GoHighLevel
 * site at this domain. Returning the `Clear-Site-Data` header tells
 * the browser to wipe cookies, cache, storage, and any registered
 * Service Worker for this origin, then redirects to a clean home.
 *
 * Tell anyone hitting ERR_TOO_MANY_REDIRECTS to visit:
 *     https://fchighperformance.com/reset
 *
 * Spec: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data
 */
export const dynamic = "force-dynamic";

export function GET() {
  const response = NextResponse.redirect(
    new URL("/", "https://www.fchighperformance.com"),
    303 // See Other — forces a GET on the new location, breaks any cached redirect chain
  );
  response.headers.set(
    "Clear-Site-Data",
    '"cache", "cookies", "storage", "executionContexts"'
  );
  // Defensive: tell intermediate caches not to cache this response either
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}
