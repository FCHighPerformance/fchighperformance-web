"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { programs } from "@/data/programs";

/**
 * Full-screen mobile navigation. Surfaces both:
 *  - The section anchors (Method, About, Stories, Book) for the
 *    single-page scroll experience.
 *  - The dedicated program detail pages — critical for mobile UX
 *    AND SEO since these are real routes (/programs/<slug>) that
 *    deserve their own visit.
 *
 * Hamburger icon on the left of the header (mobile only). The menu
 * panel is brand-dark with white type to match the header system.
 */

const sectionLinks = [
  { label: "Our Method", href: "/#method" },
  { label: "About Coach", href: "/#about" },
  { label: "Success Stories", href: "/#testimonials" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Hamburger trigger — mobile only */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="md:hidden inline-flex items-center justify-center h-11 w-11 -ml-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="13" x2="20" y2="13" />
          <line x1="4" y1="19" x2="14" y2="19" />
        </svg>
      </button>

      {/* Full-screen overlay panel */}
      <div
        className={`fixed inset-0 z-[70] bg-brand-dark text-white md:hidden transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between h-20 px-4 border-b border-white/5 flex-shrink-0">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src="/logo.webp"
                alt={`${site.name} logo`}
                width={56}
                height={56}
                className="h-11 w-11 object-contain"
              />
              <span className="sr-only">{site.name}</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center h-11 w-11 -mr-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 pt-8 pb-10 flex-1">
            {/* Programs */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-6 bg-brand-amber" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Programs
                </p>
              </div>
              <ul>
                {programs.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/programs/${p.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between gap-4 py-4 border-b border-white/10"
                    >
                      <span className="flex-1 min-w-0">
                        <span className="block font-display text-xl uppercase tracking-tight leading-none">
                          {p.name}
                        </span>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/55 mt-2">
                          {p.for}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="text-brand-amber transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore (section anchors) */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-6 bg-brand-amber" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Explore
                </p>
              </div>
              <ul>
                {sectionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between gap-4 py-4 border-b border-white/10"
                    >
                      <span className="font-display text-xl uppercase tracking-tight leading-none">
                        {link.label}
                      </span>
                      <span
                        aria-hidden
                        className="text-brand-amber transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-6 bg-brand-amber" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Contact
                </p>
              </div>
              <ul className="space-y-3 text-base">
                <li>
                  <a
                    href={site.phoneHref}
                    onClick={() => setOpen(false)}
                    className="text-white/85 hover:text-white"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    onClick={() => setOpen(false)}
                    className="text-white/85 hover:text-white break-all"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky CTA at bottom */}
          <div className="border-t border-white/10 p-4 flex-shrink-0">
            <a
              href={site.primaryCta.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark shadow-xl shadow-brand-amber/20"
            >
              {site.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
