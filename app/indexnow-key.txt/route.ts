// IndexNow-nøglefil til Bing m.fl. Nøglen sættes som miljøvariablen
// INDEXNOW_KEY (fx i Vercel) — den hardcodes ikke i koden. Uden nøgle
// svarer ruten 404, så der aldrig udstilles en falsk nøgle.
// Brug: `npm run indexnow` efter deploy (se scripts/indexnow.ts).
export function GET() {
  const noegle = process.env.INDEXNOW_KEY;
  if (!noegle) return new Response("Not found", { status: 404 });
  return new Response(noegle, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
