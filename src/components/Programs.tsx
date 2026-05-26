import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            Train With Us
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            Programs for every athlete
          </h2>
          <p className="mt-6 text-lg text-brand-slate">
            Kids learning to throw their first jab. Adults building real
            strength. Small groups getting real coaching. Pick your lane.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, idx) => (
            <article
              key={program.slug}
              className="group relative flex flex-col bg-brand-dark text-white p-8 rounded-2xl border border-white/5 hover:border-brand-amber/50 transition-colors"
            >
              <p className="text-sm font-mono text-brand-amber tabular-nums">
                0{idx + 1}
              </p>
              <h3 className="mt-3 text-2xl font-bold uppercase leading-tight">
                {program.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-brand-slate">
                {program.for}
              </p>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                {program.blurb}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden className="text-brand-amber mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href={program.cta.href}
                className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-wide text-brand-amber hover:text-brand-amber-hover"
              >
                {program.cta.label} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
