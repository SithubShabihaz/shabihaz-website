import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-121a2da4a287498fb3836684e0a72244.r2.dev', // Yahan apna r2.dev wala hostname likhein
      },
    ],
  },
};

module.exports = nextConfig;
