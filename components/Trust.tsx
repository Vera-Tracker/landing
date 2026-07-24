"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    title: "Lived experience",
    body: "Built by people with personal experience managing chronic digestive health conditions.",
  },
  {
    title: "Patient-focused",
    body: "Designed around the daily reality of living with IBD — not hospital workflows.",
  },
  {
    title: "Privacy-first",
    body: "Your health data is sensitive. We treat it that way, with a privacy-first approach.",
  },
  {
    title: "Supports your care team",
    body: "Vera helps you prepare for appointments. It does not replace healthcare professionals.",
  },
];

export function Trust() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-vera-mist-blue py-20 sm:py-28" id="trust">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-vera-green" />
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
