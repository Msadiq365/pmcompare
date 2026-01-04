// pages/sitemap.xml.js
import toolsData from '../data/tools.json'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pm-compare.vercel.app'

const teamPages = [
  { slug: 'startups', priority: 0.8 },
  { slug: 'enterprise', priority: 0.8 },
  { slug: 'agencies', priority: 0.8 },
  { slug: 'remote-teams', priority: 0.8 },
  { slug: 'development-teams', priority: 0.8 },
  { slug: 'non-profit-teams', priority: 0.8 },
]

function generateSiteMap(tools) {
  const today = new Date().toISOString().split('T')[0]
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Comparisons Hub -->
  <url>
    <loc>${SITE_URL}/comparisons</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Team-specific pages -->
  ${teamPages.map(page => `
  <url>
    <loc>${SITE_URL}/comparisons/${page.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
  
  <!-- Tool pages -->
  ${tools.map(tool => `
  <url>
    <loc>${SITE_URL}/${tool.id}-alternatives</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
  
  <!-- Tool comparison pages (generate popular ones) -->
  ${generatePopularComparisons(tools)}
  
</urlset>`
}

function generatePopularComparisons(tools) {
  const popularPairs = [
    ['asana', 'monday'],
    ['clickup', 'notion'],
    ['trello', 'asana'],
    ['monday', 'clickup'],
    ['notion', 'asana'],
    ['trello', 'notion'],
  ]
  
  return popularPairs.map(([tool1, tool2]) => `
  <url>
    <loc>${SITE_URL}/compare/${tool1}/${tool2}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  `).join('')
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(toolsData.tools)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {
  return null
}