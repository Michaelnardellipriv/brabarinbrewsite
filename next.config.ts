import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

export default nextConfig;
