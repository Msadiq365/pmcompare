/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pm-compare.vercel.app',
  generateRobotsTxt: true,
  outDir: 'public',
  
  // CRITICAL: Exclude these pages
  exclude: [
    '/privacy',
    '/cookie-policy', 
    '/disclaimer',
    '/terms',
    '/admin',
    '/view-subscribers',
    '/cookie',
    '/sitemap.xml'  // ← ADD THIS: Exclude the sitemap index itself
  ],
  
  // Important settings
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
    ],
  },
}