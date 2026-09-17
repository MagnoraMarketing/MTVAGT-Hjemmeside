import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Sidehoved } from "@/components/Sidehoved";
import { Sidefod } from "@/components/Sidefod";
import { RulleFremgang } from "@/components/RulleFremgang";
import { MobilRingBjaelke } from "@/components/MobilRingBjaelke";
import { GlatRul } from "@/components/GlatRul";
import { MuseLys } from "@/components/MuseLys";

// Grotesk til overskrifter
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// Læsevenlig sans til brødtekst
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mtvagt.dk"),
  title: {
    default: "MT Vagt — Autoriseret vagtselskab i Fredericia & trekantsområdet",
    template: "%s | MT Vagt",
  },
  description:
    "MT Vagt & Vikarservice ApS er et autoriseret vagtselskab i Fredericia med ekspertise i hele Danmark — hovedfokus på trekantsområdet. Byggepladsvagt, runderingsvagt, portvagt og mere. Døgnvagt.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "MT Vagt & Vikarservice ApS",
    // Arves af alle sider, der ikke selv sætter openGraph — sikrer et billede ved deling overalt.
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  // Lader Google vise store billed-previews og fulde snippets i resultaterne.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Twitter-kortet bruges af X, LinkedIn, Slack m.fl. ved deling.
  twitter: {
    card: "summary_large_image",
    title: "MT Vagt — Autoriseret vagtselskab i Fredericia & trekantsområdet",
    description:
      "Autoriseret vagtselskab med base i Taulov ved Fredericia. Byggepladsvagt, runderingsvagt, portvagt og mere — døgnet rundt.",
  },
};

// Farver browserens adresselinje på mobil i brandets nær-sorte base.
export const viewport: Viewport = {
  themeColor: "#0B0F14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="da"
      className={`${archivo.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-krom">
        <GlatRul />
        <MuseLys />
        <RulleFremgang />
        <Sidehoved />
        <main className="flex-1">{children}</main>
        <Sidefod />
        <MobilRingBjaelke />
      </body>
    </html>
  );
}
