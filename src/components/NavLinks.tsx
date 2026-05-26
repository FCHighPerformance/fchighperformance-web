"use client";

import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

const SECTION_IDS = ["programs", "method", "about", "testimonials"];

/**
 * Sticky nav with active-section highlighting via IntersectionObserver.
 * The underline + amber color slide between links as the user scrolls.
 */
export function NavLinks({ links }: { links: NavLink[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section whose top is closest to the upper third of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Trigger when section enters the top half of viewport
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-10">
      {links.map((link) => {
        const id = link.href.replace("#", "").replace("/", "");
        const isActive = active === id;
        return (
          <a
            key={link.href}
            href={link.href}
            className={`group relative text-[13px] font-medium uppercase tracking-[0.15em] transition-colors ${
              isActive ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-brand-amber transition-all ${
                isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
