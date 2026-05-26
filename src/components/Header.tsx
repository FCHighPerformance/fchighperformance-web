import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "About Coach", href: "#about" },
  { label: "Success Stories", href: "#testimonials" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-dark/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt={`${site.name} logo`}
              width={56}
              height={56}
              priority
              className="h-12 w-12 object-contain"
            />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-white/85 hover:text-brand-amber transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-brand-amber px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand-dark hover:bg-brand-amber-hover transition-colors"
          >
            {site.primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
