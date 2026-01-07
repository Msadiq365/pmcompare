export async function getServerSideProps({ res }) {
  const baseUrl = 'https://pmcompare.com'

  // TODO: Replace with dynamic routes from your data
  const urls = [
    '/',
    '/tools',
    '/comparisons',
    '/alternatives'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`).join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'no-store, must-revalidate')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
