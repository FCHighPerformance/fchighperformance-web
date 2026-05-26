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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Programs />
        <Method />
        <About />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
