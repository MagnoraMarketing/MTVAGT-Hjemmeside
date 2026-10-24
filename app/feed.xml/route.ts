import { alleIndlaeg } from "@/content/blog";
import { virksomhed } from "@/content/virksomhed";
import { SITE, absolutUrl } from "@/lib/site";

// RSS 2.0-feed over blogindlæg, til feedlæsere og søgemaskiners opdagelse
// af nyt indhold. Genereres dynamisk ud fra samme kilde som /blog og
// sitemap.xml, så det aldrig kommer ud af sync.
function xmlEscape(tekst: string): string {
  return tekst
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const indlaeg = alleIndlaeg();
  const nu = new Date().toUTCString();

  const items = indlaeg
    .map((p) => {
      const url = absolutUrl(`/blog/${p.slug}`);
      return `    <item>
      <title>${xmlEscape(p.titel)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.dato).toUTCString()}</pubDate>
      <description>${xmlEscape(p.beskrivelse)}</description>
      <category>${xmlEscape(p.kategori)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${xmlEscape(virksomhed.navn)} — Blog</title>
  <link>${SITE.url}/blog</link>
  <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
  <description>Viden om vagt, sikkerhed og tryghed fra ${xmlEscape(virksomhed.navn)}.</description>
  <language>da</language>
  <lastBuildDate>${nu}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
