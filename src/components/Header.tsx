"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

/* ── Service categories for dropdown ─────────────────────────────────────── */
const serviceCategories = [
  {
    label: "Software Development",
    sub: "Web, mobile & backend APIs",
    href: "/services#software-development",
  },
  {
    label: "Cloud & Infrastructure",
    sub: "AWS, GCP, Azure, private cloud",
    href: "/services#cloud-infrastructure",
  },
  {
    label: "DevOps & Platform Engineering",
    sub: "CI/CD, Kubernetes, IaC, observability",
    href: "/services#devops-platform-engineering",
  },
  {
    label: "AI Engineering",
    sub: "LLM apps, RAG, MLOps, automation",
    href: "/services#ai-engineering",
  },
  {
    label: "Security",
    sub: "Zero-trust, Vault, SSO, hardening",
    href: "/services#security",
  },
  {
    label: "24/7 Managed Operations",
    sub: "Round-the-clock monitoring & SLA",
    href: "/services#managed-operations",
  },
];

/* ── Primary nav links — About is last ───────────────────────────────────── */
const navLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function navLinkClass(href: string) {
    const active = isActive(href);
    if (active) return "text-sm font-semibold text-[#00b4d8]";
    return [
      "text-sm font-medium transition-colors duration-200",
      scrolled ? "text-[#475569] hover:text-[#00b4d8]" : "text-[#f1f5f9] hover:text-[#00b4d8]",
    ].join(" ");
  }

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={[
        "fixed top-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-[#e2e8f0]"
          : "bg-transparent",
      ].join(" ")}
      style={{ width: "100dvw" }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo — always links home */}
        <Link href="/" aria-label="TinkerHive home">
          <Logo variant="hex" theme={scrolled ? "light" : "dark"} size={36} />
        </Link>

        {/* ── Desktop Nav ─────────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-7">

          {/* Home */}
          <Link href="/" className={navLinkClass("/")}>Home</Link>

          {/* Services dropdown — IE Networks style vertical list */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={[
                "inline-flex items-center gap-1 text-sm transition-colors duration-200",
                isServicesActive
                  ? "font-semibold text-[#00b4d8]"
                  : `font-medium ${scrolled ? "text-[#475569] hover:text-[#00b4d8]" : "text-[#f1f5f9] hover:text-[#00b4d8]"}`,
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
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl border border-[#e2e8f0] bg-white shadow-xl shadow-black/10 overflow-hidden"
                  role="menu"
                >
                  {/* Caret */}
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-[#e2e8f0]" />

                  {/* Service list — vertical, text-first */}
                  <div className="py-2">
                    {serviceCategories.map((cat, i) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className={[
                          "group flex flex-col px-5 py-3 transition-colors duration-150 hover:bg-[#f0f9ff]",
                          i < serviceCategories.length - 1 ? "border-b border-[#f1f5f9]" : "",
                        ].join(" ")}
                      >
                        <span className="text-sm font-semibold text-[#0f172a] group-hover:text-[#00b4d8] transition-colors leading-snug">
                          {cat.label}
                        </span>
                        <span className="text-xs text-[#94a3b8] mt-0.5 leading-tight">
                          {cat.sub}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Footer — View all services */}
                  <div className="border-t border-[#e2e8f0] bg-[#f8fafc] px-5 py-3">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#0369a1] hover:text-[#00b4d8] transition-colors"
                    >
                      View all services <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other nav links: Careers, Blog, About */}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ──────────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-[#00b4d8] px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:bg-[#0096b7] hover:shadow-md hover:shadow-[#00b4d8]/25"
          >
            Get in Touch
          </Link>
        </div>

        {/* ── Mobile Hamburger ─────────────────────────────────────────────── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={[
            "lg:hidden relative z-50 flex items-center justify-center h-10 w-10 rounded-lg transition-colors duration-300",
            mobileOpen
              ? "text-[#0f172a]"
              : scrolled
              ? "text-[#0f172a]"
              : "text-[#f1f5f9]",
          ].join(" ")}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            data-mobile-menu
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}
            className="bg-white lg:hidden overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex min-h-screen flex-col items-start justify-center gap-5 px-8 py-20"
            >
              {/* Home */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.3 }}>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-semibold transition-colors duration-200 ${isActive("/") ? "text-[#00b4d8]" : "text-[#0f172a] hover:text-[#00b4d8]"}`}
                >
                  Home
                </Link>
              </motion.div>

              {/* Services section — vertical list */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.3 }}
                className="w-full"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8] mb-3">Services</p>
                <div className="flex flex-col gap-0 rounded-xl border border-[#e2e8f0] overflow-hidden">
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex flex-col px-4 py-3 border-b border-[#f1f5f9] last:border-0 hover:bg-[#f0f9ff] transition-colors"
                    >
                      <span className="text-sm font-semibold text-[#0f172a]">{cat.label}</span>
                      <span className="text-xs text-[#94a3b8] mt-0.5">{cat.sub}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <div className="w-full h-px bg-[#e2e8f0]" />

              {/* Careers, Blog, About */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: (i + 2) * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-semibold transition-colors duration-200 ${isActive(link.href) ? "text-[#00b4d8]" : "text-[#0f172a] hover:text-[#00b4d8]"}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 w-full max-w-xs">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.3 }}>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md bg-[#00b4d8] px-6 py-3 text-center text-sm font-semibold text-[#0f172a] hover:bg-[#0096b7] transition-colors"
                  >
                    Get in Touch
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
