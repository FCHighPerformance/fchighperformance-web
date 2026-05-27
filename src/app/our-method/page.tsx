import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Method } from "@/components/Method";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Method",
  description:
    "The FC High Performance coaching method: honest assessment, individual programming, and coach-led training that actually moves you forward.",
  alternates: { canonical: `${site.url}/our-method` },
};

export default function OurMethodPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Method"
          title={
            <>
              No gimmicks.
              <br />
              Just the work.
            </>
          }
          subtitle="The FC High Performance coaching method — honest assessment, individual programming, and real coaching every session."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <Method />
        <FAQ />
        <Guarantee />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
