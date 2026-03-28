"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Target, Eye, Zap } from "lucide-react";
import { useState } from "react";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

const vmvTabs = [
  {
    id: "mission",
    label: "Mission",
    icon: Zap,
    heading: "Build great software. Keep it running. Never disappear.",
    body: [
      "Most agencies build your product and hand you the keys. Then something breaks at 2 AM and you're on your own. TinkerHive is different — we own your entire product lifecycle from first line of code to long-term production operations.",
      "We serve startups, scale-ups, and enterprises across four continents — delivering the same standard of engineering to a fintech in Geneva as to a government platform in Addis Ababa.",
    ],
  },
  {
    id: "vision",
    label: "Vision",
    icon: Eye,
    heading: "The most trusted engineering partner for ambitious builders.",
    body: [
      "We want to be the firm that ambitious founders, CTOs, and product leaders call when they need something built right and kept running. Not the cheapest option — the most reliable one.",
      "A world where great engineering isn't gatekept by geography. Where a company in East Africa can deliver the same production-grade infrastructure as a Silicon Valley firm.",
    ],
  },
  {
    id: "values",
    label: "Values",
    icon: Target,
    heading: "What we stand for every single day.",
    body: [
      "Every engagement we take on is guided by six principles: owning the outcome, radical transparency, engineer-first thinking, global ambition with local roots, building to last, and eliminating handoffs.",
      "These aren't wall posters — they're the criteria we use to decide how to act when situations are ambiguous and the easy path is to take a shortcut.",
    ],
  },
];

const values = [
  {
    title: "Own the Outcome",
    description: "We don't stop at delivery. We own the full lifecycle — build, launch, and long-term operations. If it breaks at 2 AM, we fix it.",
  },
  {
    title: "Radical Transparency",
    description: "Fixed pricing, honest timelines, weekly demos. You always know what's happening and why. No surprises — ever.",
  },
  {
    title: "Engineer-First Thinking",
    description: "Every decision is made by the engineer doing the work. No project managers playing telephone between you and the builder.",
  },
  {
    title: "Global Ambition, Local Roots",
    description: "Based in Addis Ababa, serving clients across the US, EU, Middle East, and Oceania. World-class engineering from the heart of Africa.",
  },
  {
    title: "Built to Last",
    description: "We build things that work for years, not just for the demo. Production-grade infrastructure, clean code, proper testing.",
  },
  {
    title: "No Handoffs, No Gaps",
    description: "One team from start to finish. The person who designs your system is the one who deploys it and maintains it.",
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

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = vmvTabs[activeTab];
  const TabIcon = tab.icon;

  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ── */}
        <section className="bg-[#0f172a] pt-32 pb-24 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(0,180,216,0.08) 0%, transparent 60%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-4">About TinkerHive</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f1f5f9] leading-tight">
                  One Team.<br />
                  <span className="text-[#00b4d8]">The Whole Journey.</span>
                </h1>
                <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed">
                  TinkerHive is a founder-led software engineering and DevOps firm. We build your product,
                  launch it, and keep it running — from the first line of code to long-term production operations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
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

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-[#1e293b] bg-[#1e293b]/60 p-6 text-center"
                  >
                    <p className="text-4xl font-bold text-[#00b4d8]">{s.value}</p>
                    <p className="mt-2 text-sm text-[#94a3b8]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission / Vision / Values tabs (IE Networks style) ── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateIn variant="fadeUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0369a1] mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-10">What drives us every day</h2>
            </AnimateIn>

            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
              {/* Sidebar tabs */}
              <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-[#e2e8f0] bg-[#f8fafc] flex lg:flex-col">
                {vmvTabs.map((t, i) => {
                  const TIcon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(i)}
                      className={[
                        "flex-1 lg:flex-none flex items-center gap-3 px-5 py-5 text-sm font-semibold transition-all duration-200 text-left border-r lg:border-r-0 lg:border-b border-[#e2e8f0] last:border-0",
                        activeTab === i
                          ? "bg-[#00b4d8] text-[#0f172a]"
                          : "text-[#475569] hover:bg-white hover:text-[#0f172a]",
                      ].join(" ")}
                    >
                      <TIcon size={18} className="shrink-0" />
                      <span className="hidden sm:inline">{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab content panel */}
              <div className="lg:col-span-4 p-8 sm:p-12 min-h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00b4d8]/10">
                    <TabIcon size={20} className="text-[#00b4d8]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#0f172a]">{tab.heading}</h3>
                </div>
                {tab.body.map((para, i) => (
                  <p key={i} className={`text-[#475569] leading-relaxed${i > 0 ? " mt-4" : ""}`}>{para}</p>
                ))}

                {/* Values grid — only in Values tab */}
                {tab.id === "values" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {values.map((v) => (
                      <div key={v.title} className="flex items-start gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f9ff] border border-[#00b4d8] mt-0.5">
                          <Check size={12} className="text-[#00b4d8]" strokeWidth={2.5} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[#0f172a]">{v.title}</p>
                          <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{v.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline + Founder ── */}
        <section className="bg-[#f8fafc] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateIn variant="fadeUp">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0369a1] mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-12">8 years in the making</h2>
            </AnimateIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Timeline */}
              <div className="relative max-w-xl">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#e2e8f0]" aria-hidden="true" />
                <StaggerContainer className="space-y-8">
                  {milestones.map((m) => (
                    <StaggerItem key={m.year}>
                      <div className="relative flex gap-6 pl-8">
                        <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#00b4d8] bg-white" />
                        <div>
                          <span className="text-xs font-bold text-[#0369a1] uppercase tracking-wider">{m.year}</span>
                          <p className="mt-1 text-[#475569] text-sm leading-relaxed">{m.event}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Founder card */}
              <AnimateIn variant="fadeUp" delay={0.15}>
                <div className="rounded-2xl bg-[#0f172a] p-8 sm:p-10 border border-[#1e293b]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-6">Founder</p>
                  <blockquote className="text-xl font-medium text-[#f1f5f9] leading-relaxed mb-6">
                    &ldquo;I built TinkerHive because I kept seeing the same failure mode: great software shipped,
                    then abandoned. The infrastructure falls apart. The team moves on. The product suffers.
                    We exist to be the team that never leaves.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#00b4d8]/20 border-2 border-[#00b4d8]/40 flex items-center justify-center text-lg font-bold text-[#00b4d8]">
                      T
                    </div>
                    <div>
                      <p className="font-semibold text-[#f1f5f9]">Teddy Abera</p>
                      <p className="text-sm text-[#94a3b8]">Founder & Lead Engineer · Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Ready to build something great?</h2>
              <p className="text-[#475569] mb-8 max-w-xl mx-auto">
                Tell us what you&apos;re building. We&apos;ll put together a clear plan, honest pricing, and get to work.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-8 py-4 font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
              >
                Start the Conversation <ArrowRight size={16} />
              </Link>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
