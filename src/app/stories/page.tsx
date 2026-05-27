import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { BookingForm } from "@/components/BookingForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from the people who train at FC High Performance — kids learning to box, adults rebuilding strength, families showing up for each other.",
  alternates: { canonical: `${site.url}/stories` },
};

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Success Stories"
          title={
            <>
              The people<br />who train here.
            </>
          }
          subtitle="Real stories from the FC community — kids stepping into the ring, adults rebuilding their strength, families showing up for each other."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <Testimonials />
        <Guarantee />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
