import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Our Method", href: "#method" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#testimonials" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-dark/80 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt={`${site.name} logo`}
              width={56}
              height={56}
              priority
              className="h-11 w-11 object-contain"
            />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-brand-amber px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-dark hover:bg-brand-amber-hover transition-colors shadow-lg shadow-brand-amber/20"
          >
            {site.primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
