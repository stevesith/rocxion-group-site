import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
};

export default nextConfig;
