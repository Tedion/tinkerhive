import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Our Mission, Values & Story",
  description:
    "TinkerHive is a founder-led software engineering and DevOps firm based in Addis Ababa, serving clients worldwide. Learn about our mission, values, and the team behind the work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TinkerHive — Our Mission, Values & Story",
    description:
      "Founder-led engineering firm building and running software products for businesses across 4 continents. One team from first line of code to long-term operations.",
    url: "https://tinkerhive.dev/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
