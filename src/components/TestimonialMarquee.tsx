import Image from "next/image";
import { testimonials } from "@/data/testimonials";

/**
 * Horizontal scrolling testimonial ticker for the homepage. Sits
 * between the dark Hero and the light Programs section, continuing
 * the dark atmosphere with a band of social proof in motion.
 *
 * - Duplicates the testimonials array so the loop is seamless.
 * - Animation runs via CSS keyframes in globals.css.
 * - Pauses on hover so people can read.
 * - Respects prefers-reduced-motion (animation disabled).
 */
export function TestimonialMarquee() {
  // Duplicate so the marquee loops without a visible gap
  const items = [...testimonials, ...testimonials];

  return (
    <section
      aria-label="What clients say"
      className="relative overflow-hidden bg-brand-dark border-y border-white/10 py-6"
    >
      {/* Fade edges so cards enter/exit smoothly instead of popping at the screen edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(35,35,35,1) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(270deg, rgba(35,35,35,1) 0%, transparent 100%)",
        }}
      />

      <div
        className="marquee-track flex gap-4 sm:gap-5"
        style={{
          animation: "var(--animate-marquee)",
          width: "max-content",
        }}
      >
        {items.map((t, idx) => (
          <article
            key={idx}
            className="flex items-center gap-3 sm:gap-4 flex-shrink-0 bg-white/5 backdrop-blur-sm pl-2 pr-5 sm:pl-3 sm:pr-6 py-2 sm:py-2.5 rounded-full ring-1 ring-white/10"
          >
            {t.avatar && (
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/15">
                <Image
                  src={t.avatar}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-sm sm:text-[15px] text-white/90 italic whitespace-nowrap">
              &ldquo;{t.excerpt || t.quote}&rdquo;
            </p>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-brand-amber whitespace-nowrap">
              {t.name}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
