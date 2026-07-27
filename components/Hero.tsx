"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandMark } from "./BrandMark";

function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
      <div className="absolute right-[-10%] top-10 h-[28rem] w-[28rem] rounded-full bg-[#6a9a6f]/25 blur-3xl animate-float-slow" />
      <div className="absolute bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-2xl animate-float" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="40%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M80 620C260 480 360 520 520 400C700 260 780 300 980 180"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="1.5"
          className="animate-dash"
          strokeDasharray="8 10"
        />
        <path
          d="M40 280C220 340 340 220 500 300C700 400 820 320 1120 420"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="1.2"
          className="animate-dash"
          strokeDasharray="6 12"
          style={{ animationDelay: "0.4s" }}
        />
        {[
          [520, 400],
          [780, 250],
          [300, 520],
          [900, 340],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="white" opacity="0.85" />
            <circle cx={x} cy={y} r="14" fill="white" opacity="0.12" />
          </g>
        ))}
      </svg>

      <div className="grain absolute inset-0 opacity-40" />
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 56" className="h-14 w-full" aria-hidden>
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#407048" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#407048" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 L20 36 L40 42 L60 28 L80 32 L100 18 L120 24 L140 12 L160 18 L180 10 L200 14 V56 H0 Z"
        fill="url(#sparkFill)"
      />
      <path
        d="M0 40 L20 36 L40 42 L60 28 L80 32 L100 18 L120 24 L140 12 L160 18 L180 10 L200 14"
        fill="none"
        stroke="#407048"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="180" cy="10" r="4" fill="#407048" />
      <circle cx="180" cy="10" r="8" fill="#407048" opacity="0.18" />
    </svg>
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px]">
      {/* Soft glow behind the phone — not another card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-3xl" />

      {/* Phone frame */}
      <div className="relative rounded-[2.4rem] bg-gradient-to-b from-white/40 to-white/10 p-[3px] shadow-[0_40px_100px_-20px_rgba(10,25,14,0.65)]">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#0f1a12] ring-1 ring-white/20">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-6 pb-1 pt-3 text-[10px] font-medium text-vera-ink">
            <span>9:41</span>
            <div className="mx-auto h-4 w-20 rounded-full bg-vera-ink/90" />
            <span className="tracking-tight">100%</span>
          </div>

          <div className="bg-white px-4 pb-5 pt-2">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-vera-muted">
                  Today
                </p>
                <p className="mt-0.5 text-[17px] font-semibold tracking-tight text-vera-ink">
                  Health snapshot
                </p>
              </div>
              <span className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-vera-green-soft px-2.5 py-1 text-[11px] font-medium text-vera-green-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-vera-green" />
                Stable
              </span>
            </div>

            <div className="rounded-2xl bg-[#f3f7f4] p-3.5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] text-vera-muted">7-day symptom trend</p>
                <p className="text-[11px] font-semibold text-vera-green">Improving</p>
              </div>
              <Sparkline />
              <div className="mt-1 flex justify-between text-[10px] text-vera-muted/80">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: "Symptoms", value: "Mild", hint: "vs avg" },
                { label: "Sleep", value: "7.2h", hint: "rested" },
                { label: "Stress", value: "Low", hint: "calm" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#f3f7f4] px-2.5 py-3 text-center"
                >
                  <p className="text-[10px] text-vera-muted">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-vera-ink">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-vera-green">{item.hint}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#e7f0e8] to-[#f7faf7] p-3.5 ring-1 ring-vera-green/15">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-vera-green text-[10px] font-bold text-white">
                  AI
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-vera-green-dark">
                  Personal insight
                </p>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-vera-ink">
                Earlier dinners and lower stress often line up with milder
                evenings for you this month.
              </p>
            </div>

            <div className="mt-3 space-y-2">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-vera-muted">
                Logged today
              </p>
              {[
                { title: "Breakfast", meta: "Oatmeal + banana" },
                { title: "Activity", meta: "28 min walk" },
              ].map((row) => (
                <div
                  key={row.title}
                  className="flex items-center justify-between rounded-xl bg-[#f3f7f4] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-vera-green" />
                    <span className="text-[12px] font-medium text-vera-ink">
                      {row.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-vera-muted">{row.meta}</span>
                </div>
              ))}
            </div>
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
      className="relative min-h-[100svh] overflow-hidden bg-[radial-gradient(120%_90%_at_10%_0%,#5f9164_0%,#407048_45%,#243f28_100%)]"
    >
      <HeroAtmosphere />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
        >
          <BrandMark variant="onDark" size="lg" className="mb-8" />
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
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-vera-green-dark shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] transition hover:bg-vera-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-vera-green"
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
