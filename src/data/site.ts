/**
 * Site-wide constants. Edit here to update across the whole site.
 */
export const site = {
  name: "FC High Performance",
  tagline: "Old-school training for every age.",
  phone: "757.778.9222",
  phoneHref: "tel:+17577789222",
  email: "info@fchighperformance.com", // TODO: confirm with owner
  emailHref: "mailto:info@fchighperformance.com",
  address: "TODO: confirm address with owner",
  hours: "TODO: confirm hours with owner",
  primaryCta: {
    label: "Talk to Coach Now",
    href: "#book",
  },
  secondaryCta: {
    label: "See Programs",
    href: "#programs",
  },
  // Demographic-anchored proof points. The numbers do the talking:
  // 40+ pulls the eye for the primary audience, 7+ for the kids hook.
  // TODO with owner: sharpen if real numbers are available
  // (e.g. "200+ Adult Members", "60+ Junior Boxers").
  proofPoints: [
    { value: "40+", label: "Adults Building Strength" },
    { value: "7+", label: "Kids Learning To Box" },
    { value: "10+ Yrs", label: "Old-School Coaching" },
  ],
  // GoHighLevel form embed — see project memory for context
  ghlForm: {
    id: "DQkJl9Z40D0yfOSYdtLl",
    src: "https://api.leadconnectorhq.com/widget/form/DQkJl9Z40D0yfOSYdtLl",
    script: "https://link.msgsndr.com/js/form_embed.js",
    name: "*FC - Home Page Form ",
  },
};
