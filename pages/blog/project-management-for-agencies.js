import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

/* ======================
   Constants
====================== */
const YEAR = 2026
const PUBLISHED_DATE = 'January 2, 2026'

/* ======================
   Helpers (SSR safe)
====================== */
const openExternal = (url) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

const getSlug = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')

/* ======================
   Data
====================== */
const agencyTools = [
  {
    id: 'teamwork',
    name: 'Teamwork',
    features: [
      'Time tracking & billing',
      'Client portal & permissions',
      'Profitability tracking',
      'Project templates'
    ],
    pricing: 'From $5.99/user/month',
    clientLimit: 'Unlimited',
    bestFor: 'Full-service agencies needing comprehensive features',
    affiliateLink: 'https://teamwork.com/?ref=pmcompare',
    color: '#1E88E5',
    rating: 4.4,
    agencyFocus: 9.5
  },
  {
    id: 'monday',
    name: 'Monday.com',
    features: [
      'Visual workflows',
      'Client request forms',
      'Automated notifications',
      'Custom dashboards'
    ],
    pricing: 'From $8/user/month',
    clientLimit: 'Unlimited',
    bestFor: 'Creative & marketing agencies wanting customization',
    affiliateLink: 'https://monday.com/?ref=pmcompare&coupon=PMAGENCY15',
    color: '#FF8C00',
    rating: 4.6,
    agencyFocus: 8.5
  },
  {
    id: 'scoro',
    name: 'Scoro',
    features: [
      'End-to-end business management',
      'CRM & sales pipeline',
      'Financial management',
      'Resource planning'
    ],
    pricing: 'From $26/user/month',
    clientLimit: 'Unlimited',
    bestFor: 'Professional services firms needing all-in-one',
    affiliateLink: 'https://scoro.com/?ref=pmcompare',
    color: '#6A1B9A',
    rating: 4.5,
    agencyFocus: 9.0
  },
  {
    id: 'asana',
    name: 'Asana',
    features: [
      'Portfolio management',
      'Approval workflows',
      'Timeline views',
      'Custom fields'
    ],
    pricing: 'From $10.99/user/month',
    clientLimit: 'Client guests',
    bestFor: 'Small to medium agencies with simpler needs',
    affiliateLink: 'https://asana.com/?ref=pmcompare',
    color: '#FF6363',
    rating: 4.4,
    agencyFocus: 7.5
  },
  {
    id: 'proofhub',
    name: 'ProofHub',
    features: [
      'Flat-rate pricing',
      'Online proofing & approval',
      'Gantt charts',
      'Built-in chat'
    ],
    pricing: '$45/month (unlimited users)',
    clientLimit: 'Unlimited',
    bestFor: 'Agencies wanting predictable costs',
    affiliateLink: 'https://proofhub.com/?ref=pmcompare',
    color: '#43A047',
    rating: 4.5,
    agencyFocus: 8.0
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    features: [
      'Everything view',
      'Time tracking & goals',
      'Custom statuses',
      'Document collaboration'
    ],
    pricing: 'From $7/user/month',
    clientLimit: 'Guest access',
    bestFor: 'Power-user agencies needing maximum flexibility',
    affiliateLink: 'https://clickup.com/?ref=pmcompare',
    color: '#7B68EE',
    rating: 4.7,
    agencyFocus: 8.0
  }
]

/* ======================
   Component
====================== */
export default function ProjectManagementForAgencies() {
  const [selectedAgencyType, setSelectedAgencyType] = useState('all')

  const filteredTools =
    selectedAgencyType === 'all'
      ? agencyTools
      : agencyTools.filter((tool) => {
          if (selectedAgencyType === 'marketing')
            return ['monday', 'asana', 'clickup'].includes(tool.id)
          if (selectedAgencyType === 'creative')
            return ['proofhub', 'monday'].includes(tool.id)
          if (selectedAgencyType === 'digital')
            return ['clickup', 'teamwork'].includes(tool.id)
          if (selectedAgencyType === 'consulting')
            return ['scoro', 'teamwork'].includes(tool.id)
          return true
        })

  return (
    <>
      <Head>
        <title>
          Project Management for Agencies: Best Tools & Strategies {YEAR} | PM
          Compare
        </title>
        <meta
          name="description"
          content="Complete guide to project management for agencies. Compare Teamwork, Monday.com, Scoro, Asana, and more for client work, billing, and profitability."
        />
        <meta
          property="og:title"
          content={`Project Management for Agencies: Best Tools & Strategies ${YEAR}`}
        />
        <meta property="og:type" content="article" />
      </Head>

      <main className="container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link href="/">Home</Link> /{' '}
          <Link href="/blog">Blog</Link> /{' '}
          <span>Agency Tools</span>
        </nav>

        {/* Header */}
        <header className="header">
          <h1>
            Project Management for Agencies: Best Tools & Strategies {YEAR}
          </h1>
          <p>
            Discover the tools and workflows agencies use to manage clients,
            deadlines, and profitability at scale.
          </p>
          <small>
            PM Compare Team · Published {PUBLISHED_DATE} · 10 min read
          </small>
        </header>

        {/* Filters */}
        <section className="filters">
          {['all', 'marketing', 'creative', 'digital', 'consulting'].map(
            (type) => (
              <button
                key={type}
                onClick={() => setSelectedAgencyType(type)}
                className={selectedAgencyType === type ? 'active' : ''}
              >
                {type === 'all'
                  ? 'All Agencies'
                  : `${type.charAt(0).toUpperCase()}${type.slice(1)} Agencies`}
              </button>
            )
          )}
        </section>

        {/* Tools */}
        <section>
          {filteredTools.map((tool, index) => (
            <article key={tool.id} className="tool-card">
              <header>
                <h2>
                  #{index + 1} {tool.name}
                </h2>
                <span>★ {tool.rating}</span>
              </header>

              <p>
                <strong>Pricing:</strong> {tool.pricing}
              </p>

              <ul>
                {tool.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <p>
                <strong>Best for:</strong> {tool.bestFor}
              </p>

              <div className="tool-actions">
                <button onClick={() => openExternal(tool.affiliateLink)}>
                  Try {tool.name} Free →
                </button>

                <Link href={`/tools/${tool.id}`}>
                  View detailed review →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Styles */}
      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: auto;
          padding: 40px 20px;
        }

        .breadcrumbs {
          margin-bottom: 30px;
          font-size: 14px;
        }

        .header h1 {
          font-size: 2.4rem;
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 30px 0;
        }

        .filters button {
          padding: 10px 20px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          background: #f7fafc;
          cursor: pointer;
        }

        .filters .active {
          background: #667eea;
          color: #fff;
        }

        .tool-card {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 30px;
        }

        .tool-actions {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .tool-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
