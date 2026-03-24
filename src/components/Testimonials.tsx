"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, GreenLeaf Marketing",
    location: "Dallas, TX",
    quote:
      "TinkerHive rebuilt our website from scratch and the results were incredible — page load went from 6 seconds to under 1, and our contact form submissions tripled in 3 months. Truly professional work.",
    rating: 5,
  },
  {
    name: "James Al-Rashid",
    role: "CTO, NovaPay",
    location: "Dubai, UAE",
    quote:
      "They migrated our entire infrastructure to a private cloud and cut our monthly bill by 40%. Having direct access to a senior engineer who actually understood our stack made all the difference.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, StudyBridge",
    location: "Melbourne, AUS",
    quote:
      "We needed an MVP fast and on a tight budget. TinkerHive delivered a fully working web app in 5 weeks — React frontend, Node backend, deployed on Kubernetes. Other agencies quoted us 4 months and 3x the price.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what our clients say.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl border border-border bg-white p-8 hover:shadow-xl hover:border-primary/20 transition-all h-full"
              >
                {/* Quote decoration */}
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-primary/[0.06]"
                  aria-hidden="true"
                />

                {/* Stars */}
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-sm text-foreground leading-relaxed relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm"
                    aria-hidden="true"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">
                      {t.role} — {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
