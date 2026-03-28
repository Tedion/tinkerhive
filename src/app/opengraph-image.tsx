import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TinkerHive — Built to Launch. Built to Last.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(0,180,216,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Logo mark — hex shape */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 48 48">
            <polygon points="24,2 42,12 42,36 24,46 6,36 6,12" fill="#00b4d8" />
            <polygon points="24,8 37,15.5 37,30.5 24,38 11,30.5 11,15.5" fill="#0f172a" />
            <rect x="15" y="17" width="18" height="3" rx="1.5" fill="#ffffff" />
            <rect x="22.5" y="20" width="3" height="11" rx="1.5" fill="#ffffff" />
            <circle cx="15" cy="18.5" r="2" fill="#00b4d8" />
            <circle cx="33" cy="18.5" r="2" fill="#00b4d8" />
            <circle cx="24" cy="31" r="2" fill="#00b4d8" />
          </svg>
          <span style={{ color: "#f1f5f9", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            TinkerHive
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.1,
            maxWidth: "900px",
            letterSpacing: "-1px",
          }}
        >
          Built to Launch.{" "}
          <span style={{ color: "#00b4d8" }}>Built to Last.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            marginTop: "28px",
            fontSize: "24px",
            color: "#94a3b8",
            maxWidth: "780px",
            lineHeight: 1.4,
          }}
        >
          Software engineering, DevOps & cloud infrastructure — one team, one contract.
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          {["Software Dev", "DevOps", "Cloud", "AI Engineering", "24/7 Ops"].map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: "rgba(0,180,216,0.12)",
                border: "1px solid rgba(0,180,216,0.3)",
                borderRadius: "100px",
                padding: "8px 20px",
                fontSize: "16px",
                color: "#00b4d8",
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
