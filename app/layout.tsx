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
  title: "Nikhar Makeovers | Premium Indian Beauty & Bridal Studio in Indore",
  description: "Experience luxury beauty treatments, high-end bridal makeup, elegant hairstyling, mehndi, and traditional Indian styling at Harsola, Indore, Madhya Pradesh. Book your consultation today.",
  metadataBase: new URL("https://nikharmakeovers.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Nikhar Makeovers",
    "Bridal makeup Indore",
    "Beauty parlour Indore",
    "Best salon in Harsola Indore",
    "Indian bridal styling Madhya Pradesh",
    "Traditional hair styling Indore",
    "Facial and skin glow treatment Indore",
    "Mehndi styling Indore"
  ],
  openGraph: {
    title: "Nikhar Makeovers | Premium Indian Beauty & Bridal Studio",
    description: "High-end bridal makeup, elegant hairstyling, and luxury skin treatments in Indore, Madhya Pradesh.",
    url: "https://nikharmakeovers.com",
    siteName: "Nikhar Makeovers",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // LocalBusiness schema for rich search results
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Nikhar Makeovers",
    "image": "https://nikharparlour.com/images/hero_bridal.png", // representative URL
    "@id": "https://maps.google.com/?cid=18042456488350154720", // representative google CID
    "url": "https://nikharparlour.com",
    "telephone": "+918827417126",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12-Kha, Dampura, Harsola",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "453441",
      "addressCountry": "IN"
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
