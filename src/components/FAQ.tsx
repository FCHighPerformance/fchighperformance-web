import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-brand-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
              Common Questions
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            Before you<br />book a session.
          </h2>
        </div>

        <dl className="mt-16 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10"
            >
              <dt className="lg:col-span-5 text-xl font-bold uppercase tracking-tight text-brand-dark leading-snug">
                {faq.q}
              </dt>
              <dd className="lg:col-span-7 text-base text-brand-dark/75 leading-relaxed">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
