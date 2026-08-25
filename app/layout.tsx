import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nikhar Herbal Beauty Parlour | Premium Indian Beauty & Bridal Studio in Barnagar",
  description: "Experience luxury beauty treatments, high-end bridal makeup, elegant hairstyling, mehndi, and traditional Indian styling at Jawahar Marg, Barnagar, Madhya Pradesh. Book your consultation today.",
  keywords: [
    "Nikhar Herbal Beauty Parlour",
    "Bridal makeup Barnagar",
    "Beauty parlour Barnagar",
    "Best salon in Badnagar Ujjain",
    "Indian bridal styling Madhya Pradesh",
    "Traditional hair styling Barnagar",
    "Facial and skin glow treatment Badnagar",
    "Mehndi styling Jawahar Marg"
  ],
  openGraph: {
    title: "Nikhar Herbal Beauty Parlour | Premium Indian Beauty & Bridal Studio",
    description: "High-end bridal makeup, elegant hairstyling, and luxury skin treatments in Barnagar, Madhya Pradesh.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // LocalBusiness schema for rich search results
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Nikhar Herbal Beauty Parlour",
    "image": "https://nikharparlour.com/images/hero_bridal.png", // representative URL
    "@id": "https://maps.google.com/?cid=18042456488350154720", // representative google CID
    "url": "https://nikharparlour.com",
    "telephone": "+919425475675",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jawahar Marg",
      "addressLocality": "Badnagar (Barnagar)",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "456771",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0104237,
      "longitude": 75.6755305
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": []
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-espresso antialiased">
        {children}
      </body>
    </html>
  );
}
