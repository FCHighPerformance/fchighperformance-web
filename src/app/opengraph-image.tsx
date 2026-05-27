import { ImageResponse } from "next/og";

export const alt = "FC High Performance. Old-school training. Real community.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse at 75% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(96,113,121,0.25), transparent 60%), #232323",
          color: "white",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: "#F6AD55",
            }}
          />
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            FC High Performance
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Never too early.
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Never too late.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Boxing, strength &amp; conditioning, and personal training for
            kids 7+ and adults 40+ who refuse to slow down.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#F6AD55",
              color: "#232323",
              padding: "16px 24px",
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Talk to Coach →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
