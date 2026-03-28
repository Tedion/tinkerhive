"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, CheckCircle, ArrowRight, Shield, Zap, Users, Clock, Globe } from "lucide-react";
import Logo from "./Logo";

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:ring-2";

const inputClasses = `${inputBase} border-[#e2e8f0] focus:border-[#00b4d8] focus:ring-[#00b4d8]/20`;

const serviceOptions = [
  "Software Development",
  "Cloud & Infrastructure",
  "DevOps & Platform Engineering",
  "AI Engineering",
  "Security",
  "24/7 Managed Operations",
  "Not sure yet",
];

const trustSignals = [
  {
    icon: Zap,
    label: "< 4hr response",
    sub: "On business days",
    color: "#00b4d8",
  },
  {
    icon: Shield,
    label: "Confidential by default",
    sub: "No NDA required",
    color: "#7c3aed",
  },
  {
    icon: Users,
    label: "Direct founder access",
    sub: "You talk to the engineer",
    color: "#10b981",
  },
];

const recentWork = [
  { label: "OpenG2P", detail: "Gov digital platform · Ethiopia", color: "#00b4d8" },
  { label: "Exponent.ch", detail: "AI infrastructure · Geneva", color: "#7c3aed" },
  { label: "WeTruck", detail: "Serverless logistics · AWS", color: "#10b981" },
];

export default function Contact({ standalone = false }: { standalone?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: "b75f60ac-3df3-4df4-b3d4-6e7db3285881",
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error(`Blocked (status ${res.status}) — likely domain not verified`);
      }

      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError(json.message || "Something went wrong. Please email hello@tinkerhive.dev");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setError(err instanceof Error ? err.message : "Network error. Please email hello@tinkerhive.dev");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`bg-[#f8fafc] ${standalone ? "pt-0 pb-24" : "py-24 sm:py-32"}`}
    >
      {!standalone && (
        <div className="flex items-center justify-center mb-20">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e2e8f0]" />
          <div className="mx-3 h-2 w-2 rotate-45 bg-[#00b4d8]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e2e8f0]" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* ── Left panel ──────────────────────────────────────────── */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">

            {/* Logo */}
            <div className="mb-8">
              <Logo variant="hex" theme="light" size={40} />
            </div>

            {/* Label + Headline */}
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0369a1] mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] leading-[1.1] mb-4">
              Let&apos;s build something<br />
              <span className="bg-gradient-to-r from-[#00b4d8] to-[#0369a1] bg-clip-text text-transparent">
                great together.
              </span>
            </h2>
            <p className="text-[#475569] leading-relaxed text-[0.95rem] mb-10">
              Tell us what you&apos;re building. We&apos;ll respond within 4 hours
              with a clear plan and honest pricing — no sales calls, no fluff.
            </p>

            {/* Trust signals */}
            <div className="space-y-4 mb-10">
              {trustSignals.map((t) => (
                <div key={t.label} className="flex items-center gap-3.5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${t.color}15` }}
                  >
                    <t.icon size={16} style={{ color: t.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a] leading-tight">{t.label}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e2e8f0] mb-8" />

            {/* Recent work */}
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#94a3b8] mb-4">
              Recent work
            </p>
            <div className="space-y-3">
              {recentWork.map((w) => (
                <div key={w.label} className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: w.color }}
                  />
                  <span className="text-sm font-semibold text-[#0f172a]">{w.label}</span>
                  <span className="text-xs text-[#94a3b8] truncate">— {w.detail}</span>
                </div>
              ))}
            </div>

            {/* Email fallback */}
            <div className="mt-10 flex items-center gap-2">
              <Mail size={13} className="shrink-0 text-[#94a3b8]" />
              <span className="text-sm text-[#64748b]">Or email us directly:</span>
              <a
                href="mailto:hello@tinkerhive.dev"
                className="text-sm font-semibold text-[#0369a1] hover:text-[#00b4d8] transition-colors duration-150"
              >
                hello@tinkerhive.dev
              </a>
            </div>
          </div>

          {/* ── Right panel — Form card ──────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.07)] overflow-hidden">

              {/* Form card header */}
              <div className="border-b border-[#f1f5f9] bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] px-8 py-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#0f172a]">Start a project</p>
                  <p className="text-xs text-[#64748b] mt-0.5">Free consultation · No commitment</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">Available now</span>
                </div>
              </div>

              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-100">
                    <CheckCircle size={36} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Message received!</h3>
                  <p className="text-[#475569] text-sm max-w-xs leading-relaxed mb-8">
                    We&apos;ll review your project and get back to you within 4 hours
                    with a clear plan and honest pricing.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3 text-sm font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors duration-200"
                  >
                    Explore our services <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                  {/* Row 1 — Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                        Full name <span className="text-red-400 normal-case tracking-normal">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                        Work email <span className="text-red-400 normal-case tracking-normal">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Company + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Inc."
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                        Service needed <span className="text-red-400 normal-case tracking-normal">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className={inputClasses}
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                      Budget range
                    </label>
                    <select id="budget" name="budget" defaultValue="" className={inputClasses}>
                      <option value="" disabled>Select budget range</option>
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                      <option>Ongoing / retainer</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                      Project description <span className="text-red-400 normal-case tracking-normal">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project — what you're building, your timeline, and any specific requirements..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-4 text-sm font-bold text-[#0f172a] transition-all duration-200 hover:bg-[#0096b7] hover:shadow-lg hover:shadow-[#00b4d8]/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-[#0f172a]/30 border-t-[#0f172a] animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  {/* Footer note */}
                  <p className="text-center text-xs text-[#94a3b8] leading-relaxed">
                    By submitting you agree to our{" "}
                    <Link href="/privacy" className="underline underline-offset-2 hover:text-[#0369a1] transition-colors">
                      Privacy Policy
                    </Link>
                    . We respond within 4 hours on business days.
                  </p>
                </form>
              )}
            </div>

            {/* Bottom trust bar */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: Clock, text: "< 4hr response" },
                { icon: Shield, text: "Confidential by default" },
                { icon: Globe, text: "4 continents served" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                  <item.icon size={12} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
