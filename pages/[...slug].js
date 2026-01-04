// pages/[...slug].js - UPDATED VERSION WITH TOOLLOGO
import Head from 'next/head'
import Link from 'next/link'
import { ToolLogo } from '../components/ToolLogo'  // 👈 ADD THIS LINE
import toolsData from '../data/tools.json'

export default function DynamicPage({ pageType, tool1, tool2, mainTool, alternatives }) {
  // COMPARISON PAGE
  if (pageType === 'comparison') {
    if (!tool1 || !tool2) {
      return (
        <div className="error-page">
          <h1>Comparison Not Found</h1>
          <p>The tools you're looking for don't exist.</p>
          <Link href="/">← Back to Home</Link>
        </div>
      )
    }

    const pageTitle = `${tool1.name} vs ${tool2.name}: Which is Better? (2026)`
    const metaDescription = `Comprehensive comparison of ${tool1.name} and ${tool2.name}. Compare features, pricing, pros & cons to choose the best project management tool for your team.`

    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <article className="comparison-page">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{tool1.name} vs {tool2.name}</span>
          </nav>

          <header>
            <h1>{pageTitle}</h1>
            <p className="intro">
              Choosing between {tool1.name} and {tool2.name} for your team? Both are powerful 
              project management platforms, but they excel in different areas. This comprehensive 
              comparison breaks down pricing, features, ease of use, and ideal use cases to help you decide.
            </p>
            <div className="last-updated">Last updated: January 2026</div>
          </header>

          <section className="quick-verdict">
            <h2>⚡ Quick Verdict</h2>
            <div className="verdict-grid">
              <div className="verdict-card">
                <div className="tool-header">
                  <ToolLogo tool={tool1} size={48} />
                  <h3>Choose {tool1.name} if:</h3>
                </div>
                <p className="best-for">{tool1.best_for}</p>
                <ul>
                  {tool1.pros.slice(0, 3).map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
                <div className="pricing-badge">
                  From ${tool1.pricing.free ? 'Free' : tool1.pricing.starter || tool1.pricing.basic}/user/mo
                </div>
                <a href={tool1.affiliate_link} className="cta-button" target="_blank" rel="noopener sponsored">
                  Try {tool1.name} Free →
                </a>
              </div>

              <div className="verdict-card">
                <div className="tool-header">
                  <ToolLogo tool={tool2} size={48} />
                  <h3>Choose {tool2.name} if:</h3>
                </div>
                <p className="best-for">{tool2.best_for}</p>
                <ul>
                  {tool2.pros.slice(0, 3).map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
                <div className="pricing-badge">
                  From ${tool2.pricing.free ? 'Free' : tool2.pricing.starter || tool2.pricing.basic}/user/mo
                </div>
                <a href={tool2.affiliate_link} className="cta-button" target="_blank" rel="noopener sponsored">
                  Try {tool2.name} Free →
                </a>
              </div>
            </div>
          </section>

          <section className="feature-comparison">
            <h2>📊 {tool1.name} vs {tool2.name}: Feature Comparison</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>{tool1.name}</th>
                    <th>{tool2.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Starting Price</strong></td>
                    <td>{tool1.pricing.free ? 'Free plan available' : `$${tool1.pricing.starter || tool1.pricing.basic}/user/mo`}</td>
                    <td>{tool2.pricing.free ? 'Free plan available' : `$${tool2.pricing.starter || tool2.pricing.basic}/user/mo`}</td>
                  </tr>
                  <tr>
                    <td><strong>Best For</strong></td>
                    <td>{tool1.best_for}</td>
                    <td>{tool2.best_for}</td>
                  </tr>
                  <tr>
                    <td><strong>Ideal Team Size</strong></td>
                    <td>{tool1.ideal_team_size}</td>
                    <td>{tool2.ideal_team_size}</td>
                  </tr>
                  <tr>
                    <td><strong>User Rating</strong></td>
                    <td>⭐ {tool1.rating}/5</td>
                    <td>⭐ {tool2.rating}/5</td>
                  </tr>
                  <tr>
                    <td><strong>Free Plan</strong></td>
                    <td>{tool1.pricing.free ? '✅ Yes' : '❌ No'}</td>
                    <td>{tool2.pricing.free ? '✅ Yes' : '❌ No'}</td>
                  </tr>
                  <tr>
                    <td><strong>Key Integrations</strong></td>
                    <td>{tool1.integrations.slice(0, 3).join(', ')}</td>
                    <td>{tool2.integrations.slice(0, 3).join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="pricing-section">
            <h2>💰 Pricing Comparison</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>{tool1.name} Pricing</h3>
                <ul>
                  {tool1.pricing.free && <li><strong>Free:</strong> $0</li>}
                  {tool1.pricing.starter && <li><strong>Starter:</strong> ${tool1.pricing.starter}/user/month</li>}
                  {tool1.pricing.basic && <li><strong>Basic:</strong> ${tool1.pricing.basic}/user/month</li>}
                  {tool1.pricing.standard && <li><strong>Standard:</strong> ${tool1.pricing.standard}/user/month</li>}
                  {tool1.pricing.advanced && <li><strong>Advanced:</strong> ${tool1.pricing.advanced}/user/month</li>}
                  {tool1.pricing.pro && <li><strong>Pro:</strong> ${tool1.pricing.pro}/user/month</li>}
                </ul>
              </div>
              <div className="pricing-card">
                <h3>{tool2.name} Pricing</h3>
                <ul>
                  {tool2.pricing.free && <li><strong>Free:</strong> $0</li>}
                  {tool2.pricing.starter && <li><strong>Starter:</strong> ${tool2.pricing.starter}/user/month</li>}
                  {tool2.pricing.basic && <li><strong>Basic:</strong> ${tool2.pricing.basic}/user/month</li>}
                  {tool2.pricing.standard && <li><strong>Standard:</strong> ${tool2.pricing.standard}/user/month</li>}
                  {tool2.pricing.advanced && <li><strong>Advanced:</strong> ${tool2.pricing.advanced}/user/month</li>}
                  {tool2.pricing.pro && <li><strong>Pro:</strong> ${tool2.pricing.pro}/user/month</li>}
                </ul>
              </div>
            </div>
          </section>

          <section className="pros-cons">
            <h2>✅ Pros & Cons</h2>
            <div className="pros-cons-grid">
              <div className="tool-pros-cons">
                <h3>{tool1.name}</h3>
                <div className="pros">
                  <h4>✅ Pros</h4>
                  <ul>{tool1.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}</ul>
                </div>
                <div className="cons">
                  <h4>❌ Cons</h4>
                  <ul>{tool1.cons.map((con, idx) => <li key={idx}>{con}</li>)}</ul>
                </div>
              </div>
              <div className="tool-pros-cons">
                <h3>{tool2.name}</h3>
                <div className="pros">
                  <h4>✅ Pros</h4>
                  <ul>{tool2.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}</ul>
                </div>
                <div className="cons">
                  <h4>❌ Cons</h4>
                  <ul>{tool2.cons.map((con, idx) => <li key={idx}>{con}</li>)}</ul>
                </div>
              </div>
            </div>
          </section>

          <section className="final-verdict">
            <h2>🏆 Final Verdict</h2>
            <p>Both {tool1.name} and {tool2.name} are excellent tools. Choose {tool1.name} if you prioritize {tool1.best_for.toLowerCase()}, while {tool2.name} excels at {tool2.best_for.toLowerCase()}.</p>
            <div className="final-cta">
              <a href={tool1.affiliate_link} className="cta-button primary" target="_blank" rel="noopener sponsored">
                Try {tool1.name} Free
              </a>
              <a href={tool2.affiliate_link} className="cta-button primary" target="_blank" rel="noopener sponsored">
                Try {tool2.name} Free
              </a>
            </div>
          </section>

          <section className="related-links">
            <h3>Related Comparisons</h3>
            <ul>
              <li><Link href={`/${tool1.id}-alternatives`}>{tool1.name} Alternatives</Link></li>
              <li><Link href={`/${tool2.id}-alternatives`}>{tool2.name} Alternatives</Link></li>
            </ul>
          </section>
        </article>
      </>
    )
  }

  // ALTERNATIVES PAGE
  if (pageType === 'alternatives') {
    if (!mainTool) {
      return (
        <div className="error-page">
          <h1>Page Not Found</h1>
          <Link href="/">← Back to Home</Link>
        </div>
      )
    }

    const pageTitle = `${alternatives.length} Best ${mainTool.name} Alternatives (2026)`
    const metaDescription = `Looking for ${mainTool.name} alternatives? Compare the top ${alternatives.length} competitors including pricing, features, and best use cases.`

    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={metaDescription} />
        </Head>

        <article className="alternatives-page">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{mainTool.name} Alternatives</span>
          </nav>

          <header>
            <h1>{pageTitle}</h1>
            <p className="intro">
              Looking for an alternative to {mainTool.name}? We've researched the top {alternatives.length} competitors to help you find the perfect fit.
            </p>
            <div className="main-tool-card">
              <ToolLogo tool={mainTool} size={48} />
              <div>
                <h3>{mainTool.name}</h3>
                <p className="tagline">{mainTool.tagline}</p>
                <p className="pricing">Starting at ${mainTool.pricing.free ? 'Free' : (mainTool.pricing.starter || mainTool.pricing.basic)}/user/mo</p>
              </div>
            </div>
          </header>

          <section className="detailed-alternatives">
            <h2>🔍 Top {mainTool.name} Alternatives</h2>
            {alternatives.slice(0, 10).map((tool, index) => (
              <div key={tool.id} className="alternative-card">
                <div className="alternative-header">
                  <div className="rank">#{index + 1}</div>
                  <ToolLogo tool={tool} size={48} />
                  <div className="tool-info">
                    <h3>{tool.name}</h3>
                    <p className="tagline">{tool.tagline}</p>
                  </div>
                </div>
                <div className="alternative-content">
                  <p>{tool.best_for}</p>
                  <div className="cta-section">
                    <a href={tool.affiliate_link} className="cta-button" target="_blank" rel="noopener sponsored">
                      Try {tool.name} Free →
                    </a>
                    <Link href={`/${mainTool.id}-vs-${tool.id}`} className="comparison-link">
                      Compare {mainTool.name} vs {tool.name} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </article>
      </>
    )
  }

  return null
}

export async function getStaticPaths() {
  const tools = toolsData.tools
  const paths = []

  // Generate comparison paths: asana-vs-monday
  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      paths.push({
        params: {
          slug: [`${tools[i].id}-vs-${tools[j].id}`]
        }
      })
    }
  }

  // Generate alternatives paths: asana-alternatives
  tools.forEach(tool => {
    paths.push({
      params: {
        slug: [`${tool.id}-alternatives`]
      }
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0]

  // Check if it's a comparison page (contains "-vs-")
  if (slug.includes('-vs-')) {
    const parts = slug.split('-vs-')
    if (parts.length !== 2) return { notFound: true }

    const [tool1Id, tool2Id] = parts
    const tool1 = toolsData.tools.find(t => t.id === tool1Id)
    const tool2 = toolsData.tools.find(t => t.id === tool2Id)

    if (!tool1 || !tool2) return { notFound: true }

    return {
      props: {
        pageType: 'comparison',
        tool1,
        tool2,
        mainTool: null,
        alternatives: []
      }
    }
  }

  // Check if it's an alternatives page (ends with "-alternatives")
  if (slug.endsWith('-alternatives')) {
    const toolId = slug.replace('-alternatives', '')
    const mainTool = toolsData.tools.find(t => t.id === toolId)
    const alternatives = toolsData.tools.filter(t => t.id !== toolId)

    if (!mainTool) return { notFound: true }

    return {
      props: {
        pageType: 'alternatives',
        tool1: null,
        tool2: null,
        mainTool,
        alternatives
      }
    }
  }

  return { notFound: true }
}