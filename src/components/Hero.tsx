import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-dark text-white"
      // TODO: when owner provides hero photo, swap this for a full-bleed image background
      // (e.g. <Image src="/hero.jpg" fill className="object-cover opacity-40" />)
    >
      {/* Placeholder gritty texture using radial gradient — replace with real photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, rgba(246,173,85,0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(96,113,121,0.25), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            FC High Performance
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight">
            Old-school training.
            <br />
            <span className="text-brand-amber">Real community.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed">
            Boxing for kids. Strength & conditioning for adults. Small-group
            personal training. Built on grit, sweat, and the people next to you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={site.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-brand-amber px-8 py-4 text-base font-semibold uppercase tracking-wide text-brand-dark hover:bg-brand-amber-hover transition-colors"
            >
              {site.primaryCta.label}
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white hover:bg-white/10 transition-colors"
            >
              See Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
