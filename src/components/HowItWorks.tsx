"use client";

import { MessageSquare, FileCode, Rocket, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Idea",
    timeline: "Day 1",
    icon: MessageSquare,
    description:
      "Let\u2019s hop on a free call. Tell us everything \u2014 we\u2019ll figure out the best path forward together.",
  },
  {
    number: "02",
    title: "We Plan It",
    timeline: "Day 2\u20133",
    icon: FileCode,
    description:
      "We send you a clear plan \u2014 what we\u2019ll build, how long it takes, and what it costs. No surprises.",
  },
  {
    number: "03",
    title: "We Build & Launch",
    timeline: "Week 1\u20136",
    icon: Rocket,
    description:
      "You\u2019ll see progress every week. We build it, test it, and take it live \u2014 you give feedback along the way.",
  },
  {
    number: "04",
    title: "We Keep It Running",
    timeline: "Ongoing",
    icon: Headphones,
    description:
      "We don\u2019t disappear. We monitor your product 24/7, fix issues fast, and scale it as you grow. We stay.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn variant="fadeUp" className="text-center mb-20">
          <span className="section-label">PROCESS</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0f172a]">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-[#475569] max-w-xl mx-auto">
            From first conversation to a live product
          </p>
        </AnimateIn>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6"
        >
          {/* Connecting line — desktop only, runs behind step circles */}
          <div
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5"
            style={{ background: "linear-gradient(to right, #e2e8f0, #00b4d8, #e2e8f0)" }}
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center px-4 rounded-xl py-6 transition-all duration-200 hover:shadow-md cursor-default">
                  {/* Step number — circle badge */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f9ff] border-2 border-[#00b4d8] transition-all duration-200">
                    <span className="font-bold text-[#00b4d8] text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00b4d8]/10">
                    <Icon size={24} className="text-[#00b4d8]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0f172a]">
                    {step.title}
                  </h3>

                  {/* Timeline badge — pill style */}
                  <span className="mt-2 inline-block rounded-full bg-[#f0f9ff] text-[#0369a1] text-xs font-medium px-3 py-1">
                    {step.timeline}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
