import { tiers } from "@/lib/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-[var(--ink)]/10 bg-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mono-label mb-3 text-[11px] text-[var(--rust)]">Pricing</div>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
          Straightforward rates, no monthly surprises.
        </h2>
        <p className="mt-5 max-w-xl text-[var(--ink)]/65">
          Fixed once-off pricing for websites and stores. Applications and automation are
          scoped after a short discovery call, since no two workflows are the same.
        </p>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`flex flex-col border p-6 sm:p-7 ${
                t.featured
                  ? "border-[var(--rust)] bg-[var(--navy)] text-white"
                  : "border-[var(--ink)]/15 bg-white"
              }`}
            >
              <div
                className={`mono-label flex items-center justify-between text-[10px] ${
                  t.featured ? "text-white/50" : "text-[var(--ink)]/45"
                }`}
              >
                <span>{t.id}</span>
                {t.featured && <span className="text-[var(--rust)]">MOST CHOSEN</span>}
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl">
                {t.name}
              </h3>
              <div className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                {t.price}
              </div>
              <div
                className={`mono-label mt-1 text-[10px] ${
                  t.featured ? "text-white/50" : "text-[var(--ink)]/45"
                }`}
              >
                {t.unit}
              </div>
              <p
                className={`mt-5 flex-1 text-sm leading-relaxed ${
                  t.featured ? "text-white/70" : "text-[var(--ink)]/65"
                }`}
              >
                {t.desc}
              </p>
              <a
                href="#contact"
                aria-label={`Enquire about ${t.name}`}
                className={`mono-label mt-6 border px-4 py-2.5 text-center text-[11px] transition-colors ${
                  t.featured
                    ? "border-white/40 hover:border-white"
                    : "border-[var(--ink)]/25 hover:border-[var(--rust)] hover:text-[var(--rust)]"
                }`}
              >
                Enquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
