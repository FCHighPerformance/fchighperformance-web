import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";

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
  title:
    "FC High Performance | Boxing, Strength & Conditioning, Personal Training",
  description:
    "Old-school training. Real community. Programs for kids and adults — boxing, strength & conditioning, and small-group personal training.",
  metadataBase: new URL("https://fchighperformance.com"),
  openGraph: {
    title: "FC High Performance",
    description:
      "Old-school training. Real community. Programs for kids and adults.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
