/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pmcompare.com', // ← CHANGED TO THE NEW DOMAIN
  generateRobotsTxt: true,
  outDir: 'public',
  
  exclude: [
    '/privacy',
    '/cookie-policy', 
    '/disclaimer',
    '/terms',
    '/admin',
    '/view-subscribers',
    '/cookie',
    '/sitemap.xml'
  ],
  
  changefreq: 'weekly',
  priority: 0.7,
  
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
    ],
  },
};