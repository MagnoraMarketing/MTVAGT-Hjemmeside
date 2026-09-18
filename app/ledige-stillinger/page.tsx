import type { Metadata } from "next";
import Link from "next/link";
import { virksomhed } from "@/content/virksomhed";
import { ydelser, ydelseBySlug } from "@/content/ydelser";
import { Broedkrumme } from "@/components/Broedkrumme";
import { Afsloer } from "@/components/Sektion";
import { MagnetiskKnap } from "@/components/MagnetiskKnap";
import { EmailLink } from "@/components/EmailLink";
import { SeoSektion } from "@/components/SeoSektion";

export const metadata: Metadata = {
  title: "Ledige stillinger — bliv vagt i trekantsområdet",
  description:
    "Søg job som vagt i trekantsområdet — fra brandvagt til byggepladsvagt, rundering og portvagt. Autoriseret vagtselskab i Fredericia. Send en uopfordret ansøgning.",
  alternates: { canonical: "/ledige-stillinger" },
};

// Brandvagt er det primære fokusområde for jobsiden; resten af ydelserne
// vises som sekundære jobmuligheder herunder.
const brandvagt = ydelseBySlug("brandvagt")!;
const andreYdelser = ydelser.filter((y) => y.slug !== "brandvagt");

const forventninger = [
  "Du er ansvarsbevidst, mødestabil og har en professionel fremtoning",
  "Du kan bevare roen og håndtere konflikter respektfuldt",
  "Du har rent straffeattest og kan sikkerhedsgodkendes",
  "Du er fleksibel og indstillet på arbejde uden for normal arbejdstid",
  "Vagtuddannelse og kørekort er en fordel",
];

export default function JobSide() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 pb-16">
        <div aria-hidden className="gitter absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Broedkrumme
            dele={[
              { navn: "Forside", sti: "/" },
              { navn: "Ledige stillinger", sti: "/ledige-stillinger" },
            ]}
          />
          <Afsloer className="mt-6 max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-krom sm:text-6xl">
              Bliv en del af holdet
            </h1>
            <p className="mt-6 text-lg text-staal-lys">
              Vi er altid interesserede i at høre fra dygtige, ansvarsbevidste
              mennesker, der vil være med til at skabe tryghed i {virksomhed.region}.
            </p>
          </Afsloer>
        </div>
      </section>

      <section className="bg-ink pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Afsloer className="rounded-2xl border border-linje bg-ink-2 p-8">
            <h2 className="text-2xl font-bold text-krom">Hvad vi forventer</h2>
            <ul className="mt-6 space-y-3">
              {forventninger.map((f) => (
                <li key={f} className="flex items-start gap-3 text-staal-lys">
                  <span className="mt-0.5 text-accent" aria-hidden>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Afsloer>

          <Afsloer delay={0.1} className="rounded-2xl border border-linje bg-ink-2 p-8">
            <h2 className="text-2xl font-bold text-krom">Sådan søger du</h2>
            <p className="mt-4 text-staal-lys">
              Vi modtager gerne uopfordrede ansøgninger. Send os din ansøgning og
              dit CV, så kontakter vi dig, hvis der er et match. Fortæl gerne, hvor i{" "}
              {virksomhed.region} du bor, og hvad du kan tilbyde.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <MagnetiskKnap href="/kontakt">Send ansøgning</MagnetiskKnap>
              <p className="text-sm text-staal-lys">
                Eller skriv direkte til{" "}
                <EmailLink
                  className="text-krom underline hover:text-accent"
                  emne="Ansøgning — ledig stilling"
                />
              </p>
              <p className="text-sm text-staal-lys">
                Spørgsmål? Ring til os på{" "}
                <a
                  href={`tel:${virksomhed.telefon.kald}`}
                  className="text-krom hover:text-accent"
                >
                  {virksomhed.telefon.visning}
                </a>
              </p>
            </div>
          </Afsloer>
        </div>
      </section>

      {/* Job inden for vores ydelser — brandvagt i fokus, resten af ydelserne herunder */}
      <section className="border-t border-linje bg-ink-2 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Afsloer className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Jobmuligheder
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-krom sm:text-4xl">
              Job inden for vores ydelser
            </h2>
            <p className="mt-4 text-staal-lys">
              Vi ansætter løbende til alle vores vagtområder. Lige nu søger vi
              især engagerede brandvagter — men vi hører også gerne fra dig,
              hvis en af vores andre ydelser matcher bedre.
            </p>
          </Afsloer>

          {/* Brandvagt — featured */}
          <Afsloer
            delay={0.1}
            className="dybde-3d mt-10 rounded-3xl border border-linje bg-ink p-8 lg:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              I fokus
            </span>
            <h3 className="mt-2 text-2xl font-bold text-krom">
              Job som brandvagt
            </h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-staal-lys">
              {brandvagt.intro} Som brandvagt hos MT Vagt får du et
              ansvarsfuldt job, hvor du holder øje med brandrisikoen under og
              efter varmt arbejde som svejsning, skæring og tagarbejde, samt
              ved events og arrangementer i hele {virksomhed.region}. Du skal
              kunne bevare overblikket, reagere hurtigt og følge en fast
              procedure, hvis der opstår gnister, ulmebrand eller
              røgudvikling.
            </p>
            <Link
              href="/vi-tilbyder/brandvagt"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-krom hover:text-accent"
            >
              Læs mere om brandvagt
              <span className="text-accent" aria-hidden>
                →
              </span>
            </Link>
          </Afsloer>

          {/* Øvrige ydelser */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {andreYdelser.map((y, i) => (
              <Afsloer
                key={y.slug}
                delay={(i % 3) * 0.05}
                className="rounded-2xl border border-linje bg-ink p-6"
              >
                <h3 className="text-lg font-bold text-krom">
                  Job som {y.titel.toLowerCase()}
                </h3>
                <p className="mt-2 text-sm text-staal-lys">{y.kerne}</p>
                <Link
                  href={`/vi-tilbyder/${y.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-krom hover:text-accent"
                >
                  Læs mere
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                </Link>
              </Afsloer>
            ))}
          </div>
        </div>
      </section>

      <SeoSektion
        overskrift="Job som vagt i trekantsområdet"
        afsnit={[
          "Drømmer du om et job, hvor du gør en reel forskel for andres tryghed? Som vagt hos MT Vagt bliver du en del af et autoriseret vagtselskab, der løser opgaver efter høj standard i hele trekantsområdet – fra brandvagt og byggepladsvagt til rundering, port-, service- og tryghedsvagt. Vi har base i Taulov ved Fredericia og arbejder i og omkring Fredericia, Kolding, Vejle og Odense.",
          "Vi lægger vægt på professionalisme, ansvarlighed og en ordentlig tilgang til mennesker. Alt personale skal kunne sikkerhedsgodkendes af myndighederne og arbejde inden for vagtloven. Vagtuddannelse og førstehjælp er en naturlig del af arbejdet, og har du det ikke på plads endnu, ser vi gerne, at du er indstillet på at få det.",
          "Vi ansætter løbende, når de rigtige folk melder sig. Send os derfor gerne en uopfordret ansøgning – også selv om du ikke ser en konkret stilling opslået lige nu. Fortæl os, hvem du er, og hvad du kan, så tager vi fat i dig, hvis der er et match.",
        ]}
        faq={[
          {
            spoergsmaal: "Skal jeg have en vagtuddannelse for at søge?",
            svar: "Vagtuddannelse er en fordel, men fortæl os om din baggrund uanset hvad. Du skal kunne sikkerhedsgodkendes og arbejde inden for vagtloven.",
          },
          {
            spoergsmaal: "Kan jeg søge specifikt som brandvagt?",
            svar: "Ja. Vi søger løbende brandvagter til opgaver ved varmt arbejde, byggepladser og events. Skriv i din ansøgning, at det er brandvagt, du er interesseret i.",
          },
          {
            spoergsmaal: "Kan jeg sende en uopfordret ansøgning?",
            svar: "Ja. Vi modtager gerne uopfordrede ansøgninger og kontakter dig, hvis der er et match.",
          },
          {
            spoergsmaal: "Hvor arbejder jeg som vagt hos jer?",
            svar: "Vi løser opgaver i hele trekantsområdet og på Fyn med base i Taulov ved Fredericia.",
          },
        ]}
      />
    </>
  );
}
