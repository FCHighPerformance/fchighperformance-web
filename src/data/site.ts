/**
 * Site-wide constants. Edit here to update across the whole site.
 */
export const site = {
  name: "FC High Performance",
  tagline: "Old-school training for every age.",
  url: "https://fchighperformance.com",
  phone: "757.778.9222",
  phoneHref: "tel:+17577789222",
  email: "keith@fchighperformance.com",
  emailHref: "mailto:keith@fchighperformance.com",

  address: {
    street: "235 Jersey Ave",
    city: "Virginia Beach",
    region: "VA",
    postalCode: "23462",
    country: "US",
    formatted: "235 Jersey Ave\nVirginia Beach, VA 23462",
    // Real geocoded coordinates (Kempsville Heights, Virginia Beach)
    lat: 36.8430082,
    lng: -76.1562824,
  },

  primaryCta: {
    label: "Talk to Coach Now",
    href: "#book",
  },
  secondaryCta: {
    label: "See Programs",
    href: "#programs",
  },

  // Demographic-anchored proof points.
  proofPoints: [
    { value: "40+", label: "Adults Building Strength" },
    { value: "7+", label: "Kids Learning To Box" },
    { value: "10+ Yrs", label: "Old-School Coaching" },
  ],

  social: {
    // TODO with owner: drop in real handles
    instagram: "",
    facebook: "",
  },

  // GoHighLevel form embed
  ghlForm: {
    id: "DQkJl9Z40D0yfOSYdtLl",
    src: "https://api.leadconnectorhq.com/widget/form/DQkJl9Z40D0yfOSYdtLl",
    script: "https://link.msgsndr.com/js/form_embed.js",
    name: "*FC - Home Page Form ",
  },
};
