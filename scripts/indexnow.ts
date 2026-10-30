// Sender alle URL'er fra det live sitemap til IndexNow (Bing, Yandex m.fl.),
// så nye og opdaterede sider opdages hurtigt. Kør efter deploy:
//   INDEXNOW_KEY=<nøgle> npm run indexnow
// Nøglen skal være den samme som på /indexnow-key.txt i produktion.
import { SITE } from "../lib/site";

async function main() {
  const noegle = process.env.INDEXNOW_KEY;
  if (!noegle) {
    console.error("Mangler INDEXNOW_KEY.");
    process.exit(1);
  }

  const xml = await (await fetch(`${SITE.url}/sitemap.xml`)).text();
  const urlListe = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const svar = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE.url).host,
      key: noegle,
      keyLocation: `${SITE.url}/indexnow-key.txt`,
      urlList: urlListe,
    }),
  });
  console.log(`IndexNow: ${svar.status} for ${urlListe.length} URL'er`);
  if (!svar.ok) process.exit(1);
}

main();
