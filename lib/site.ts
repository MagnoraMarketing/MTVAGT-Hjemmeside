import type { Metadata } from "next";
import { virksomhed } from "@/content/virksomhed";

// Central site-konfiguration.
export const SITE = {
  url: "https://mtvagt.dk",
  navn: virksomhed.navn,
  kortNavn: virksomhed.kortNavn,
  sprog: "da-DK",
  locale: "da_DK",
};

export function absolutUrl(sti = "/"): string {
  return new URL(sti, SITE.url).toString();
}

// Rod-layoutets metadata-template tilføjer selv " | MT Vagt" til enhver
// side-titel. Content-titler (seoTitel) ender ofte allerede på "| MT Vagt"
// for at læse godt alene i fx et link — denne funktion fjerner suffikset,
// så det ikke bliver dublet i <title>-taggen.
export function siteTitel(titel: string): string {
  return titel.replace(/\s*\|\s*MT Vagt\s*$/i, "");
}

// Fælles metadata for en side: titel, beskrivelse, canonical samt Open Graph-
// og Twitter-kort. Sætter twitter eksplicit, ellers arves forsidens
// titel/beskrivelse fra root-layoutet ved deling.
export function sideMetadata({
  titel,
  beskrivelse,
  sti,
  billede = "/opengraph-image",
}: {
  titel: string;
  beskrivelse: string;
  sti: string;
  billede?: string;
}): Metadata {
  const fuldTitel = `${siteTitel(titel)} | ${SITE.kortNavn}`;
  return {
    title: siteTitel(titel),
    description: beskrivelse,
    alternates: { canonical: sti },
    openGraph: {
      title: fuldTitel,
      description: beskrivelse,
      url: absolutUrl(sti),
      images: [{ url: billede, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fuldTitel,
      description: beskrivelse,
    },
  };
}
