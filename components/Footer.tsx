import React from "react";
import Link from "next/link";
import { Crown, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-gold/20 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-gold p-1.5 rounded-lg">
                <Crown className="h-5 w-5 text-brand-navy" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Furry Tales
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Providing premium cage-free boarding, luxury doggie daycare, and expert grooming services. Every pet receives the royal treatment.
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-2">
                Local SEO Wayfinding
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Proudly serving Ooltewah, Harrison, Chattanooga, Collegedale, Apison, and Cleveland, TN.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-brand-gold/10 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#services" className="hover:text-brand-gold transition-colors duration-200">
                  Royal Dog Boarding
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-brand-gold transition-colors duration-200">
                  Luxury Doggie Daycare
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-brand-gold transition-colors duration-200">
                  Professional Grooming
                </Link>
              </li>
              <li>
                <Link href="/book-now?step=vaccine" className="hover:text-brand-gold transition-colors duration-200 text-brand-gold-light font-medium">
                  Upload Vaccinations
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="hover:text-brand-gold transition-colors duration-200 font-medium">
                  Book Royal Stay
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-brand-gold/10 pb-2">
              Our Locations
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-brand-gold font-bold text-xs uppercase tracking-wider block mb-1">
                  Ooltewah Facility (Main)
                </span>
                <p className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    5035 Ooltewah Ringgold Rd<br />
                    Ooltewah, TN 37363
                  </span>
                </p>
                <a
                  href="https://maps.google.com/?q=5035+Ooltewah+Ringgold+Rd,+Ooltewah,+TN+37363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-brand-gold hover:underline mt-1.5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
              <div className="pt-1">
                <span className="text-brand-gold font-bold text-xs uppercase tracking-wider block mb-1">
                  Harrison Facility
                </span>
                <p className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    Harrison, TN 37341<br />
                    (Serving North Chattanooga)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-brand-gold/10 pb-2">
              Hours & Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2.5">
                <Clock className="h-4 w-4 text-brand-gold" />
                <div>
                  <p className="text-xs text-gray-400">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-xs text-gray-400">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-xs text-gray-400">Sun: Pickups 4 PM - 6 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="h-4 w-4 text-brand-gold" />
                <a href="tel:4232384228" className="hover:text-brand-gold transition-colors duration-200">
                  (423) 238-4228
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a href="mailto:info@furrytalesonline.com" className="hover:text-brand-gold transition-colors duration-200">
                  info@furrytalesonline.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Furry Tales Boarding. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
