import { site } from "@/data/site";

/**
 * Embedded OpenStreetMap iframe centered on the gym. No API key required.
 * Switch to Google Maps Embed API if the owner wants the Google styling
 * (needs an API key in env vars).
 */
export function MapEmbed() {
  const { lat, lng } = site.address;
  const delta = 0.005;
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
      <iframe
        title={`${site.name} location map`}
        src={src}
        className="block h-64 w-full bg-brand-dark-2"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
