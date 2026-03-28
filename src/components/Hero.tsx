"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]">
      {/* Subtle background gradients — CSS only */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-[#00b4d8]/[0.14] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] rounded-full bg-[#00b4d8]/[0.10] blur-[140px]" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/[0.10] blur-[140px]" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Animated dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 py-32 text-center">
        {/* Announcement banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00b4d8]/20 bg-[#00b4d8]/[0.06] px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-sm text-[#94a3b8]">
            Software Engineering · DevOps · Managed Operations
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="font-extrabold tracking-tight leading-[1.08]"
          style={{ fontSize: "clamp(2.2rem, 5vw + 1rem, 4rem)" }}
        >
          <span className="text-[#f1f5f9]">Built to Launch.</span>
          <br />
          <span className="bg-gradient-to-r from-[#00b4d8] to-[#67e8f9] bg-clip-text text-transparent">Built to Last.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-[#94a3b8] leading-relaxed"
          style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.2rem)" }}
        >
          We take your idea from concept to a live product — and maintain it
          every day after. Software development, cloud infrastructure, and
          DevOps, all under one roof.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-7 py-3.5 font-semibold text-[#0f172a] transition-all duration-300 hover:bg-[#0096b7] hover:brightness-110 hover:shadow-lg hover:shadow-[#00b4d8]/25 cursor-pointer will-change-transform"
          >
            Start Your Project
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-[#334155] px-7 py-3.5 font-semibold text-[#f1f5f9] transition-all duration-300 hover:border-[#00b4d8]/50 hover:text-[#00b4d8] hover:shadow-[0_0_15px_rgba(0,180,216,0.15)] cursor-pointer will-change-transform"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex items-center justify-center gap-4 text-sm text-[#64748b]"
        >
          <span>10+ Projects Delivered</span>
          <span className="text-[#475569]">|</span>
          <span>99.9% Uptime</span>
          <span className="text-[#475569]">|</span>
          <span>&lt;4hr Response Time</span>
        </motion.div>

        {/* Subtle divider */}
        <div className="mt-6 h-px w-24 mx-auto bg-[#1e293b]" />
      </div>

      {/* Fade-to-transparent gradient at bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
