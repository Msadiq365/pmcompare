/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pmcompare.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 50000, // keep a single sitemap if site is small

  additionalPaths: async (config) => [
    { loc: '/', priority: 1.0 },
    { loc: '/comparisons', priority: 0.9 },
    { loc: '/comparisons/startups', priority: 0.8 }
  ],

  exclude: [
    '/404',
    '/_error',
    '/api/*'
  ]
};
