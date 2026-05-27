/**
 * Program offerings. Ordered with the primary demographic (adults 40+)
 * first. Kids program intentionally placed last so the adult eye doesn't
 * scroll past their target program.
 *
 * `image` is optional. Programs without one get a graceful gradient
 * placeholder on the dedicated program page.
 *
 * TODO with owner: confirm each program's schedule and CTA destination,
 * and source dedicated photos for S&C, Small Group, 1-on-1 (currently
 * only Kids Boxing has real photography).
 */
export type Program = {
  slug: string;
  name: string;
  for: string;
  blurb: string;
  bullets: string[];
  cta: { label: string; href: string };
  image?: string;
  imageAlt?: string;
};

export const programs: Program[] = [
  {
    slug: "one-on-one",
    name: "1-on-1 Training",
    for: "Adults 40+",
    blurb:
      "Personalized coaching for adults rebuilding strength, mobility, and confidence. Without the cookie-cutter gym routine.",
    bullets: [
      "Fitness & movement assessment",
      "Strength & endurance review",
      "Nutrition & lifestyle consult",
    ],
    cta: { label: "Talk to Coach", href: "#book" },
  },
  {
    slug: "small-group-pt",
    name: "Small Group Personal Training",
    for: "Adults who want coaching, not a class",
    blurb:
      "Personalized programming in a small-group setting. Real coach attention without 1-on-1 commitment.",
    bullets: [
      "4 to 6 athletes per session",
      "Individual programming",
      "Coaching on every rep",
    ],
    cta: { label: "Talk to Coach", href: "#book" },
  },
  {
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    for: "All adult athletes",
    blurb:
      "Programmed group training to build real-world strength, work capacity, and durability. Without the commercial-gym filler.",
    bullets: [
      "Periodized programming",
      "Group accountability",
      "Open to all fitness levels",
    ],
    cta: { label: "Talk to Coach", href: "#book" },
  },
  {
    slug: "kids-boxing",
    name: "Kids Boxing",
    for: "Ages 7 to 14",
    blurb:
      "Large group classes that build discipline, confidence, and real boxing skill. In a community that has their back.",
    bullets: [
      "Coach-led group sessions",
      "Footwork, technique, conditioning",
      "Sparring options as kids progress",
    ],
    cta: { label: "Talk to Coach", href: "#book" },
    image: "/kids-boxing-wide.jpg",
    imageAlt: "Kids boxing class training together at FC High Performance",
  },
];
