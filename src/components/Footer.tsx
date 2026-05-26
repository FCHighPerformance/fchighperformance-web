import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-dark-2 text-white/70 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-tight text-white">
              {site.name}
            </h3>
            <p className="mt-2 text-sm">{site.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="hover:text-brand-amber transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="hover:text-brand-amber transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Visit
            </h4>
            <p className="mt-4 text-sm whitespace-pre-line">{site.address}</p>
            <p className="mt-2 text-sm whitespace-pre-line">{site.hours}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
