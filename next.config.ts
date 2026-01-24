import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;
