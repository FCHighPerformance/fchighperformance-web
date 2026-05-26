import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Programs />
        <About />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
