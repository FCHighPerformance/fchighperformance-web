import Script from "next/script";
import { site } from "@/data/site";

/**
 * Embeds the GoHighLevel form that the existing site uses. All
 * submissions flow into the owner's GHL CRM and trigger whatever
 * SMS/email/automation is already wired up over there. To change
 * form fields, edit the form inside GoHighLevel — no code changes
 * needed.
 */
export function BookingForm() {
  return (
    <section id="book" className="py-20 sm:py-28 bg-brand-dark text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            Book a Session
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            Come see what we&rsquo;re about
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Fill this out and we&rsquo;ll be in touch. Your first 1-on-1
            session is $30 (normally $50).
          </p>
        </div>

        <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-2xl">
          <iframe
            src={site.ghlForm.src}
            id={`inline-${site.ghlForm.id}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={site.ghlForm.name}
            data-height="undefined"
            data-layout-iframe-id={`inline-${site.ghlForm.id}`}
            data-form-id={site.ghlForm.id}
            title={site.ghlForm.name}
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>

      {/* GHL embed script — handles auto-resize of the iframe */}
      <Script src={site.ghlForm.script} strategy="afterInteractive" />
    </section>
  );
}
