import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programs } from "@/data/programs";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import { ProgramDetail } from "@/components/ProgramDetail";
import { Method } from "@/components/Method";
import { Guarantee } from "@/components/Guarantee";
import { BookingForm } from "@/components/BookingForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};

  // Just the program name — the layout's title template adds the site suffix
  const title = program.name;
  const description = program.blurb;
  return {
    title,
    description,
    openGraph: {
      title: `${program.name} — ${site.name}`,
      description,
      type: "website",
      url: `${site.url}/programs/${program.slug}`,
    },
    alternates: {
      canonical: `${site.url}/programs/${program.slug}`,
    },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <ProgramHero program={program} />
        <ProgramDetail program={program} />
        <Method />
        <Guarantee />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
