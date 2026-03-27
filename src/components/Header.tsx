"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Code2, Cloud, Terminal, Brain, Shield, Headphones } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const serviceCategories = [
  {
    icon: Code2,
    label: "Software Development",
    desc: "Web, mobile & backend apps",
    href: "/services#software-development",
    accent: "#00b4d8",
  },
  {
    icon: Cloud,
    label: "Cloud & Infrastructure",
    desc: "AWS, GCP, private cloud",
    href: "/services#cloud-infrastructure",
    accent: "#7c3aed",
  },
  {
    icon: Terminal,
    label: "DevOps & Platform",
    desc: "CI/CD, IaC, Kubernetes",
    href: "/services#devops-platform-engineering",
    accent: "#10b981",
  },
  {
    icon: Brain,
    label: "AI Engineering",
    desc: "LLMs, MLOps, automation",
    href: "/services#ai-engineering",
    accent: "#a855f7",
  },
  {
    icon: Shield,
    label: "Security",
    desc: "Zero-trust, Vault, Keycloak",
    href: "/services#security",
    accent: "#ef4444",
  },
  {
    icon: Headphones,
    label: "24/7 Managed Ops",
    desc: "Monitoring, SLA support",
    href: "/services#managed-operations",
    accent: "#f97316",
  },
];

const navLinks = [
  { label: "Our Work", href: "/#work" },
  { label: "AI", href: "/#ai" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const overlay = document.querySelector("[data-mobile-menu]") as HTMLElement;
    if (!overlay) return;
    const focusable = overlay.querySelectorAll<HTMLElement>("a, button");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();
    function trap(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [mobileOpen]);

  const linkClass = [
    "text-sm font-medium transition-colors duration-200",
    scrolled ? "text-[#475569] hover:text-[#00b4d8]" : "text-[#f1f5f9] hover:text-[#00b4d8]",
  ].join(" ");

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[#e2e8f0]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="TinkerHive home">
          <Logo variant="hex" theme={scrolled ? "light" : "dark"} size={36} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={[
                "inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                scrolled ? "text-[#475569] hover:text-[#00b4d8]" : "text-[#f1f5f9] hover:text-[#00b4d8]",
              ].join(" ")}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] rounded-2xl border border-[#e2e8f0] bg-white shadow-xl shadow-black/10 p-4"
                  role="menu"
                >
                  {/* Arrow */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-[#e2e8f0]" />

                  <div className="grid grid-cols-2 gap-1.5">
                    {serviceCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-150 hover:bg-[#f8fafc]"
                        >
                          <span
                            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${cat.accent}15` }}
                          >
                            <Icon size={16} style={{ color: cat.accent }} />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-[#0f172a] group-hover:text-[#00b4d8] transition-colors">
                              {cat.label}
                            </span>
                            <span className="block text-xs text-[#64748b] mt-0.5">{cat.desc}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer link */}
                  <div className="mt-3 border-t border-[#f1f5f9] pt-3 px-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-medium text-[#0369a1] hover:text-[#00b4d8] transition-colors"
                    >
                      View all services
                      <span className="text-xs">→</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other nav links */}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#contact"
            className={["rounded-md border px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-[#00b4d8] hover:text-[#00b4d8]", scrolled ? "border-[#e2e8f0] text-[#0f172a] hover:bg-[#f8fafc]" : "border-white/20 text-[#f1f5f9]"].join(" ")}
          >
            Contact Us
          </Link>
          <Link
            href="/#contact"
            className="rounded-md bg-[#00b4d8] px-4 py-2 text-sm font-semibold text-[#0f172a] transition-all duration-300 hover:bg-[#0096b7]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={["lg:hidden relative z-50 p-2 transition-colors duration-300", scrolled ? "text-[#0f172a]" : "text-[#f1f5f9]"].join(" ")}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            data-mobile-menu
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-screen flex-col items-start justify-center gap-5 px-10 py-20"
            >
              {/* Services section in mobile */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.3 }} className="w-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0369a1] mb-3">Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 rounded-lg border border-[#e2e8f0] px-3 py-2.5"
                      >
                        <Icon size={14} style={{ color: cat.accent }} />
                        <span className="text-sm font-medium text-[#0f172a]">{cat.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

              <div className="w-full h-px bg-[#e2e8f0]" />

              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ delay: (i + 1) * 0.05, duration: 0.3 }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-[#0f172a] hover:text-[#00b4d8] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 flex flex-col gap-3 w-full max-w-xs">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.3 }}>
                  <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block rounded-md border border-[#e2e8f0] px-6 py-3 text-center text-sm font-medium text-[#0f172a] transition-colors duration-200 hover:border-[#00b4d8] hover:text-[#00b4d8]">
                    Contact Us
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.3 }}>
                  <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block rounded-md bg-[#00b4d8] px-6 py-3 text-center text-sm font-semibold text-[#0f172a] transition-colors duration-200 hover:bg-[#0096b7]">
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
