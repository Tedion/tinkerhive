"use client";

/**
 * TinkerHive Logo — SVG React component
 *
 * variant:
 *   "hex"    — Hexagon with circuit T-H monogram (recommended, default)
 *   "text"   — Wordmark only, no icon
 *
 * theme:
 *   "dark"   — White/cyan on dark backgrounds (hero, footer)
 *   "light"  — Navy/cyan on light backgrounds (scrolled header)
 *   "color"  — Full color, any background
 */

interface LogoProps {
  variant?: "hex" | "text";
  theme?: "dark" | "light" | "color";
  size?: number;
  className?: string;
  showText?: boolean;
}

const CYAN = "#00b4d8";
const NAVY = "#0f172a";
const WHITE = "#f1f5f9";

// ─── New Icon: Hexagon with stylised circuit "T" ──────────────────────────────
function HexIcon({ size, theme }: { size: number; theme: "dark" | "light" | "color" }) {
  const hexFill = CYAN;
  const innerBg = theme === "light" ? "#0369a1" : NAVY;
  const markColor = WHITE;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer hexagon */}
      <polygon
        points="24,2 42,12 42,36 24,46 6,36 6,12"
        fill={hexFill}
      />
      {/* Inner hexagon — cutout bg */}
      <polygon
        points="24,8 37,15.5 37,30.5 24,38 11,30.5 11,15.5"
        fill={innerBg}
      />

      {/* Circuit T mark — horizontal bar */}
      <rect x="15" y="17" width="18" height="3" rx="1.5" fill={markColor} />
      {/* Vertical stem */}
      <rect x="22.5" y="20" width="3" height="11" rx="1.5" fill={markColor} />

      {/* Node dots — circuit endpoints */}
      <circle cx="15" cy="18.5" r="2" fill={CYAN} />
      <circle cx="33" cy="18.5" r="2" fill={CYAN} />
      <circle cx="24" cy="31" r="2" fill={CYAN} />

      {/* Tiny connection lines to corners */}
      <line x1="15" y1="18.5" x2="11" y2="24" stroke={CYAN} strokeWidth="1" strokeOpacity="0.6" />
      <line x1="33" y1="18.5" x2="37" y2="24" stroke={CYAN} strokeWidth="1" strokeOpacity="0.6" />
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
        <HexIcon size={size} theme={theme} />
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
 */
export function TinkerHiveSVG({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="24,2 42,12 42,36 24,46 6,36 6,12" fill="#00b4d8" />
      <polygon points="24,8 37,15.5 37,30.5 24,38 11,30.5 11,15.5" fill="#0f172a" />
      <rect x="15" y="17" width="18" height="3" rx="1.5" fill="#f1f5f9" />
      <rect x="22.5" y="20" width="3" height="11" rx="1.5" fill="#f1f5f9" />
      <circle cx="15" cy="18.5" r="2" fill="#00b4d8" />
      <circle cx="33" cy="18.5" r="2" fill="#00b4d8" />
      <circle cx="24" cy="31" r="2" fill="#00b4d8" />
      <line x1="15" y1="18.5" x2="11" y2="24" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="33" y1="18.5" x2="37" y2="24" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}
