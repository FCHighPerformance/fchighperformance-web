/**
 * Program offerings — ordered with the primary demographic (adults 40+)
 * first. Kids program intentionally placed last so the adult eye doesn't
 * scroll past their target program. TODO with owner: confirm each
 * program's schedule and CTA destination.
 */
export type Program = {
  slug: string;
  name: string;
  for: string;
  blurb: string;
  bullets: string[];
  cta: { label: string; href: string };
};

export const programs: Program[] = [
  {
    slug: "one-on-one",
    name: "1-on-1 Training",
    for: "Adults 40+",
    blurb:
      "Personalized coaching for adults rebuilding strength, mobility, and confidence — without the cookie-cutter gym routine.",
    bullets: [
      "Fitness & movement assessment",
      "Strength & endurance review",
      "Nutrition & lifestyle consult",
    ],
    cta: { label: "Book Your First Session", href: "#book" },
  },
  {
    slug: "small-group-pt",
    name: "Small Group Personal Training",
    for: "Adults who want coaching, not a class",
    blurb:
      "Personalized programming in a small-group setting. Real coach attention without 1-on-1 commitment.",
    bullets: [
      "4–6 athletes per session",
      "Individual programming",
      "Coaching on every rep",
    ],
    cta: { label: "Book Your First Session", href: "#book" },
  },
  {
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    for: "All adult athletes",
    blurb:
      "Programmed group training to build real-world strength, work capacity, and durability — without the commercial-gym filler.",
    bullets: [
      "Periodized programming",
      "Group accountability",
      "Open to all fitness levels",
    ],
    cta: { label: "Try Your First Class", href: "#book" },
  },
  {
    slug: "kids-boxing",
    name: "Kids Boxing",
    for: "Ages 7–14",
    blurb:
      "Large group classes that build discipline, confidence, and real boxing skill — in a community that has their back.",
    bullets: [
      "Coach-led group sessions",
      "Footwork, technique, conditioning",
      "Sparring options as kids progress",
    ],
    cta: { label: "Get Class Schedule", href: "#book" },
  },
];
