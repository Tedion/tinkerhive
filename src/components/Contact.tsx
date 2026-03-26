"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Clock, Globe } from "lucide-react";
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

const inputClasses =
  "w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#00b4d8] focus:ring-2 focus:ring-[#00b4d8]/20";

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

    const subject = encodeURIComponent(
      `New inquiry from ${name} — ${service}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`
    );
    window.open(
      `mailto:hello@tinkerhive.dev?subject=${subject}&body=${body}`
    );
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      {/* Decorative divider */}
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-16 bg-[#e2e8f0]" />
        <div className="mx-3 h-2 w-2 rotate-45 bg-[#00b4d8]" />
        <div className="h-px w-16 bg-[#e2e8f0]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <AnimateIn variant="fadeUp" className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#94a3b8]">
            CONTACT
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
        </AnimateIn>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Contact info */}
            <AnimateIn variant="slideLeft">
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-4 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00b4d8]/10">
                      <item.icon size={20} className="text-[#00b4d8]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-[#0f172a] transition-colors hover:text-[#00b4d8]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-[#0f172a]">
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
              <div className="rounded-xl border border-[#e2e8f0] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                      <Send size={28} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a]">
                      Message sent!
                    </h3>
                    <p className="mt-2 text-sm text-[#475569]">
                      We&apos;ll get back to you within a few hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className={inputClasses}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        className={inputClasses}
                      />
                    </div>

                    {/* Service select */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                      >
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className={inputClasses}
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
                        className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                      >
                        Project description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us about your project, timeline, and goals..."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#00b4d8] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0096b7] hover:shadow-lg"
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
      </div>
    </section>
  );
}
