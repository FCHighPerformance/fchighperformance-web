import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            Success Stories
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            From the people who train here
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="flex flex-col bg-brand-cream p-8 rounded-2xl border border-brand-dark/5"
            >
              <blockquote className="flex-1 text-lg text-brand-dark/85 leading-relaxed">
                <span aria-hidden className="text-brand-amber text-4xl leading-none">
                  &ldquo;
                </span>
                <span className="block mt-2">{t.quote}</span>
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-brand-dark/10">
                <p className="font-bold uppercase tracking-wide text-sm">
                  {t.name}
                </p>
                {t.program && (
                  <p className="text-xs uppercase tracking-wider text-brand-slate mt-1">
                    {t.program}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
