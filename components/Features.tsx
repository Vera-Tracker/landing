"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Personalized Insights",
    body: "Vera learns your patterns and helps identify factors connected to your symptoms.",
  },
  {
    title: "Daily Health Tracking",
    body: "Keep all your important health information — meals, symptoms, sleep, stress, and more — in one place.",
  },
  {
    title: "AI-Powered Analysis",
    body: "Turn your daily logs into meaningful insights you can actually act on.",
  },
  {
    title: "Better Doctor Conversations",
    body: "Bring clearer health trends to your healthcare appointments — not just scattered notes.",
  },
];

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
    </>,
    <>
      <path d="M4 7h16" />
      <path d="M4 12h10" />
      <path d="M4 17h7" />
    </>,
    <>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <circle cx="12" cy="12" r="4" />
    </>,
    <>
      <path d="M7 4h10a2 2 0 012 2v14l-7-3-7 3V6a2 2 0 012-2z" />
      <path d="M9 10h6" />
      <path d="M9 14h4" />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-vera-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {icons[index]}
    </svg>
  );
}

export function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28" id="features">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
              className="border-t border-vera-border pt-6"
            >
              <FeatureIcon index={i} />
              <h3 className="mt-4 text-xl font-semibold text-vera-ink">
                {feature.title}
              </h3>
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
