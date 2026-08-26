import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

export const reelSchema = z.object({
  topic: z.string(),
  theme: z.enum(["razbor", "dosie", "krasny"]),
});

const BG: Record<z.infer<typeof reelSchema>["theme"], string> = {
  razbor: "#0f1216",
  dosie: "#08080a",
  krasny: "#120404",
};

// Placeholder branded title card. Demonstrates the useCurrentFrame/spring/
// interpolate motion the real scenes use. Replace with the source scene library.
export const Reel: React.FC<z.infer<typeof reelSchema>> = ({ topic, theme }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const y = interpolate(enter, [0, 1], [60, 0]);
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: BG[theme] }}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `translateY(${y}px)`,
          opacity,
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: 120,
            color: "#fff",
            letterSpacing: -2,
          }}
        >
          {topic}
        </div>
        <div style={{ marginTop: 24, width: 220, height: 10, background: "#e10600" }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
