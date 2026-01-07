/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pmcompare.com', // ✅ production domain
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 50000, // optional, keeps all URLs in one sitemap if small site
};
