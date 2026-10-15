import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Meanwolf_client" : "";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins:
    process.env.ALLOWED_ORIGIN?.split(",").map((o) => o.trim()) ?? [],
  ...(isGithubPages && {
    output: "export",
    basePath,
    images: { unoptimized: true },
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
