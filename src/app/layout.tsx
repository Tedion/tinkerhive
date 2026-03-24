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
  metadataBase: new URL("https://tinkerhive.com"),
  alternates: {
    canonical: "/",
  },
  title: "TinkerHive — We Tinker. You Thrive.",
  description:
    "We build your product, launch it, and keep it running. Software development, cloud infrastructure, and DevOps — all under one roof. Serving businesses worldwide.",
  keywords: [
    "web development",
    "app development",
    "cloud management",
    "private cloud",
    "DevOps consulting",
    "platform engineering",
    "AWS",
    "Kubernetes",
    "Terraform",
  ],
  openGraph: {
    title: "TinkerHive — We Tinker. You Thrive.",
    description:
      "We build your product, launch it, and keep it running. Software development and DevOps under one roof.",
    url: "https://tinkerhive.com",
    siteName: "TinkerHive",
    type: "website",
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
    title: "TinkerHive — We Tinker. You Thrive.",
    description:
      "We build your product, launch it, and keep it running. Software development and DevOps under one roof.",
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="grain min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TinkerHive",
              url: "https://tinkerhive.com",
              description: "We build your product, launch it, and keep it running. Software development, cloud infrastructure, and DevOps — all under one roof.",
              areaServed: ["US", "CA", "EU", "AE", "AU"],
              serviceType: ["Software Development", "DevOps", "Cloud Infrastructure", "Platform Engineering"],
            }),
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
