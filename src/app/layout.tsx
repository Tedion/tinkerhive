import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TinkerHive — We Tinker. You Thrive.",
  description:
    "Websites, apps, cloud infrastructure, and DevOps handcrafted by senior engineers. Serving businesses in the US, Canada, EU, Middle East, and Australia.",
  keywords: [
    "web development",
    "app development",
    "cloud management",
    "private cloud",
    "DevOps consulting",
    "platform engineering",
    "open source",
    "AWS",
    "Kubernetes",
    "Terraform",
  ],
  openGraph: {
    title: "TinkerHive — We Tinker. You Thrive.",
    description:
      "Websites, apps, cloud infrastructure, and DevOps handcrafted by senior engineers.",
    url: "https://tinkerhive.com",
    siteName: "TinkerHive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TinkerHive — We Tinker. You Thrive.",
    description:
      "Websites, apps, cloud infrastructure, and DevOps handcrafted by senior engineers.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
