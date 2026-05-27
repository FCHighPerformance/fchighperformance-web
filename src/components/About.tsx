import Image from "next/image";

const credentials = [
  "Silver Level USA Boxing Coach",
  "Level 2 USA Boxing Official",
  "Certified S&C + Nutrition Coach",
  "Semi-Pro Football — Norfolk Thunder",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Coach portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-dark ring-1 ring-brand-dark/10 shadow-2xl shadow-brand-dark/20">
              <Image
                src="/coach-portrait.jpg"
                alt="Coach Keith wrapping a young boxer's hands at FC High Performance"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-amber" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
                Meet The Coach
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
              Built the old way.<br />Built to last.
            </h2>

            <div className="mt-8 space-y-5 text-lg text-brand-dark/80 leading-relaxed">
              <p>
                Coach Keith has spent over a decade in the corner — coaching
                kids and adults out of FC High Performance in Virginia Beach.
                Silver Level USA Boxing Coach. Level 2 USA Boxing Official.
                Certified Strength &amp; Conditioning Coach. Certified
                Nutrition Coach. Former semi-pro football player for the
                Norfolk Thunder. Trainer of youth fighters with undefeated
                records at USA Boxing Nationals.
              </p>
              <p>
                But credentials don&rsquo;t make athletes. The work does.
                The community does. Showing up does. That&rsquo;s what FC is
                built on — real coaching, real programming, and a room full
                of people who pull you back the day you&rsquo;d rather stay
                home.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-brand-amber pl-6">
              <p className="text-xl text-brand-dark font-medium italic leading-snug">
                &ldquo;It doesn&rsquo;t matter if you&rsquo;re seven or
                seventy. Show up, do the work, and we&rsquo;ll build the
                rest.&rdquo;
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-slate">
                Coach Keith · Founder, FC High Performance
              </footer>
            </blockquote>

            {/* Credentials chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-dark/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-dark/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
