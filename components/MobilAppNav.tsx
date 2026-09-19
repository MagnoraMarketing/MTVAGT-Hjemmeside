"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { virksomhed } from "@/content/virksomhed";
import { cn } from "@/lib/utils";

// Fast bundmenu på mobil — gør sitet mere "app-agtigt" med faste faner til de
// vigtigste handlinger, i stedet for kun en hamburger-menu. Skjules på lg+.
const faner = [
  {
    href: "/",
    label: "Hjem",
    match: (sti: string) => sti === "/",
    ikon: (aktiv: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 11.5 12 4l8 7.5"
          stroke="currentColor"
          strokeWidth={aktiv ? 2.2 : 1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10v8.5a1 1 0 0 0 1 1h3.5v-5h3v5H17a1 1 0 0 0 1-1V10"
          stroke="currentColor"
          strokeWidth={aktiv ? 2.2 : 1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/vi-tilbyder",
    label: "Ydelser",
    match: (sti: string) => sti.startsWith("/vi-tilbyder"),
    ikon: (aktiv: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3.5 5 6.2v5c0 4.4 2.9 7.7 7 8.8 4.1-1.1 7-4.4 7-8.8v-5L12 3.5Z"
          stroke="currentColor"
          strokeWidth={aktiv ? 2.2 : 1.8}
          strokeLinejoin="round"
        />
        {aktiv && (
          <path
            d="m9.25 12.25 1.85 1.85 3.65-3.9"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    ),
  },
  {
    href: "/referencer",
    label: "Referencer",
    match: (sti: string) => sti.startsWith("/referencer"),
    ikon: (aktiv: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m12 4 2.2 4.6 5 .7-3.6 3.6.9 5-4.5-2.4L7.5 18l.9-5-3.6-3.6 5-.7L12 4Z"
          stroke="currentColor"
          strokeWidth={aktiv ? 2.2 : 1.8}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/kontakt",
    label: "Kontakt",
    match: (sti: string) => sti.startsWith("/kontakt"),
    ikon: (aktiv: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="4"
          y="5.5"
          width="16"
          height="13"
          rx="2.5"
          stroke="currentColor"
          strokeWidth={aktiv ? 2.2 : 1.8}
        />
        <path
          d="m5 7.5 6.4 5a1 1 0 0 0 1.2 0L19 7.5"
          stroke="currentColor"
          strokeWidth={aktiv ? 2.2 : 1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function MobilAppNav() {
  const sti = usePathname();

  return (
    <nav
      aria-label="Hovednavigation, mobil"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-linje bg-ink/90 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-5 items-stretch">
        {faner.map((f) => {
          const aktiv = f.match(sti);
          return (
            <Link
              key={f.href}
              href={f.href}
              aria-current={aktiv ? "page" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors",
                aktiv ? "text-krom" : "text-staal-lys"
              )}
            >
              {f.ikon(aktiv)}
              {f.label}
            </Link>
          );
        })}
        <a
          href={`tel:${virksomhed.telefon.kald}`}
          aria-label={`Ring ${virksomhed.telefon.visning}`}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold text-accent-klar"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.6 21.1 3 13.5 3 4.9c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          Ring
        </a>
      </div>
    </nav>
  );
}
