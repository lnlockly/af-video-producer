import { Config } from "@remotion/cli/config";

// Use the chromium already baked into the agent image — never download one.
const baked = process.env.REMOTION_CHROMIUM_EXECUTABLE;
if (baked) Config.setBrowserExecutable(baked);

Config.setVideoImageFormat("jpeg");
Config.setConcurrency(Number(process.env.RENDER_CONCURRENCY ?? 2));
Config.setChromiumOpenGlRenderer("angle");
