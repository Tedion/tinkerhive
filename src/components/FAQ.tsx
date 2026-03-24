"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "How much does it cost to build a product?",
    a: "It depends on what you're building. A website might start at a few thousand dollars, a full app could be more. We'll give you an honest, fixed-price quote after a free call — no hidden fees, no surprises.",
  },
  {
    q: "How long until my product is live?",
    a: "A website typically takes 2-4 weeks. A full application takes 4-8 weeks. We'll give you a specific timeline before we start, with weekly check-ins so you always know where things stand.",
  },
  {
    q: "I'm not technical — will I understand what's happening?",
    a: "Absolutely. We explain everything in plain language. You'll see your product take shape week by week, and we'll walk you through every decision. No jargon, no confusion.",
  },
  {
    q: "Who actually builds my product?",
    a: "The same person you talk to on your first call. TinkerHive is founder-led — you work directly with the engineer building your product. No middlemen, no outsourcing.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "We fix it. That's the whole point — we don't disappear after launch. We monitor your product around the clock and respond within hours if anything goes wrong.",
  },
  {
    q: "Do I own everything you build?",
    a: "100%. The code, the design, the infrastructure — it's all yours from day one. We'll never hold your product hostage.",
  },
  {
    q: "Can you take over a product someone else built?",
    a: "Yes. We regularly take over existing products, clean them up, fix what's broken, and set them up to run properly. We'll audit it first and give you an honest assessment.",
  },
  {
    q: "I already have an app but no one maintaining it. Can you help?",
    a: "That's exactly what we do. We'll take over your product, keep it running, handle updates and fixes, and make sure it doesn't fall apart. You focus on your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-background py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl px-6">
        <AnimateIn variant="fadeUp" className="text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
            // FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-light">
            Everything you need to know before getting started.
          </p>
        </AnimateIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div
                className={cn(
                  "glass overflow-hidden rounded-xl transition-colors duration-200",
                  openIndex === i && "border-primary/30"
                )}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  aria-expanded={openIndex === i}
                  id={`faq-button-${i}`}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="pr-4 font-sans text-sm font-semibold text-foreground">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={18}
                      className="text-muted-light"
                      aria-hidden="true"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm leading-relaxed text-muted-light">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
