import Image from 'next/image';
// pages/comparisons/startups.js - Template for Startup Comparisons
import { useState } from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO'
import toolsData from '../../data/tools.json'

// Team-specific criteria and weights
const startupCriteria = {
  price: { weight: 4, description: 'Free plans and affordable pricing' },
  easeOfUse: { weight: 3, description: 'Quick setup and minimal training' },
  scalability: { weight: 3, description: 'Grows with your team' },
  integrations: { weight: 2, description: 'Works with other startup tools' },
  support: { weight: 2, description: 'Good documentation and support' }
}

// Feature importance for startups
const startupFeatures = [
  'Free plan available',
  'Easy onboarding',
  'Mobile app',
  'Basic reporting',
  'Task management',
  'Team collaboration',
  'Simple pricing',
  'Quick setup',
  'Email support',
  'Templates'
]

export default function StartupComparisons() {
  const tools = toolsData.tools
  const [selectedTools, setSelectedTools] = useState([])
  
  // Filter and sort tools for startups
  const startupTools = [...tools]
    .filter(tool => 
      tool.pricing.free || 
      (tool.pricing.starter && tool.pricing.starter <= 15) ||
      tool.best_for.toLowerCase().includes('startup') ||
      tool.best_for.toLowerCase().includes('small team')
    )
    .sort((a, b) => {
      // Sort by startup suitability score
      const scoreA = calculateStartupScore(a)
      const scoreB = calculateStartupScore(b)
      return scoreB - scoreA
    })

  function calculateStartupScore(tool) {
    let score = 0
    
    // Price score (free plan gets highest)
    if (tool.pricing.free) score += 4
    else if (tool.pricing.starter && tool.pricing.starter <= 10) score += 3
    else if (tool.pricing.starter && tool.pricing.starter <= 20) score += 2
    else score += 1
    
    // Feature matches
    const featureMatches = startupFeatures.filter(feature => 
      tool.top_features.some(tf => tf.toLowerCase().includes(feature.toLowerCase())) ||
      tool.best_for.toLowerCase().includes(feature.toLowerCase())
    ).length
    
    score += (featureMatches / startupFeatures.length) * 3
    
    return Math.round(score * 10) / 10
  }

  const comparisonPairs = [
    { tool1: 'clickup', tool2: 'notion', label: 'ClickUp vs Notion for Startups' },
    { tool1: 'asana', tool2: 'monday', label: 'Asana vs Monday.com for Startups' },
    { tool1: 'trello', tool2: 'asana', label: 'Trello vs Asana for Startups' },
    { tool1: 'notion', tool2: 'clickup', label: 'Notion vs ClickUp for Startups' }
  ]

  return (
    <>
      <SEO 
        title="Best Project Management Tools for Startups 2026 | PM Compare"
        description="Compare the best project management tools for startups. Free plans, easy setup, scalability, and budget-friendly options for early-stage companies."
      />

      <div className="team-comparison-page startup-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span> / </span>
              <Link href="/comparisons">Comparisons</Link>
              <span> / </span>
              <span className="current">Startup Teams</span>
            </nav>
            
            <div className="team-hero-content">
              <div className="team-badge">
                <span className="team-icon">🚀</span>
                <span className="team-label">Startup Focus</span>
              </div>
              
              <h1 className="team-title">
                Project Management Tools for <span className="highlight">Startups</span>
              </h1>
              
              <p className="team-description">
                Find tools perfect for early-stage companies. We prioritize free plans, 
                easy setup, scalability, and budget-friendly options that grow with your team.
              </p>
              
              <div className="team-stats">
                <div className="stat">
                  <span className="stat-number">{startupTools.length}</span>
                  <span className="stat-label">Startup-Friendly Tools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{(startupTools.length * (startupTools.length - 1)) / 2}</span>
                  <span className="stat-label">Possible Comparisons</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10</span>
                  <span className="stat-label">Key Features Analyzed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Criteria Section */}
        <section className="criteria-section">
          <div className="container">
            <h2 className="section-title">What Matters for Startups</h2>
            <p className="section-subtitle">We evaluate tools based on startup-specific needs</p>
            
            <div className="criteria-grid">
              {Object.entries(startupCriteria).map(([key, criterion]) => (
                <div key={key} className="criterion-card">
                  <div className="criterion-weight">
                    <div className="weight-badge" style={{ 
                      background: `linear-gradient(135deg, #7B68EE, #${Math.floor(Math.random()*16777215).toString(16)})`
                    }}>
                      Weight: {criterion.weight}/5
                    </div>
                  </div>
                  <h3 className="criterion-title">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
                  <p className="criterion-description">{criterion.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Tools for Startups */}
        <section className="top-tools-section">
          <div className="container">
            <div className="section-header">
              <h2>Top Tools for Startups</h2>
              <p>Ranked by startup suitability score</p>
            </div>
            
            <div className="tools-ranking">
              {startupTools.slice(0, 5).map((tool, index) => {
                const score = calculateStartupScore(tool)
                
                return (
                  <Link 
                    key={tool.id}
                    href={`/${tool.id}-alternatives`}
                    className="ranked-tool-card"
                  >
                    <div className="rank-badge">
                      #{index + 1}
                    </div>
                    
                    <div className="tool-header">
                      <Image src={tool.logo} alt={tool.name} className="tool-logo" />
                      <div className="tool-score">
                        <div className="score-label">Startup Score</div>
                        <div className="score-value">{score}/7</div>
                      </div>
                    </div>
                    
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-tagline">{tool.tagline}</p>
                    
                    <div className="tool-pricing">
                      {tool.pricing.free ? (
                        <span className="free-badge">Free Plan Available</span>
                      ) : (
                        <span>From ${tool.pricing.starter || tool.pricing.basic}/user</span>
                      )}
                    </div>
                    
                    <div className="tool-features">
                      <h4>Why it's good for startups:</h4>
                      <ul>
                        {tool.top_features.slice(0, 3).map((feature, idx) => (
                          <li key={idx}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="tool-cta">
                      <span className="cta-text">View Details →</span>
                      <span className="rating">⭐ {tool.rating}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Startup-Focused Comparisons */}
        <section className="focused-comparisons">
          <div className="container">
            <div className="section-header">
              <h2>Startup-Specific Comparisons</h2>
              <p>See how top tools stack up for early-stage companies</p>
            </div>
            
            <div className="comparison-grid">
              {comparisonPairs.map((pair, index) => {
                const tool1 = tools.find(t => t.id === pair.tool1)
                const tool2 = tools.find(t => t.id === pair.tool2)
                
                if (!tool1 || !tool2) return null
                
                const score1 = calculateStartupScore(tool1)
                const score2 = calculateStartupScore(tool2)
                
                return (
                  <Link 
                    key={index}
                    href={`/compare/${pair.tool1}/${pair.tool2}?team=startup`}
                    className="startup-comparison-card"
                  >
                    <div className="comparison-header">
                      <div className="tool-logos">
                        <Image src={tool1.logo} alt={tool1.name} />
                        <span className="vs-badge">VS</span>
                        <Image src={tool2.logo} alt={tool2.name} />
                      </div>
                      
                      <div className="score-comparison">
                        <div className="score-bar">
                          <div 
                            className="score-fill tool1-score"
                            style={{ width: `${(score1 / 7) * 100}%` }}
                          >
                            <span>{score1}</span>
                          </div>
                          <div 
                            className="score-fill tool2-score"
                            style={{ width: `${(score2 / 7) * 100}%` }}
                          >
                            <span>{score2}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="comparison-title">{pair.label}</h3>
                    
                    <div className="key-differences">
                      <div className="difference">
                        <strong>Best for budget:</strong>
                        <span>{score1 > score2 ? tool1.name : tool2.name}</span>
                      </div>
                      <div className="difference">
                        <strong>Easier to setup:</strong>
                        <span>{tool1.pricing.free && !tool2.pricing.free ? tool1.name : tool2.name}</span>
                      </div>
                    </div>
                    
                    <div className="comparison-cta">
                      Compare for Startups →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Feature Importance */}
        <section className="features-section">
          <div className="container">
            <h2>Essential Features for Startups</h2>
            <p>We prioritize these features in our analysis</p>
            
            <div className="features-grid">
              {startupFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h3 className="feature-name">{feature}</h3>
                  <p className="feature-importance">
                    {index < 3 ? 'Critical' : index < 7 ? 'Important' : 'Nice to have'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Selection Guide */}
        <section className="selection-guide">
          <div className="container">
            <div className="guide-content">
              <h2>Startup Tool Selection Guide</h2>
              
              <div className="guide-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Start Free</h3>
                  <p>Begin with free plans to test features without commitment</p>
                </div>
                
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Focus on Core Features</h3>
                  <p>Prioritize task management and collaboration over advanced features</p>
                </div>
                
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Plan for Growth</h3>
                  <p>Choose tools that scale with pricing that matches your growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="team-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Need Personalized Startup Tool Recommendations?</h2>
              <p>Try our Startup Tool Finder for customized suggestions based on your specific needs</p>
              <div className="cta-buttons">
                <Link href="/startup-tool-selector" className="btn-primary">
                  🎯 Find My Perfect Tool
                </Link>
                <Link href="/blog/startup-tool-budget-calculator" className="btn-secondary">
                  💰 Calculate Startup Budget
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Team Types */}
        <section className="related-teams">
          <div className="container">
            <h3>Explore Other Team Types:</h3>
            <div className="related-links">
              <Link href="/comparisons/enterprise" className="related-link">
                🏢 Enterprise Teams
              </Link>
              <Link href="/comparisons/agencies" className="related-link">
                🎨 Creative Agencies
              </Link>
              <Link href="/comparisons/remote-teams" className="related-link">
                🌍 Remote Teams
              </Link>
              <Link href="/comparisons/development-teams" className="related-link">
                💻 Development Teams
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
