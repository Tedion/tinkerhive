"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <AnimateIn>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build your digital everything?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We&apos;ll discuss your project, give
            you an honest assessment, and outline next steps — no obligations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-lg hover:bg-surface hover:shadow-xl transition-all"
            >
              Get a Free Quote{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="mailto:hello@tinkerhive.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              hello@tinkerhive.com
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
