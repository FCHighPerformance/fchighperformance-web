import { site } from "@/data/site";

/**
 * Risk-reversal band. Big single statement designed to lower the
 * barrier between "interested" and "booked". No pricing mention.
 */
export function Guarantee() {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-dark-2 text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(246,173,85,0.10), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-brand-amber" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
            The Promise
          </p>
          <span className="h-px w-8 bg-brand-amber" />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
          Come in once.<br />Decide for yourself.
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
          No long contracts. No high-pressure pitch. Walk in, train with us,
          meet the community — then decide if FC is where you want to put your
          work in.
        </p>
        <a
          href={site.primaryCta.href}
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark hover:bg-brand-amber-hover transition-colors shadow-xl shadow-brand-amber/20"
        >
          {site.primaryCta.label}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </section>
  );
}
