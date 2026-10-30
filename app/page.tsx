import type { Metadata } from "next";
import { sideMetadata } from "@/lib/site";
import { CinematiskHero } from "@/components/CinematiskHero";
import { TillidsBjaelke } from "@/components/TillidsBjaelke";
import { FastlaasteYdelser } from "@/components/FastlaasteYdelser";
import { DaekningsKort } from "@/components/DaekningsKort";
import { CtaBaand } from "@/components/CtaBaand";
import { SeoSektion } from "@/components/SeoSektion";

export const metadata: Metadata = {
  ...sideMetadata({
    titel: "Autoriseret vagtfirma & vagtservice i Danmark",
    beskrivelse:
      "MT Vagt er et autoriseret vagtfirma med base i Fredericia: byggepladsvagt, brandvagt, runderingsvagt, portvagt og akut vagt døgnet rundt — trekantsområdet og hele Danmark. Ring +45 3131 4428.",
    sti: "/",
  }),
  // Root-layoutets title-template gælder ikke forsiden selv — sæt hele titlen.
  title: { absolute: "MT Vagt — autoriseret vagtfirma & vagtservice i Danmark" },
};

export default function Forside() {
  return (
    <>
      <CinematiskHero />
      <TillidsBjaelke />
      <FastlaasteYdelser />
      <DaekningsKort />

      <SeoSektion
        overskrift="Autoriseret vagtselskab i Fredericia og trekantsområdet"
        afsnit={[
          "MT Vagt & Vikarservice ApS er et autoriseret vagtselskab med base i Taulov ved Fredericia. Vi har ekspertise i hele Danmark og skaber tryghed døgnet rundt — med hovedfokus på trekantsområdet (Fredericia, Kolding, Vejle og Odense) — for virksomheder, entreprenører, boligselskaber, foreninger og den offentlige sektor. Uanset om du har brug for byggepladsvagt, runderingsvagt, portvagt, akut vagt, butiksvagt, tryghedsvagt, fastvagt eller kommunevagt, løser vi opgaven efter høj standard.",
          "Autorisationen er din garanti for kvalitet. Alt vores personale er vagtuddannet, sikkerhedsgodkendt af danske myndigheder og godkendt til at arbejde under vagtloven. Alle vagter bærer legitimationskort udstedt af Rigspolitiet, kan yde førstehjælp og betjene hjertestarter. Vi er ISO-certificeret og medlem af VSL og Dansk Industri. Et autoriseret vagtselskab er din garanti for, at opgaven ikke løses af amatører.",
          "Vi stræber ikke efter at blive de største i branchen, men vi sætter en ære i at løse alle opgaver efter høj standard. Skal du bruge en pålidelig vagtpartner i trekantsområdet, så ring til os på +45 3131 4428 for en uforpligtende snak — også ved akutte behov, hvor vi rykker hurtigt ud.",
        ]}
        faq={[
          {
            spoergsmaal: "Hvilke områder dækker MT Vagt?",
            svar: "Vi har base i Taulov ved Fredericia og dækker hele Danmark med hovedfokus på trekantsområdet, herunder Fredericia, Kolding, Vejle og Odense — døgnet rundt.",
          },
          {
            spoergsmaal: "Er MT Vagt et autoriseret vagtselskab?",
            svar: "Ja. Vi er et autoriseret vagtselskab. Alt personale er vagtuddannet, sikkerhedsgodkendt og bærer legitimationskort udstedt af Rigspolitiet.",
          },
          {
            spoergsmaal: "Kan I rykke ud akut?",
            svar: "Ja. Vi tilbyder akut vagt med hurtig udrykning og bevogtning døgnet rundt i hele trekantsområdet.",
          },
          {
            spoergsmaal: "Hvordan får jeg et tilbud?",
            svar: "Ring til os på +45 3131 4428 eller udfyld kontaktformularen, så vender vi tilbage med en løsning tilpasset din opgave.",
          },
        ]}
      />

      <CtaBaand />
    </>
  );
}
