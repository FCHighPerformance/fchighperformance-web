import Link from "next/link";
import { site } from "@/data/site";

type Crumb = { label: string; href: string };

/**
 * Compact hero for dedicated topic pages (/about, /programs, etc.).
 * Sits below the sticky Header. Always brand-dark with the standard
 * eyebrow + h1 + intro + CTA pattern. Optional breadcrumbs.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb = [],
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(96,113,121,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        {breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50"
          >
            {breadcrumb.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                <Link
                  href={c.href}
                  className="hover:text-white transition-colors"
                >
                  {c.label}
                </Link>
                <span aria-hidden>/</span>
                {i === breadcrumb.length - 1 && (
                  <span className="text-white/80">{eyebrow}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              {eyebrow}
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={site.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark hover:bg-brand-amber-hover transition-colors shadow-xl shadow-brand-amber/20"
            >
              {site.primaryCta.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
