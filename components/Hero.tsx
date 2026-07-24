"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandMark } from "./BrandMark";

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-white/25 via-transparent to-vera-green-dark/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-white/95 shadow-[0_30px_80px_-20px_rgba(32,55,36,0.45)]">
        <div className="flex items-center justify-between border-b border-vera-border/70 px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-vera-muted">
              Today
            </p>
            <p className="mt-0.5 text-sm font-semibold text-vera-ink">
              Your health snapshot
            </p>
          </div>
          <span className="rounded-full bg-vera-green-soft px-3 py-1 text-xs font-medium text-vera-green-dark">
            Stable day
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Symptoms", value: "Mild" },
              { label: "Sleep", value: "7.2h" },
              { label: "Stress", value: "Low" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-vera-mist px-3 py-3">
                <p className="text-[11px] text-vera-muted">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-vera-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-vera-border/80 bg-gradient-to-br from-vera-green-soft/80 to-white p-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-vera-green-dark">
              Insight
            </p>
            <p className="mt-2 text-sm leading-relaxed text-vera-ink">
              Days with earlier dinners and lower stress often coincide with
              milder evenings this month.
            </p>
          </div>

          <div className="space-y-2.5">
            <p className="text-xs font-medium text-vera-muted">Logged today</p>
            {["Breakfast · oatmeal + banana", "Bowel movement · Bristol 4", "Walk · 28 min"].map(
              (row) => (
                <div
                  key={row}
                  className="flex items-center gap-3 rounded-xl bg-vera-mist/80 px-3 py-2.5 text-sm text-vera-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-vera-green" />
                  {row}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[radial-gradient(120%_90%_at_10%_0%,#5a8a60_0%,#407048_42%,#2f5535_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
        >
          <BrandMark size="lg" className="mb-8 shadow-lg shadow-black/15" />
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Understand your IBD. Discover your triggers.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Vera helps people with IBD track their health, discover personal
            patterns, and gain insights into what influences their symptoms.
          </p>
          <div className="mt-8">
            <a
              href="#waitlist"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-vera-green-dark transition hover:bg-vera-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-vera-green"
            >
              Join the waitlist
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:justify-self-end"
          aria-hidden
        >
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
