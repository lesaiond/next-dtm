import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["github.com", "img.icons8.com"],
  },
};

export default nextConfig;
