"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AnimateIn from "./AnimateIn";

const differentiators = [
  "You talk to the senior engineer — always. No bait-and-switch.",
  "Fixed pricing with no hidden fees. 50% upfront, 50% on delivery.",
  "Month-to-month support. No long-term lock-in contracts.",
  "Cloud-native infrastructure from day one. Not fragile shared hosting.",
  "We speak your language — plain English, no unnecessary jargon.",
  "Open-source first. You own your code, your data, your infrastructure.",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "6", label: "Countries Served" },
  { value: "<2hr", label: "Avg Response Time" },
];

const badges = ["AWS", "GCP", "Kubernetes", "Terraform", "Docker"];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <AnimateIn variant="slideLeft">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built by engineers,{" "}
              <span className="text-primary">for businesses.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              TinkerHive is a global digital agency run by senior DevOps and
              software engineers. We build websites, apps, and cloud
              infrastructure for businesses across the US, Canada, Europe, Middle
              East, and Australia.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Unlike big agencies that assign junior developers to your project,
              you work directly with the people who architect and build your
              solution. No account managers. No middlemen.
            </p>

            <ul className="mt-8 space-y-4" role="list">
              {differentiators.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span className="text-foreground text-sm font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn variant="slideRight">
            <div className="relative">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <p className="text-3xl font-extrabold text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-muted">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {badges.map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="rounded-lg border border-border bg-white px-4 py-2 text-xs font-semibold text-muted hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
