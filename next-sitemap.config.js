/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fitroutine.online',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  
  // Exclude unwanted pages
  exclude: [
    '/blog-details/*',      // Old route, remove from sitemap
    '/blog-sidebar',        // Not needed
    '/error',               // Not needed
    '/signin',              // Not needed for SEO
    '/signup',              // Not needed for SEO
  ],
  
  // Optional: Change frequency and priority for better SEO
  transform: async (config, path) => {
    // Custom priorities
    let priority = 0.7;
    let changefreq = 'daily';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (['/about', '/contact', '/terms', '/privacy-policy'].includes(path)) {
      priority = 0.5;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Additional robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/blog-details/',
          '/blog-sidebar',
          '/error',
          '/signin',
          '/signup',
        ],
      },
    ],
    additionalSitemaps: [
      'https://fitroutine.online/sitemap.xml',
    ],
  },
};