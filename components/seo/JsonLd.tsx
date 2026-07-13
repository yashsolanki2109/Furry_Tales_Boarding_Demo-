import React from "react";

export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PetStore",
        "@id": "https://furrytalesonline.com/#ooltewah",
        "name": "Furry Tales Boarding - Ooltewah",
        "url": "https://furrytalesonline.com/",
        "logo": "https://furrytalesonline.com/favicon.ico",
        "image": "https://furrytalesonline.com/hero_background.jpg",
        "description": "Premium cage-free dog boarding, luxury turf play yard daycare, and professional grooming salon in Ooltewah, TN.",
        "telephone": "(423) 238-4228",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5035 Ooltewah Ringgold Rd",
          "addressLocality": "Ooltewah",
          "addressRegion": "TN",
          "postalCode": "37363",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 35.0487,
          "longitude": -85.0682
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "16:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "16:00",
            "closes": "18:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pet Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cage-Free Dog Boarding",
                "description": "Suites with custom open-top white picket fences, premium bedding, and daily activities."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dog Daycare",
                "description": "Lush antimicrobial turf play yard with certified team supervision."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Grooming",
                "description": "Full breed cuts, bath packages, and specialty Doodle grooming."
              }
            }
          ]
        }
      },
      {
        "@type": "PetStore",
        "@id": "https://furrytalesonline.com/#harrison",
        "name": "Furry Tales Boarding - Harrison",
        "url": "https://furrytalesonline.com/",
        "description": "Premium cage-free dog boarding and spacious play yards serving North Chattanooga and Harrison, TN.",
        "telephone": "(423) 238-4228",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Harrison",
          "addressRegion": "TN",
          "postalCode": "37341",
          "addressCountry": "US"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
