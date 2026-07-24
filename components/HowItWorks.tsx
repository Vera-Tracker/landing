"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Track your daily health",
    body: "Log meals, symptoms, sleep, stress, activity, medications, and bowel movements in one place.",
  },
  {
    step: "02",
    title: "Vera finds patterns",
    body: "AI analyzes your health data and identifies relationships between lifestyle and symptoms.",
  },
  {
    step: "03",
    title: "Understand your body",
    body: "Receive personalized insights that help you manage your condition with more confidence.",
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="bg-vera-mist py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(100%-0.5rem)] top-8 hidden h-px w-[calc(100%-2rem)] bg-vera-border lg:block" />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-vera-green text-sm font-semibold text-white">
                {item.step}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-vera-ink">
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
