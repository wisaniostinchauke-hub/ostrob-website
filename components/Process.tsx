const steps = [
  {
    n: "01",
    title: "Discover",
    text: "A working session on what the business actually needs — not a generic questionnaire.",
  },
  {
    n: "02",
    title: "Draft",
    text: "Wireframes and a system design you approve before a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    text: "Development in the open — a staging link you can watch progress on as commits land.",
  },
  {
    n: "04",
    title: "Ship",
    text: "Launch on your domain, with hosting, monitoring and a walkthrough of everything.",
  },
  {
    n: "05",
    title: "Automate",
    text: "Once it's live, we wire in the automations that remove your team's manual admin.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-white/10 bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mono-label mb-3 text-[11px] text-[var(--blue-line)]">Process</div>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight md:text-5xl">
          Five stages, start to finish.
        </h2>

        <ol className="mt-14 grid gap-8 border-t border-dashed border-white/20 pt-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="mono-label text-[11px] text-[var(--rust)]">{s.n}</div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
