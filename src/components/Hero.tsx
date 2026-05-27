import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      {/* Right-side photo on desktop (hidden on mobile to keep hero brand-forward) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 right-0 w-1/2 -z-10"
      >
        <Image
          src="/hero-pad-work.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 0vw"
          className="object-cover"
          style={{ objectPosition: "50% 15%" }}
        />
        {/* Cinematic gradient blend from dark (left) to image (right edge) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(35,35,35,1) 0%, rgba(35,35,35,0.85) 20%, rgba(35,35,35,0.55) 45%, rgba(35,35,35,0.2) 75%, rgba(35,35,35,0.4) 100%)",
          }}
        />
      </div>

      {/* Ambient light + vignette (subtle, for non-image areas) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(96,113,121,0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
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

          <p className="mt-8 max-w-xl text-lg sm:text-xl text-white/80 leading-relaxed">
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
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-brand-dark/40 backdrop-blur px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              {site.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Authority strip */}
      <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
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
