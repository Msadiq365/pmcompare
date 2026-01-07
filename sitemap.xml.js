export async function getServerSideProps({ res }) {
  const baseUrl = 'https://pmcompare.com'

  // Add ALL your important routes here
  const urls = [
    '/',
    '/comparisons',
    '/tools',
    '/alternatives'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`).join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'no-store')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
