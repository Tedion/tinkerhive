import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build your digital everything?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Book a free 30-minute strategy call. We&apos;ll discuss your project, give
          you an honest assessment, and outline next steps — no obligations.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-md hover:bg-surface transition-colors"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
          <Link
            href="mailto:hello@tinkerhive.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            hello@tinkerhive.com
          </Link>
        </div>
      </div>
    </section>
  );
}
