"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Rocket, Headphones } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We hop on a free 30-minute call to understand your business, goals, and technical needs. No jargon, just a conversation.",
    timeline: "Day 1",
  },
  {
    icon: FileText,
    step: "02",
    title: "Proposal & Plan",
    description:
      "You get a clear scope, timeline, and fixed price. No surprises. We agree on milestones before a single line of code is written.",
    timeline: "Day 2-3",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & Launch",
    description:
      "We build fast, share progress weekly, and launch when you're happy. You have direct access to the senior engineer doing the work.",
    timeline: "Week 1-6",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support",
    description:
      "Post-launch monitoring, maintenance, and improvements. We don't disappear after delivery — we're your long-term tech partner.",
    timeline: "Ongoing",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From first call to live product in weeks, not months. Here&apos;s the
            process.
          </p>
        </AnimateIn>

        <div className="mt-16 relative">
          {/* Animated connector line */}
          <motion.div
            className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originX: 0 }}
          />

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.15}>
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="relative text-center group">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 relative z-10"
                  >
                    <s.icon size={28} />
                  </motion.div>
                  <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {s.timeline}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
