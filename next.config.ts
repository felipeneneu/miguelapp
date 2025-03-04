import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.imgur.com" },
      { hostname: "fv5-6.files.fm" },
      { hostname: "m.media-amazon.com" },
      { hostname: "encrypted-tbn3.gstatic.com" },
      { hostname: "fv5-2.files.fm" },
    ],
  },
};

export default nextConfig;
