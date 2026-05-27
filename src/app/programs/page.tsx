import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Programs } from "@/components/Programs";
import { Method } from "@/components/Method";
import { Guarantee } from "@/components/Guarantee";
import { BookingForm } from "@/components/BookingForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Boxing, strength & conditioning, and personal training for kids 7+ and adults 40+. Four programs built around real coaching, not commercial-gym filler.",
  alternates: { canonical: `${site.url}/programs` },
};

export default function ProgramsIndex() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Programs"
          title={
            <>
              Pick your lane.
              <br />
              Train for the long game.
            </>
          }
          subtitle="Coaching adults to build strength that lasts. Coaching kids to build it from the start. Four programs, one community."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <Programs />
        <Method />
        <Guarantee />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
