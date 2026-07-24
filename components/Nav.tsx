"use client";

import { BrandMark } from "./BrandMark";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur-md transition-[border-color] data-[scrolled=true]:border-vera-border/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40 rounded-md">
          <BrandMark size="sm" />
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-vera-green px-4 py-2 text-sm font-medium text-white transition hover:bg-vera-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vera-green/40 focus-visible:ring-offset-2"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
