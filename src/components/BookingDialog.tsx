"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { site } from "@/data/site";

/**
 * Global booking modal. Intercepts clicks on any `<a href="#book">`
 * (or `href` containing `#book`) anywhere on the site and pops up the
 * GoHighLevel form in a dialog instead of scrolling.
 *
 * - One instance, mounted in the root layout.
 * - Iframe + script are lazy-loaded on first open so initial page
 *   weight isn't penalized.
 * - If JS is disabled, the link's default `#book` anchor still
 *   scrolls the user to the BookingForm section at the bottom of
 *   the page — graceful fallback.
 * - Native HTML <dialog> handles focus trap, Escape-to-close, and
 *   inert backdrop without extra JS.
 */
export function BookingDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Honor modifier-clicks (cmd/ctrl-click = open in new tab, etc.)
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a[href$="#book"], a[href="#book"]');
      if (!link) return;
      e.preventDefault();
      setHasOpened(true);
      // Defer to next tick so the iframe mounts before showModal
      requestAnimationFrame(() => ref.current?.showModal());
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Close dialog when user clicks the backdrop (outside the panel)
  const onDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === ref.current) ref.current?.close();
  };

  return (
    <>
      <dialog
        ref={ref}
        onClick={onDialogClick}
        className="bg-transparent p-0 max-w-2xl w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] m-auto rounded-2xl shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="relative bg-brand-dark text-white rounded-2xl ring-1 ring-white/10 overflow-hidden">
          {/* Close button */}
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close booking form"
            className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>

          {/* Header */}
          <div className="px-6 pt-8 pb-5 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-amber" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                Talk to Coach
              </p>
              <span className="h-px w-8 bg-brand-amber" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
              Reach out.<br />Coach will be in touch.
            </h3>
            <p className="mt-3 text-sm text-white/65 max-w-md mx-auto">
              No pressure, no commitment. Coach personally responds to every
              inquiry.
            </p>
          </div>

          {/* Form — only mounts after first open */}
          <div className="bg-white rounded-b-2xl p-2 sm:p-3">
            {hasOpened ? (
              <iframe
                src={site.ghlForm.src}
                id={`inline-${site.ghlForm.id}-modal`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={site.ghlForm.name}
                data-height="undefined"
                data-layout-iframe-id={`inline-${site.ghlForm.id}-modal`}
                data-form-id={site.ghlForm.id}
                title={site.ghlForm.name}
                style={{
                  width: "100%",
                  height: "560px",
                  border: "none",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            ) : (
              <div className="h-[560px]" aria-hidden />
            )}
          </div>
        </div>
      </dialog>

      {/* GHL embed script — only injected after first dialog open */}
      {hasOpened && (
        <Script src={site.ghlForm.script} strategy="afterInteractive" />
      )}
    </>
  );
}
