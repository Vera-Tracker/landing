"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    title: "Lived experience",
    body: "Built by people with personal experience managing chronic digestive health conditions.",
    icon: (
      <path d="M12 21s-7-4.4-7-10a4 4 0 017-2.7A4 4 0 0119 11c0 5.6-7 10-7 10z" />
    ),
  },
  {
    title: "Patient-focused",
    body: "Designed around the daily reality of living with IBD — not hospital workflows.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
      </>
    ),
  },
  {
    title: "Privacy-first",
    body: "Your health data is sensitive. We treat it that way, with a privacy-first approach.",
    icon: (
      <>
        <rect x="6" y="10" width="12" height="10" rx="2" />
        <path d="M9 10V7a3 3 0 016 0v3" />
      </>
    ),
  },
  {
    title: "Supports your care team",
    body: "Vera helps you prepare for appointments. It does not replace healthcare professionals.",
    icon: (
      <>
        <path d="M8 12h8M12 8v8" />
        <circle cx="12" cy="12" r="8" />
      </>
    ),
  },
];

export function Trust() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-vera-mist-blue py-20 sm:py-28" id="trust">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,112,72,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-vera-green">
            Trust
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vera-ink sm:text-4xl">
            A companion you can rely on
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-vera-muted">
            Understand your health better between appointments — with clarity,
            care, and respect for your clinicians.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-[1.5rem] bg-white/80 p-5 shadow-[0_16px_40px_-28px_rgba(47,85,53,0.4)] ring-1 ring-vera-border/70 backdrop-blur"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-vera-green-soft text-vera-green">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {pillar.icon}
                </svg>
              </div>
              <h3 className="text-base font-semibold text-vera-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vera-muted">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
