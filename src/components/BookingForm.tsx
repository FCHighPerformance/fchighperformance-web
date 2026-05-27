import Script from "next/script";
import { site } from "@/data/site";

/**
 * Embeds the GoHighLevel form that the existing site uses. All
 * submissions flow into the owner's GHL CRM and trigger whatever
 * SMS/email/automation is already wired up over there. To change
 * form fields, edit the form inside GoHighLevel. No code changes
 * needed.
 */
export function BookingForm() {
  return (
    <section id="book" className="relative py-24 sm:py-32 bg-brand-dark text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 100%, rgba(246,173,85,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
              Talk to Coach
            </p>
            <span className="h-px w-8 bg-brand-amber" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            Reach out.<br />Coach will be in touch.
          </h2>
          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            Tell us a little about you and Coach will reach out personally to
            match you to the right program. No pressure, no commitment.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-2xl shadow-black/30 ring-1 ring-white/10">
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

      {/* GHL embed script. Handles auto-resize of the iframe */}
      <Script src={site.ghlForm.script} strategy="afterInteractive" />
    </section>
  );
}
