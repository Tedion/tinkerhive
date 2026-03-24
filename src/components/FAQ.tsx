"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Simple business websites start at $2,500. E-commerce sites from $5,000. Custom web apps from $15,000. Every project gets a fixed-price quote upfront — no hourly billing surprises.",
  },
  {
    q: "How long does a project take?",
    a: "A business website: 2-3 weeks. A web app MVP: 4-8 weeks. Cloud infrastructure setup: 1-2 weeks. We'll give you a specific timeline in your proposal.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. Project work is pay-per-project with 50% upfront. Ongoing support retainers are month-to-month with 30-day cancellation. No lock-in.",
  },
  {
    q: "Who actually does the work?",
    a: "You work directly with senior engineers. We don't outsource or hand off to juniors. The person on your discovery call is the person writing your code.",
  },
  {
    q: "Where are you based?",
    a: "We're a global team serving clients in the US, Canada, EU, Middle East, and Australia. We work in overlapping time zones and communicate in English.",
  },
  {
    q: "Can you manage my existing cloud infrastructure?",
    a: "Yes. We manage AWS, GCP, and Azure environments. We'll audit your current setup, optimize costs, improve security, and provide ongoing monitoring — typically saving 20-40% on cloud bills.",
  },
  {
    q: "Do I own the code?",
    a: "100% yes. All code, designs, and infrastructure configurations are yours. We also use open-source tools wherever possible so you're never locked into proprietary platforms.",
  },
  {
    q: "What if something breaks after launch?",
    a: "All projects include 30 days of free bug-fix support post-launch. After that, our support retainers start at $500/month for ongoing maintenance, monitoring, and improvements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything you need to know before getting started.
          </p>
        </div>

        <dl className="mt-12 space-y-4" role="list">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-xl border border-border bg-white"
            >
              <dt>
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-semibold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              {openIndex === i && (
                <dd className="px-6 pb-5">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
