import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furry Tales Boarding | Premium Cage-Free Dog Daycare & Boarding in Ooltewah, TN",
  description:
    "Luxury pet care facility in Ooltewah & Harrison, TN. Offering custom-made open-top picket fence dog suites, a lush green turf play yard, cat boarding, and professional grooming for all breeds.",
  keywords: [
    "dog boarding Ooltewah TN",
    "doggie daycare Chattanooga",
    "cage-free dog boarding",
    "Harrison TN dog kennel",
    "Doodle grooming Ooltewah",
    "Furry Tales Boarding",
    "pet care Tennessee",
  ],
  openGraph: {
    title: "Furry Tales Boarding | Premium Royal Dog Daycare & Boarding",
    description: "Treat your pet like royalty with our cage-free suites, turf play yard, and luxury grooming services.",
    type: "website",
    locale: "en_US",
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
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-brand-cream text-brand-navy flex flex-col font-sans antialiased">
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-grow pt-[72px] sm:pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

