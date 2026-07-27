"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    title: "Triggers are personal",
    body: "A food or habit that flares one person may not affect another. IBD is highly individualized.",
    graphic: (
      <svg viewBox="0 0 120 80" className="h-16 w-24" aria-hidden>
        <circle cx="36" cy="40" r="22" className="fill-vera-green/15 stroke-vera-green/40" strokeWidth="1.5" />
        <circle cx="84" cy="40" r="22" className="fill-vera-green/10 stroke-vera-green/30" strokeWidth="1.5" />
        <path d="M52 40h16" className="stroke-vera-green/50" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M30 34c4 2 8 2 12 0M78 46c4-2 8-2 12 0" className="stroke-vera-green" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Tracking is hard",
    body: "Patients often rely on memory or scattered notes, making patterns nearly impossible to see.",
    graphic: (
      <svg viewBox="0 0 120 80" className="h-16 w-24" aria-hidden>
        <rect x="18" y="18" width="34" height="44" rx="6" className="fill-white stroke-vera-green/35" strokeWidth="1.5" transform="rotate(-8 35 40)" />
        <rect x="48" y="14" width="34" height="44" rx="6" className="fill-vera-green-soft stroke-vera-green/40" strokeWidth="1.5" transform="rotate(6 65 36)" />
        <rect x="72" y="22" width="28" height="36" rx="5" className="fill-white stroke-vera-green/30" strokeWidth="1.5" transform="rotate(14 86 40)" />
        <path d="M56 30h16M56 38h12M56 46h14" className="stroke-vera-green/55" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Support gaps between visits",
    body: "Appointments are limited. Doctors see snapshots — patients need continuity in between.",
    graphic: (
      <svg viewBox="0 0 120 80" className="h-16 w-24" aria-hidden>
        <circle cx="28" cy="40" r="10" className="fill-vera-green/20 stroke-vera-green" strokeWidth="1.5" />
        <circle cx="92" cy="40" r="10" className="fill-vera-green/20 stroke-vera-green" strokeWidth="1.5" />
        <path d="M40 40h12" className="stroke-vera-green" strokeWidth="2" strokeLinecap="round" />
        <path d="M68 40h12" className="stroke-vera-green" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="40" r="7" className="fill-white stroke-vera-border" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M54 40h12" className="stroke-vera-muted/50" strokeWidth="1.5" strokeDasharray="2 3" />
      </svg>
    ),
  },
];

export function Problem() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28" id="problem">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/4 rounded-full bg-vera-green-soft/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-vera-green">
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vera-ink sm:text-4xl">
            Living with IBD means constantly trying to figure out what causes
            symptoms.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-vera-muted">
            Existing tools mostly collect data. Few turn that data into
            meaningful, personal insight.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[1.5rem] bg-vera-mist/80 p-6 ring-1 ring-vera-border/70 transition hover:bg-vera-mist hover:ring-vera-green/30"
            >
              <div className="mb-5 flex h-20 items-end">{point.graphic}</div>
              <p className="text-sm font-medium text-vera-green">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-vera-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-vera-muted">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
