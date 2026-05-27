"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };

/**
 * Desktop nav — highlights the currently active dedicated page based
 * on URL pathname. Underline + amber color slides between links.
 */
export function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-10">
      {links.map((link) => {
        // Active if the current path starts with the link's href.
        // Exact match for "/", prefix match for everything else.
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`group relative text-[13px] font-medium uppercase tracking-[0.15em] transition-colors ${
              isActive ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-brand-amber transition-all ${
                isActive
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
