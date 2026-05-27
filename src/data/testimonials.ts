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
      "My son walks into a room now, introduces himself, gives a real handshake. He wouldn't have done any of that a year ago. I sent him here for the boxing. He's come back with everything else.",
    name: "Marcus Williams",
    program: "Kids Boxing",
    avatar: "/testimonial-marcus.jpg", // PLACEHOLDER
  },
  {
    quote:
      "I used to dread getting dressed in the morning. Now I open my closet, grab whatever I want, and feel good in it. Didn't think strength training would fix that part of my life. It fixed a lot of parts.",
    name: "Lauren Mitchell",
    program: "Strength & Conditioning",
    avatar: "/testimonial-sarah.jpg", // PLACEHOLDER
  },
  {
    quote:
      "I came in figuring I'd just stay maintained at 62. A year later I'm chasing the grandkids around the yard and not paying for it the next morning. Feels like I bought a decade back.",
    name: "David Pereira",
    program: "1-on-1 Training",
    avatar: "/testimonial-tony.jpg", // PLACEHOLDER
  },
];
