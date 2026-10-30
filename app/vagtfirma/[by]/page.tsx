import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { byer, byBySlug } from "@/content/byer";
import { ydelseBySlug } from "@/content/ydelser";
import { virksomhed } from "@/content/virksomhed";
import { Billede } from "@/components/Billede";
import { Broedkrumme } from "@/components/Broedkrumme";
import { Afsloer } from "@/components/Sektion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBaand } from "@/components/CtaBaand";
import { MagnetiskKnap } from "@/components/MagnetiskKnap";
import { JsonLd, faqLd } from "@/components/JsonLd";
import { SITE, absolutUrl, sideMetadata } from "@/lib/site";
import { BILLEDER } from "@/lib/billed-manifest";

export function generateStaticParams() {
  return byer.map((b) => ({ by: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ by: string }>;
}): Promise<Metadata> {
  const { by } = await params;
  const b = byBySlug(by);
  if (!b) return {};
  return sideMetadata({
    titel: b.seoTitel,
    beskrivelse: b.seoBeskrivelse,
    sti: `/vagtfirma/${b.slug}`,
    billede: BILLEDER[b.billede],
  });
}

export default async function BySide({
  params,
}: {
  params: Promise<{ by: string }>;
}) {
  const { by } = await params;
  const b = byBySlug(by);
  if (!b) notFound();

  const fokus = b.fokus
    .map((f) => ({ ...f, ydelse: ydelseBySlug(f.slug) }))
    .filter((f) => f.ydelse);
  const andreByer = byer.filter((x) => x.slug !== b.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Vagtservice i ${b.navn}`,
    serviceType: "Vagtservice",
    description: b.kortSvar,
    provider: { "@id": `${SITE.url}/#organisation` },
    areaServed: { "@type": "City", name: b.navn },
    url: absolutUrl(`/vagtfirma/${b.slug}`),
  };

  return (
    <>
      <JsonLd data={serviceLd} />

      <section className="relative overflow-hidden bg-ink pt-28 pb-16">
        <div aria-hidden className="gitter absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Afsloer>
            <Broedkrumme
              dele={[
                { navn: "Forside", sti: "/" },
                { navn: "Områder", sti: "/vagtfirma" },
                { navn: b.navn, sti: `/vagtfirma/${b.slug}` },
              ]}
            />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-krom sm:text-5xl">
              {b.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-staal-lys">
              {b.kortSvar}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagnetiskKnap href="/kontakt">Få et tilbud</MagnetiskKnap>
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
              navn={b.billede}
              variant={b.billedVariant}
              alt={`Vagt fra MT Vagt på opgave i ${b.navn}-området`}
              ratio="4:5"
              prioritet
              className="mx-auto max-w-md lg:max-w-none"
            />
          </Afsloer>
        </div>
      </section>

      <section className="border-t border-linje bg-ink-2 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          {b.afsnit.map((a, i) => (
            <Afsloer
              as="article"
              key={a.overskrift}
              delay={i * 0.08}
              className="rounded-3xl border border-linje bg-ink p-8"
            >
              <h2 className="text-2xl font-extrabold tracking-tight text-krom sm:text-3xl">
                {a.overskrift}
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-staal-lys">
                {a.tekst.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </Afsloer>
          ))}
        </div>
      </section>

      <section className="border-t border-linje bg-ink py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Afsloer className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-krom">
              Vagtløsninger i {b.navn}
            </h2>
            <p className="mt-4 text-staal-lys">
              Alle vores ydelser kan leveres i {b.navn}. Disse er de mest
              efterspurgte i området.
            </p>
          </Afsloer>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {fokus.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/vi-tilbyder/${f.slug}`}
                  className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-linje bg-ink-2 p-6 transition-colors hover:border-staal"
                >
                  <div>
                    <h3 className="font-semibold text-krom">
                      {f.ydelse!.titel} i {b.navn}
                    </h3>
                    <p className="mt-1 text-sm text-staal-lys">{f.hvorfor}</p>
                  </div>
                  <span className="text-accent transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-linje bg-ink-2 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Afsloer>
            <h2 className="text-3xl font-extrabold tracking-tight text-krom">
              Derfor vælger virksomheder i {b.navn} MT Vagt
            </h2>
            <ul className="mt-6 space-y-3 text-staal-lys">
              <li>✓ Autoriseret vagtselskab. {virksomhed.autorisation.rigspoliti}</li>
              <li>✓ Alt personale er vagtuddannet og sikkerhedsgodkendt af danske myndigheder</li>
              <li>✓ {virksomhed.autorisation.foerstehjaelp}</li>
              <li>✓ ISO-certificeret og medlem af VSL og Dansk Industri</li>
              <li>✓ Døgnberedskab og fleksibel bemanding — også med kort varsel</li>
            </ul>
            <p className="mt-6 text-sm text-staal">
              Se også{" "}
              <Link href="/byggepladssikring" className="text-krom underline hover:text-accent">
                vores guide til byggepladssikring
              </Link>{" "}
              og{" "}
              <Link href="/blog/hvad-koster-en-byggepladsvagt" className="text-krom underline hover:text-accent">
                hvad en byggepladsvagt koster
              </Link>
              .
            </p>
          </Afsloer>
          <Afsloer delay={0.1}>
            <h2 className="text-2xl font-bold text-krom">
              Spørgsmål om vagt i {b.navn}
            </h2>
            <div className="mt-6">
              <FaqAccordion faq={b.faq} />
            </div>
            <JsonLd data={faqLd(b.faq)} />
          </Afsloer>
        </div>
      </section>

      <section className="border-t border-linje bg-ink py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-lg font-bold text-krom">Vi dækker også</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {andreByer.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/vagtfirma/${x.slug}`}
                  className="inline-block rounded-full border border-linje px-4 py-2 text-sm text-staal-lys hover:border-staal hover:text-krom"
                >
                  Vagtfirma i {x.navn}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBaand overskrift={`Skal du bruge en vagt i ${b.navn}?`} />
    </>
  );
}
