# MT Vagt — mtvagt.dk

Markedsføringssite for **MT Vagt & Vikarservice ApS**, et autoriseret vagtselskab
med base i Taulov ved Fredericia. Bygget i Next.js (App Router) og deployet på
Vercel fra denne repos `main`-branch.

Live: [mtvagt.dk](https://mtvagt.dk)

## Kom i gang

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000).

| Kommando | Gør hvad |
|---|---|
| `npm run dev` | Udviklingsserver med hot reload |
| `npm run build` | Produktionsbuild (kører automatisk `billeder`-scriptet først) |
| `npm run start` | Kører et allerede bygget produktionsbuild lokalt |
| `npm run lint` | ESLint |
| `npm run billeder` | Genscanner `/public/img` og genererer `lib/billed-manifest.ts` |
| `npm run illustrationer` | Genererer illustrations-baggrunde og kører `billeder` bagefter |
| `npm run scrape` | Hjælpescript til at hente/sammenligne indhold fra den gamle side |

## Teknologi

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS 4**
- **next-mdx-remote** til blogindlæg skrevet i `.mdx` med frontmatter
- **Resend** (valgfrit) til afsendelse af kontaktformularen, med fallback til Web3Forms
- **Framer Motion** + **Lenis** til scroll-animationer og blødt scroll

## Indholdsstruktur

Alt tekstligt indhold ligger i `content/`, adskilt fra visningskomponenterne i
`components/` og siderne i `app/`. Det gør det muligt at opdatere tekst, priser
og fakta uden at røre layout eller design.

```
content/
├── virksomhed.ts       Firmaoplysninger (navn, adresse, CVR, telefon, autorisation)
├── ydelser.ts           De 9 ydelser under /vi-tilbyder/[slug]
├── ydelse-indhold.ts     Hero-billede, SEO-tekst og FAQ pr. ydelse
├── ydelse-seo.ts         2 ekstra SEO-sektioner pr. ydelse
├── anmeldelser.ts        Kundeanmeldelser (tom, indtil ægte anmeldelser findes)
├── blog.ts                Læser og parser blogindlæg fra content/blog/*.mdx
└── blog/*.mdx              Selve blogindlæggene (frontmatter + MDX-brødtekst)
```

### Tilføj en ny ydelse

1. Tilføj et objekt til `ydelser` i `content/ydelser.ts` (slug, titel, punkter, SEO-tekst).
2. Tilføj en matchende nøgle i `ydelseIndhold` i `content/ydelse-indhold.ts`
   (hero-billede, SEO-afsnit, FAQ).
3. Valgfrit: tilføj 1-2 ekstra SEO-sektioner i `ydelse-seo.ts`.

Siden på `/vi-tilbyder/<slug>`, `Service`-JSON-LD og `sitemap.xml` opdateres
automatisk — intet andet skal røres.

### Tilføj et nyt blogindlæg

Opret en `.mdx`-fil i `content/blog/` med samme frontmatter-format som de
eksisterende indlæg (se en vilkårlig fil for reference: `titel`, `seoTitel`,
`seoBeskrivelse`, `dato`, `kategori`, `tags`, `hero`, `ydelse`, `takeaway`,
`faq`). Slug er filnavnet. Indlægget dukker automatisk op i blogoversigten,
`sitemap.xml` og `feed.xml`.

**Ingen opfundne facts, tal, priser eller kundenavne** — al kopi skal kunne
stå for sig selv som sand. Er der ikke belæg for et tal eller en påstand, så
lad det være ude.

### Billeder

Læg billedet i `/public/img/<navn>.jpg` (eller `.webp`/`.png`/`.avif`) og kør
`npm run billeder`. Filen dukker automatisk op alle steder, der refererer til
`<navn>` som `heroBillede`/`hero` — `Billede`-komponenten viser en on-brand
gradient-placeholder, indtil et rigtigt billede med det navn findes.

## SEO

Sitet er bygget SEO-first, ikke tilføjet i efterhånden:

- **Structured data (JSON-LD):** `LocalBusiness`/`SecurityService`/`Organization`
  på forsiden, `Service` pr. ydelse, `Article`/`BlogPosting` pr. blogindlæg,
  `BreadcrumbList` og `FAQPage` hvor relevant.
- **`sitemap.xml`** og **`robots.txt`** genereres dynamisk (`app/sitemap.ts`,
  `app/robots.ts`) ud fra de samme datakilder som resten af sitet — nye
  ydelser og blogindlæg kommer automatisk med.
- **`feed.xml`** — RSS 2.0-feed over blogindlæg (`app/feed.xml/route.ts`),
  linket via `<link rel="alternate">` på blogoversigten.
- **Open Graph + Twitter cards** på alle sider, med sidespecifikt billede —
  blogindlæg bruger deres eget hero-foto, resten af sitet deler et genereret
  OG-billede (`app/opengraph-image.tsx`).
- **301-redirects** fra de gamle Joomla-URL'er til de nye stier (`next.config.ts`).
- Semantisk `<h1>`-`<h3>`-hierarki, beskrivende `alt`-tekster og `lang="da"`.

## Miljøvariabler

Ingen er påkrævet for at bygge eller køre sitet lokalt. Kontaktformularen
bruger følgende, hvis de er sat (ellers falder den tilbage til Web3Forms):

| Variabel | Bruges til |
|---|---|
| `RESEND_API_KEY` | Sender kontaktformularen via Resend (kræver verificeret afsenderdomæne) |
| `KONTAKT_MODTAGER` | Modtager-e-mail for henvendelser (falder ellers tilbage til info@mtvagt.dk) |
| `KONTAKT_AFSENDER` | Afsender-navn/e-mail ved Resend-afsendelse |
| `WEB3FORMS_KEY` | Fallback-formularlevering, hvis Resend ikke er konfigureret |

## Deployment

Sitet deployes automatisk til [Vercel](https://vercel.com) ved push til
`main`. `vercel.json` bruger standard Next.js-buildet (`next build`).
