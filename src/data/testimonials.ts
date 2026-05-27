/**
 * Testimonials.
 *
 * ⚠️ ALL THREE BELOW ARE PLACEHOLDERS. Names, quotes, and avatar
 * images are stand-ins to keep the page from looking templated until
 * real customer testimonials are collected.
 *
 * To replace with real ones:
 *  1. Drop the customer's photo into `public/` (e.g. `testimonial-real-1.jpg`)
 *  2. Update the entry below: real `name`, `quote`, `program`, `avatar` path.
 *  3. Delete this comment when all three are real.
 */
export type Testimonial = {
  quote: string;
  name: string;
  program?: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My kid used to be shy. Six months in, he's leading warmups and made real friends he didn't have at school. Coach makes them work. But they leave smiling every time.",
    name: "Marcus Williams",
    program: "Kids Boxing",
    avatar: "/testimonial-marcus.jpg", // PLACEHOLDER
  },
  {
    quote:
      "I've been through every commercial gym in town. Nothing like this. Real programming, real coaching, and a group that pulls you back when you'd rather sleep in.",
    name: "Anthony Walker",
    program: "Strength & Conditioning",
    avatar: "/testimonial-sarah.jpg", // PLACEHOLDER
  },
  {
    quote:
      "I walked in with bad knees and zero confidence at 52. Coach met me where I was. Built the work around my body, not around a template. A year later I move better than I have in a decade.",
    name: "David Pereira",
    program: "1-on-1 Training",
    avatar: "/testimonial-tony.jpg", // PLACEHOLDER
  },
];
