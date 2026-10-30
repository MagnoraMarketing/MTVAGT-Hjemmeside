import { virksomhed } from "@/content/virksomhed";
import { ydelser } from "@/content/ydelser";
import { SITE, absolutUrl } from "@/lib/site";

// Generisk JSON-LD-udskriver.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// LocalBusiness + SecurityService for hele sitet. Udskrives i root-layoutet,
// så "@id"-referencen fra Service- og Article-markup kan slås op på alle sider.
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService", "Organization"],
    "@id": `${SITE.url}/#organisation`,
    name: virksomhed.navn,
    alternateName: virksomhed.kortNavn,
    description: virksomhed.daekningSaetning,
    url: SITE.url,
    logo: absolutUrl("/img/mtvagt-skjold.png"),
    image: absolutUrl("/opengraph-image"),
    telephone: virksomhed.telefon.kald,
    sameAs: [virksomhed.facebook],
    knowsAbout: [
      ...ydelser.map((y) => y.titel),
      "Byggepladssikring",
      "Adgangskontrol",
      "Vagtloven",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vagtydelser",
      itemListElement: ydelser.map((y) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: y.titel,
          url: absolutUrl(`/vi-tilbyder/${y.slug}`),
        },
      })),
    },
    vatID: `DK${virksomhed.cvr}`,
    taxID: virksomhed.cvr,
    areaServed: [
      { "@type": "Country", name: "Danmark" },
      ...virksomhed.daekning
        .filter((by) => by !== "Hele Danmark")
        .map((by) => ({ "@type": "City", name: by })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: virksomhed.adresse.gade,
      postalCode: virksomhed.adresse.postnr,
      addressLocality: virksomhed.adresse.by,
      addressCountry: "DK",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    slogan: virksomhed.slogan,
    memberOf: [
      { "@type": "Organization", name: "VSL", url: virksomhed.autorisation.vslUrl },
      {
        "@type": "Organization",
        name: "Dansk Industri",
        url: virksomhed.autorisation.diUrl,
      },
    ],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: virksomhed.navn,
    alternateName: virksomhed.kortNavn,
    inLanguage: SITE.sprog,
    publisher: { "@id": `${SITE.url}/#organisation` },
  };
}

export function breadcrumbLd(dele: { navn: string; sti: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: dele.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.navn,
      item: absolutUrl(d.sti),
    })),
  };
}

export function faqLd(faq: { spoergsmaal: string; svar: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.spoergsmaal,
      acceptedAnswer: { "@type": "Answer", text: f.svar },
    })),
  };
}
