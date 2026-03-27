"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Services", href: "/services" },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [mobileOpen]);

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "text-sm font-medium transition-colors duration-200",
                scrolled
                  ? "text-[#475569] hover:text-[#00b4d8]"
                  : "text-[#f1f5f9] hover:text-[#00b4d8]",
              ].join(" ")}
            >
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
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-screen flex-col items-start justify-center gap-6 px-10"
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-[#0f172a] hover:text-[#00b4d8] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.3 }}>
                  <Link
                    href="/#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md border border-[#e2e8f0] px-6 py-3 text-center text-sm font-medium text-[#0f172a] transition-colors duration-200 hover:border-[#00b4d8] hover:text-[#00b4d8]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.3 }}>
                  <Link
                    href="/#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md bg-[#00b4d8] px-6 py-3 text-center text-sm font-semibold text-[#0f172a] transition-colors duration-200 hover:bg-[#0096b7]"
                  >
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
