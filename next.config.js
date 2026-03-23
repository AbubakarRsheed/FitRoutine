/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export enable karne ke liye ye line zaroori hai
  images: {
    unoptimized: true, // Static export mein images ko optimize karne ke liye server chahiye hota hai, isliye ise true karna parta hai
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;