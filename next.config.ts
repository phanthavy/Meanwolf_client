import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  allowedDevOrigins:
    process.env.ALLOWED_ORIGIN?.split(",").map((o) => o.trim()) ?? [],
};

export default nextConfig;
