"use client";

import { motion } from "framer-motion";
import TitleBlock from "./TitleBlock";
import { site, whatsappLink } from "@/lib/site";

const nodes = [
  { id: "WEB-01", title: "Websites", note: "Marketing sites, storefronts" },
  { id: "APP-02", title: "Applications", note: "Dashboards, client portals" },
  { id: "AI-03", title: "Automation", note: "Workflows, agents, integrations" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[var(--navy)] text-white"
    >
      <div className="bp-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--blue-line) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pb-20 pt-14 md:pb-24 md:pt-24">
        <div className="mono-label mb-8 flex flex-wrap items-center gap-3 text-[10px] text-[var(--blue-line)] sm:text-[11px]">
          <span className="dim-line px-3">PROJECT: DIGITAL BUILD</span>
          <span className="text-white/30">/</span>
          <span>{site.region.toUpperCase()}</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,11vw,4.5rem)] leading-[0.98] tracking-tight md:text-7xl"
        >
          We draft it.
          <br />
          We build it.
          <br />
          <span className="text-[var(--blue-line)]">We automate it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          {site.name} is a South African studio that designs and ships websites, custom
          applications, and AI automation — as one connected build, not three separate
          vendors. Specified, coded, and deployed by one team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="bg-[var(--rust)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a project
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label flex items-center gap-2 border border-white/30 px-6 py-3 text-[11px] text-white/80 transition-colors hover:border-white hover:text-white"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.5.4.1.2.1.7-.1 1.3z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="#pricing"
            className="mono-label border border-white/30 px-6 py-3 text-[11px] text-white/80 transition-colors hover:border-white hover:text-white"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Schematic pipeline — signature element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-16 md:mt-20"
        >
          <div className="mono-label mb-3 text-[9px] text-white/40 sm:text-[10px]">
            DISCOVER → DRAFT → BUILD → SHIP → AUTOMATE
          </div>
          <div className="relative grid gap-6 border-t border-dashed border-white/25 pt-8 sm:grid-cols-3 sm:gap-0">
            {nodes.map((n, i) => (
              <div key={n.id} className="relative sm:px-5 sm:first:pl-0 sm:last:pr-0">
                {i !== 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1px] -top-8 hidden h-8 w-px bg-white/25 sm:block"
                  />
                )}
                <div className="mono-label text-[10px] text-[var(--rust)]">{n.id}</div>
                <div className="mt-2 font-[family-name:var(--font-display)] text-xl">
                  {n.title}
                </div>
                <div className="mt-1 text-sm text-white/55">{n.note}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-4">
        <TitleBlock sheet="HOME" rev="01" tone="dark" />
      </div>
    </section>
  );
}
