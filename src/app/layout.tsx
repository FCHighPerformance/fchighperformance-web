import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { getOpeningHoursSchema } from "@/data/hours";
import { BookingDialog } from "@/components/BookingDialog";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "FC High Performance | Boxing, Strength & Conditioning, Personal Training",
    template: "%s | FC High Performance",
  },
  description:
    "Boxing, strength & conditioning, and personal training for kids 7+ and adults 40+ who refuse to slow down. Old-school coaching. Real community.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  generator: "Next.js",
  keywords: [
    "personal trainer",
    "boxing gym",
    "kids boxing",
    "strength and conditioning",
    "small group training",
    "adult fitness 40+",
    "personal training",
    site.name,
  ],
  openGraph: {
    title: "FC High Performance. Never too early. Never too late.",
    description:
      "Boxing, strength & conditioning, and personal training for kids 7+ and adults 40+ who refuse to slow down.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FC High Performance",
    description:
      "Old-school training. Real community. Boxing, S&C, and personal training for kids 7+ and adults 40+.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
};

// Schema.org structured data. Helps Google understand this is a local gym
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ExerciseGym", "SportsActivityLocation"],
  "@id": site.url,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  image: `${site.url}/opengraph-image`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  openingHoursSpecification: getOpeningHoursSchema(),
  sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Kids Boxing",
        description: "Group boxing classes for ages 7+",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Strength & Conditioning",
        description: "Programmed adult group training",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Small Group Personal Training",
        description: "Personalized programming in a small-group setting",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "1-on-1 Personal Training",
        description: "Personalized coaching for adults 40+",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <BookingDialog />
      </body>
    </html>
  );
}
