/**
 * Site-wide constants. Edit here to update across the whole site.
 */
export const site = {
  name: "FC High Performance",
  tagline: "Old-school training for every age.",
  url: "https://fchighperformance.com",
  phone: "757.778.9222",
  phoneHref: "tel:+17577789222",
  email: "info@fchighperformance.com", // TODO: confirm with owner
  emailHref: "mailto:info@fchighperformance.com",

  // TODO with owner: confirm exact address + lat/lng for map embed and schema
  address: {
    street: "TODO: Street Address",
    city: "TODO: City",
    region: "VA", // Virginia inferred from 757 area code
    postalCode: "TODO",
    country: "US",
    formatted: "TODO: confirm address with owner",
    // Lat/lng power the embedded map. Defaults to a Virginia Beach centroid
    // until the owner confirms — change these to the real address.
    lat: 36.8529,
    lng: -75.9779,
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
    // TODO with owner — drop in real handles
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
