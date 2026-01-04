import Image from 'next/image';
// pages/comparisons/enterprise.js - Enterprise Teams Comparison Page
import { useState } from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO'
import toolsData from '../../data/tools.json'

// Enterprise-specific criteria and weights
const enterpriseCriteria = {
  security: { 
    weight: 5, 
    description: 'SOC 2, GDPR, HIPAA compliance, advanced security features' 
  },
  scalability: { 
    weight: 4, 
    description: 'Handles thousands of users, high performance, uptime SLAs' 
  },
  integration: { 
    weight: 4, 
    description: 'Deep API access, SSO, enterprise app integrations' 
  },
  adminControls: { 
    weight: 3, 
    description: 'Advanced permissions, audit logs, centralized administration' 
  },
  support: { 
    weight: 3, 
    description: 'Dedicated support, SLAs, enterprise training' 
  },
  customizability: { 
    weight: 3, 
    description: 'Custom workflows, branding, advanced configuration' 
  }
}

// Feature importance for enterprise
const enterpriseFeatures = [
  'SAML/SSO Integration',
  'Advanced Permissions',
  'Audit Logs',
  'GDPR Compliance',
  'SOC 2 Certification',
  'API Access',
  'Custom Reporting',
  'Data Export',
  'Dedicated Support',
  'Enterprise SLAs',
  'Custom Branding',
  'Workflow Automation',
  'Data Retention Policies',
  'Advanced Analytics',
  'User Provisioning'
]

export default function EnterpriseComparisons() {
  const tools = toolsData.tools
  const [selectedTools, setSelectedTools] = useState([])
  
  // Filter and sort tools for enterprise
  const enterpriseTools = [...tools]
    .filter(tool => 
      tool.pricing.enterprise ||
      tool.pricing.business && tool.pricing.business >= 20 ||
      tool.features && (
        tool.features.includes('enterprise') ||
        tool.features.includes('security') ||
        tool.features.includes('compliance') ||
        tool.features.includes('sso')
      )
    )
    .sort((a, b) => {
      const scoreA = calculateEnterpriseScore(a)
      const scoreB = calculateEnterpriseScore(b)
      return scoreB - scoreA
    })

  function calculateEnterpriseScore(tool) {
    let score = 0
    
    // Enterprise pricing tier (higher = more enterprise-focused)
    if (tool.pricing.enterprise) score += 3
    if (tool.pricing.business && tool.pricing.business >= 25) score += 2
    if (tool.pricing.business && tool.pricing.business >= 15) score += 1
    
    // Feature matches
    const featureMatches = enterpriseFeatures.filter(feature => {
      const featureLower = feature.toLowerCase()
      return (
        (tool.features && tool.features.some(f => f.toLowerCase().includes(featureLower))) ||
        (tool.top_features && tool.top_features.some(tf => tf.toLowerCase().includes(featureLower))) ||
        (tool.best_for && tool.best_for.toLowerCase().includes(featureLower))
      )
    }).length
    
    score += (featureMatches / enterpriseFeatures.length) * 4
    
    // Dedicated enterprise features bonus
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('sso'))) score += 1
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('soc'))) score += 1
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('gdpr'))) score += 1
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('audit'))) score += 1
    
    return Math.round(score * 10) / 10
  }

  const comparisonPairs = [
    { tool1: 'asana', tool2: 'monday', label: 'Asana vs Monday.com for Enterprise' },
    { tool1: 'clickup', tool2: 'wrike', label: 'ClickUp vs Wrike for Enterprise' },
    { tool1: 'monday', tool2: 'smartsheet', label: 'Monday.com vs Smartsheet for Enterprise' },
    { tool1: 'jira', tool2: 'asana', label: 'Jira vs Asana for Enterprise' }
  ]

  // Enterprise requirements checklist
  const requirementsChecklist = [
    { feature: 'SAML/SSO Integration', critical: true },
    { feature: 'Advanced User Permissions', critical: true },
    { feature: 'Audit Trail & Logging', critical: true },
    { feature: 'GDPR Compliance', critical: true },
    { feature: 'SOC 2 Type II Certification', critical: true },
    { feature: 'Dedicated Account Manager', critical: false },
    { feature: 'Custom Service Level Agreements', critical: false },
    { feature: 'Custom Branding & White-labeling', critical: false },
    { feature: 'Advanced API Access', critical: false },
    { feature: 'Data Export Capabilities', critical: false }
  ]

  // Enterprise use cases
  const enterpriseUseCases = [
    {
      title: 'Global Team Coordination',
      description: 'Manage projects across multiple time zones and regions',
      features: ['Timezone support', 'Multi-language', 'Regional compliance']
    },
    {
      title: 'Security & Compliance',
      description: 'Meet regulatory requirements and security standards',
      features: ['Data encryption', 'Access controls', 'Compliance reporting']
    },
    {
      title: 'Executive Reporting',
      description: 'Provide leadership with real-time insights and analytics',
      features: ['Custom dashboards', 'Advanced analytics', 'Export capabilities']
    },
    {
      title: 'IT Governance',
      description: 'Manage software licenses, access, and integration',
      features: ['User provisioning', 'Integration management', 'License tracking']
    }
  ]

  return (
    <>
      <SEO 
        title="Best Enterprise Project Management Tools 2026 | PM Compare"
        description="Compare enterprise-grade project management tools with advanced security, compliance, scalability, and integration features for large organizations."
        keywords="enterprise project management, business software, security compliance, enterprise tools, large team collaboration"
      />

      <div className="team-comparison-page enterprise-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span> / </span>
              <Link href="/comparisons">Comparisons</Link>
              <span> / </span>
              <span className="current">Enterprise Teams</span>
            </nav>
            
            <div className="team-hero-content">
              <div className="team-badge">
                <span className="team-icon">🏢</span>
                <span className="team-label">Enterprise Focus</span>
              </div>
              
              <h1 className="team-title">
                Enterprise Project Management Tools <span className="highlight">2026</span>
              </h1>
              
              <p className="team-description">
                Compare tools built for large organizations with advanced security, 
                compliance, scalability, and integration requirements. 
                Enterprise-grade solutions for mission-critical operations.
              </p>
              
              <div className="team-stats">
                <div className="stat">
                  <span className="stat-number">{enterpriseTools.length}</span>
                  <span className="stat-label">Enterprise-Ready Tools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Security Criteria</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime Required</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support SLAs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Requirements Section */}
        <section className="requirements-section">
          <div className="container">
            <h2 className="section-title">Enterprise Requirements Checklist</h2>
            <p className="section-subtitle">Essential features for large organizations</p>
            
            <div className="requirements-grid">
              {requirementsChecklist.map((req, index) => (
                <div key={index} className={`requirement-card ${req.critical ? 'critical' : 'standard'}`}>
                  <div className="requirement-header">
                    <div className="requirement-icon">
                      {req.critical ? '🔒' : '📋'}
                    </div>
                    <div className="requirement-priority">
                      {req.critical ? 'CRITICAL' : 'STANDARD'}
                    </div>
                  </div>
                  
                  <h3 className="requirement-title">{req.feature}</h3>
                  
                  <div className="requirement-description">
                    {req.critical 
                      ? 'Essential for enterprise deployment and security compliance'
                      : 'Recommended for optimal enterprise operations'
                    }
                  </div>
                  
                  <div className="tools-compliance">
                    <span className="compliance-label">Tools with this feature:</span>
                    <span className="compliance-count">
                      {enterpriseTools.filter(tool => 
                        (tool.features && tool.features.some(f => 
                          f.toLowerCase().includes(req.feature.split('/')[0].toLowerCase())
                        ))
                      ).length} of {enterpriseTools.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Criteria Section */}
        <section className="criteria-section">
          <div className="container">
            <h2 className="section-title">Enterprise Evaluation Criteria</h2>
            <p className="section-subtitle">Weighted analysis for enterprise decision-making</p>
            
            <div className="criteria-grid">
              {Object.entries(enterpriseCriteria).map(([key, criterion]) => (
                <div key={key} className="criterion-card enterprise-criterion">
                  <div className="criterion-weight">
                    <div className="weight-badge" style={{ 
                      background: `linear-gradient(135deg, #1E88E5, #1565C0)`
                    }}>
                      Weight: {criterion.weight}/5
                    </div>
                  </div>
                  
                  <h3 className="criterion-title">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h3>
                  
                  <p className="criterion-description">{criterion.description}</p>
                  
                  <div className="criterion-examples">
                    <strong>Key features assessed:</strong>
                    <ul>
                      {key === 'security' && (
                        <>
                          <li>SOC 2 Compliance</li>
                          <li>GDPR Readiness</li>
                          <li>Data Encryption</li>
                        </>
                      )}
                      {key === 'scalability' && (
                        <>
                          <li>Performance at scale</li>
                          <li>User limit handling</li>
                          <li>Uptime guarantees</li>
                        </>
                      )}
                      {key === 'integration' && (
                        <>
                          <li>SSO capabilities</li>
                          <li>API documentation</li>
                          <li>Pre-built connectors</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Enterprise Tools */}
        <section className="top-tools-section">
          <div className="container">
            <div className="section-header">
              <h2>Top Enterprise-Ready Tools</h2>
              <p>Ranked by enterprise suitability score</p>
            </div>
            
            <div className="tools-ranking">
              {enterpriseTools.slice(0, 6).map((tool, index) => {
                const score = calculateEnterpriseScore(tool)
                
                return (
                  <Link 
                    key={tool.id}
                    href={`/${tool.id}-alternatives`}
                    className="ranked-tool-card enterprise-tool-card"
                  >
                    <div className="rank-badge enterprise-rank">
                      #{index + 1}
                    </div>
                    
                    <div className="tool-header">
                      <div className="tool-logo-container">
                        <Image src={tool.logo} alt={tool.name} className="tool-logo" />
                        {tool.pricing.enterprise && (
                          <span className="enterprise-badge">ENTERPRISE</span>
                        )}
                      </div>
                      
                      <div className="tool-score">
                        <div className="score-label">Enterprise Score</div>
                        <div className="score-value">{score}/10</div>
                      </div>
                    </div>
                    
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-tagline">{tool.tagline}</p>
                    
                    <div className="enterprise-highlights">
                      <div className="highlight">
                        <span className="highlight-label">Security:</span>
                        <span className="highlight-value">
                          {tool.features && tool.features.some(f => f.toLowerCase().includes('soc')) ? 'SOC 2 ✅' : 'Basic'}
                        </span>
                      </div>
                      <div className="highlight">
                        <span className="highlight-label">Support:</span>
                        <span className="highlight-value">
                          {tool.pricing.enterprise ? '24/7 Dedicated' : 'Business Hours'}
                        </span>
                      </div>
                      <div className="highlight">
                        <span className="highlight-label">SSO:</span>
                        <span className="highlight-value">
                          {tool.features && tool.features.some(f => f.toLowerCase().includes('sso')) ? 'SAML ✅' : 'Limited'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="tool-pricing enterprise-pricing">
                      {tool.pricing.enterprise ? (
                        <span className="enterprise-pricing">
                          Custom Enterprise Pricing
                          <small>Contact sales for quote</small>
                        </span>
                      ) : tool.pricing.business ? (
                        <span className="business-pricing">
                          From ${tool.pricing.business}/user/month
                          <small>Business plan</small>
                        </span>
                      ) : (
                        <span className="starter-pricing">
                          Not recommended for enterprise
                        </span>
                      )}
                    </div>
                    
                    <div className="tool-cta enterprise-cta">
                      <span className="cta-text">View Enterprise Features →</span>
                      <span className="rating">⭐ {tool.rating}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Use Cases */}
        <section className="use-cases-section">
          <div className="container">
            <div className="section-header">
              <h2>Enterprise Use Cases</h2>
              <p>How large organizations use project management tools</p>
            </div>
            
            <div className="use-cases-grid">
              {enterpriseUseCases.map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <div className="use-case-icon">
                    {index === 0 ? '🌍' : index === 1 ? '🔒' : index === 2 ? '📈' : '⚙️'}
                  </div>
                  
                  <h3 className="use-case-title">{useCase.title}</h3>
                  
                  <p className="use-case-description">{useCase.description}</p>
                  
                  <div className="use-case-features">
                    {useCase.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="recommended-tools">
                    <strong>Top tools for this use case:</strong>
                    <div className="tool-recommendations">
                      {enterpriseTools
                        .slice(0, 3)
                        .map(tool => (
                          <span key={tool.id} className="tool-recommendation">
                            {tool.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise-Focused Comparisons */}
        <section className="focused-comparisons">
          <div className="container">
            <div className="section-header">
              <h2>Enterprise-Specific Comparisons</h2>
              <p>Head-to-head analysis for enterprise requirements</p>
            </div>
            
            <div className="comparison-grid">
              {comparisonPairs.map((pair, index) => {
                const tool1 = tools.find(t => t.id === pair.tool1)
                const tool2 = tools.find(t => t.id === pair.tool2)
                
                if (!tool1 || !tool2) return null
                
                const score1 = calculateEnterpriseScore(tool1)
                const score2 = calculateEnterpriseScore(tool2)
                
                return (
                  <Link 
                    key={index}
                    href={`/compare/${pair.tool1}/${pair.tool2}?team=enterprise`}
                    className="enterprise-comparison-card"
                  >
                    <div className="comparison-header">
                      <div className="tool-logos">
                        <Image src={tool1.logo} alt={tool1.name} />
                        <span className="vs-badge">VS</span>
                        <Image src={tool2.logo} alt={tool2.name} />
                      </div>
                      
                      <div className="enterprise-score-comparison">
                        <div className="score-labels">
                          <span className="score-label">{tool1.name}</span>
                          <span className="score-label">{tool2.name}</span>
                        </div>
                        
                        <div className="score-bar">
                          <div 
                            className="score-fill tool1-score"
                            style={{ width: `${(score1 / 10) * 100}%` }}
                          >
                            <span>{score1}</span>
                          </div>
                          <div 
                            className="score-fill tool2-score"
                            style={{ width: `${(score2 / 10) * 100}%` }}
                          >
                            <span>{score2}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="comparison-title">{pair.label}</h3>
                    
                    <div className="enterprise-key-differences">
                      <div className="difference-row">
                        <div className="difference-category">Security:</div>
                        <div className="difference-value">
                          {tool1.features && tool1.features.some(f => f.toLowerCase().includes('soc')) ? '✅' : '❌'} vs
                          {tool2.features && tool2.features.some(f => f.toLowerCase().includes('soc')) ? '✅' : '❌'}
                        </div>
                      </div>
                      
                      <div className="difference-row">
                        <div className="difference-category">SSO Support:</div>
                        <div className="difference-value">
                          {tool1.features && tool1.features.some(f => f.toLowerCase().includes('sso')) ? 'SAML' : 'Basic'} vs
                          {tool2.features && tool2.features.some(f => f.toLowerCase().includes('sso')) ? 'SAML' : 'Basic'}
                        </div>
                      </div>
                      
                      <div className="difference-row">
                        <div className="difference-category">Support Level:</div>
                        <div className="difference-value">
                          {tool1.pricing.enterprise ? '24/7' : 'Business'} vs
                          {tool2.pricing.enterprise ? '24/7' : 'Business'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="recommendation-banner">
                      <div className="recommendation-icon">🏆</div>
                      <div className="recommendation-text">
                        <strong>Best for large enterprises:</strong>
                        <span>{score1 > score2 ? tool1.name : tool2.name}</span>
                      </div>
                    </div>
                    
                    <div className="comparison-cta">
                      Compare Enterprise Features →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="implementation-guide">
          <div className="container">
            <div className="guide-content">
              <h2>Enterprise Implementation Guide</h2>
              
              <div className="implementation-steps">
                <div className="implementation-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>Security Assessment</h3>
                    <p>Conduct security reviews, compliance checks, and vendor risk assessments before implementation.</p>
                    <ul>
                      <li>Review SOC 2 reports</li>
                      <li>Assess data residency options</li>
                      <li>Evaluate encryption standards</li>
                    </ul>
                  </div>
                </div>
                
                <div className="implementation-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>Pilot Program</h3>
                    <p>Run a controlled pilot with a small team to validate functionality and gather feedback.</p>
                    <ul>
                      <li>Select pilot team (50-100 users)</li>
                      <li>Define success metrics</li>
                      <li>Collect user feedback</li>
                    </ul>
                  </div>
                </div>
                
                <div className="implementation-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>Enterprise Rollout</h3>
                    <p>Phased deployment with training, support, and change management strategies.</p>
                    <ul>
                      <li>Department-by-department rollout</li>
                      <li>Comprehensive training programs</li>
                      <li>Dedicated support channels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="cost-analysis">
          <div className="container">
            <h2>Enterprise Cost Considerations</h2>
            
            <div className="cost-grid">
              <div className="cost-card">
                <div className="cost-icon">💰</div>
                <h3>License Costs</h3>
                <p className="cost-amount">$25 - $50+ per user/month</p>
                <p className="cost-details">Enterprise plans typically start at $25/user with volume discounts available.</p>
              </div>
              
              <div className="cost-card">
                <div className="cost-icon">⚙️</div>
                <h3>Implementation</h3>
                <p className="cost-amount">$10,000 - $50,000+</p>
                <p className="cost-details">Professional services, configuration, and integration setup.</p>
              </div>
              
              <div className="cost-card">
                <div className="cost-icon">🔄</div>
                <h3>Annual Maintenance</h3>
                <p className="cost-amount">15-25% of license cost</p>
                <p className="cost-details">Annual fees for updates, support, and new features.</p>
              </div>
              
              <div className="cost-card">
                <div className="cost-icon">📈</div>
                <h3>ROI Timeline</h3>
                <p className="cost-amount">6-18 months</p>
                <p className="cost-details">Typical return on investment period for enterprise deployments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="team-cta">
          <div className="container">
            <div className="cta-card enterprise-cta-card">
              <h2>Need Enterprise Vendor Evaluation?</h2>
              <p>Get detailed security assessments, compliance checks, and implementation roadmaps</p>
              <div className="cta-buttons">
                <Link href="/startup-tool-selector" className="btn-primary">
                  🏢 Request Enterprise Demo
                </Link>
                <Link href="/blog/startup-tool-budget-calculator" className="btn-secondary">
                  💰 Calculate TCO
                </Link>
                <button className="btn-outline">
                  📋 Download RFP Template
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Team Types */}
        <section className="related-teams">
          <div className="container">
            <h3>Explore Other Team Types:</h3>
            <div className="related-links">
              <Link href="/comparisons/startups" className="related-link">
                🚀 Startup Teams
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
