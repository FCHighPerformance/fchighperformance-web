import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Method } from "@/components/Method";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ScrollReveal as="section"><Programs /></ScrollReveal>
        <ScrollReveal as="section"><Method /></ScrollReveal>
        <ScrollReveal as="section"><About /></ScrollReveal>
        <ScrollReveal as="section"><Testimonials /></ScrollReveal>
        <ScrollReveal as="section"><Guarantee /></ScrollReveal>
        <ScrollReveal as="section"><FAQ /></ScrollReveal>
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
