"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#problem", label: "Problem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#trust", label: "Trust" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-scrolled={scrolled}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur-md transition-[border-color] data-[scrolled=true]:border-vera-border/60"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40"
          onClick={() => setOpen(false)}
        >
          <BrandMark variant="onLight" size="sm" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-vera-muted transition hover:text-vera-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="ml-2 rounded-full bg-vera-green px-4 py-2 text-sm font-medium text-white transition hover:bg-vera-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40 focus-visible:ring-offset-2"
          >
            Join waitlist
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-vera-ink transition hover:bg-vera-mist md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-vera-border/70 bg-white md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-vera-ink transition hover:bg-vera-mist"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="mt-2 rounded-full bg-vera-green px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-vera-green-dark"
              onClick={() => setOpen(false)}
            >
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
