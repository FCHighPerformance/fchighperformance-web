"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/**
 * Floating "Talk to Coach Now" CTA pinned to the bottom of mobile
 * viewports. Appears after the user scrolls past the hero, hides
 * when they reach the booking form (so it doesn't double-stack
 * with the in-section CTA).
 */
export function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 500;
      const bookSection = document.getElementById("book");
      const inBookSection = bookSection
        ? bookSection.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      setShow(scrolled && !inBookSection);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 lg:hidden transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <a
        href={site.primaryCta.href}
        className="flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark shadow-2xl shadow-black/40"
      >
        {site.primaryCta.label}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
