/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pm-compare.vercel.app',
  generateRobotsTxt: true,
  outDir: 'public', // Explicitly tells it to output to /public
  
  // IMPORTANT: Exclude your legal pages (they have noindex)
  exclude: [
    '/privacy',
    '/cookie-policy', 
    '/disclaimer',
    '/terms',
    '/admin/*'
  ],
  
  robotsTxtOptions: {
    policies: [
      { 
        userAgent: '*', 
        allow: '/' 
      },
      { 
        userAgent: 'AhrefsBot', 
        disallow: '/' 
      },
      { 
        userAgent: 'SemrushBot', 
        disallow: '/' 
      },
    ],
    additionalSitemaps: [
      // Add additional sitemaps here if you have them
    ],
  },
  
  // Optional: Set default priority and changefreq
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
}