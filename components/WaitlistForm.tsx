"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { joinWaitlist } from "@/app/actions/waitlist";

const ibdOptions = [
  { value: "crohns", label: "Crohn's disease" },
  { value: "ulcerative_colitis", label: "Ulcerative colitis" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
] as const;

export function WaitlistForm() {
  const reduceMotion = useReducedMotion();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await joinWaitlist(formData);
      if (result.ok) {
        setSuccess(true);
      } else {
        setError(result.error);
      }
    });
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-[radial-gradient(90%_80%_at_50%_0%,#e8f0e9_0%,#ffffff_55%,#f4f7f5_100%)] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-10 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-vera-green/10 blur-3xl" />
        <svg
          className="absolute inset-x-0 top-0 mx-auto h-48 w-full max-w-4xl opacity-30"
          viewBox="0 0 800 160"
          fill="none"
        >
          <path
            d="M0 100 C120 40, 220 140, 340 80 S560 20, 800 90"
            stroke="#407048"
            strokeWidth="1.2"
            strokeDasharray="5 8"
            className="animate-dash"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-vera-green">
              Early access
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vera-ink sm:text-4xl">
              Be one of the first people to try Vera.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-vera-muted">
              Join the waitlist for early access. Help us validate demand and
              shape a product that truly understands IBD.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-10 rounded-2xl border border-vera-border bg-vera-mist px-6 py-10 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-vera-green text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-vera-ink">
                  You&apos;re on the list
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-vera-muted">
                  Thanks for joining. We&apos;ll reach out when early access
                  opens.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative mt-10 space-y-5 rounded-[1.75rem] border border-vera-border/80 bg-white/90 p-6 shadow-[0_30px_80px_-40px_rgba(47,85,53,0.45)] backdrop-blur sm:p-8"
                noValidate
              >
                <div className="sr-only" aria-hidden>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-vera-ink"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-vera-border bg-white px-3.5 py-2.5 text-sm text-vera-ink outline-none transition placeholder:text-vera-muted/60 focus:border-vera-green focus:ring-2 focus:ring-vera-green/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-vera-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-vera-border bg-white px-3.5 py-2.5 text-sm text-vera-ink outline-none transition placeholder:text-vera-muted/60 focus:border-vera-green focus:ring-2 focus:ring-vera-green/20"
                    placeholder="you@email.com"
                  />
                </div>

                <fieldset>
                  <legend className="block text-sm font-medium text-vera-ink">
                    IBD type
                  </legend>
                  <div className="mt-2 space-y-2">
                    {ibdOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-vera-border bg-white px-3.5 py-2.5 text-sm text-vera-ink transition has-[:checked]:border-vera-green has-[:checked]:bg-vera-green-soft/50"
                      >
                        <input
                          type="radio"
                          name="ibd_type"
                          value={option.value}
                          required
                          className="accent-vera-green"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {error && (
                  <p className="text-sm text-red-700" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-vera-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-vera-green-dark disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40 focus-visible:ring-offset-2"
                >
                  {isPending ? "Joining…" : "Get early access"}
                </button>

                <p className="text-center text-xs leading-relaxed text-vera-muted">
                  We&apos;ll only use your email to share product updates. No
                  spam.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
