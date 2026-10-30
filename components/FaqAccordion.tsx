"use client";

import { useId, useState } from "react";

export type Faq = { spoergsmaal: string; svar: string };

// Alle svar renderes altid i HTML'en (lukkede svar foldes blot sammen med CSS),
// så søgemaskiner og AI-crawlere kan læse hele FAQ'en uden at køre JavaScript.
export function FaqAccordion({ faq }: { faq: Faq[] }) {
  const [aaben, setAaben] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="divide-y divide-linje overflow-hidden rounded-2xl border border-linje">
      {faq.map((f, i) => {
        const erAaben = aaben === i;
        const svarId = `${id}-svar-${i}`;
        return (
          <div key={f.spoergsmaal}>
            <button
              type="button"
              onClick={() => setAaben(erAaben ? null : i)}
              aria-expanded={erAaben}
              aria-controls={svarId}
              className="flex w-full items-center justify-between gap-4 bg-ink px-5 py-4 text-left transition-colors hover:bg-ink-2"
            >
              <span className="font-semibold text-krom">{f.spoergsmaal}</span>
              <span
                className={`shrink-0 text-accent transition-transform ${
                  erAaben ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              id={svarId}
              className={`grid bg-ink transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                erAaben ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden" inert={!erAaben}>
                <p className="px-5 pb-5 text-staal-lys">{f.svar}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
