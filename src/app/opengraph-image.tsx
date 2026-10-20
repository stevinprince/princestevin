import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = {
  width: 1200,
  height: 630,
};
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
          background: "#f4f3ef",
          color: "#141414",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8a8984",
          }}
        >
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: "#5c5b57", lineHeight: 1.35, maxWidth: 880 }}>
            {site.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
