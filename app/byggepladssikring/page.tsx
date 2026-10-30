import type { Metadata } from "next";
import Link from "next/link";
import { virksomhed } from "@/content/virksomhed";
import { Billede } from "@/components/Billede";
import { Broedkrumme } from "@/components/Broedkrumme";
import { Afsloer } from "@/components/Sektion";
import { SeoSektion } from "@/components/SeoSektion";
import { CtaBaand } from "@/components/CtaBaand";
import { MagnetiskKnap } from "@/components/MagnetiskKnap";
import { JsonLd } from "@/components/JsonLd";
import { SITE, absolutUrl, sideMetadata } from "@/lib/site";

// Søjleside (pillar) for "byggepladssikring": den samlede guide, der binder
// byggepladsvagt, rundering, portvagt, brandvagt og teknisk sikring sammen.
// Saglig om kameraer — fysisk vagt er ikke altid det rigtige svar.

const STI = "/byggepladssikring";

export const metadata: Metadata = sideMetadata({
  titel: "Byggepladssikring — sikring mod tyveri, hærværk og brand",
  beskrivelse:
    "Komplet guide til byggepladssikring: hegn, belysning, adgangskontrol, kameraovervågning og fysisk byggepladsvagt — og hvordan du kombinerer dem døgnet rundt. Autoriseret vagtselskab.",
  sti: STI,
  billede: "/img/hero-byggeplads-nat.jpg",
});

const lag = [
  {
    titel: "1. Mekanisk sikring",
    tekst:
      "Byggehegn med fodplader, der er samlet og låst, aflåste containere og værktøjsbokse, fjernede nøgler og låste maskiner. Det er fundamentet — men et hegn kan klippes, og en container kan brydes op, hvis ingen opdager det.",
  },
  {
    titel: "2. Orden og registrering",
    tekst:
      "Mærk værktøj og maskiner, registrér serienumre, og hold styr på, hvad der står hvor. Ryd op ved fyraften, så værdifuldt materiel ikke ligger synligt eller tilgængeligt.",
  },
  {
    titel: "3. Belysning",
    tekst:
      "God belysning fjerner skjulesteder og gør det sværere at arbejde uset. Bevægelsesstyret lys ved containere og indgange er en billig og effektiv forstærkning.",
  },
  {
    titel: "4. Teknisk overvågning",
    tekst:
      "Alarmer og kameraer kan dække store arealer og dokumentere hændelser. Med en tilknyttet alarmcentral kan en alarm føre til, at nogen rykker ud. Kameraer kræver korrekt skiltning og overholdelse af databeskyttelsesreglerne.",
  },
  {
    titel: "5. Adgangskontrol",
    tekst:
      "På pladser med mange underentreprenører skal det være klart, hvem der må være der. En portvagt registrerer personer og køretøjer, kontrollerer legitimation og fører log — også over leverancer.",
  },
  {
    titel: "6. Fysisk vagt",
    tekst:
      "En autoriseret vagt — fast eller som rundering — er til stede, når det sker. Vagten kan reagere i realtid, opdage begyndende brand og tekniske fejl og kontakte de rette efter en aftalt procedure.",
  },
];

const sammenligning = [
  {
    kriterie: "Afskrækkende effekt",
    kamera: "Synlige kameraer og skilte virker afskrækkende på nogle.",
    vagt: "En synlig vagt og en vagtbil på pladsen virker stærkt afskrækkende.",
  },
  {
    kriterie: "Reaktion i realtid",
    kamera: "Afhænger af, om nogen overvåger billederne eller alarmen og rykker ud.",
    vagt: "Vagten er på stedet og kan handle med det samme.",
  },
  {
    kriterie: "Dokumentation",
    kamera: "Stærk — optagelser kan bruges i forhold til politi og forsikring.",
    vagt: "Skriftlig rapportering og log efter hver vagt eller runde.",
  },
  {
    kriterie: "Brand og tekniske fejl",
    kamera: "Begrænset — afhænger af sensorer og billedvinkel.",
    vagt: "Vagten kan opdage røg, ulmebrand, vandskader og åbne døre.",
  },
  {
    kriterie: "Adgangskontrol i arbejdstiden",
    kamera: "Kan registrere, men ikke afvise eller vejlede.",
    vagt: "En portvagt kontrollerer, registrerer og afviser uvedkommende.",
  },
  {
    kriterie: "Store, åbne arealer",
    kamera: "Kan dække meget areal med få enheder.",
    vagt: "Kræver rundering eller flere vagter på meget store pladser.",
  },
];

const faser = [
  {
    fase: "Opstart og jordarbejde",
    tekst:
      "Hegnet er nyt, containere og maskiner ankommer, og pladsen er åben. Her er runderinger om natten og fokus på maskiner, diesel og værktøj ofte det rigtige.",
  },
  {
    fase: "Råhus",
    tekst:
      "Mange leverandører og underentreprenører. Adgangskontrol ved porten i arbejdstiden og byggepladsvagt eller rundering om natten og i weekender.",
  },
  {
    fase: "Lukning, installationer og aptering",
    tekst:
      "Kabler, kobber, hvidevarer og installationer gør pladsen mere attraktiv for tyve. Behovet for fast vagt om natten stiger typisk her.",
  },
  {
    fase: "Aflevering",
    tekst:
      "Bygningen er næsten færdig og står tom. Fastvagt eller rundering beskytter mod hærværk og indbrud, indtil nøglerne er overdraget.",
  },
];

export default function Byggepladssikring() {
  const artikelLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Byggepladssikring: sådan sikrer du byggepladsen mod tyveri, hærværk og brand",
    description: metadata.description,
    author: { "@id": `${SITE.url}/#organisation` },
    publisher: { "@id": `${SITE.url}/#organisation` },
    mainEntityOfPage: absolutUrl(STI),
    about: ["Byggepladssikring", "Byggepladsvagt", "Kameraovervågning", "Adgangskontrol"],
    inLanguage: SITE.sprog,
  };

  return (
    <>
      <JsonLd data={artikelLd} />

      <section className="relative overflow-hidden bg-ink pt-28 pb-16">
        <div aria-hidden className="gitter absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Afsloer>
            <Broedkrumme
              dele={[
                { navn: "Forside", sti: "/" },
                { navn: "Byggepladssikring", sti: STI },
              ]}
            />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-krom sm:text-5xl">
              Byggepladssikring mod tyveri, hærværk og brand
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-staal-lys">
              <strong className="text-krom">Kort svar:</strong> Den bedste
              byggepladssikring kombinerer flere lag — mekanisk sikring, orden,
              belysning, teknisk overvågning, adgangskontrol og fysisk vagt — og
              tilpasses byggeriets fase. Kameraer dokumenterer, mens en vagt kan
              gribe ind i realtid. Hvilke lag der giver mening, afhænger af
              pladsens størrelse, værdier og risiko.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagnetiskKnap href="/kontakt">Få en vurdering af din plads</MagnetiskKnap>
              <a
                href={`tel:${virksomhed.telefon.kald}`}
                className="inline-flex items-center gap-2 rounded-full border border-linje px-6 py-3 text-sm font-semibold text-krom hover:border-staal-lys"
              >
                📞 {virksomhed.telefon.visning}
              </a>
            </div>
          </Afsloer>
          <Afsloer delay={0.1}>
            <Billede
              navn="tekstur-hegn"
              variant="tekstur"
              alt="Byggehegn og projektørlys på en byggeplads om natten"
              ratio="4:5"
              prioritet
              className="mx-auto max-w-md lg:max-w-none"
            />
          </Afsloer>
        </div>
      </section>

      {/* Lag på lag */}
      <section className="border-t border-linje bg-ink-2 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Afsloer className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-krom sm:text-4xl">
              Byggepladssikring lag på lag
            </h2>
            <p className="mt-4 text-staal-lys">
              Intet enkelt tiltag sikrer en byggeplads alene. Jo flere lag, jo
              sværere er det for tyven — og jo hurtigere opdages en hændelse.
            </p>
          </Afsloer>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lag.map((l, i) => (
              <Afsloer
                as="article"
                key={l.titel}
                delay={(i % 3) * 0.05}
                className="rounded-2xl border border-linje bg-ink p-6"
              >
                <h3 className="text-lg font-bold text-krom">{l.titel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-staal-lys">
                  {l.tekst}
                </p>
              </Afsloer>
            ))}
          </div>
        </div>
      </section>

      {/* Kamera vs. vagt */}
      <section className="border-t border-linje bg-ink py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Afsloer className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-krom sm:text-4xl">
              Kameraovervågning eller fysisk byggepladsvagt?
            </h2>
            <p className="mt-4 text-staal-lys">
              Begge dele har styrker. Kameraer er gode til at dække store arealer
              og dokumentere; en vagt er god til at reagere, opdage brand og
              styre adgangen. På mange pladser er kombinationen den mest
              robuste løsning. Vi leverer den fysiske del og arbejder gerne
              sammen med din leverandør af teknisk overvågning.
            </p>
          </Afsloer>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-linje">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                Sammenligning af kameraovervågning og fysisk vagt på byggepladser
              </caption>
              <thead className="bg-ink-2 text-krom">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Kriterie</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Kameraovervågning</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Fysisk vagt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linje text-staal-lys">
                {sammenligning.map((r) => (
                  <tr key={r.kriterie}>
                    <th scope="row" className="px-5 py-4 font-semibold text-krom">
                      {r.kriterie}
                    </th>
                    <td className="px-5 py-4">{r.kamera}</td>
                    <td className="px-5 py-4">{r.vagt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-staal">
            Kameraovervågning af byggepladser er omfattet af databeskyttelsesreglerne
            og reglerne om tv-overvågning — bl.a. skal der skiltes, og lyd må som
            udgangspunkt ikke optages. Dansk Industri har udgivet en vejledning om
            kameraovervågning på byggepladser. Læs mere i{" "}
            <Link href="/blog/kameraovervaagning-eller-fysisk-vagt-paa-byggepladsen" className="text-krom underline hover:text-accent">
              vores guide til kamera eller vagt
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Døgnet rundt */}
      <section className="border-t border-linje bg-ink-2 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Afsloer>
            <h2 className="text-3xl font-extrabold tracking-tight text-krom">
              Sådan sikrer du en byggeplads døgnet rundt
            </h2>
            <div className="mt-6 space-y-5 text-staal-lys">
              <div>
                <h3 className="font-bold text-krom">Dag: adgangskontrol</h3>
                <p className="mt-1">
                  En{" "}
                  <Link href="/vi-tilbyder/portvagt-stationaer-vagt" className="text-krom underline hover:text-accent">
                    portvagt
                  </Link>{" "}
                  kontrollerer medarbejdere, underentreprenører og leverandører,
                  registrerer køretøjer og holder uvedkommende ude.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-krom">Aften og nat: vagt eller rundering</h3>
                <p className="mt-1">
                  En{" "}
                  <Link href="/vi-tilbyder/byggepladsvagt" className="text-krom underline hover:text-accent">
                    byggepladsvagt
                  </Link>{" "}
                  giver fast tilstedeværelse i de mest udsatte timer, mens{" "}
                  <Link href="/vi-tilbyder/runderingsvagt" className="text-krom underline hover:text-accent">
                    runderingsvagt
                  </Link>{" "}
                  med skiftende tidspunkter er et omkostningseffektivt alternativ
                  på mindre udsatte pladser.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-krom">Weekend, helligdage og ferier</h3>
                <p className="mt-1">
                  Når pladsen står tom i flere dage i træk, stiger risikoen. Planlæg
                  ekstra dækning hen over weekender, påske, sommerferie og jul.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-krom">Efter varmt arbejde: brandvagt</h3>
                <p className="mt-1">
                  Gnister fra svejsning og skæring kan ulme i timevis. En{" "}
                  <Link href="/vi-tilbyder/brandvagt" className="text-krom underline hover:text-accent">
                    brandvagt
                  </Link>{" "}
                  holder øje, efter at håndværkerne er gået.
                </p>
              </div>
            </div>
          </Afsloer>
          <Afsloer delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-krom">
              Sikring i byggeriets faser
            </h2>
            <ol className="mt-6 space-y-4">
              {faser.map((f, i) => (
                <li key={f.fase} className="rounded-2xl border border-linje bg-ink p-5">
                  <h3 className="font-bold text-krom">
                    <span className="text-accent">{i + 1}.</span> {f.fase}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-staal-lys">{f.tekst}</p>
                </li>
              ))}
            </ol>
          </Afsloer>
        </div>
      </section>

      {/* Mistænkelig aktivitet */}
      <section className="border-t border-linje bg-ink py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Afsloer>
            <h2 className="text-3xl font-extrabold tracking-tight text-krom">
              Hvad gør vagten ved mistænkelig aktivitet?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-staal-lys">
              <p>
                En vagt har ikke politimyndighed. Vagtens styrke er at være til
                stede, opdage tidligt og handle efter en fast, aftalt procedure:
                observere og dokumentere, gøre sig synlig, kontakte kunden,
                alarmcentralen eller politiet afhængigt af situationen — og
                sikre stedet, indtil hjælpen er fremme.
              </p>
              <p>
                Inden opstart aftaler vi, hvem der kontaktes hvornår, hvordan
                hændelser rapporteres, og hvilke områder der har særligt fokus.
                Efter hver vagt eller runde får du en rapport, så du har overblik
                over, hvad der er sket på pladsen.
              </p>
            </div>
          </Afsloer>
        </div>
      </section>

      <SeoSektion
        overskrift="Byggepladssikring med et autoriseret vagtselskab"
        afsnit={[
          "MT Vagt er et autoriseret vagtselskab med base i Taulov ved Fredericia. Vi leverer den fysiske del af byggepladssikringen — byggepladsvagt, runderingsvagt, portvagt med adgangskontrol og brandvagt — til entreprenører, bygherrer og byggeledere i trekantsområdet, på Fyn og i resten af Danmark.",
          "Alt personale er vagtuddannet, sikkerhedsgodkendt af danske myndigheder og bærer legitimationskort udstedt af Rigspolitiet. Vores vagter kan yde førstehjælp og betjene hjertestarter. Vi er ISO-certificeret og medlem af VSL og Dansk Industri.",
          "Har du allerede kameraer eller alarm på pladsen, tilpasser vi vagtopgaven, så den supplerer den tekniske løsning i stedet for at dublere den. Kontakt os for en uforpligtende vurdering af din byggeplads.",
        ]}
        faq={[
          {
            spoergsmaal: "Hvad er den bedste sikring mod tyveri på byggepladser?",
            svar: "Der er ikke ét bedste tiltag. Den mest robuste løsning kombinerer mekanisk sikring, orden og registrering, belysning, teknisk overvågning og — i de mest udsatte timer — en fysisk vagt, der kan reagere med det samme.",
          },
          {
            spoergsmaal: "Kan kameraovervågning erstatte en fysisk vagt?",
            svar: "Delvist. Kameraer dokumenterer og kan udløse alarm, men de griber ikke selv ind, opdager sjældent begyndende brand og kan ikke styre adgangen. På mange pladser giver kombinationen af kamera og vagt den bedste sikkerhed.",
          },
          {
            spoergsmaal: "Hvornår er fysisk adgangskontrol nødvendig?",
            svar: "Når der er mange underentreprenører og leverandører, når der er krav om registrering af, hvem der er på pladsen, eller når værdifuldt materiel leveres og opbevares løbende.",
          },
          {
            spoergsmaal: "Hvad koster byggepladssikring?",
            svar: "Det afhænger af pladsens størrelse, antal timer med vagt, tidspunkter (nat, weekend, helligdag), varighed og hvilke lag der kombineres. Vi giver et konkret tilbud ud fra din plads.",
          },
          {
            spoergsmaal: "Hvordan får man døgnvagt på en byggeplads?",
            svar: `Kontakt et autoriseret vagtselskab med pladsens adresse, periode og ønsker. Hos MT Vagt kan du ringe på ${virksomhed.telefon.visning} — så aftaler vi bemanding, procedurer og opstart.`,
          },
        ]}
      />

      <CtaBaand overskrift="Skal din byggeplads sikres?" />
    </>
  );
}
