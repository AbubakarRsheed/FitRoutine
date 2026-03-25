/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for server-side rendering
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

module.exports = nextConfig;