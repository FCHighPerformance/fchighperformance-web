import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
              Success Stories
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            What the people<br />who train here say.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="group flex flex-col bg-brand-cream p-8 sm:p-10 rounded-2xl border border-brand-dark/5 hover:border-brand-dark/15 transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-brand-amber"
                fill="currentColor"
              >
                <path d="M9.5 6c-3 0-5.5 2.5-5.5 5.5v6.5h6.5v-6.5h-3.5c0-1.93 1.57-3.5 3.5-3.5v-2zm10 0c-3 0-5.5 2.5-5.5 5.5v6.5h6.5v-6.5h-3.5c0-1.93 1.57-3.5 3.5-3.5v-2z" />
              </svg>
              <blockquote className="mt-5 flex-1 text-lg text-brand-dark/85 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-brand-dark/10 flex items-center gap-4">
                {t.avatar ? (
                  <div className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-brand-dark/10 flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} portrait`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="h-12 w-12 rounded-full bg-brand-dark/10 ring-1 ring-brand-dark/5 flex-shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <p className="font-bold uppercase tracking-wide text-sm text-brand-dark truncate">
                    {t.name}
                  </p>
                  {t.program && (
                    <p className="text-[11px] uppercase tracking-[0.15em] text-brand-slate mt-0.5 truncate">
                      {t.program}
                    </p>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
