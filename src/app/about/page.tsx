import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { BookingForm } from "@/components/BookingForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the coach behind FC High Performance — USA Boxing coach, 10+ years training kids and adults, national championships official.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="About"
          title={
            <>
              Meet the coach.
              <br />
              Meet the community.
            </>
          }
          subtitle="FC High Performance was built on a simple idea — training should make you stronger, tougher, and more connected to the people around you."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <About />
        <Testimonials />
        <Guarantee />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
