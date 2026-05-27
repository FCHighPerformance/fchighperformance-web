import { site } from "@/data/site";
import { formatHoursLabel } from "@/data/hours";
import { OpenNow } from "./OpenNow";

/**
 * Contact info block — phone, email, address, hours, live open/closed
 * indicator, and the embedded location map. Used on the /contact page.
 */
export function ContactInfo() {
  return (
    <section className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-amber" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
                Reach Out
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[0.95]">
              We answer back.
            </h2>
            <p className="mt-6 text-lg text-brand-dark/75 leading-relaxed">
              Whether you&rsquo;re ready to book or just have questions —
              call, email, or fill out the form below. Coach gets back to
              everyone personally.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate mb-2">
                  Phone
                </dt>
                <dd>
                  <a
                    href={site.phoneHref}
                    className="font-display text-2xl text-brand-dark hover:text-brand-amber-hover transition-colors"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate mb-2">
                  Email
                </dt>
                <dd>
                  <a
                    href={site.emailHref}
                    className="font-display text-2xl text-brand-dark hover:text-brand-amber-hover transition-colors break-all"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate mb-2">
                  Visit
                </dt>
                <dd className="text-lg text-brand-dark whitespace-pre-line leading-relaxed">
                  {site.address.formatted}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate mb-2">
                  Hours
                </dt>
                <dd className="text-lg text-brand-dark leading-relaxed">
                  {formatHoursLabel()}
                </dd>
                <dd className="mt-2">
                  <OpenNow className="text-brand-dark/80" />
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            {/* Larger map on the contact page than in the footer */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-brand-dark/10 shadow-2xl shadow-brand-dark/10">
              <iframe
                title={`${site.name} location map`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${site.address.lng - 0.01},${site.address.lat - 0.01},${site.address.lng + 0.01},${site.address.lat + 0.01}&layer=mapnik&marker=${site.address.lat},${site.address.lng}`}
                className="block h-[28rem] w-full bg-brand-dark-2"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
