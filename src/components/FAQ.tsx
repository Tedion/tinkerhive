"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
    <section id="faq" className="bg-[#f8fafc] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateIn variant="fadeUp" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#94a3b8]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#475569]">
            Everything you need to know before getting started.
          </p>
        </AnimateIn>

        <p className="mt-2 text-sm text-[#64748b] text-center">{faqs.length} questions answered</p>
        <div className="mt-12 divide-y divide-[#e2e8f0]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                className={`relative rounded-lg transition-colors duration-200 hover:bg-[#f1f5f9] ${isOpen ? "border-l-[3px] border-[#00b4d8] bg-[#f8fafc]" : "border-l-[3px] border-transparent"}`}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between py-5 pl-5 pr-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  id={`faq-button-${i}`}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="pr-4 text-sm font-semibold text-[#0f172a]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00b4d8]" : "rotate-0 text-[#94a3b8]"}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
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
                      <div className="pb-6 pl-5 pr-6 pt-1">
                        <p className="text-sm leading-relaxed text-[#475569]">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
