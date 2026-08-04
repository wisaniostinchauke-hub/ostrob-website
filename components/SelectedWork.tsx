/**
 * Sample project types — placeholder content until real client work is live.
 *
 * These describe the KIND of build we deliver, deliberately without client
 * names, so nothing here claims a project that hasn't shipped. As each of your
 * new clients goes live, replace an entry with the real thing:
 *
 *   {
 *     id: "BLD-01",
 *     label: "Client Name",              // real business name
 *     sector: "Industry / City",
 *     scope: "Website · Local SEO",
 *     outcome: "One line on what it does for them.",
 *     href: "https://clientsite.co.za",  // add once live — card becomes a link
 *     live: true,                        // flips the card out of "sample" styling
 *   }
 *
 * Get written permission before naming a client publicly.
 */
type Build = {
  id: string;
  label: string;
  sector: string;
  scope: string;
  outcome: string;
  href?: string;
  live?: boolean;
};

const builds: Build[] = [
  {
    id: "TYP-01",
    label: "Trade & Workshop",
    sector: "Auto repair, plumbing, electrical",
    scope: "Website · Local SEO",
    outcome:
      "A fast single-page site with click-to-call, WhatsApp enquiries and local search markup, so the workshop turns up when someone nearby searches.",
  },
  {
    id: "TYP-02",
    label: "Salon & Studio",
    sector: "Beauty, hair, wellness",
    scope: "Website · Bookings",
    outcome:
      "Live open/closed status on SA time, a WhatsApp booking flow, and a gallery that loads properly on a phone with patchy signal.",
  },
  {
    id: "TYP-03",
    label: "Retail & Product",
    sector: "Consumer brands, stockists",
    scope: "Storefront · Catalogue",
    outcome:
      "An online store with unlimited products and payments, plus a print-ready catalogue so the same range sells online and in stockist meetings.",
  },
  {
    id: "TYP-04",
    label: "Operations & Admin",
    sector: "Service businesses, contractors",
    scope: "Application · Automation",
    outcome:
      "A job-tracking portal with logins and roles, wired to automations that generate quotes and chase follow-ups without anyone retyping anything.",
  },
];

export default function SelectedWork() {
  return (
    <section id="builds" className="border-b border-white/10 bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mono-label mb-3 text-[11px] text-[var(--blue-line)]">
          What We Build
        </div>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
          Four kinds of build, one way of working.
        </h2>
        <p className="mt-5 max-w-xl text-white/60">
          Most projects land in one of these shapes. Every one is specified, built and
          deployed by the same team you&rsquo;d be working with — no handoffs, no
          subcontractors.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {builds.map((b) => {
            const inner = (
              <>
                <div className="mono-label flex items-center justify-between gap-2 text-[10px] text-white/40">
                  <span>{b.id}</span>
                  <span className="text-right">{b.scope}</span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl">
                  {b.label}
                </h3>
                <div className="mono-label mt-1.5 text-[10px] leading-relaxed text-[var(--rust)]">
                  {b.sector}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
                  {b.outcome}
                </p>
              </>
            );

            return b.href ? (
              <a
                key={b.id}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-[var(--navy)] p-7 transition-colors hover:bg-[var(--navy-deep)] md:p-8"
              >
                {inner}
                <span className="mono-label mt-6 text-[10px] text-[var(--blue-line)]">
                  View site →
                </span>
              </a>
            ) : (
              <div key={b.id} className="flex flex-col bg-[var(--navy)] p-7 md:p-8">
                {inner}
              </div>
            );
          })}
        </div>

        <p className="mono-label mt-8 text-[10px] leading-relaxed text-white/35">
          Client work currently in build — references available on request.
        </p>
      </div>
    </section>
  );
}
