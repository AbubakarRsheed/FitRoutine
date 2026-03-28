/** @type {import('next').NextConfig} */
const nextConfig = {
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
    formats: ['image/avif', 'image/webp'],
  },
  
  compress: true,
  
  // Remove serverRuntimeConfig - it's invalid in Next.js 16
  // ❌ DELETE this line:
  // serverRuntimeConfig: {},
  
  // Add this for development
  devIndicators: {
    buildActivity: true,
  },
  
  // Add allowed origins for development (fixes localhost issues)
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.1.29'],
  
  // Optional: Disable Turbopack if you're having memory issues
  // experimental: {
  //   turbo: false,
  // },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig;