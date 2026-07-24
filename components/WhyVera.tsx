"use client";

import { motion, useReducedMotion } from "framer-motion";

export function WhyVera() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-vera"
      className="relative overflow-hidden bg-vera-green py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/70">
            Why Vera
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built from lived experience
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            Vera was created because we experienced the challenge of managing
            chronic digestive conditions ourselves. We know how frustrating it
            is to search for answers and feel like you are managing your
            condition alone.
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            One of us lives with IBD. The other manages a similar chronic
            digestive condition. Vera exists to give patients continuous,
            personalized support between appointments — so you never have to
            piece it together alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
