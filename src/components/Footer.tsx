import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-dark-2 text-white/60 py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-tight text-white">
              {site.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed">{site.tagline}</p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Contact
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
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
              Visit
            </h4>
            <p className="mt-5 text-sm whitespace-pre-line leading-relaxed">
              {site.address}
            </p>
            <p className="mt-2 text-sm whitespace-pre-line leading-relaxed">
              {site.hours}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 text-xs text-white/30">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
