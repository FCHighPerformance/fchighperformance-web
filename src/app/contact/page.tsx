import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactInfo } from "@/components/ContactInfo";
import { BookingForm } from "@/components/BookingForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Call, email, or book your first session — Coach gets back personally.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Talk to Coach.
              <br />
              We answer back.
            </>
          }
          subtitle="Call, email, or fill out the form. We&rsquo;ll be in touch personally — no auto-responders, no pressure pitch."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <ContactInfo />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
