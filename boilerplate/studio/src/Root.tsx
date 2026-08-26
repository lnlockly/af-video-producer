import React from "react";
import { Composition } from "remotion";
import { Reel, reelSchema } from "./Reel";

// Vertical 9:16 Shorts/Reels canvas. The video MCP server renders this comp,
// passing the storyboard the agent authored as inputProps. This scaffold ships
// one placeholder composition so `remotion bundle` succeeds on first boot; the
// production BrandedReel/CaptionedVideo scene library from the source skill is
// added here for full fidelity.
export const Root: React.FC = () => {
  return (
    <Composition
      id="Reel"
      component={Reel}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
      schema={reelSchema}
      defaultProps={{ topic: "РАЗБОР", theme: "razbor" as const }}
    />
  );
};
