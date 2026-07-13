"use client";

import React, { useState } from "react";
import { Scissors, Sparkles, Check, Info } from "lucide-react";

type ServiceTier = {
  name: string;
  desc: string;
  price: string;
  features: string[];
  recommended?: boolean;
};

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState<"standard" | "doodles" | "addons">("standard");
  const [dogSize, setDogSize] = useState<"small" | "medium" | "large" | "giant">("small");

  // Standard Grooming Pricing based on dog size selection
  const standardGrooms: Record<typeof dogSize, ServiceTier[]> = {
    small: [
      {
        name: "Royal Bath & Brush",
        desc: "Essential hygiene and coat refresher.",
        price: "$40",
        features: ["Premium hypoallergenic shampoo", "Blow dry & thorough brush out", "Nail trim & ear cleaning", "Scented finishing spray"],
      },
      {
        name: "Full Royal Groom",
        desc: "Complete head-to-paw premium style.",
        price: "$65",
        features: ["Everything in Bath & Brush", "Custom breed-specific haircut", "Sanitary trim & paw pad shaving", "Warm water hydro-massage bath"],
        recommended: true,
      },
    ],
    medium: [
      {
        name: "Royal Bath & Brush",
        desc: "Essential hygiene and coat refresher.",
        price: "$55",
        features: ["Premium hypoallergenic shampoo", "Blow dry & thorough brush out", "Nail trim & ear cleaning", "Scented finishing spray"],
      },
      {
        name: "Full Royal Groom",
        desc: "Complete head-to-paw premium style.",
        price: "$80",
        features: ["Everything in Bath & Brush", "Custom breed-specific haircut", "Sanitary trim & paw pad shaving", "Warm water hydro-massage bath"],
        recommended: true,
      },
    ],
    large: [
      {
        name: "Royal Bath & Brush",
        desc: "Essential hygiene and coat refresher.",
        price: "$70",
        features: ["Premium hypoallergenic shampoo", "Blow dry & thorough brush out", "Nail trim & ear cleaning", "Scented finishing spray"],
      },
      {
        name: "Full Royal Groom",
        desc: "Complete head-to-paw premium style.",
        price: "$95",
        features: ["Everything in Bath & Brush", "Custom breed-specific haircut", "Sanitary trim & paw pad shaving", "Warm water hydro-massage bath"],
        recommended: true,
      },
    ],
    giant: [
      {
        name: "Royal Bath & Brush",
        desc: "Essential hygiene and coat refresher (e.g. Great Pyrenees).",
        price: "$95",
        features: ["Deep undercoat blowout & de-shed", "Thorough brush & detangle (1hr+)", "Nail trim, ear cleaning & plucking", "Premium natural coat conditioning"],
      },
      {
        name: "Full Royal Groom",
        desc: "High precision style for extra large breeds.",
        price: "$130",
        features: ["Everything in Bath & Brush", "Precision hand-scissor clipping", "Sanitary trim & paw protection balm", "Soothing skin conditioning bath"],
        recommended: true,
      },
    ],
  };

  // Doodle Specialty Grooming (High Maintenance, Flat pricing by size)
  const doodleGrooms: ServiceTier[] = [
    {
      name: "Toy / Mini Doodle",
      desc: "Under 20 lbs. (e.g. Cavapoos, Toy Goldendoodles)",
      price: "$90",
      features: ["Premium de-tangling bath", "Precision teddy-bear scissor finish", "Nail grind & ear cleansing", "Antiseptic paw pad treatment", "Blowout & conditioning"],
    },
    {
      name: "Standard Doodle",
      desc: "20 to 60 lbs. (e.g. Standard Labradoodles, Bernedoodles)",
      price: "$115",
      features: ["Deep clean coat sanitation", "Thorough mat-prevention comb out", "Precision custom body clip", "Ear hygiene & nail buffing", "Moisturizing skin treatment"],
      recommended: true,
    },
    {
      name: "Giant Doodle",
      desc: "Over 60 lbs. (e.g. Giant Goldendoodles, Sheepadoodles)",
      price: "$140",
      features: ["Extra time allocated for high-density coat", "Full structural scissor styling", "Hydrating lavender shampoo & mask", "Nail grind & protective paw wax", "Teeth brushing included"],
    },
  ];

  // Spa Upgrades (Add-ons)
  const spaAddons = [
    { name: "Blueberry Facial", price: "$10", desc: "Aromatic tear-stain removal and calming face wash." },
    { name: "Nail Grinding & Buffing", price: "$15", desc: "Smooths sharp claws, replacing clip pinch." },
    { name: "Furminator De-Shedding", price: "$30", desc: "Specialty wash and blowout to reduce shedding by 90%." },
    { name: "Teeth Brushing & Fresh Breath Gel", price: "$12", desc: "Polishes teeth and promotes gum health." },
    { name: "Soothing Mud Mask", price: "$20", desc: "Mineral-rich therapy to soothe dry, itchy skin." },
    { name: "Paw & Nose Healing Balm", price: "$8", desc: "Soothes and hydrates cracked or dry pads." },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs Selector */}
      <div className="flex justify-center border-b border-brand-gold/20 mb-8 p-1 bg-brand-navy/5 rounded-lg max-w-lg mx-auto">
        <button
          onClick={() => setActiveTab("standard")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 text-xs sm:text-sm font-bold rounded-md transition-all duration-300 ${
            activeTab === "standard"
              ? "bg-brand-navy text-white shadow-md border-b-2 border-brand-gold"
              : "text-gray-500 hover:text-brand-navy"
          }`}
        >
          <Scissors className="h-4 w-4" />
          <span>Standard Grooming</span>
        </button>
        <button
          onClick={() => setActiveTab("doodles")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 text-xs sm:text-sm font-bold rounded-md transition-all duration-300 ${
            activeTab === "doodles"
              ? "bg-brand-navy text-white shadow-md border-b-2 border-brand-gold"
              : "text-gray-500 hover:text-brand-navy"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>Specialty Doodles</span>
        </button>
        <button
          onClick={() => setActiveTab("addons")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 text-xs sm:text-sm font-bold rounded-md transition-all duration-300 ${
            activeTab === "addons"
              ? "bg-brand-navy text-white shadow-md border-b-2 border-brand-gold"
              : "text-gray-500 hover:text-brand-navy"
          }`}
        >
          <span>Spa Upgrades</span>
        </button>
      </div>

      {/* Standard Tab - Sub Size Toggles */}
      {activeTab === "standard" && (
        <div className="flex flex-col items-center mb-10 space-y-3">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
            Select Your Dog's Weight Category
          </span>
          <div className="inline-flex rounded-full bg-white p-1 border border-brand-gold/20 shadow-sm">
            {(["small", "medium", "large", "giant"] as const).map((size) => (
              <button
                key={size}
                onClick={() => setDogSize(size)}
                className={`px-5 py-2 rounded-full text-xs font-bold capitalize transition-all duration-300 ${
                  dogSize === size
                    ? "bg-brand-navy text-white shadow-sm"
                    : "text-gray-500 hover:text-brand-navy"
                }`}
              >
                {size === "small" && "Small (<25lbs)"}
                {size === "medium" && "Medium (25-50lbs)"}
                {size === "large" && "Large (50-80lbs)"}
                {size === "giant" && "Giant (80lbs+ / Pyrenees)"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Pricing Cards Layout */}
      {activeTab === "standard" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {standardGrooms[dogSize].map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                tier.recommended
                  ? "border-brand-gold ring-1 ring-brand-gold/30 gold-border-glow shadow-md relative scale-105"
                  : "border-gray-200 hover:border-brand-gold/30"
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-brand-navy text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Most Requested Stay Option
                </span>
              )}
              <div>
                <h4 className="font-serif text-2xl font-bold text-brand-navy mb-1">{tier.name}</h4>
                <p className="text-xs text-gray-500 mb-6">{tier.desc}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-extrabold text-brand-navy">{tier.price}</span>
                  <span className="text-xs text-gray-400 font-semibold ml-1">/ session starting rate</span>
                </div>
                <ul className="space-y-3.5 mb-8 text-sm">
                  {tier.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/book-now?service=grooming"
                className={`block w-full py-3 rounded-full text-center text-xs font-bold transition-all duration-300 ${
                  tier.recommended
                    ? "bg-brand-navy text-white hover:bg-brand-blue"
                    : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                }`}
              >
                Add Grooming to Stay
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Doodles Tab */}
      {activeTab === "doodles" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doodleGrooms.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                tier.recommended
                  ? "border-brand-gold ring-1 ring-brand-gold/30 gold-border-glow shadow-md relative scale-105 md:translate-y-0"
                  : "border-gray-200 hover:border-brand-gold/30"
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-brand-navy text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Recommended Tier
                </span>
              )}
              <div>
                <h4 className="font-serif text-xl font-bold text-brand-navy mb-1">{tier.name}</h4>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">{tier.desc}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-extrabold text-brand-navy">{tier.price}</span>
                  <span className="text-xs text-gray-400 font-semibold ml-1">/ base rate</span>
                </div>
                <ul className="space-y-3.5 mb-8 text-sm">
                  {tier.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/book-now?service=grooming&breed=doodle"
                className={`block w-full py-3 rounded-full text-center text-xs font-bold transition-all duration-300 ${
                  tier.recommended
                    ? "bg-brand-navy text-white hover:bg-brand-blue"
                    : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                }`}
              >
                Add Doodle Groom
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Spa Upgrades Add-ons Tab */}
      {activeTab === "addons" && (
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="h-5 w-5 text-brand-gold" />
            <h4 className="font-serif text-xl font-bold text-brand-navy">Premium Add-on Enhancements</h4>
          </div>
          <p className="text-xs text-gray-500 mb-8 leading-relaxed">
            Customize your dog's stay or bath with our signature upgrades. Designed to give your pet the ultimate soothing and pampering experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spaAddons.map((addon, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between p-4 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:bg-brand-cream/40 transition-all duration-200"
              >
                <div className="space-y-1 pr-4">
                  <h5 className="font-bold text-sm text-brand-navy">{addon.name}</h5>
                  <p className="text-xs text-gray-500 leading-normal">{addon.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-extrabold text-brand-navy bg-brand-gold/10 px-3 py-1.5 rounded-md border border-brand-gold/10">
                    {addon.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center space-x-2 bg-brand-cream/30 p-3 rounded-lg">
            <Info className="h-4.5 w-4.5 text-brand-gold shrink-0" />
            <p className="text-xs text-gray-500">
              Note: Grooming quotes are base estimates. Prices may vary slightly depending on coat condition, matting, or pet temperament.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
