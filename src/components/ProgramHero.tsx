import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import type { Program } from "@/data/programs";

export function ProgramHero({ program }: { program: Program }) {
  const hasImage = Boolean(program.image);

  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      {/* Side image (only when program has one) */}
      {hasImage && (
        <div
          aria-hidden
          className="hidden lg:block absolute inset-y-0 right-0 w-1/2 -z-10"
        >
          <Image
            src={program.image!}
            alt={program.imageAlt || ""}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 0vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(35,35,35,1) 0%, rgba(35,35,35,0.85) 20%, rgba(35,35,35,0.5) 50%, rgba(35,35,35,0.2) 80%, rgba(35,35,35,0.4) 100%)",
            }}
          />
        </div>
      )}

      {/* Ambient light for non-image hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(96,113,121,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-24">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/#programs" className="hover:text-white transition-colors">
            Programs
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white/80">{program.name}</span>
        </nav>

        <div className="max-w-2xl lg:max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              {program.for}
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight">
            {program.name}
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-white/80 leading-relaxed">
            {program.blurb}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={site.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark hover:bg-brand-amber-hover transition-colors shadow-xl shadow-brand-amber/20"
            >
              {site.primaryCta.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <Link
              href="/#programs"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-brand-dark/40 backdrop-blur px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/5 hover:border-white/30 transition-colors"
            >
              See All Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
