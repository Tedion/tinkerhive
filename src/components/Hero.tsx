"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";
import ErrorBoundary from "./ErrorBoundary";

/* ------------------------------------------------------------------ */
/*  Scene 1: Planning — Person writing on whiteboard with marker       */
/* ------------------------------------------------------------------ */

function IdeaScene() {
  return (
    <div className="relative w-full h-full min-h-[170px] overflow-hidden">
      {/* Room floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-white/[0.02]" />

      {/* Large whiteboard on wall */}
      <motion.div
        className="absolute top-3 left-[20%] w-[65%] h-[55%] rounded bg-white/[0.1] border border-white/20 shadow-lg"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      >
        {/* Whiteboard content - drawn with marker */}
        {/* Title */}
        <motion.div className="absolute top-[8%] left-[8%] h-[3px] w-[40%] rounded bg-primary/60"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.4 }} style={{ originX: 0 }} />

        {/* Flowchart boxes */}
        <motion.div className="absolute top-[22%] left-[8%] w-[25%] h-[20%] rounded border-2 border-primary/50"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[6px] font-mono text-primary/70 font-bold">USER</span>
          </div>
        </motion.div>

        <motion.div className="absolute top-[22%] left-[40%] w-[25%] h-[20%] rounded border-2 border-secondary-light/50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[6px] font-mono text-secondary-light/70 font-bold">APP</span>
          </div>
        </motion.div>

        <motion.div className="absolute top-[22%] right-[8%] w-[20%] h-[20%] rounded border-2 border-accent/50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[6px] font-mono text-accent/70 font-bold">DB</span>
          </div>
        </motion.div>

        {/* Arrows connecting boxes */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
          <motion.line x1="33%" y1="32%" x2="40%" y2="32%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"
            markerEnd="url(#wbArrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.6, duration: 0.3 }} />
          <motion.line x1="65%" y1="32%" x2="72%" y2="32%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"
            markerEnd="url(#wbArrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.8, duration: 0.3 }} />
          <defs>
            <marker id="wbArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.35)" />
            </marker>
          </defs>
        </svg>

        {/* Bullet points below */}
        <motion.div className="absolute bottom-[12%] left-[8%] flex flex-col gap-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-success/60" />
            <div className="h-[2px] w-12 rounded bg-white/20" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-success/60" />
            <div className="h-[2px] w-16 rounded bg-white/20" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-success/60" />
            <div className="h-[2px] w-10 rounded bg-white/20" />
          </div>
        </motion.div>
      </motion.div>

      {/* Person at whiteboard — writing with marker */}
      <motion.div className="absolute bottom-[18%] right-[12%]"
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
        <svg viewBox="0 0 35 55" className="w-9 h-14" fill="none">
          {/* Hair */}
          <path d="M12 3 Q17.5 0 23 3 Q24 6 23 8 L12 8 Q11 6 12 3Z" fill="#1a1a1a" />
          {/* Head */}
          <ellipse cx="17.5" cy="10" rx="6.5" ry="7" fill="#c68642" />
          {/* Eyes */}
          <ellipse cx="15" cy="9" rx="1.2" ry="1.4" fill="#1a1a1a" />
          <ellipse cx="20" cy="9" rx="1.2" ry="1.4" fill="#1a1a1a" />
          <circle cx="15.4" cy="8.6" r="0.4" fill="white" />
          <circle cx="20.4" cy="8.6" r="0.4" fill="white" />
          {/* Eyebrows */}
          <path d="M13 7 Q15 5.5 17 7" stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
          <path d="M18 7 Q20 5.5 22 7" stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
          {/* Smile */}
          <path d="M14.5 12.5 Q17.5 14.5 20.5 12.5" stroke="#1a1a1a" strokeWidth="0.7" fill="none" />
          {/* Neck */}
          <rect x="16" y="16" width="3" height="3" fill="#c68642" />
          {/* Polo shirt */}
          <path d="M8 22 Q8 19 16 19 L19 19 Q27 19 27 22 L28 40 L7 40 Z" fill="#0096b7" />
          <path d="M15 19 L17.5 22 L20 19" stroke="white" strokeWidth="0.5" fill="none" />
          {/* Right arm extended — holding marker at board */}
          <motion.g animate={{ rotate: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ transformOrigin: "27px 24px" }}>
            <path d="M27 24 L35 14 L36 14.5" stroke="#c68642" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Marker in hand */}
            <rect x="35" y="12" width="1.5" height="5" rx="0.5" fill="#00b4d8" transform="rotate(-20 35 14)" />
          </motion.g>
          {/* Left arm at side */}
          <path d="M8 24 L4 34" stroke="#c68642" strokeWidth="2.5" strokeLinecap="round" />
          {/* Pants */}
          <rect x="10" y="39" width="6" height="11" rx="2" fill="#2d3748" />
          <rect x="19" y="39" width="6" height="11" rx="2" fill="#2d3748" />
          {/* Shoes */}
          <rect x="9" y="49" width="8" height="2.5" rx="1.2" fill="#1a1a1a" />
          <rect x="18" y="49" width="8" height="2.5" rx="1.2" fill="#1a1a1a" />
        </svg>
      </motion.div>

      {/* Client sitting in chair with laptop */}
      <motion.div className="absolute bottom-[18%] left-[3%]"
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <svg viewBox="0 0 40 50" className="w-9 h-12" fill="none">
          {/* Hair */}
          <path d="M14 2 Q20 -1 26 2 Q27 5 26 7 L14 7 Q13 5 14 2Z" fill="#4a3728" />
          {/* Head */}
          <ellipse cx="20" cy="9" rx="6.5" ry="7" fill="#f0c8a0" />
          {/* Eyes */}
          <ellipse cx="17.5" cy="8" rx="1.1" ry="1.3" fill="#1a1a1a" />
          <ellipse cx="22.5" cy="8" rx="1.1" ry="1.3" fill="#1a1a1a" />
          <circle cx="17.9" cy="7.6" r="0.35" fill="white" />
          <circle cx="22.9" cy="7.6" r="0.35" fill="white" />
          {/* Smile */}
          <path d="M17 11.5 Q20 13 23 11.5" stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
          {/* Neck */}
          <rect x="18.5" y="15" width="3" height="2.5" fill="#f0c8a0" />
          {/* Blazer */}
          <path d="M10 20 Q10 17 18 17 L22 17 Q30 17 30 20 L31 36 L9 36 Z" fill="#3b5998" />
          {/* Shirt underneath */}
          <rect x="16" y="17" width="8" height="5" fill="white" opacity="0.3" />
          {/* Arms - holding invisible laptop */}
          <path d="M10 22 L6 30 L10 32" stroke="#f0c8a0" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M30 22 L34 30 L30 32" stroke="#f0c8a0" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Chair */}
          <rect x="7" y="35" width="26" height="3" rx="1.5" fill="white" opacity="0.06" />
          {/* Legs (seated) */}
          <path d="M13 37 L11 46" stroke="#2d3748" strokeWidth="4" strokeLinecap="round" />
          <path d="M27 37 L29 46" stroke="#2d3748" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 2: Developer coding on Mac workstation                       */
/* ------------------------------------------------------------------ */

function CodeScene() {
  const lines = [
    { n: 1, t: "export default function App() {", d: 2.0, c: "text-secondary-light/80" },
    { n: 2, t: "  const [data, set] = useState();", d: 2.3, c: "text-foreground/60" },
    { n: 3, t: "  useEffect(() => {", d: 2.6, c: "text-secondary-light/80" },
    { n: 4, t: "    fetchData().then(set);", d: 2.9, c: "text-foreground/60" },
    { n: 5, t: "  }, []);", d: 3.1, c: "text-foreground/60" },
    { n: 6, t: "  return <Dashboard data={data}/>;", d: 3.4, c: "text-primary/80" },
    { n: 7, t: "}", d: 3.6, c: "text-foreground/60" },
  ];

  return (
    <div className="relative w-full h-full min-h-[170px] overflow-hidden">
      {/* Desk */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[#1a1510]/40 rounded-t" />

      {/* External Monitor (main) */}
      <motion.div
        className="absolute top-2 left-[8%] w-[60%] h-[60%] rounded-lg border-[1.5px] border-[#333] bg-[#1e1e2e] overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
      >
        {/* VS Code chrome */}
        <div className="flex items-center px-1.5 py-0.5 bg-[#181825] border-b border-white/5">
          <span className="h-1 w-1 rounded-full bg-[#ff5f57] mr-0.5" />
          <span className="h-1 w-1 rounded-full bg-[#febc2e] mr-0.5" />
          <span className="h-1 w-1 rounded-full bg-[#28c840]" />
          <span className="ml-1.5 text-[5px] font-mono text-white/30">app.tsx</span>
        </div>
        <div className="flex h-[calc(100%-12px)]">
          {/* Activity bar */}
          <div className="w-3 bg-[#11111b] flex flex-col items-center gap-1 py-1">
            <div className="w-1.5 h-1.5 rounded-sm bg-white/15" />
            <div className="w-1.5 h-1.5 rounded-sm bg-white/8" />
            <div className="w-1.5 h-1.5 rounded-sm bg-primary/25" />
          </div>
          {/* Code */}
          <div className="flex-1 p-1 font-mono text-[6px] leading-[9px]">
            {lines.map((l) => (
              <motion.div key={l.n} className="flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: l.d, duration: 0.15 }}>
                <span className="w-2.5 text-right text-white/10 mr-1 select-none">{l.n}</span>
                <span className={l.c}>{l.t}</span>
              </motion.div>
            ))}
            <motion.span className="inline-block w-[1.5px] h-[7px] bg-primary ml-3 mt-0.5"
              animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} />
          </div>
        </div>
      </motion.div>
      {/* Monitor stand */}
      <div className="absolute bottom-[21%] left-[30%] w-2 h-[8%] bg-[#444]" />
      <div className="absolute bottom-[19%] left-[24%] w-14 h-1 rounded bg-[#444]" />

      {/* MacBook (secondary) */}
      <motion.div
        className="absolute bottom-[22%] right-[4%] w-[32%] h-[28%]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      >
        {/* Screen */}
        <div className="w-full h-[75%] rounded-t border border-[#333] bg-[#1e1e2e] overflow-hidden p-0.5">
          <div className="w-full h-full flex flex-col gap-[1px]">
            <div className="h-[2px] w-[70%] rounded bg-primary/20" />
            <div className="h-[2px] w-[50%] rounded bg-white/10" />
            <div className="h-[2px] w-[60%] rounded bg-success/15" />
            <div className="h-[2px] w-[40%] rounded bg-white/10" />
          </div>
        </div>
        {/* Base */}
        <div className="w-[110%] -ml-[5%] h-[6px] bg-[#555] rounded-b-lg" />
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[#222] rounded-b" />
      </motion.div>

      {/* Developer sitting at desk */}
      <motion.div className="absolute bottom-[16%] right-[32%]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <svg viewBox="0 0 28 42" className="w-6 h-9" fill="none">
          {/* Hair */}
          <path d="M9 2 Q14 -1 19 2 Q20 4 19 6 L9 6 Q8 4 9 2Z" fill="#1a1a1a" />
          {/* Head */}
          <ellipse cx="14" cy="8" rx="5.5" ry="6" fill="#8d5524" />
          {/* Glasses */}
          <rect x="9" y="6" width="4.5" height="3.5" rx="1" stroke="#00b4d8" strokeWidth="0.5" fill="none" />
          <rect x="14.5" y="6" width="4.5" height="3.5" rx="1" stroke="#00b4d8" strokeWidth="0.5" fill="none" />
          <line x1="13.5" y1="7.5" x2="14.5" y2="7.5" stroke="#00b4d8" strokeWidth="0.4" />
          {/* Eyes */}
          <circle cx="11.2" cy="7.5" r="0.9" fill="#1a1a1a" />
          <circle cx="16.8" cy="7.5" r="0.9" fill="#1a1a1a" />
          {/* Focused mouth */}
          <line x1="12.5" y1="11" x2="15.5" y2="11" stroke="#1a1a1a" strokeWidth="0.5" strokeLinecap="round" />
          {/* Hoodie */}
          <path d="M5 16 Q5 13 12 13 L16 13 Q23 13 23 16 L24 30 L4 30 Z" fill="#0096b7" />
          {/* Arms on keyboard */}
          <motion.g animate={{ y: [0, -0.3, 0] }} transition={{ duration: 0.15, repeat: Infinity }}>
            <path d="M5 18 L1 24 L3 25" stroke="#8d5524" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M23 18 L27 24 L25 25" stroke="#8d5524" strokeWidth="2" strokeLinecap="round" fill="none" />
          </motion.g>
          {/* Chair */}
          <rect x="2" y="29" width="24" height="2.5" rx="1" fill="white" opacity="0.05" />
          {/* Seated legs */}
          <path d="M8 31 L6 39" stroke="#2d3748" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M20 31 L22 39" stroke="#2d3748" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Keyboard on desk */}
      <div className="absolute bottom-[22%] left-[25%] w-14 h-2 rounded-sm bg-white/[0.06] border border-white/10" />

      {/* Mouse */}
      <div className="absolute bottom-[22%] right-[15%] w-2 h-3 rounded-full bg-white/[0.06] border border-white/10" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 3: DevOps deploying — build/test/deploy pipeline on screen   */
/* ------------------------------------------------------------------ */

function LaunchScene() {
  const steps = [
    { label: "Installing dependencies...", status: "done", delay: 3.0 },
    { label: "Building project...", status: "done", delay: 3.5 },
    { label: "Running tests... 24/24 passed", status: "done", delay: 4.0 },
    { label: "Deploying to production...", status: "done", delay: 4.5 },
    { label: "✓ Production: yourproduct.com", status: "live", delay: 5.2 },
  ];

  return (
    <div className="relative w-full h-full min-h-[170px] overflow-hidden">
      {/* Desk */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-[#1a1510]/40 rounded-t" />

      {/* Monitor showing deployment terminal */}
      <motion.div
        className="absolute top-2 left-[10%] w-[75%] h-[62%] rounded-lg border-[1.5px] border-[#333] bg-[#0d1117] overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
      >
        {/* Browser tab bar - Vercel/AWS style */}
        <div className="flex items-center px-1.5 py-0.5 bg-[#161b22] border-b border-white/8">
          <span className="h-1 w-1 rounded-full bg-[#ff5f57] mr-0.5" />
          <span className="h-1 w-1 rounded-full bg-[#febc2e] mr-0.5" />
          <span className="h-1 w-1 rounded-full bg-[#28c840]" />
          <span className="ml-1.5 text-[5px] font-mono text-white/30">vercel.com/tinkerhive — Deployments</span>
        </div>

        {/* Deployment header */}
        <div className="px-2 py-1 border-b border-white/5">
          <div className="flex items-center gap-1">
            <motion.div className="h-1.5 w-1.5 rounded-full"
              animate={{ backgroundColor: ["#f59e0b", "#f59e0b", "#10b981"] }}
              transition={{ delay: 5.0, duration: 0.3, times: [0, 0.9, 1] }}
              style={{ backgroundColor: "#f59e0b" }}
            />
            <span className="text-[6px] font-mono text-white/50">Production Deployment</span>
          </div>
        </div>

        {/* Deployment steps */}
        <div className="p-1.5 flex flex-col gap-[3px] font-mono text-[5.5px]">
          {steps.map((step, i) => (
            <motion.div key={i} className="flex items-center gap-1"
              initial={{ opacity: 0, x: -3 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay, duration: 0.2 }}>
              {step.status === "live" ? (
                <motion.div className="h-1.5 w-1.5 rounded-full bg-success shrink-0"
                  animate={{ boxShadow: ["0 0 0px #10b981", "0 0 4px #10b981", "0 0 0px #10b981"] }}
                  transition={{ duration: 1.5, repeat: Infinity }} />
              ) : (
                <motion.div className="h-1.5 w-1.5 rounded-full bg-success shrink-0"
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: step.delay + 0.3, type: "spring" }} />
              )}
              <span className={step.status === "live" ? "text-success font-bold" : "text-white/40"}>
                {step.label}
              </span>
            </motion.div>
          ))}

          {/* Progress bar */}
          <div className="mt-1 h-1 w-full rounded-full bg-white/5 overflow-hidden">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-success"
              initial={{ width: "0%" }} animate={{ width: "100%" }}
              transition={{ delay: 3.0, duration: 2.5, ease: "easeOut" }} />
          </div>
        </div>
      </motion.div>

      {/* Monitor stand */}
      <div className="absolute bottom-[19%] left-[42%] w-2 h-[7%] bg-[#444]" />
      <div className="absolute bottom-[17%] left-[35%] w-14 h-1 rounded bg-[#444]" />

      {/* DevOps engineer at desk */}
      <motion.div className="absolute bottom-[14%] right-[6%]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
        <svg viewBox="0 0 28 42" className="w-6 h-9" fill="none">
          {/* Short hair */}
          <ellipse cx="14" cy="4" rx="6" ry="2.5" fill="#2d1810" />
          {/* Head */}
          <ellipse cx="14" cy="8" rx="5.5" ry="6" fill="#c68642" />
          {/* Beard stubble */}
          <ellipse cx="14" cy="11.5" rx="4" ry="2" fill="#c68642" />
          <ellipse cx="14" cy="12" rx="3.5" ry="1.5" fill="#b07530" opacity="0.3" />
          {/* Eyes */}
          <circle cx="11.5" cy="7.5" r="0.9" fill="#1a1a1a" />
          <circle cx="16.5" cy="7.5" r="0.9" fill="#1a1a1a" />
          {/* Watching screen intently */}
          <path d="M12 10.5 L16 10.5" stroke="#1a1a1a" strokeWidth="0.5" strokeLinecap="round" />
          {/* T-shirt */}
          <path d="M5 16 Q5 13 12 13 L16 13 Q23 13 23 16 L24 30 L4 30 Z" fill="#2d3748" />
          {/* Terminal/code symbol on shirt */}
          <text x="10" y="23" fontSize="5" fill="#10b981" opacity="0.4" fontFamily="monospace">{">_"}</text>
          {/* Arms on desk */}
          <path d="M5 18 L2 25" stroke="#c68642" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 18 L26 25" stroke="#c68642" strokeWidth="2" strokeLinecap="round" />
          {/* Chair & legs */}
          <rect x="2" y="29" width="24" height="2.5" rx="1" fill="white" opacity="0.05" />
          <path d="M8 31 L6 39" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M20 31 L22 39" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Keyboard */}
      <div className="absolute bottom-[20%] left-[28%] w-12 h-1.5 rounded-sm bg-white/[0.05] border border-white/8" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene 4: SRE monitoring dashboard on workstation                   */
/* ------------------------------------------------------------------ */

function RunningScene() {
  const services = [
    { name: "API", delay: 5.6 },
    { name: "Web", delay: 5.7 },
    { name: "DB", delay: 5.8 },
    { name: "CDN", delay: 5.9 },
  ];

  return (
    <div className="relative w-full h-full min-h-[170px] overflow-hidden">
      {/* Desk */}
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-[#1a1510]/40 rounded-t" />

      {/* Main monitor — Grafana/Uptime style dashboard */}
      <motion.div
        className="absolute top-2 left-[5%] w-[58%] h-[62%] rounded-lg border-[1.5px] border-[#333] bg-[#0d1117] overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.2 }}
      >
        <div className="flex items-center px-1.5 py-0.5 bg-[#161b22] border-b border-white/5">
          <motion.div className="h-1.5 w-1.5 rounded-full bg-success mr-1"
            animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <span className="text-[5px] font-mono text-success">All Systems Operational</span>
        </div>

        <div className="p-1 flex flex-col gap-[2px]">
          {services.map((svc) => (
            <motion.div key={svc.name}
              className="flex items-center gap-1 px-1 py-[2px] rounded-sm bg-white/[0.02]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: svc.delay }}>
              <div className="h-1 w-1 rounded-full bg-success shrink-0" />
              <span className="text-[5px] font-mono text-white/40 w-5">{svc.name}</span>
              <div className="flex gap-[0.5px] flex-1">
                {[...Array(24)].map((_, j) => (
                  <div key={j} className="flex-1 h-1.5 rounded-[0.5px] bg-success/35" />
                ))}
              </div>
              <span className="text-[5px] font-mono text-success">100%</span>
            </motion.div>
          ))}

          {/* Heartbeat line */}
          <motion.svg className="w-full h-4 mt-0.5" viewBox="0 0 200 16" preserveAspectRatio="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.2 }}>
            <motion.polyline
              points="0,8 20,8 24,2 28,14 32,8 60,8 64,3 68,13 72,8 100,8 104,2 108,14 112,8 140,8 144,3 148,13 152,8 180,8 184,2 188,14 192,8 200,8"
              fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 6.2, duration: 1.5 }} />
          </motion.svg>

          <motion.div className="flex justify-center gap-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5 }}>
            <span className="text-[6px] font-mono text-primary font-bold">99.9% uptime</span>
            <span className="text-[6px] font-mono text-success font-bold">42ms</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Second monitor (smaller) — alerts/logs */}
      <motion.div
        className="absolute top-4 right-[5%] w-[30%] h-[45%] rounded border border-[#333] bg-[#0d1117] overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.4 }}
      >
        <div className="px-1 py-0.5 border-b border-white/5">
          <span className="text-[4px] font-mono text-white/25">ALERTS</span>
        </div>
        <div className="p-1 flex flex-col gap-[2px]">
          {["No incidents", "0 warnings", "0 errors"].map((t, i) => (
            <motion.div key={t} className="flex items-center gap-0.5"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.8 + i * 0.15 }}>
              <div className="h-1 w-1 rounded-full bg-success/60" />
              <span className="text-[4.5px] font-mono text-success/60">{t}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Monitor stands */}
      <div className="absolute bottom-[19%] left-[28%] w-2 h-[6%] bg-[#444]" />
      <div className="absolute bottom-[17%] left-[22%] w-12 h-1 rounded bg-[#444]" />
      <div className="absolute bottom-[23%] right-[14%] w-1.5 h-[5%] bg-[#444]" />
      <div className="absolute bottom-[21%] right-[10%] w-8 h-0.5 rounded bg-[#444]" />

      {/* SRE watching dashboards */}
      <motion.div className="absolute bottom-[14%] left-[42%]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.0 }}>
        <svg viewBox="0 0 28 42" className="w-6 h-9" fill="none">
          {/* Hair - longer, tied back */}
          <path d="M8 2 Q14 -1 20 2 Q21 5 20 7 L8 7 Q7 5 8 2Z" fill="#1a1a1a" />
          <path d="M20 5 Q22 8 21 12 L19 10 Z" fill="#1a1a1a" />
          {/* Head */}
          <ellipse cx="14" cy="8" rx="5.5" ry="6" fill="#d4a574" />
          {/* Headphones */}
          <path d="M8 5 Q8 1 14 1 Q20 1 20 5" stroke="#444" strokeWidth="1.5" fill="none" />
          <rect x="6" y="5" width="3" height="4" rx="1" fill="#444" />
          <rect x="19" y="5" width="3" height="4" rx="1" fill="#444" />
          {/* Eyes looking at screen */}
          <circle cx="11.5" cy="7.5" r="0.9" fill="#1a1a1a" />
          <circle cx="16.5" cy="7.5" r="0.9" fill="#1a1a1a" />
          {/* Neutral/focused expression */}
          <line x1="12" y1="11" x2="16" y2="11" stroke="#1a1a1a" strokeWidth="0.5" />
          {/* Hoodie */}
          <path d="M5 16 Q5 13 12 13 L16 13 Q23 13 23 16 L24 30 L4 30 Z" fill="#1e293b" />
          {/* SRE badge */}
          <rect x="9" y="19" width="10" height="4" rx="1" fill="#10b981" opacity="0.2" />
          <text x="10.5" y="22" fontSize="3" fill="#10b981" fontFamily="monospace" opacity="0.6">SRE</text>
          {/* Arms resting */}
          <path d="M5 18 L2 25" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 18 L26 25" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" />
          {/* Chair */}
          <rect x="2" y="29" width="24" height="2.5" rx="1" fill="white" opacity="0.05" />
          <path d="M8 31 L6 39" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M20 31 L22 39" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Keyboard & coffee */}
      <div className="absolute bottom-[20%] left-[18%] w-14 h-1.5 rounded-sm bg-white/[0.05] border border-white/8" />
      <motion.div className="absolute bottom-[20%] right-[22%]"
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 5.5 }}>
        <div className="w-2 h-2.5 rounded-b-sm bg-white/10 border border-white/8 relative">
          <div className="absolute -right-0.5 top-0.5 w-1 h-1 border border-white/8 rounded-r-full" />
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stage data                                                         */
/* ------------------------------------------------------------------ */

const stages = [
  { label: "Plan", sublabel: "We plan it", scene: IdeaScene, delay: 0.2 },
  { label: "Build", sublabel: "We code it", scene: CodeScene, delay: 0.8 },
  { label: "Deploy", sublabel: "We ship it", scene: LaunchScene, delay: 2.2 },
  { label: "Monitor", sublabel: "We maintain it", scene: RunningScene, delay: 4.8 },
];

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ErrorBoundary>
        <ParticleField className="z-0" />
      </ErrorBoundary>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left content */}
          <div className="flex-[3] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-surface/60 backdrop-blur-sm px-4 py-1.5 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-wide text-muted-light">
                Software Development + DevOps + Ongoing Care
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(3rem, 5vw + 1rem, 6rem)" }}
            >
              <span className="gradient-text">Built to Launch.</span>
              <br />
              <span className="text-foreground">Built to Last.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-xl text-muted-light leading-relaxed mx-auto lg:mx-0"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
            >
              We take your idea from concept to a live product — and maintain it
              every day after. Software development, cloud infrastructure, and
              DevOps, all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-sans font-semibold text-background glow-cyan transition-all duration-200 hover:bg-primary-dark"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-light)] px-7 py-3.5 font-sans font-semibold text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-surface/40"
              >
                Explore Our Work
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right side — Animated Lifecycle Scenes */}
          <div className="flex-[2] hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {stages.map((stage) => (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: stage.delay, duration: 0.5 }}
                >
                  <div className="glass rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border-light)]">
                      <span className="font-mono text-[11px] font-semibold text-foreground">
                        {stage.label}
                      </span>
                      <span className="font-mono text-[8px] text-muted tracking-wider uppercase">
                        {stage.sublabel}
                      </span>
                    </div>
                    <stage.scene />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-xs tracking-widest text-muted uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
