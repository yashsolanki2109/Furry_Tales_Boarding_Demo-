"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Crown, Menu, X, UploadCloud, Calendar } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy/95 backdrop-blur-md py-3 shadow-lg border-b border-brand-gold/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-gold p-1.5 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              <Crown className="h-6 w-6 text-brand-navy" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300">
                Furry Tales
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-light -mt-1 font-semibold">
                Boarding & Daycare
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-200 hover:text-brand-gold transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/#why-us"
              className="text-sm font-medium text-gray-200 hover:text-brand-gold transition-colors duration-200"
            >
              Why Royal Stay
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-gray-200 hover:text-brand-gold transition-colors duration-200"
            >
              Rates
            </Link>
            <Link
              href="/#locations"
              className="text-sm font-medium text-gray-200 hover:text-brand-gold transition-colors duration-200"
            >
              Locations
            </Link>
          </nav>

          {/* Desktop Call-to-Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/book-now?step=vaccine"
              className="flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full text-brand-gold hover:text-white border border-brand-gold/30 hover:border-brand-gold bg-transparent transition-all duration-300"
            >
              <UploadCloud className="h-4 w-4" />
              <span>Vaccine Records</span>
            </Link>
            <Link
              href="/book-now"
              className="flex items-center space-x-1.5 text-xs font-bold px-6 py-2.5 rounded-full bg-gradient-gold text-brand-navy hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-brand-gold/20 transition-all duration-300"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Your Royal Stay</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              href="/book-now"
              className="text-xs font-bold px-4 py-2 rounded-full bg-gradient-gold text-brand-navy shadow-sm transition-transform duration-300"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-brand-gold p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-brand-navy border-b border-brand-gold/20 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-4">
          <Link
            href="/#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-brand-gold px-3 py-2 rounded-md"
          >
            Services
          </Link>
          <Link
            href="/#why-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-brand-gold px-3 py-2 rounded-md"
          >
            Why Royal Stay
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-brand-gold px-3 py-2 rounded-md"
          >
            Rates
          </Link>
          <Link
            href="/#locations"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-brand-gold px-3 py-2 rounded-md"
          >
            Locations
          </Link>
          <div className="pt-4 border-t border-gray-700/50 flex flex-col space-y-3">
            <Link
              href="/book-now?step=vaccine"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 text-sm font-semibold py-2.5 rounded-full text-brand-gold border border-brand-gold/30"
            >
              <UploadCloud className="h-4 w-4" />
              <span>Upload Vaccine Records</span>
            </Link>
            <Link
              href="/book-now"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 text-sm font-bold py-3 rounded-full bg-gradient-gold text-brand-navy shadow-md"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Your Royal Stay</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
