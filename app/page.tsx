import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Crown, Star, ShieldCheck, Sparkles, MapPin, ArrowRight, Shield, Award, Scissors } from "lucide-react";
import PricingTable from "@/components/ui/PricingTable";
import MobileStickyBar from "@/components/ui/MobileStickyBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MobileStickyBar />
      {/* 1. Trust-Building Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_background.jpg"
            alt="Furry Tales Boarding Luxury Turf Play Yard and Picket Fence Dog Suites"
            fill
            priority
            className="object-cover object-center transform scale-105"
            sizes="100vw"
          />
          {/* Multi-layer gradient overlay for text readability and luxury atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/30" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Text Content */}
            <div className="lg:col-span-8 text-left space-y-6 animate-fade-in-up">
              {/* Gold Luxury Tag */}
              <div className="inline-flex items-center space-x-2 bg-brand-gold/15 border border-brand-gold/30 px-4 py-1.5 rounded-full text-brand-gold-light text-xs font-semibold uppercase tracking-widest shadow-inner">
                <Crown className="h-3.5 w-3.5 text-brand-gold" />
                <span>The Royal Standard of Pet Boarding</span>
              </div>

              {/* Cinematic Polished Typography */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                Where Your Pet Lives <br />
                <span className="text-gradient-gold">Like Royalty</span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                Experience Ooltewah’s premier cage-free boarding, luxury turf yard daycare, and custom styling. We replace stressful cages with open-top picket fence suites and ultimate safety.
              </p>

              {/* High-Contrast Interactive Calls-to-Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/book-now"
                  className="flex items-center justify-center space-x-2 text-sm font-extrabold px-8 py-4 rounded-full bg-gradient-gold text-brand-navy hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 cursor-pointer"
                >
                  <span>Book Your Royal Stay</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#services"
                  className="flex items-center justify-center space-x-2 text-sm font-semibold px-8 py-4 rounded-full text-white border border-white/20 hover:border-brand-gold/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <span>Explore Our Suites</span>
                </Link>
              </div>

              {/* Quick Trust Pillars / Social Proof */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
                <div className="flex items-center space-x-2.5">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-300 font-medium">4.9★ Google Rating</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="h-5 w-5 text-brand-gold" />
                  <span className="text-xs text-gray-300 font-medium">CPR Certified Staff</span>
                </div>
                <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                  <Sparkles className="h-5 w-5 text-brand-gold" />
                  <span className="text-xs text-gray-300 font-medium">100% Cage-Free Suites</span>
                </div>
              </div>
            </div>

            {/* Embedded Badge / Card UI for conversion */}
            <div className="lg:col-span-4 hidden lg:block animate-float">
              <div className="bg-brand-navy/90 backdrop-blur-md rounded-2xl p-6 gold-border-glow text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">Ooltewah Facility Open</h3>
                <p className="text-xs text-gray-400">
                  Secure your dates for upcoming summer holidays. Spots are filling up fast for our King and Queen Boarding Suites.
                </p>
                <div className="bg-brand-navy/50 p-3 rounded-lg border border-white/5 text-left">
                  <span className="text-[10px] text-brand-gold uppercase tracking-wider block font-bold">Address</span>
                  <span className="text-xs text-white">5035 Ooltewah Ringgold Rd, Ooltewah</span>
                </div>
                <Link
                  href="/book-now"
                  className="block w-full py-2.5 text-xs font-bold text-center rounded-lg bg-gradient-gold text-brand-navy hover:opacity-90 transition-opacity"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Value Pillars Section (Trust Elements) */}
      <section id="why-us" className="py-20 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              A Premium Experience Designed For Peace of Mind
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Traditional dog kennels create anxiety through confinement and loud noises. Furry Tales Boarding redefines pet care with absolute luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-brand-gold/10 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                <Crown className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Open-Top Picket Suites</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No steel cages or dark boxes. Our custom, open-top white picket fence suites provide a cozy, cage-free bedroom environment where dogs sleep soundly and feel at home.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-brand-gold/10 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                <Sparkles className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Mud-Free Artificial Turf</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Play yards are surfaced with premium, antimicrobial pet turf. It stays clean, dry, and mud-free in any weather, keeping your pup's paws pristine and joints protected.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-brand-gold/10 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                <Shield className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Elite Safety & Supervision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our pet care specialists are certified in pet CPR and first aid, providing continuous supervision. We check vaccination records meticulously to safeguard all royal guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Pricing Section */}
      <section id="pricing" className="py-20 bg-white border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
              <Scissors className="h-4 w-4 text-brand-gold" />
              <span>Royal Treatment Salon & Spa</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Transparent Styling & Spa Pricing
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Custom styling packages designed for all breeds. From standard baths to specialty scissor haircuts for Doodles and extra large breeds like Great Pyrenees.
            </p>
          </div>

          <PricingTable />
        </div>
      </section>

      {/* 4. Location Wayfinding Section */}
      <section id="locations" className="py-16 bg-brand-cream border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="h-4 w-4" />
                <span>Dual Facility Convenience</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">
                Serving the Greater Chattanooga Area
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-brand-gold pl-4">
                  <h4 className="font-bold text-brand-navy text-base">Ooltewah Facility (Main Office)</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Located near the Ringgold Road intersection, our main Ooltewah location features our primary indoor suites, turf play fields, and full-service grooming salon.
                  </p>
                  <p className="text-sm font-semibold text-brand-navy mt-1.5">
                    📍 5035 Ooltewah Ringgold Rd, Ooltewah, TN 37363
                  </p>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-bold text-brand-navy text-base">Harrison Facility</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Our scenic Harrison facility offers full boarding options and outdoor areas, providing a convenient drop-off point for northern Hamilton County pet owners.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md relative bg-gray-100 border border-brand-gold/20 flex flex-col justify-center items-center text-center p-6">
              {/* Dynamic Map Mockup / Local SEO Signal */}
              <div className="absolute inset-0 bg-brand-navy opacity-5 z-0" />
              <MapPin className="h-12 w-12 text-brand-gold mb-4 animate-bounce relative z-10" />
              <h3 className="font-serif text-xl font-bold text-brand-navy relative z-10">Ooltewah, Tennessee</h3>
              <p className="text-sm text-gray-500 max-w-sm mt-2 relative z-10">
                Conveniently located for residents of Ooltewah, Harrison, Collegedale, Chattanooga, Apison, and East Brainerd.
              </p>
              <a
                href="https://maps.google.com/?q=5035+Ooltewah+Ringgold+Rd,+Ooltewah,+TN+37363"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2.5 rounded-full bg-brand-navy text-white hover:bg-brand-blue text-xs font-bold relative z-10 shadow transition-colors flex items-center space-x-1.5"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
