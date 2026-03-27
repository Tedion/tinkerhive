"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="relative w-full bg-[#0f172a] py-24 sm:py-32 overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Decorative grid dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Decorative ring */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimateIn variant="fadeUp" once={false}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to turn your idea into a product that lasts?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#94a3b8]">
            Book a free 30-minute call. Tell us what you&apos;re building, and
            we&apos;ll show you exactly how we&apos;d take it from concept to
            launch — and keep it running after.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-[#0096b7] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,180,216,0.3)]"
            >
              Book a Free Call
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-7 py-3.5 text-base font-semibold text-[#f1f5f9] transition-colors duration-200 hover:border-[#94a3b8] hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
