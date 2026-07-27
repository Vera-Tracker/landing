"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

function AnimatedNumber({ value, decimals = 1 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState("0");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      motionValue.set(value);
      return;
    }
    motionValue.set(0);
    const id = requestAnimationFrame(() => motionValue.set(value));
    return () => cancelAnimationFrame(id);
  }, [inView, motionValue, reduceMotion, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
  }, [spring, decimals]);

  return <span ref={ref}>{display}</span>;
}

function WorldGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(64,112,72,0.18),transparent_55%)]" />
      <div className="animate-pulse-soft absolute inset-[18%] rounded-full border border-vera-green/20" />
      <div className="animate-spin-slow absolute inset-0">
        <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
          <circle
            cx="160"
            cy="160"
            r="118"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-vera-green/25"
            strokeDasharray="4 10"
          />
          <circle
            cx="160"
            cy="160"
            r="148"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-vera-green/15"
            strokeDasharray="2 14"
          />
          {[
            [160, 42],
            [250, 90],
            [268, 180],
            [220, 250],
            [100, 250],
            [52, 180],
            [70, 90],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="5" className="fill-vera-green/70" />
              <circle cx={cx} cy={cy} r="10" className="fill-vera-green/15" />
            </g>
          ))}
          <path
            d="M160 42C210 80 250 120 268 180M268 180C240 220 200 250 160 270M160 270C120 240 70 210 52 180M52 180C70 120 110 70 160 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-vera-green/35 animate-dash"
            strokeDasharray="6 6"
          />
        </svg>
      </div>
      <div className="absolute inset-[28%] flex items-center justify-center rounded-full bg-white shadow-[0_20px_60px_-20px_rgba(47,85,53,0.35)] ring-1 ring-vera-border/80">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-vera-muted">
            Worldwide
          </p>
          <p className="mt-1 text-sm font-semibold text-vera-green">IBD</p>
        </div>
      </div>
    </div>
  );
}

export function Impact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-vera-mist py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-vera-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-vera-green/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-vera-green">
            The scale
          </p>
          <p className="mt-5 text-[4.5rem] font-semibold leading-none tracking-tight text-vera-ink sm:text-[6rem]">
            <AnimatedNumber value={4.9} />
            <span className="text-vera-green">M+</span>
          </p>
          <h2 className="mt-5 max-w-md text-2xl font-semibold tracking-tight text-vera-ink sm:text-3xl">
            people worldwide live with inflammatory bowel disease.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-vera-muted sm:text-lg">
            Crohn&apos;s and ulcerative colitis are highly individualized —
            millions are still searching for clarity on what drives their
            symptoms. Vera is building that clarity.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          aria-hidden
        >
          <WorldGraphic />
        </motion.div>
      </div>
    </section>
  );
}
