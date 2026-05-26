import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      {/* Subtle ambient light — restrained, premium, no amber wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(96,113,121,0.18), transparent 60%)",
        }}
      />
      {/* Faint vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              FC High Performance
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] tracking-tight">
            Never too early.
            <br />
            Never too late.
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed">
            Boxing, strength &amp; conditioning, and personal training for
            kids 7+ and adults 40+ who refuse to slow down.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={site.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark hover:bg-brand-amber-hover transition-colors shadow-xl shadow-brand-amber/20"
            >
              {site.primaryCta.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={site.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/5 hover:border-white/30 transition-colors"
            >
              {site.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Authority strip — subtle, integrated, owner-editable in site.ts */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-3 gap-6 text-center sm:text-left">
            {site.proofPoints.map((point) => (
              <div key={point.label} className="sm:flex sm:items-baseline sm:gap-3">
                <dt className="font-display text-3xl sm:text-4xl text-white tracking-tight">
                  {point.value}
                </dt>
                <dd className="mt-1 sm:mt-0 text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/55">
                  {point.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
