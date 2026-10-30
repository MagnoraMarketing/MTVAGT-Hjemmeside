import type { Metadata } from "next";
import Link from "next/link";
import { byer } from "@/content/byer";
import { virksomhed } from "@/content/virksomhed";
import { Broedkrumme } from "@/components/Broedkrumme";
import { Afsloer } from "@/components/Sektion";
import { DaekningsKort } from "@/components/DaekningsKort";
import { SeoSektion } from "@/components/SeoSektion";
import { CtaBaand } from "@/components/CtaBaand";
import { sideMetadata } from "@/lib/site";

export const metadata: Metadata = sideMetadata({
  titel: "Vagtfirma i trekantsområdet, på Fyn og i hele Danmark",
  beskrivelse:
    "Find et autoriseret vagtfirma tæt på dig: MT Vagt dækker Fredericia, Kolding, Vejle, Middelfart, Odense og resten af Danmark fra vores base i Taulov. Ring +45 3131 4428.",
  sti: "/vagtfirma",
});

export default function Omraader() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 pb-16">
        <div aria-hidden className="gitter absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Broedkrumme
            dele={[
              { navn: "Forside", sti: "/" },
              { navn: "Områder", sti: "/vagtfirma" },
            ]}
          />
          <Afsloer className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Dækningsområde
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-krom sm:text-6xl">
              Vagtfirma i trekantsområdet og hele Danmark
            </h1>
            <p className="mt-6 text-lg text-staal-lys">
              {virksomhed.daekningSaetning} Vælg dit område og se, hvordan vi
              løser vagtopgaver lokalt.
            </p>
          </Afsloer>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {byer.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/vagtfirma/${b.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-linje bg-ink-2 p-6 transition-colors hover:border-staal"
                >
                  <h2 className="text-xl font-bold text-krom">
                    Vagtfirma i {b.navn}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-staal-lys">
                    {b.seoBeskrivelse.replace(/\s*Ring \+45.*$/, "")}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-krom">
                    Se {b.navn}{" "}
                    <span className="text-accent transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DaekningsKort />

      <SeoSektion
        overskrift="Lokalt forankret — landsdækkende leverance"
        afsnit={[
          "MT Vagt har base i Taulov ved Fredericia, midt i trekantsområdet. Det giver kort afstand til Fredericia, Kolding, Vejle og Middelfart og god forbindelse til Odense og resten af Fyn. Trekantsområdet og Fyn er vores hovedfokus — her kender vi erhvervsområderne, byggerierne og de lokale forhold.",
          "På flere opgavetyper — fx byggepladsvagt, brandvagt og fastvagt over en længere periode — løser vi også opgaver i resten af Danmark. Uanset hvor opgaven ligger, får du et autoriseret vagtselskab, hvor alt personale er vagtuddannet, sikkerhedsgodkendt og bærer legitimationskort udstedt af Rigspolitiet.",
        ]}
        faq={[
          {
            spoergsmaal: "Hvilke byer dækker MT Vagt?",
            svar: "Vi har hovedfokus på trekantsområdet og Fyn — bl.a. Fredericia, Kolding, Vejle, Middelfart og Odense — og løser også opgaver i resten af Danmark.",
          },
          {
            spoergsmaal: "Kan I tage opgaver uden for trekantsområdet?",
            svar: "Ja. På flere opgavetyper dækker vi hele Danmark. Kontakt os med adresse og opgave, så vurderer vi, hvordan vi bedst løser den.",
          },
          {
            spoergsmaal: "Hvor ligger MT Vagt?",
            svar: `Vores base ligger på ${virksomhed.adresse.gade}, ${virksomhed.adresse.postnr} ${virksomhed.adresse.by}.`,
          },
        ]}
      />

      <CtaBaand />
    </>
  );
}
