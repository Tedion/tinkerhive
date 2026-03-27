"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -6, scale: 0.95 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

const variants = { fadeUp, fadeIn, scaleIn, slideLeft, slideRight, blurIn, rotateIn };

type AnimationType = keyof typeof variants;

interface AnimateInProps {
  children: ReactNode;
  variant?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export default function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  threshold,
}: AnimateInProps) {
  // When threshold is set, don't use negative margin (avoids stuck animations)
  const viewport = threshold !== undefined
    ? { once, amount: threshold }
    : { once, margin: "-80px" as const };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: AnimationType;
}) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
