import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
              Train With Us
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            Programs for every<br />athlete in the room.
          </h2>
          <p className="mt-6 text-lg text-brand-slate leading-relaxed max-w-xl">
            Kids learning to throw their first jab. Adults building real
            strength. Small groups getting real coaching. Pick your lane.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-brand-dark/5 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden ring-1 ring-brand-dark/5">
          {programs.map((program, idx) => (
            <article
              key={program.slug}
              className="group relative flex flex-col bg-white p-8 hover:bg-brand-cream transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-brand-dark/15 tabular-nums leading-none">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-slate">
                  {program.for}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold uppercase leading-tight text-brand-dark">
                {program.name}
              </h3>
              <p className="mt-3 text-sm text-brand-dark/70 leading-relaxed">
                {program.blurb}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-brand-dark/80">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span aria-hidden className="mt-1.5 h-1 w-1 rounded-full bg-brand-dark/50 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href={program.cta.href}
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-dark group-hover:text-brand-amber-hover transition-colors"
              >
                {program.cta.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
