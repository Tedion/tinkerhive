import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Get in touch with TinkerHive. Tell us what you're building and we'll respond within 4 hours with a clear plan and honest pricing.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TinkerHive — Start a Project",
    description: "Book a free 30-minute call. One team, one contract — from first line of code to long-term operations.",
    url: "https://tinkerhive.dev/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative bg-[#0f172a] pt-32 pb-20 overflow-hidden">
          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full bg-[#00b4d8]/[0.12] blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#7c3aed]/[0.10] blur-[120px]" />
          </div>

          {/* Dot grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00b4d8]/20 bg-[#00b4d8]/[0.06] px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00b4d8]">
                  Get in touch
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] leading-[1.1] mb-5">
                Let&apos;s build something<br />
                <span className="bg-gradient-to-r from-[#00b4d8] to-[#67e8f9] bg-clip-text text-transparent">
                  great together.
                </span>
              </h1>

              {/* Sub */}
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                Tell us what you&apos;re building. We&apos;ll respond within 4 hours with a
                clear plan and honest pricing — no sales calls, no fluff.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#1e293b] pt-10">
              {[
                { value: "< 4hr", label: "Response time" },
                { value: "10+", label: "Projects delivered" },
                { value: "4", label: "Continents served" },
                { value: "100%", label: "Client retention" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[#00b4d8]">{stat.value}</p>
                  <p className="text-xs text-[#475569] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact form — standalone mode ── */}
        <Contact standalone />
      </main>
      <Footer />
    </>
  );
}
