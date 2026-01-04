// components/SEO.js
import Head from 'next/head'

export default function SEO({
  title = "Compare Project Management Tools - Find the Best PM Software 2025",
  description = "Compare the best project management tools including Asana, Monday.com, ClickUp, Trello, and Notion. Find the perfect software for your team with detailed comparisons.",
  canonical = "",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData = null,
  noindex = false,
  children
}) {
  const siteTitle = "PM Compare - Project Management Tools Comparison"
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pm-compare.vercel.app'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl
  
  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PM Compare",
    "description": "Compare project management tools to find the best software for your team",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
  
  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Noindex */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PM Compare" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }}
      />
      
      {/* Additional meta tags */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional children */}
      {children}
    </Head>
  )
}