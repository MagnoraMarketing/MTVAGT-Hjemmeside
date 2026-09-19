"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Tæller kun for facts vi kan forsvare — ingen opfundne statistikker.
const fakta = [
  { tal: 24, suffix: "/7", tekst: "Døgndækning" },
  { tal: 100, suffix: "%", tekst: "Autoriserede vagter" },
  { tal: 8, suffix: "", tekst: "Vagtløsninger" },
  { tal: 5, suffix: "", tekst: "Byer i trekantsområdet" },
];

function Taeller({ til, suffix }: { til: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const iView = useInView(ref, { once: true, margin: "-40px" });
  const reducer = useReducedMotion();
  const [vaerdi, setVaerdi] = useState(reducer ? til : 0);

  useEffect(() => {
    if (!iView || reducer) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVaerdi(til);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const varighed = 1200;
    const tik = (nu: number) => {
      const p = Math.min((nu - start) / varighed, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVaerdi(Math.round(eased * til));
      if (p < 1) raf = requestAnimationFrame(tik);
    };
    raf = requestAnimationFrame(tik);
    return () => cancelAnimationFrame(raf);
  }, [iView, reducer, til]);

  return (
    <span ref={ref}>
      {vaerdi}
      {suffix}
    </span>
  );
}

export function TillidsBjaelke() {
  return (
    <section className="border-y border-linje bg-ink-2 py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-1 scrollbar-skjult md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {fakta.map((f) => (
            <div
              key={f.tekst}
              className="w-[38vw] shrink-0 snap-start rounded-2xl border border-linje bg-ink px-4 py-5 text-center md:w-auto md:shrink md:snap-none md:rounded-none md:border-0 md:bg-transparent md:px-4 md:py-0"
            >
              <div className="font-[family-name:var(--font-archivo)] text-3xl font-extrabold tracking-tight text-krom md:text-4xl lg:text-5xl">
                <Taeller til={f.tal} suffix={f.suffix} />
              </div>
              <div className="mt-1.5 text-xs text-staal-lys md:mt-2 md:text-sm">
                {f.tekst}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
