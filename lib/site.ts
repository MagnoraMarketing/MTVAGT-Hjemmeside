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
