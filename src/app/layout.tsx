import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tinkerhive.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "TinkerHive — Software Engineering, DevOps & Cloud Infrastructure",
    template: "%s | TinkerHive",
  },
  description:
    "TinkerHive is a founder-led software engineering and DevOps firm. We build your product, launch it, and keep it running — all under one roof. Serving clients across the US, EU, Middle East, and beyond.",
  keywords: [
    "software development company",
    "DevOps consulting",
    "cloud infrastructure",
    "Kubernetes managed services",
    "platform engineering",
    "web application development",
    "mobile app development",
    "AI engineering",
    "private cloud setup",
    "AWS managed services",
    "software development Ethiopia",
    "DevOps engineer Addis Ababa",
    "cloud architecture consulting",
    "full stack development",
    "24/7 managed operations",
  ],
  openGraph: {
    title: "TinkerHive — Software Engineering, DevOps & Cloud Infrastructure",
    description:
      "Founder-led engineering firm. We build your product, launch it, and keep it running — all under one roof. 10+ projects delivered across 4 continents.",
    url: "https://tinkerhive.dev",
    siteName: "TinkerHive",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TinkerHive — Built to Launch. Built to Last.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TinkerHive — Software Engineering, DevOps & Cloud Infrastructure",
    description:
      "Founder-led engineering firm. We build, launch, and keep your product running. 10+ projects across 4 continents.",
    creator: "@DTedion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://tinkerhive.dev/#organization",
                name: "TinkerHive",
                url: "https://tinkerhive.dev",
                logo: "https://tinkerhive.dev/icon.svg",
                description: "Founder-led software engineering and DevOps firm. We build, launch, and maintain software products for businesses worldwide.",
                email: "hello@tinkerhive.dev",
                foundingDate: "2025",
                founder: {
                  "@type": "Person",
                  name: "Teddy Abera",
                  jobTitle: "Founder & Lead Engineer",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Addis Ababa",
                  addressCountry: "ET",
                },
                areaServed: ["US", "CA", "GB", "DE", "CH", "AE", "AU", "NZ", "ET"],
                sameAs: [
                  "https://github.com/Tedion",
                  "https://twitter.com/DTedion",
                  "https://linkedin.com/company/tinkerhive",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Engineering Services",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps & Platform Engineering" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Infrastructure Management" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Engineering & MLOps" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Managed Operations" } },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://tinkerhive.dev/#website",
                url: "https://tinkerhive.dev",
                name: "TinkerHive",
                publisher: { "@id": "https://tinkerhive.dev/#organization" },
                potentialAction: {
                  "@type": "ContactAction",
                  target: "https://tinkerhive.dev/#contact",
                  name: "Contact TinkerHive",
                },
              },
            ]),
          }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
