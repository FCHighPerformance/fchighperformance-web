import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { NavLinks } from "./NavLinks";
import { OpenNow } from "./OpenNow";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Our Method", href: "/our-method" },
  { label: "About", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-dark/80 border-b border-white/5">
      {/* Slim status bar. Open/Closed + phone (desktop only) */}
      <div className="hidden sm:block border-b border-white/5 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-8 items-center justify-between text-white/55">
            <OpenNow className="text-white/65" />
            <a
              href={site.phoneHref}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <MobileMenu />
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={56}
                height={56}
                priority
                className="h-11 w-11 object-contain flex-shrink-0"
              />
              <span className="sr-only">{site.name}</span>
            </Link>
          </div>

          <NavLinks links={navLinks} />

          <a
            href={site.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-brand-amber px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-brand-dark hover:bg-brand-amber-hover transition-colors shadow-lg shadow-brand-amber/20 flex-shrink-0 whitespace-nowrap"
          >
            {site.primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
