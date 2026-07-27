"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Track your daily health",
    body: "Log meals, symptoms, sleep, stress, activity, medications, and bowel movements in one place.",
    visual: (
      <div className="space-y-2">
        {["Meal logged", "Sleep · 7h", "Stress · low"].map((row, i) => (
          <div
            key={row}
            className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-vera-ink shadow-sm"
            style={{ marginLeft: i * 8 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-vera-green" />
            {row}
          </div>
        ))}
      </div>
    ),
  },
  {
    step: "02",
    title: "Vera finds patterns",
    body: "AI analyzes your health data and identifies relationships between lifestyle and symptoms.",
    visual: (
      <svg viewBox="0 0 180 100" className="h-24 w-full" aria-hidden>
        <path
          d="M10 70 C40 60, 50 30, 80 40 S120 80, 170 25"
          fill="none"
          stroke="#407048"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-dash"
          strokeDasharray="5 6"
        />
        {[
          [10, 70],
          [80, 40],
          [120, 68],
          [170, 25],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#407048" />
        ))}
        <rect x="96" y="10" width="74" height="28" rx="8" fill="white" stroke="#d5e0d7" />
        <text x="108" y="28" fontSize="10" fill="#2f5535" fontFamily="system-ui">
          Trigger link
        </text>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Understand your body",
    body: "Receive personalized insights that help you manage your condition with more confidence.",
    visual: (
      <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-vera-border/70">
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-vera-green">
          Insight
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-vera-ink">
          Earlier dinners correlate with calmer evenings for you.
        </p>
      </div>
    ),
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-vera-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vera-green/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-vera-green">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vera-ink sm:text-4xl">
            From daily logs to personal clarity
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-vera-muted">
            Three simple steps to better understand what influences your
            symptoms.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(47,85,53,0.35)] ring-1 ring-vera-border/80"
            >
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-vera-green text-white lg:flex">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div className="mb-5 flex h-28 items-center rounded-2xl bg-gradient-to-br from-vera-mist to-vera-green-soft/50 p-4">
                {item.visual}
              </div>
              <div className="inline-flex h-8 items-center rounded-full bg-vera-green px-3 text-xs font-semibold text-white">
                Step {item.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-vera-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-vera-muted">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
