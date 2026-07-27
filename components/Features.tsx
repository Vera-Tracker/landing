"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Personalized Insights",
    body: "Vera learns your patterns and helps identify factors connected to your symptoms.",
    visual: (
      <svg viewBox="0 0 140 90" className="h-20 w-full" aria-hidden>
        <rect x="8" y="18" width="124" height="54" rx="12" className="fill-white/70 stroke-vera-green/25" strokeWidth="1" />
        <path d="M24 52 C40 46, 48 30, 64 36 S92 58, 116 28" fill="none" stroke="#407048" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="116" cy="28" r="4" fill="#407048" />
        <circle cx="116" cy="28" r="9" className="fill-vera-green/20" />
      </svg>
    ),
  },
  {
    title: "Daily Health Tracking",
    body: "Keep all your important health information — meals, symptoms, sleep, stress, and more — in one place.",
    visual: (
      <div className="grid w-full grid-cols-3 gap-2 px-1">
        {["Diet", "Sleep", "Mood"].map((label) => (
          <div key={label} className="rounded-xl bg-white/80 px-2 py-3 text-center shadow-sm">
            <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-vera-green/15" />
            <p className="text-[10px] font-medium text-vera-ink">{label}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "AI-Powered Analysis",
    body: "Turn your daily logs into meaningful insights you can actually act on.",
    visual: (
      <svg viewBox="0 0 140 90" className="h-20 w-full" aria-hidden>
        <circle cx="70" cy="45" r="26" className="fill-white/60 stroke-vera-green/30" strokeWidth="1.5" />
        <circle cx="70" cy="45" r="14" className="fill-vera-green/15 stroke-vera-green" strokeWidth="1.5" />
        <circle cx="104" cy="45" r="3.5" fill="#407048" opacity="0.55" />
        <circle cx="87" cy="74.45" r="3.5" fill="#407048" opacity="0.7" />
        <circle cx="53" cy="74.45" r="3.5" fill="#407048" opacity="0.85" />
        <circle cx="36" cy="45" r="3.5" fill="#407048" opacity="0.55" />
        <circle cx="53" cy="15.55" r="3.5" fill="#407048" opacity="0.7" />
        <circle cx="87" cy="15.55" r="3.5" fill="#407048" opacity="0.85" />
      </svg>
    ),
  },
  {
    title: "Better Doctor Conversations",
    body: "Bring clearer health trends to your healthcare appointments — not just scattered notes.",
    visual: (
      <div className="flex w-full items-end justify-center gap-2 px-4 pb-1 pt-2">
        {[40, 62, 48, 78, 55, 70].map((h, i) => (
          <div
            key={i}
            className="w-3 rounded-t-md bg-gradient-to-t from-vera-green to-vera-green/50"
            style={{ height: h * 0.7 }}
          />
        ))}
      </div>
    ),
  },
];

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28" id="features">
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-vera-green-soft/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-vera-green">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vera-ink sm:text-4xl">
            Built to help you understand your body
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.07 }}
              className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-vera-mist via-white to-vera-green-soft/40 p-6 ring-1 ring-vera-border/70 transition hover:ring-vera-green/35"
            >
              <div className="mb-5 flex h-24 items-center rounded-2xl bg-white/50 ring-1 ring-white/80">
                {feature.visual}
              </div>
              <h3 className="text-xl font-semibold text-vera-ink">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-vera-muted">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
