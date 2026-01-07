/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pmcompare.com', // 🔹 Update to your new domain
  generateRobotsTxt: true,              // Generates robots.txt automatically
  sitemapSize: 7000,                     // Optional: split sitemap if very large
  changefreq: 'daily',
  priority: 0.7
};
