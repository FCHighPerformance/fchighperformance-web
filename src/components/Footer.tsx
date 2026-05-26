import { site } from "@/data/site";
import { formatHoursLabel } from "@/data/hours";
import { MapEmbed } from "./MapEmbed";

export function Footer() {
  return (
    <footer className="bg-brand-dark-2 text-white/60 py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl uppercase tracking-tight text-white">
              {site.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed max-w-md">
              {site.tagline}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Contact
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href={site.phoneHref}
                      className="hover:text-white transition-colors"
                    >
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.emailHref}
                      className="hover:text-white transition-colors"
                    >
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Hours
                </h4>
                <p className="mt-3 text-sm whitespace-pre-line leading-relaxed">
                  {formatHoursLabel()}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Visit The Gym
            </h4>
            <p className="mt-3 text-sm whitespace-pre-line leading-relaxed mb-4">
              {site.address.formatted}
            </p>
            <MapEmbed />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Old-school training, every age.
          </p>
        </div>
      </div>
    </footer>
  );
}
