import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About TinkerHive — Our Mission, Values & Story",
  description:
    "TinkerHive is a founder-led software engineering and DevOps firm based in Addis Ababa, serving clients worldwide. Learn about our mission, values, and the team behind the work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TinkerHive — Our Mission, Values & Story",
    description:
      "Founder-led engineering firm building and running software products for businesses across 4 continents. One team from first line of code to long-term operations.",
    url: "https://tinkerhive.com/about",
  },
};

const values = [
  {
    title: "Own the Outcome",
    description:
      "We don't stop at delivery. We own the full lifecycle — build, launch, and long-term operations. If it breaks at 2 AM, we fix it.",
  },
  {
    title: "Radical Transparency",
    description:
      "Fixed pricing, honest timelines, weekly demos. You always know what's happening and why. No surprises — ever.",
  },
  {
    title: "Engineer-First Thinking",
    description:
      "Every decision is made by the engineer doing the work. No project managers playing telephone between you and the builder.",
  },
  {
    title: "Global Ambition, Local Roots",
    description:
      "Based in Addis Ababa, serving clients across the US, EU, Middle East, and Oceania. World-class engineering from the heart of Africa.",
  },
  {
    title: "Built to Last",
    description:
      "We build things that work for years, not just for the demo. Production-grade infrastructure, clean code, proper testing.",
  },
  {
    title: "No Handoffs, No Gaps",
    description:
      "One team from start to finish. The person who designs your system is the one who deploys it and maintains it.",
  },
];

const milestones = [
  { year: "2016", event: "Teddy starts his engineering career — network infrastructure and enterprise systems." },
  { year: "2019", event: "First DevOps engagements — Kubernetes, CI/CD pipelines, and cloud migrations for Ethiopian enterprises." },
  { year: "2021", event: "Led DevOps for Ethiopia's national social protection platform (OpenG2P) across multiple government ministries." },
  { year: "2022", event: "Deployed mobile banking infrastructure for three Ethiopian banks on Proxmox private cloud." },
  { year: "2023", event: "Built cloud-native serverless platform for WeTruck on AWS; GPU AI infrastructure for Exponent.ch in Geneva." },
  { year: "2024", event: "Co-validated 23/28 patent claims on NetrionX DDEF — a distributed AI orchestration platform across AWS, GCP, and edge." },
  { year: "2025", event: "TinkerHive founded — bringing together 8+ years of engineering experience into a single, full-lifecycle firm." },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "4", label: "Continents Served" },
  { value: "8+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime Target" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0f172a] pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">About TinkerHive</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f1f5f9] leading-tight max-w-3xl">
              One Team.<br />
              <span className="text-[#00b4d8]">The Whole Journey.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
              TinkerHive is a founder-led software engineering and DevOps firm. We build your product, launch it, and
              keep it running — from the first line of code to long-term production operations. No handoffs. No gaps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3 font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-6 py-3 font-semibold text-[#f1f5f9] hover:border-[#00b4d8]/50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1e293b] py-12 border-y border-[#334155]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold text-[#00b4d8]">{s.value}</p>
                  <p className="mt-1 text-sm text-[#94a3b8]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Our Mission</p>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
                  Build great software. Keep it running. Never disappear.
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Most agencies build your product and hand you the keys. Then something breaks at 2 AM and you're on
                  your own. TinkerHive is different. We own your entire product lifecycle — from writing the first
                  line of code to launching it live and keeping it running every day after. Founded by an engineer
                  who's done it all, we don't hand off. We stay.
                </p>
                <p className="mt-4 text-[#475569] leading-relaxed">
                  We serve startups, scale-ups, and enterprises across four continents — delivering the same standard
                  of engineering to a fintech in Geneva as to a government platform in Addis Ababa.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Our Vision</p>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
                  The most trusted engineering partner for ambitious builders.
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We want to be the firm that ambitious founders, CTOs, and product leaders call when they need
                  something built right and kept running. Not the cheapest option — the most reliable one.
                </p>
                <p className="mt-4 text-[#475569] leading-relaxed">
                  A world where great engineering isn't gatekept by geography. Where a company in East Africa can
                  deliver the same production-grade infrastructure as a Silicon Valley firm. That's what we're
                  building toward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-[#f8fafc] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Core Values</p>
              <h2 className="text-3xl font-bold text-[#0f172a]">What we stand for</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f9ff] border border-[#00b4d8]">
                      <Check size={13} className="text-[#00b4d8]" strokeWidth={2.5} />
                    </span>
                    <h3 className="font-semibold text-[#0f172a]">{v.title}</h3>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story — Timeline */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-[#0f172a]">8 years in the making</h2>
            </div>
            <div className="relative max-w-3xl">
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#e2e8f0]" aria-hidden="true" />
              <div className="space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="relative flex gap-6 pl-8">
                    <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#00b4d8] bg-white" />
                    <div>
                      <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">{m.year}</span>
                      <p className="mt-1 text-[#475569] text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-[#0f172a] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-6">Founder</p>
              <blockquote className="text-2xl font-medium text-[#f1f5f9] leading-relaxed mb-6">
                &ldquo;I built TinkerHive because I kept seeing the same failure mode: great software shipped, then abandoned.
                The infrastructure falls apart. The team moves on. The product suffers.
                We exist to be the team that never leaves.&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-[#f1f5f9]">Teddy Abera</p>
                <p className="text-sm text-[#64748b]">Founder & Lead Engineer, TinkerHive · Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f8fafc] py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Ready to build something great?</h2>
            <p className="text-[#475569] mb-8 max-w-xl mx-auto">
              Tell us what you're building. We'll put together a clear plan, honest pricing, and get to work.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-8 py-4 font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
            >
              Start the Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
