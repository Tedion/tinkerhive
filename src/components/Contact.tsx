"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle, Clock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimateIn from "./AnimateIn";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@tinkerhive.dev",
    href: "mailto:hello@tinkerhive.dev",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "< 4 hours",
    href: null,
  },
  {
    icon: Globe,
    label: "Regions",
    value: "US, Canada, EU, Middle East, Australia",
    href: null,
  },
];

const serviceOptions = [
  "Website",
  "App",
  "Cloud",
  "DevOps",
  "Private Cloud",
  "Security",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New inquiry from ${name} — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`
    );
    window.open(`mailto:hello@tinkerhive.dev?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-surface py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn variant="fadeUp" className="mb-14 text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
            // CONTACT
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Contact info cards */}
          <AnimateIn variant="slideLeft">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
                  className="glass flex items-center gap-4 rounded-xl p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-light">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          {/* Right — Form */}
          <AnimateIn variant="slideRight">
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-light">
                    We&apos;ll get back to you within a few hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className={cn(
                        "w-full rounded-lg border border-[var(--border-light)] bg-surface px-4 py-3",
                        "text-sm text-foreground placeholder:text-muted-light",
                        "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      )}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className={cn(
                        "w-full rounded-lg border border-[var(--border-light)] bg-surface px-4 py-3",
                        "text-sm text-foreground placeholder:text-muted-light",
                        "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      )}
                    />
                  </div>

                  {/* Service select */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={cn(
                        "w-full rounded-lg border border-[var(--border-light)] bg-surface px-4 py-3",
                        "text-sm text-foreground",
                        "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      )}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project description */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Project description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project, timeline, and goals..."
                      className={cn(
                        "w-full resize-none rounded-lg border border-[var(--border-light)] bg-surface px-4 py-3",
                        "text-sm text-foreground placeholder:text-muted-light",
                        "outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      )}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg",
                      "bg-primary px-6 py-3.5 text-sm font-semibold text-background",
                      "shadow-sm transition-all duration-200 hover:shadow-md glow-cyan-hover"
                    )}
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
