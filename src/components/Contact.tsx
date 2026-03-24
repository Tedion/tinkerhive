"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "tedionabera@gmail.com",
    href: "mailto:tedionabera@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Quick response",
    value: "DM on Twitter @DTedion",
    href: "https://twitter.com/DTedion",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: MapPin,
    label: "Serving",
    value: "USA, Canada, EU, Middle East, AUS/NZ",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn variant="slideLeft">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-primary">great together.</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us about your project and we&apos;ll get back to you within 24
              hours with a free consultation and honest quote.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="slideRight">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-4">
                    <Send size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Website Development</option>
                      <option>App Development</option>
                      <option>Cloud Management</option>
                      <option>Private Cloud Setup</option>
                      <option>DevOps & Platform Engineering</option>
                      <option>Open Source Solutions</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Describe what you need built, your timeline, and budget range..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark hover:shadow-md transition-all cursor-pointer"
                  >
                    Send Message <Send size={16} />
                  </button>

                  <p className="text-xs text-muted text-center">
                    Free consultation. No commitment required.
                  </p>
                </form>
              )}
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
