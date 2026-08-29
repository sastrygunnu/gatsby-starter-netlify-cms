import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#1c1712",
          padding: "72px",
          borderLeft: "16px solid #8f3318",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 28,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#1c1712",
              color: "#faf6ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
            }}
          >
            SK
          </div>
          <span>{site.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 54, lineHeight: 1.15, letterSpacing: "-0.04em" }}>
            {site.thesis[0]}
          </div>
          <div style={{ fontSize: 28, color: "#6a6158", lineHeight: 1.35 }}>
            {site.thesis[1]}
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#8f3318" }}>sastry.dev</div>
      </div>
    ),
    size,
  );
}
