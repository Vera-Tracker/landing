"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    title: "Triggers are personal",
    body: "A food or habit that flares one person may not affect another. IBD is highly individualized.",
  },
  {
    title: "Tracking is hard",
    body: "Patients often rely on memory or scattered notes, making patterns nearly impossible to see.",
  },
  {
    title: "Support gaps between visits",
    body: "Appointments are limited. Doctors see snapshots — patients need continuity in between.",
  },
];

export function Problem() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28" id="problem">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

        <div className="mt-14 grid gap-10 border-t border-vera-border pt-12 sm:grid-cols-3 sm:gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <p className="text-sm font-medium text-vera-green">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-vera-ink">
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
