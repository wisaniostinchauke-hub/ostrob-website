import TitleBlock from "./TitleBlock";
import { faqs } from "@/lib/faqs";

/**
 * Built on native <details>/<summary> rather than a JS accordion, deliberately.
 *
 * A React accordion that conditionally renders its panel keeps the answer OUT of
 * the HTML until someone clicks. Crawlers and answer engines never click. With
 * <details>, every answer ships inside the served markup whether it's open or
 * shut — and it works with JavaScript disabled, needs no hydration, and gets
 * keyboard and screen-reader behaviour from the browser for free.
 */
export default function Faq() {
  return (
    <section id="faq" className="border-b border-[var(--ink)]/10 bg-[var(--paper-dim)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mono-label mb-3 text-[11px] text-[var(--rust)]">
          Common Questions
        </div>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
          Straight answers, before you ask.
        </h2>
        <p className="mt-5 max-w-xl text-[var(--ink)]/65">
          The questions we get asked most often, answered properly — including the
          ones about cost and ownership that most agencies leave vague.
        </p>

        <div className="mt-14 border-t border-[var(--ink)]/15 md:mt-16">
          {faqs.map((f, i) => (
            <details
              key={f.question}
              name="ostrob-faq"
              className="group border-b border-[var(--ink)]/15"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-[family-name:var(--font-display)] text-base leading-snug text-[var(--ink)] md:text-lg">
                  <span className="mono-label mr-3 text-[10px] text-[var(--ink)]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[var(--rust)] transition-transform duration-200 group-open:rotate-45"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-3xl pb-6 pl-0 text-sm leading-relaxed text-[var(--ink)]/70 sm:pl-9 md:text-base">
                {f.answer}
              </p>
            </details>
          ))}
        </div>

        <TitleBlock sheet="FAQ" rev="01" className="mt-12" />
      </div>
    </section>
  );
}
