import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
