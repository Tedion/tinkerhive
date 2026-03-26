"use client";

import { Eye, Shield, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const promises = [
  {
    title: "You\u2019ll See Progress Every Week",
    icon: Eye,
    description:
      "No black boxes. We share progress every week with demos, updates, and clear next steps. You\u2019re never left wondering what\u2019s happening.",
    borderColor: "#00b4d8",
    iconBg: "bg-[#e0f7fa]",
  },
  {
    title: "We Don\u2019t Disappear After Launch",
    icon: Shield,
    description:
      "Most agencies build and leave. We monitor, maintain, and improve your product long after it goes live. We stay.",
    borderColor: "#10b981",
    iconBg: "bg-[#ecfdf5]",
  },
  {
    title: "No Surprises. Ever.",
    icon: FileCheck,
    description:
      "Fixed pricing, clear timelines, honest communication. If something changes, you\u2019ll know before it happens \u2014 not after.",
    borderColor: "#7c3aed",
    iconBg: "bg-[#f5f3ff]",
  },
];

export default function Testimonials() {
  return (
    <section className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn variant="fadeUp" className="text-center mb-16">
          <span className="section-label">OUR PROMISE</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            What You Can Count On
          </h2>
        </AnimateIn>

        {/* Promise cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="card h-full cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ borderTop: `3px solid ${p.borderColor}` }}
                >
                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${p.iconBg} mb-5`}>
                    <Icon size={24} style={{ color: p.borderColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold text-[#0f172a]">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
