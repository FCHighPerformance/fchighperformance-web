/**
 * Testimonials. TODO with owner: replace placeholders with real
 * success stories pulled from the existing site / GoHighLevel.
 */
export type Testimonial = {
  quote: string;
  name: string;
  program?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial. Replace with a real client quote about kids boxing.",
    name: "Parent name",
    program: "Kids Boxing",
  },
  {
    quote:
      "Placeholder testimonial. Replace with a real client quote about S&C or small-group.",
    name: "Client name",
    program: "Strength & Conditioning",
  },
  {
    quote:
      "Placeholder testimonial. Replace with a real client quote about adult 1-on-1 training.",
    name: "Client name",
    program: "1-on-1 Training",
  },
];
