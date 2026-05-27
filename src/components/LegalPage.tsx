/**
 * Shared layout for legal pages (Privacy, Terms). Renders prose with
 * sensible defaults so the content reads cleanly without per-page styling.
 *
 * Heads-up: the privacy / terms content in this site was drafted by an
 * AI in plain language and should be reviewed by an actual attorney
 * before relying on it in any dispute. Owner should run it past their
 * lawyer (especially the liability + SMS / TCPA sections).
 */
export function LegalPage({
  effectiveDate,
  children,
}: {
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate mb-12">
          Effective {effectiveDate}
        </p>
        <article className="space-y-6 text-base text-brand-dark/85 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-brand-dark [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-tight [&_h3]:text-brand-dark [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-brand-amber-hover [&_a]:underline">
          {children}
        </article>
      </div>
    </section>
  );
}
