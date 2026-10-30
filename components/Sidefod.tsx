import Image from "next/image";
import Link from "next/link";
import { virksomhed } from "@/content/virksomhed";
import { ydelser } from "@/content/ydelser";
import { Logo } from "@/components/Logo";
import { EmailLink } from "@/components/EmailLink";
import { PopupLink } from "@/components/PopupLink";

export function Sidefod() {
  const aar = new Date().getFullYear();
  return (
    <footer className="border-t border-linje bg-ink pb-20 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-staal-lys">
            {virksomhed.slogan}. Autoriseret vagtselskab med base i{" "}
            {virksomhed.base}, der dækker {virksomhed.daekningBred} — med hovedfokus
            på {virksomhed.region}.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-staal-lys">
            På flere af vores opgavetyper dækker vi hele Danmark.{" "}
            <Link href="/kontakt" className="text-krom underline hover:text-accent">
              Kontakt os for et tilbud
            </Link>
            .
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-krom">
            Ydelser
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {ydelser.map((y) => (
              <li key={y.slug}>
                <Link
                  href={`/vi-tilbyder/${y.slug}`}
                  className="text-staal-lys transition-colors hover:text-krom"
                >
                  {y.titel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-krom">
            Selskab
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: "/om-mtvagt", t: "Om MT Vagt" },
              { href: "/referencer", t: "Referencer" },
              { href: "/blog", t: "Blog" },
              { href: "/ledige-stillinger", t: "Ledige stillinger" },
              { href: "/kontakt", t: "Kontakt" },
              { href: "/privatlivs-politik", t: "Privatlivspolitik" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-staal-lys transition-colors hover:text-krom"
                >
                  {l.t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-krom">
            Kontakt
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-staal-lys">
            <p>
              {virksomhed.adresse.gade}
              <br />
              {virksomhed.adresse.postnr} {virksomhed.adresse.by}
            </p>
            <p>CVR: {virksomhed.cvr}</p>
            <p>
              <a
                href={`tel:${virksomhed.telefon.kald}`}
                className="text-krom hover:text-accent"
              >
                {virksomhed.telefon.visning}
              </a>
            </p>
            <p>
              <EmailLink className="text-krom hover:text-accent" />
            </p>
          </address>
          <a
            href={virksomhed.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Følg MT Vagt på Facebook"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-linje text-staal-lys transition-colors hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
              <path d="M13.5 21v-7.5h2.55l.38-2.96H13.5V8.65c0-.86.24-1.44 1.47-1.44h1.57V4.56A21 21 0 0 0 14.25 4.44c-2.27 0-3.82 1.38-3.82 3.93v2.17H7.87v2.96h2.56V21h3.07Z" />
            </svg>
          </a>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-staal">
            <PopupLink
              href={virksomhed.autorisation.isoCertifikat}
              className="rounded-full border border-linje px-3 py-1 hover:text-krom"
              ariaLabel="Åbn ISO-certifikat i nyt vindue"
            >
              ISO-certifikat
            </PopupLink>
            <PopupLink
              href={virksomhed.autorisation.vslUrl}
              className="rounded-full border border-linje px-3 py-1 hover:text-krom"
              ariaLabel="Åbn vsl.dk i nyt vindue"
            >
              Medlem af VSL
            </PopupLink>
            <PopupLink
              href={virksomhed.autorisation.diBadge}
              className="flex items-center gap-1.5 rounded-full border border-linje py-1 pl-1 pr-3 hover:text-krom"
              ariaLabel="Åbn medlemsbevis for Dansk Industri i nyt vindue"
            >
              <Image
                src={virksomhed.autorisation.diMaerke}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 rounded-full object-cover"
              />
              Medlem af Dansk Industri
            </PopupLink>
          </div>
        </div>
      </div>

      <div className="border-t border-linje">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-staal sm:flex-row lg:px-8">
          <p>
            © {aar} {virksomhed.navn}. Alle rettigheder forbeholdes.
          </p>
          <p>Autoriseret vagtselskab · Døgnvagt · Tillid · Tryghed</p>
          <p>
            Made by{" "}
            <a
              href="https://magnoramarketing.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-staal-lys transition-colors hover:text-accent"
            >
              magnoramarketing.dk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
