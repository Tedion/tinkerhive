import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="24,2 42,12 42,36 24,46 6,36 6,12" fill="#00b4d8" />
          <polygon points="24,8 37,15.5 37,30.5 24,38 11,30.5 11,15.5" fill="#0f172a" />
          <rect x="15" y="17" width="18" height="3" rx="1.5" fill="#f1f5f9" />
          <rect x="22.5" y="20" width="3" height="11" rx="1.5" fill="#f1f5f9" />
          <circle cx="15" cy="18.5" r="2" fill="#00b4d8" />
          <circle cx="33" cy="18.5" r="2" fill="#00b4d8" />
          <circle cx="24" cy="31" r="2" fill="#00b4d8" />
        </svg>
      </div>
    ),
    size
  );
}
