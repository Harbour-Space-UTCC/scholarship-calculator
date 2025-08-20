import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "keystoneacademic-res.cloudinary.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  }
};

export default nextConfig;
