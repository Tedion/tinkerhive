"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCode, Rocket, Headphones, Check } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface Message {
  from: "client" | "tinkerhive";
  text: string;
  step?: {
    number: string;
    title: string;
    timeline: string;
    icon: typeof MessageSquare;
  };
  delay: number;
}

const conversation: Message[] = [
  {
    from: "client",
    text: "Hey, I have an idea for an app. Where do I start?",
    delay: 0,
  },
  {
    from: "tinkerhive",
    text: "Let's hop on a free call. Tell us everything — we'll figure out the best path forward together.",
    step: { number: "01", title: "Tell Us Your Idea", timeline: "Day 1", icon: MessageSquare },
    delay: 0.15,
  },
  {
    from: "client",
    text: "Sounds good. What happens after the call?",
    delay: 0.3,
  },
  {
    from: "tinkerhive",
    text: "We send you a clear plan — what we'll build, how long it takes, and what it costs. No surprises.",
    step: { number: "02", title: "We Plan It", timeline: "Day 2-3", icon: FileCode },
    delay: 0.45,
  },
  {
    from: "client",
    text: "And then you start building?",
    delay: 0.6,
  },
  {
    from: "tinkerhive",
    text: "Exactly. You'll see progress every week. We build it, test it, and take it live — you give feedback along the way.",
    step: { number: "03", title: "We Build & Launch", timeline: "Week 1-6", icon: Rocket },
    delay: 0.75,
  },
  {
    from: "client",
    text: "What about after launch? What if something breaks?",
    delay: 0.9,
  },
  {
    from: "tinkerhive",
    text: "We don't disappear. We monitor your product 24/7, fix issues fast, and scale it as you grow. We stay.",
    step: { number: "04", title: "We Keep It Running", timeline: "Ongoing", icon: Headphones },
    delay: 1.05,
  },
];

function StepBadge({ step }: { step: NonNullable<Message["step"]> }) {
  const Icon = step.icon;
  return (
    <div className="flex items-center gap-3 mb-2 mt-1">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/20">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold text-primary">{step.number}</span>
          <span className="font-display text-sm font-semibold text-foreground">{step.title}</span>
        </div>
        <span className="font-mono text-[10px] text-primary/70 tracking-wider">{step.timeline}</span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <AnimateIn variant="fadeUp" className="text-center mb-16">
          <p className="font-mono text-sm text-muted-light tracking-widest uppercase mb-3">
            // PROCESS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-muted-light max-w-lg mx-auto">
            From first conversation to a live product — here&apos;s what working with us looks like.
          </p>
        </AnimateIn>

        {/* Chat window */}
        <div className="glass rounded-2xl border border-[var(--border-light)] overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border-light)] bg-surface/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-background">
              T
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">TinkerHive</p>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-[11px] text-muted-light">Online — typically replies instantly</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4">
            {conversation.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: msg.delay, duration: 0.35, ease: "easeOut" }}
                className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] sm:max-w-[70%] ${
                    msg.from === "client"
                      ? "bg-primary/15 border border-primary/20 rounded-2xl rounded-br-md"
                      : "bg-surface-alt/80 border border-[var(--border-light)] rounded-2xl rounded-bl-md"
                  } px-4 py-3`}
                >
                  {/* Step badge for TinkerHive messages */}
                  {msg.step && <StepBadge step={msg.step} />}

                  <p className={`text-sm leading-relaxed ${
                    msg.from === "client" ? "text-foreground" : "text-muted-light"
                  }`}>
                    {msg.text}
                  </p>

                  {/* Read receipt for client messages */}
                  {msg.from === "client" && (
                    <div className="flex items-center justify-end gap-0.5 mt-1">
                      <Check size={10} className="text-primary/50" />
                      <Check size={10} className="text-primary/50 -ml-1.5" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator at the end */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="bg-surface-alt/80 border border-[var(--border-light)] rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex items-center gap-1">
                  <motion.div
                    className="h-1.5 w-1.5 rounded-full bg-muted-light"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="h-1.5 w-1.5 rounded-full bg-muted-light"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="h-1.5 w-1.5 rounded-full bg-muted-light"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chat input bar */}
          <div className="px-5 py-3 border-t border-[var(--border-light)] bg-surface/30">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-10 rounded-xl bg-background/60 border border-[var(--border-light)] px-4 flex items-center">
                <span className="text-sm text-muted">Type your idea here...</span>
              </div>
              <a
                href="#contact"
                className="h-10 px-5 rounded-xl bg-primary text-background font-semibold text-sm flex items-center gap-1.5 hover:bg-primary-dark transition-colors glow-cyan-hover"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
