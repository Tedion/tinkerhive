"use client";

import { motion } from "framer-motion";
import { Eye, Shield, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const promises = [
  {
    title: "You'll See Progress Every Week",
    icon: Eye,
    description:
      "No black boxes. We share progress every week with demos, updates, and clear next steps. You're never left wondering what's happening.",
  },
  {
    title: "We Don't Disappear After Launch",
    icon: Shield,
    description:
      "Most agencies build and leave. We monitor, maintain, and improve your product long after it goes live. We stay.",
  },
  {
    title: "No Surprises. Ever.",
    icon: FileCheck,
    description:
      "Fixed pricing, clear timelines, honest communication. If something changes, you'll know before it happens — not after.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <p className="font-mono text-sm text-primary tracking-wider mb-3">
            // OUR PROMISE
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What You Can{" "}
            <span className="gradient-text">Count On</span>
          </h2>
        </AnimateIn>

        {/* Promise cards */}
        <StaggerContainer
          className="grid gap-8 grid-cols-1 md:grid-cols-3"
          stagger={0.12}
        >
          {promises.map((p) => (
            <StaggerItem key={p.title} variant="scaleIn">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "glass rounded-2xl p-8 h-full relative group",
                  "hover:border-primary/30 transition-all duration-300"
                )}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(0, 180, 216, 0.2), 0 0 20px rgba(0, 180, 216, 0.05)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <p.icon size={24} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground relative z-10">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-muted-light leading-relaxed relative z-10">
                  {p.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
