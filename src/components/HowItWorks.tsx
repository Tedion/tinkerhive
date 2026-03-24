import { MessageSquare, FileText, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We hop on a free 30-minute call to understand your business, goals, and technical needs. No jargon, just a conversation.",
    timeline: "Day 1",
  },
  {
    icon: FileText,
    step: "02",
    title: "Proposal & Plan",
    description:
      "You get a clear scope, timeline, and fixed price. No surprises. We agree on milestones before a single line of code is written.",
    timeline: "Day 2-3",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & Launch",
    description:
      "We build fast, share progress weekly, and launch when you're happy. You have direct access to the senior engineer doing the work.",
    timeline: "Week 1-6",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support",
    description:
      "Post-launch monitoring, maintenance, and improvements. We don't disappear after delivery — we're your long-term tech partner.",
    timeline: "Ongoing",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From first call to live product in weeks, not months. Here&apos;s the
            process.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-border" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 relative z-10">
                  <s.icon size={28} />
                </div>
                <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {s.timeline}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
