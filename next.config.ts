import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins:
    process.env.ALLOWED_ORIGIN?.split(",").map((o) => o.trim()) ?? [],
};

export default nextConfig;
