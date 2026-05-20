import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.esejo.com",
        port: "",
        pathname: "/pub/media/wysiwyg/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
