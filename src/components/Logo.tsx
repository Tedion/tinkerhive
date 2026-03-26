"use client";

/**
 * TinkerHive Logo — SVG React component
 *
 * Three visual concepts built into one file.
 * Usage: <Logo variant="hex" theme="dark" size={36} />
 *
 * variant:
 *   "hex"    — Hexagon icon with circuit-node dots (recommended)
 *   "wrench" — Stylized wrench forming a T inside a rounded square
 *   "text"   — Wordmark only, no icon
 *
 * theme:
 *   "dark"   — White text, cyan accent (for dark hero / dark footer)
 *   "light"  — Navy text, cyan accent (for white/gray header)
 *   "color"  — Full color, works on any bg
 */

interface LogoProps {
  variant?: "hex" | "wrench" | "text";
  theme?: "dark" | "light" | "color";
  size?: number;
  className?: string;
  showText?: boolean;
}

const CYAN = "#00b4d8";
const NAVY = "#0f172a";
const WHITE = "#f1f5f9";

// ─── Concept A: Hexagon with inner circuit nodes ─────────────────────────────
function HexIcon({ size, theme }: { size: number; theme: "dark" | "light" | "color" }) {
  const fill = theme === "dark" ? NAVY : theme === "light" ? WHITE : WHITE;
  const stroke = CYAN;
  const nodeFill = CYAN;
  const innerStroke = theme === "dark" ? "rgba(0,180,216,0.35)" : "rgba(0,180,216,0.5)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer hexagon */}
      <polygon
        points="20,2 35.5,11 35.5,29 20,38 4.5,29 4.5,11"
        fill={stroke}
      />
      {/* Inner hexagon (cut-out effect) */}
      <polygon
        points="20,7.5 30.5,13.25 30.5,24.75 20,30.5 9.5,24.75 9.5,13.25"
        fill={theme === "color" ? NAVY : theme === "dark" ? NAVY : "#0369a1"}
      />
      {/* Center dot */}
      <circle cx="20" cy="19" r="2.5" fill={nodeFill} />
      {/* Three circuit lines radiating from center */}
      <line x1="20" y1="16.5" x2="20" y2="9.5" stroke={nodeFill} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.8" y1="20.2" x2="11.8" y2="23.5" stroke={nodeFill} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22.2" y1="20.2" x2="28.2" y2="23.5" stroke={nodeFill} strokeWidth="1.5" strokeLinecap="round" />
      {/* Node dots at line ends */}
      <circle cx="20" cy="9" r="1.8" fill={nodeFill} />
      <circle cx="11.2" cy="24" r="1.8" fill={nodeFill} />
      <circle cx="28.8" cy="24" r="1.8" fill={nodeFill} />
    </svg>
  );
}

// ─── Concept B: Bold "T" inside rounded square with gear corner detail ───────
function WrenchIcon({ size, theme }: { size: number; theme: "dark" | "light" | "color" }) {
  const bg = CYAN;
  const fg = theme === "light" ? WHITE : WHITE;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background rounded square */}
      <rect x="1" y="1" width="38" height="38" rx="10" fill={bg} />
      {/* Bold T letterform */}
      <rect x="8" y="10" width="24" height="5" rx="2" fill={fg} />
      <rect x="17" y="15" width="6" height="15" rx="2" fill={fg} />
      {/* Tiny gear-tooth detail at bottom-right */}
      <rect x="28" y="28" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.35)" />
      <rect x="25" y="31" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.35)" />
      <rect x="31" y="31" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

// ─── Main Logo Component ─────────────────────────────────────────────────────
export default function Logo({
  variant = "hex",
  theme = "light",
  size = 36,
  className = "",
  showText = true,
}: LogoProps) {
  const textColor = theme === "dark" ? WHITE : NAVY;
  const accentColor = CYAN;

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {variant !== "text" && (
        variant === "hex"
          ? <HexIcon size={size} theme={theme} />
          : <WrenchIcon size={size} theme={theme} />
      )}
      {showText && (
        <span
          style={{
            fontSize: size * 0.56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: textColor,
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          Tinker<span style={{ color: accentColor }}>Hive</span>
        </span>
      )}
    </span>
  );
}

/**
 * Standalone SVG export for favicon / OG image generation
 * Usage: import { TinkerHiveSVG } from "@/components/Logo"
 */
export function TinkerHiveSVG({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="20,2 35.5,11 35.5,29 20,38 4.5,29 4.5,11" fill="#00b4d8" />
      <polygon points="20,7.5 30.5,13.25 30.5,24.75 20,30.5 9.5,24.75 9.5,13.25" fill="#0f172a" />
      <circle cx="20" cy="19" r="2.5" fill="#00b4d8" />
      <line x1="20" y1="16.5" x2="20" y2="9.5" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.8" y1="20.2" x2="11.8" y2="23.5" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22.2" y1="20.2" x2="28.2" y2="23.5" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="9" r="1.8" fill="#00b4d8" />
      <circle cx="11.2" cy="24" r="1.8" fill="#00b4d8" />
      <circle cx="28.8" cy="24" r="1.8" fill="#00b4d8" />
    </svg>
  );
}
