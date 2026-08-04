import { site } from "@/lib/site";

const notes = [
  {
    tag: "NOTE A",
    title: "One team, all three disciplines",
    text: "The person who designs your site is on the same team automating it — nothing gets lost in a handoff between vendors.",
  },
  {
    tag: "NOTE B",
    title: "Real, version-controlled code",
    text: "Every build lives in a proper codebase, not a locked page-builder — so it's yours to take anywhere, with any developer.",
  },
  {
    tag: "NOTE C",
    title: "National service, same-day replies",
    text: "Based in Gauteng, working with clients across South Africa. You'll hear back the same working day, every time.",
  },
  {
    tag: "NOTE D",
    title: "Transparent, fixed pricing",
    text: "Websites and stores are quoted up front. Applications and automation are scoped before any work starts — no surprise invoices.",
  },
];

export default function WhyUs() {
  return (
    <section id="work" className="border-b border-[var(--ink)]/10 bg-[var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-6 md:py-24 lg:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="mono-label mb-3 text-[11px] text-[var(--rust)]">
            Why {site.shortName}
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
            Built like software, not a website subscription.
          </h2>
          <p className="mt-5 max-w-md text-[var(--ink)]/65">
            We know the industry is full of monthly page-builder plans and agencies that
            disappear after launch. Here&rsquo;s what&rsquo;s different working with us.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[var(--ink)]/15 bg-[var(--ink)]/15 sm:grid-cols-2">
          {notes.map((n) => (
            <div key={n.tag} className="bg-[var(--paper)] p-6 md:p-7">
              <div className="mono-label text-[10px] text-[var(--ink)]/45">{n.tag}</div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg">
                {n.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
