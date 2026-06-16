import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1e3a8a 55%, #2563EB 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 34,
            fontWeight: 700,
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#06B6D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            M
          </div>
          {SITE.name}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Shaping Bright Futures Through Quality Education
        </div>
        <div style={{ marginTop: 32, fontSize: 30, opacity: 0.85 }}>
          Expert coaching · Std. 1 to 12 · All boards & mediums
        </div>
      </div>
    ),
    { ...size }
  );
}
