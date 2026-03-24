"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 bg-surface">
      {/* Subtle gradient glow — matches site palette */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="grid-pattern absolute inset-0 opacity-[0.03]" />

      {/* Top and bottom border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimateIn variant="scaleIn">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ready to turn your idea into a{" "}
            <span className="gradient-text">product that lasts?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-light">
            Book a free 30-minute call. Tell us what you&apos;re building, and
            we&apos;ll show you exactly how we&apos;d take it from concept to
            launch — and keep it running after.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                "group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5",
                "text-base font-semibold text-background",
                "glow-cyan hover:bg-primary-dark hover:scale-[1.02] transition-all duration-200"
              )}
            >
              Book a Free Call
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#about"
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border border-[var(--border-light)] px-7 py-3.5",
                "text-base font-semibold text-foreground",
                "hover:border-primary/40 hover:bg-surface-alt transition-all duration-200"
              )}
            >
              Learn More
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
