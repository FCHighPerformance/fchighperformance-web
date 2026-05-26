import Link from "next/link";
import type { Program } from "@/data/programs";
import { programs } from "@/data/programs";

export function ProgramDetail({ program }: { program: Program }) {
  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      {/* What's included */}
      <section className="relative py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-brand-amber" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
                  What&rsquo;s Included
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.95]">
                What you get<br />when you train here.
              </h2>
              <p className="mt-6 text-base text-brand-slate leading-relaxed">
                Every session is coach-led, programmed, and built around the
                people in the room. No follow-along videos, no autopilot.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px bg-brand-dark/5 sm:grid-cols-1 rounded-2xl overflow-hidden ring-1 ring-brand-dark/5">
                {program.bullets.map((bullet, idx) => (
                  <li
                    key={bullet}
                    className="flex items-baseline gap-6 bg-white p-6"
                  >
                    <span className="font-display text-3xl text-brand-dark/20 tabular-nums leading-none">
                      0{idx + 1}
                    </span>
                    <span className="text-lg text-brand-dark/85 leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other programs */}
      <section className="py-24 sm:py-28 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-amber" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
                Explore Other Programs
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[0.95]">
              Not the right fit?<br />Look at the others.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-brand-dark/5 sm:grid-cols-3 rounded-2xl overflow-hidden ring-1 ring-brand-dark/5">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group bg-white p-8 hover:bg-white/60 transition-colors"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-slate">
                  {p.for}
                </p>
                <h3 className="mt-3 text-xl font-bold uppercase leading-tight text-brand-dark">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-brand-dark/70 leading-relaxed">
                  {p.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-dark group-hover:text-brand-amber-hover transition-colors">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
