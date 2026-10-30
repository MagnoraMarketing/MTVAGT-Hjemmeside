import { virksomhed } from "@/content/virksomhed";
import { ydelser } from "@/content/ydelser";
import { byer } from "@/content/byer";
import { alleIndlaeg } from "@/content/blog";
import { absolutUrl } from "@/lib/site";

// /llms.txt — en kort, maskinlæsbar oversigt over virksomheden og sitets
// vigtigste sider til AI-assistenter og AI-søgning (se llmstxt.org).
// Genereres fra samme content-filer som sitet, så den aldrig er forældet.
export const dynamic = "force-static";

export function GET() {
  const a = virksomhed.adresse;
  const linjer = [
    `# ${virksomhed.navn} (${virksomhed.kortNavn})`,
    "",
    `> Autoriseret dansk vagtselskab med base i ${virksomhed.base}. ${virksomhed.daekningSaetning} Byggepladsvagt, brandvagt, runderingsvagt, portvagt, fastvagt, akut vagt, servicevagt, tryghedsvagt og kommunevagt — døgnet rundt.`,
    "",
    "## Fakta",
    "",
    `- Navn: ${virksomhed.navn}`,
    `- CVR: ${virksomhed.cvr}`,
    `- Adresse: ${a.gade}, ${a.postnr} ${a.by}, ${a.land}`,
    `- Telefon: ${virksomhed.telefon.visning} (døgnvagt)`,
    `- Dækning: ${virksomhed.daekning.join(", ")} — hovedfokus på ${virksomhed.region}`,
    `- Autorisation: ${virksomhed.autorisation.tekst}`,
    `- ${virksomhed.autorisation.rigspoliti}`,
    `- ${virksomhed.autorisation.foerstehjaelp}`,
    "- ISO-certificeret. Medlem af VSL og Dansk Industri.",
    "- Priser: oplyses ikke som faste listepriser; hver opgave får et konkret tilbud.",
    "",
    "## Ydelser",
    "",
    ...ydelser.map(
      (y) => `- [${y.titel}](${absolutUrl(`/vi-tilbyder/${y.slug}`)}): ${y.kortSvar}`
    ),
    `- [Byggepladssikring (guide)](${absolutUrl("/byggepladssikring")}): Sådan kombineres hegn, belysning, adgangskontrol, kameraer og fysisk vagt.`,
    "",
    "## Områder",
    "",
    ...byer.map(
      (b) => `- [Vagtfirma i ${b.navn}](${absolutUrl(`/vagtfirma/${b.slug}`)}): ${b.kortSvar}`
    ),
    "",
    "## Guides",
    "",
    ...alleIndlaeg().map(
      (p) => `- [${p.titel}](${absolutUrl(`/blog/${p.slug}`)}): ${p.beskrivelse}`
    ),
    "",
    "## Kontakt",
    "",
    `- [Kontakt og tilbud](${absolutUrl("/kontakt")})`,
    `- [Om MT Vagt](${absolutUrl("/om-mtvagt")})`,
    "",
  ];

  return new Response(linjer.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
