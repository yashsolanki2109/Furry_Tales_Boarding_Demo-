"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, UploadCloud } from "lucide-react";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-brand-navy/95 backdrop-blur-md border-t border-brand-gold/20 px-4 py-3 shadow-2xl transition-all duration-500 transform md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center space-x-3 w-full">
        <Link
          href="/book-now?step=vaccine"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-full text-xs font-semibold text-brand-gold border border-brand-gold/30 hover:border-brand-gold bg-transparent transition-colors"
        >
          <UploadCloud className="h-4 w-4" />
          <span>Vaccines</span>
        </Link>
        <Link
          href="/book-now"
          className="flex-[2] flex items-center justify-center space-x-1.5 py-2.5 rounded-full text-xs font-bold bg-gradient-gold text-brand-navy shadow-md transition-transform active:scale-[0.97]"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Royal Stay</span>
        </Link>
      </div>
    </div>
  );
}
