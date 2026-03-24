import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, borderRadius: 36, background: "#00b4d8", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#06070a", fontSize: 110, fontWeight: 800 }}>T</span>
      </div>
    ),
    size
  );
}
