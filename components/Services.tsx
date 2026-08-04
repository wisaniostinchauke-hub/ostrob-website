const services = [
  {
    id: "WEB-01",
    title: "Websites",
    desc: "Marketing sites and storefronts that load fast, read well on a phone, and are built to be found on Google — not just to look good in a preview.",
    items: [
      "Custom design, no template look-alikes",
      "E-commerce with unlimited products",
      "SEO-ready structure and copywriting",
      "Hosting, domains and email included",
    ],
  },
  {
    id: "APP-02",
    title: "Applications",
    desc: "Internal tools, client portals, and booking or job-management systems — built as real software with logins, databases, and roles, not a stack of spreadsheets.",
    items: [
      "Client and staff portals with authentication",
      "Booking, quoting and job-tracking systems",
      "Dashboards connected to your real data",
      "Version-controlled code you own outright",
    ],
  },
  {
    id: "AI-03",
    title: "Automation",
    desc: "AI agents and workflows that take repetitive admin off your desk — quoting, follow-ups, document generation, scheduling — wired directly into the tools you already use.",
    items: [
      "Lead capture and follow-up automation",
      "Document and quote generation",
      "AI agents wired into WhatsApp, email, and CRM",
      "Custom workflows, not off-the-shelf bots",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-[var(--ink)]/10 bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mono-label mb-3 text-[11px] text-[var(--rust)]">Services / 01–03</div>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
          Three disciplines. One build.
        </h2>
        <p className="mt-5 max-w-xl text-[var(--ink)]/65">
          Most agencies hand you off between a designer, a developer, and — eventually — an
          &ldquo;automation guy.&rdquo; We spec and ship all three as a single project, so the
          site, the app, and the automation actually talk to each other.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--ink)]/15 bg-[var(--ink)]/15 sm:grid-cols-2 sm:[&>*:last-child]:col-span-2 md:mt-16 lg:grid-cols-3 lg:[&>*:last-child]:col-span-1">
          {services.map((s, i) => (
            <div key={s.id} className="flex flex-col bg-[var(--paper)] p-7 md:p-8">
              <div className="mono-label flex items-center justify-between text-[10px] text-[var(--ink)]/50">
                <span>{s.id}</span>
                <span>SHT {String(i + 1).padStart(2, "0")}/03</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/65">{s.desc}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-[var(--ink)]/10 pt-6">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-[var(--ink)]/80">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-[var(--rust)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
