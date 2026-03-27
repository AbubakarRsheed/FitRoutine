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
    // Modern image formats for better speed
    formats: ['image/avif', 'image/webp'],
  },
  
  // ❌ REMOVE i18n - App Router mein support nahi hai
  // ✅ App Router mein internationalization alag tarike se handle hoti hai
  // i18n: {
  //   locales: ['en-US', 'en-GB', 'en-IN', 'en-PK', 'en-CA', 'en-AU'],
  //   defaultLocale: 'en-US',
  //   localeDetection: true,
  // },
  
  // Compression for faster loading
  compress: true,
  
  // ❌ REMOVE swcMinify - ab default hai, extra option error deta hai
  // swcMinify: true,
  
  // Turbopack config for lockfile warning
  turbopack: {
    root: __dirname,
  },
  
  // Headers for SEO and caching
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
  
  // Enable React Strict Mode for better development
  reactStrictMode: true,
  
  // Powered by header remove karein (optional security)
  poweredByHeader: false,
};

module.exports = nextConfig;