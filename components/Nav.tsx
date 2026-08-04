"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks, site, telLink } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--paper)]/90 backdrop-blur transition-colors ${
        scrolled ? "border-[var(--ink)]/15 shadow-sm" : "border-[var(--ink)]/10"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label={`${site.name} — back to top`}>
          <Logo size={30} />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono-label text-[11px] text-[var(--ink)]/70 transition-colors hover:text-[var(--rust)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telLink}
            className="mono-label text-[11px] text-[var(--ink)]/70 transition-colors hover:text-[var(--rust)]"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="mono-label border border-[var(--ink)] px-4 py-2 text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--rust)] hover:text-[var(--rust)]"
          >
            Start a Project
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="text-[var(--ink)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--ink)]/10 bg-[var(--paper)] px-5 py-4 sm:px-6 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="mono-label text-[12px] text-[var(--ink)]/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={telLink}
              className="mono-label text-[12px] text-[var(--rust)]"
              onClick={() => setOpen(false)}
            >
              {site.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mono-label border border-[var(--ink)] px-4 py-2 text-center text-[12px]"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
