import Image from 'next/image';
// pages/comparisons/agencies.js - Agency Teams Comparison Page
import { useState } from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO'
import toolsData from '../../data/tools.json'

// Agency-specific criteria and weights
const agencyCriteria = {
  clientManagement: { 
    weight: 5, 
    description: 'Client portals, client collaboration, project visibility for clients' 
  },
  timeTracking: { 
    weight: 4, 
    description: 'Accurate time tracking, billable hours, timesheet approvals' 
  },
  profitability: { 
    weight: 4, 
    description: 'Budget tracking, margin analysis, resource utilization reports' 
  },
  collaboration: { 
    weight: 3, 
    description: 'Team communication, file sharing, feedback collection' 
  },
  projectTemplates: { 
    weight: 3, 
    description: 'Reusable project templates, workflow automation, standard processes' 
  },
  integrations: { 
    weight: 2, 
    description: 'CRM integration, accounting software, communication tools' 
  }
}

// Feature importance for agencies
const agencyFeatures = [
  'Client Portals',
  'Time Tracking',
  'Budget Tracking',
  'Resource Management',
  'Project Templates',
  'File Sharing',
  'Team Collaboration',
  'Client Approvals',
  'Billing & Invoicing',
  'Profitability Reports',
  'Custom Branding',
  'Workflow Automation',
  'Milestone Tracking',
  'Client Communication',
  'Project Analytics'
]

// Agency types
const agencyTypes = [
  { 
    type: 'Marketing Agencies',
    description: 'Campaign management, content calendars, client reporting',
    color: '#FF6B6B'
  },
  { 
    type: 'Creative Agencies',
    description: 'Design collaboration, feedback loops, creative workflows',
    color: '#667eea'
  },
  { 
    type: 'Digital Agencies',
    description: 'Web development, SEO projects, digital campaigns',
    color: '#10B981'
  },
  { 
    type: 'Consulting Firms',
    description: 'Client engagements, deliverable tracking, knowledge management',
    color: '#F59E0B'
  }
]

export default function AgencyComparisons() {
  const tools = toolsData.tools
  const [selectedAgencyType, setSelectedAgencyType] = useState('all')
  const [selectedFeatures, setSelectedFeatures] = useState([])
  
  // Filter and sort tools for agencies
  const agencyTools = [...tools]
    .filter(tool => 
      tool.best_for && (
        tool.best_for.toLowerCase().includes('agency') ||
        tool.best_for.toLowerCase().includes('client') ||
        tool.best_for.toLowerCase().includes('service') ||
        tool.features && (
          tool.features.some(f => f.toLowerCase().includes('client')) ||
          tool.features.some(f => f.toLowerCase().includes('time track')) ||
          tool.features.some(f => f.toLowerCase().includes('budget'))
        )
      )
    )
    .sort((a, b) => {
      const scoreA = calculateAgencyScore(a)
      const scoreB = calculateAgencyScore(b)
      return scoreB - scoreA
    })

  function calculateAgencyScore(tool) {
    let score = 0
    
    // Agency-specific features scoring
    const agencyFeatureMatches = agencyFeatures.filter(feature => {
      const featureLower = feature.toLowerCase()
      return (
        (tool.features && tool.features.some(f => f.toLowerCase().includes(featureLower))) ||
        (tool.top_features && tool.top_features.some(tf => tf.toLowerCase().includes(featureLower))) ||
        (tool.best_for && tool.best_for.toLowerCase().includes(featureLower))
      )
    }).length
    
    score += (agencyFeatureMatches / agencyFeatures.length) * 6
    
    // Bonus points for critical agency features
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('client portal'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('time track'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('budget'))) score += 1
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('profit'))) score += 1
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('template'))) score += 1
    
    // Pricing considerations for agencies
    if (tool.pricing.team || tool.pricing.professional) score += 1
    if (tool.pricing.free) score += 0.5 // Free plan is good for small agencies
    
    return Math.round(score * 10) / 10
  }

  const comparisonPairs = [
    { tool1: 'monday', tool2: 'asana', label: 'Monday.com vs Asana for Agencies' },
    { tool1: 'clickup', tool2: 'trello', label: 'ClickUp vs Trello for Agencies' },
    { tool1: 'teamwork', tool2: 'wrike', label: 'Teamwork vs Wrike for Agencies' },
    { tool1: 'basecamp', tool2: 'monday', label: 'Basecamp vs Monday.com for Agencies' }
  ]

  // Agency workflow stages
  const agencyWorkflow = [
    {
      stage: 'Client Onboarding',
      description: 'Initial project setup and client communication',
      toolsNeeded: ['Client portals', 'Project templates', 'Communication tools']
    },
    {
      stage: 'Project Execution',
      description: 'Daily work, collaboration, and progress tracking',
      toolsNeeded: ['Task management', 'Time tracking', 'File sharing', 'Team chat']
    },
    {
      stage: 'Client Review',
      description: 'Feedback collection and client approvals',
      toolsNeeded: ['Client portals', 'Approval workflows', 'Feedback tools']
    },
    {
      stage: 'Billing & Reporting',
      description: 'Time tracking, invoicing, and profitability analysis',
      toolsNeeded: ['Time tracking', 'Billing integration', 'Profitability reports']
    }
  ]

  // Client management features
  const clientManagementFeatures = [
    {
      feature: 'Client Portals',
      importance: 'Critical',
      description: 'Secure spaces for clients to view progress and provide feedback',
      icon: '🚪'
    },
    {
      feature: 'Time Tracking',
      importance: 'Critical',
      description: 'Track billable hours and monitor team productivity',
      icon: '⏱️'
    },
    {
      feature: 'Budget Tracking',
      importance: 'High',
      description: 'Monitor project budgets and prevent scope creep',
      icon: '💰'
    },
    {
      feature: 'Client Approvals',
      importance: 'High',
      description: 'Streamlined approval processes for deliverables',
      icon: '✅'
    },
    {
      feature: 'Brand Customization',
      importance: 'Medium',
      description: 'White-labeling and custom branding for client portals',
      icon: '🎨'
    },
    {
      feature: 'Automated Reporting',
      importance: 'Medium',
      description: 'Scheduled reports to keep clients informed',
      icon: '📊'
    }
  ]

  // Agency-specific tool recommendations
  const agencyToolRecommendations = [
    {
      agencySize: 'Small Agency (1-10 people)',
      recommendation: 'Start with affordable tools that offer client portals and basic time tracking',
      tools: ['Trello', 'Asana', 'ClickUp (Free Plan)'],
      budget: '$0-50/month'
    },
    {
      agencySize: 'Mid-Size Agency (11-50 people)',
      recommendation: 'Invest in comprehensive tools with client management and profitability tracking',
      tools: ['Monday.com', 'Teamwork', 'Wrike'],
      budget: '$200-1000/month'
    },
    {
      agencySize: 'Large Agency (50+ people)',
      recommendation: 'Enterprise-grade solutions with advanced features and dedicated support',
      tools: ['Wrike Enterprise', 'Monday.com Enterprise', 'Smartsheet'],
      budget: '$1000+/month'
    }
  ]

  return (
    <>
      <SEO 
        title="Best Project Management Tools for Agencies 2026 | PM Compare"
        description="Compare project management tools built for marketing, creative, and digital agencies. Client portals, time tracking, budget management, and profitability features."
        keywords="agency project management, marketing agency tools, creative agency software, client management, time tracking for agencies"
      />

      <div className="team-comparison-page agency-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span> / </span>
              <Link href="/comparisons">Comparisons</Link>
              <span> / </span>
              <span className="current">Agency Teams</span>
            </nav>
            
            <div className="team-hero-content">
              <div className="team-badge">
                <span className="team-icon">🎨</span>
                <span className="team-label">Agency Focus</span>
              </div>
              
              <h1 className="team-title">
                Project Management Tools for <span className="highlight">Agencies</span>
              </h1>
              
              <p className="team-description">
                Find tools designed for marketing, creative, and digital agencies. 
                We prioritize client management, time tracking, budget control, 
                and profitability features essential for service businesses.
              </p>
              
              <div className="team-stats">
                <div className="stat">
                  <span className="stat-number">{agencyTools.length}</span>
                  <span className="stat-label">Agency-Friendly Tools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{agencyFeatures.length}</span>
                  <span className="stat-label">Key Features Analyzed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Agency Types</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Types Selector */}
        <section className="agency-types-section">
          <div className="container">
            <h2 className="section-title">Select Your Agency Type</h2>
            <p className="section-subtitle">Get tailored recommendations for your specific agency needs</p>
            
            <div className="agency-types-grid">
              {agencyTypes.map((agencyType, index) => (
                <button
                  key={index}
                  className={`agency-type-card ${selectedAgencyType === agencyType.type.toLowerCase() ? 'selected' : ''}`}
                  onClick={() => setSelectedAgencyType(agencyType.type.toLowerCase())}
                  style={{ 
                    borderColor: agencyType.color,
                    background: selectedAgencyType === agencyType.type.toLowerCase() 
                      ? `${agencyType.color}15` 
                      : 'white'
                  }}
                >
                  <div className="agency-type-icon" style={{ color: agencyType.color }}>
                    {index === 0 ? '📢' : index === 1 ? '🎨' : index === 2 ? '💻' : '👔'}
                  </div>
                  
                  <h3 className="agency-type-title">{agencyType.type}</h3>
                  
                  <p className="agency-type-description">
                    {agencyType.description}
                  </p>
                  
                  <div className="agency-type-features">
                    {index === 0 && (
                      <>
                        <span>Campaign Tracking</span>
                        <span>Client Reporting</span>
                        <span>Content Calendars</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span>Design Collaboration</span>
                        <span>Feedback Loops</span>
                        <span>Asset Management</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span>Development Tracking</span>
                        <span>SEO Management</span>
                        <span>Digital Campaigns</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span>Client Engagements</span>
                        <span>Deliverable Tracking</span>
                        <span>Knowledge Base</span>
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Client Management Features */}
        <section className="client-features-section">
          <div className="container">
            <div className="section-header">
              <h2>Essential Client Management Features</h2>
              <p>Critical tools for successful agency-client relationships</p>
            </div>
            
            <div className="client-features-grid">
              {clientManagementFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="client-feature-card"
                  style={{
                    borderLeft: `4px solid ${
                      feature.importance === 'Critical' ? '#FF6B6B' : 
                      feature.importance === 'High' ? '#F59E0B' : 
                      '#667eea'
                    }`
                  }}
                >
                  <div className="feature-header">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className={`feature-importance ${feature.importance.toLowerCase()}`}>
                      {feature.importance}
                    </div>
                  </div>
                  
                  <h3 className="feature-title">{feature.feature}</h3>
                  
                  <p className="feature-description">{feature.description}</p>
                  
                  <div className="feature-stats">
                    <div className="stat">
                      <span className="stat-label">Agency Need</span>
                      <span className="stat-value">
                        {feature.importance === 'Critical' ? '100%' : 
                         feature.importance === 'High' ? '85%' : '60%'}
                      </span>
                    </div>
                    
                    <div className="stat">
                      <span className="stat-label">Tools Available</span>
                      <span className="stat-value">
                        {agencyTools.filter(tool => 
                          tool.features && tool.features.some(f => 
                            f.toLowerCase().includes(feature.feature.toLowerCase().split(' ')[0])
                          )
                        ).length} of {agencyTools.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Workflow */}
        <section className="agency-workflow-section">
          <div className="container">
            <div className="section-header">
              <h2>Agency Project Workflow</h2>
              <p>How tools support each stage of agency project delivery</p>
            </div>
            
            <div className="workflow-timeline">
              {agencyWorkflow.map((stage, index) => (
                <div key={index} className="workflow-stage">
                  <div className="stage-header">
                    <div className="stage-number">0{index + 1}</div>
                    <div className="stage-content">
                      <h3 className="stage-title">{stage.stage}</h3>
                      <p className="stage-description">{stage.description}</p>
                    </div>
                  </div>
                  
                  <div className="stage-tools">
                    <div className="tools-label">Required Tools:</div>
                    <div className="tools-list">
                      {stage.toolsNeeded.map((tool, idx) => (
                        <span key={idx} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="stage-recommendations">
                    <div className="recommendation-label">Top Tools:</div>
                    <div className="tool-recommendations">
                      {agencyTools
                        .slice(0, 3)
                        .map(tool => (
                          <div key={tool.id} className="recommended-tool">
                            <Image src={tool.logo} alt={tool.name} className="tool-logo" />
                            <span className="tool-name">{tool.name}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Agency Tools */}
        <section className="top-tools-section">
          <div className="container">
            <div className="section-header">
              <h2>Top Tools for Agencies</h2>
              <p>Ranked by agency suitability score</p>
            </div>
            
            <div className="tools-ranking">
              {agencyTools.slice(0, 6).map((tool, index) => {
                const score = calculateAgencyScore(tool)
                
                // Check key agency features
                const hasClientPortal = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('client portal') || f.toLowerCase().includes('client access')
                )
                const hasTimeTracking = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('time track') || f.toLowerCase().includes('timesheet')
                )
                const hasBudgetTracking = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('budget') || f.toLowerCase().includes('cost')
                )
                
                return (
                  <Link 
                    key={tool.id}
                    href={`/${tool.id}-alternatives`}
                    className="ranked-tool-card agency-tool-card"
                  >
                    <div className="rank-badge agency-rank">
                      #{index + 1}
                    </div>
                    
                    <div className="tool-header">
                      <Image src={tool.logo} alt={tool.name} className="tool-logo" />
                      
                      <div className="tool-score">
                        <div className="score-label">Agency Score</div>
                        <div className="score-value">{score}/10</div>
                      </div>
                    </div>
                    
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-tagline">{tool.tagline}</p>
                    
                    <div className="agency-feature-checklist">
                      <div className="feature-check">
                        <span className="check-label">Client Portal:</span>
                        <span className={`check-status ${hasClientPortal ? 'available' : 'missing'}`}>
                          {hasClientPortal ? '✅ Available' : '❌ Limited'}
                        </span>
                      </div>
                      
                      <div className="feature-check">
                        <span className="check-label">Time Tracking:</span>
                        <span className={`check-status ${hasTimeTracking ? 'available' : 'missing'}`}>
                          {hasTimeTracking ? '✅ Available' : '❌ Limited'}
                        </span>
                      </div>
                      
                      <div className="feature-check">
                        <span className="check-label">Budget Tracking:</span>
                        <span className={`check-status ${hasBudgetTracking ? 'available' : 'missing'}`}>
                          {hasBudgetTracking ? '✅ Available' : '❌ Limited'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="tool-best-for">
                      <strong>Best for:</strong>
                      <span>{tool.best_for}</span>
                    </div>
                    
                    <div className="tool-pricing agency-pricing">
                      {tool.pricing.free ? (
                        <>
                          <span className="free-plan">Free plan available</span>
                          {tool.pricing.team && (
                            <span className="team-price">
                              Team: ${tool.pricing.team}/user
                            </span>
                          )}
                        </>
                      ) : tool.pricing.team ? (
                        <span className="team-pricing">
                          From ${tool.pricing.team}/user/month
                          <small>Team plan recommended</small>
                        </span>
                      ) : (
                        <span className="custom-pricing">
                          Custom pricing available
                        </span>
                      )}
                    </div>
                    
                    <div className="tool-cta agency-cta">
                      <span className="cta-text">View Agency Features →</span>
                      <span className="rating">⭐ {tool.rating}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Agency-Focused Comparisons */}
        <section className="focused-comparisons">
          <div className="container">
            <div className="section-header">
              <h2>Agency-Specific Comparisons</h2>
              <p>Head-to-head analysis for agency requirements</p>
            </div>
            
            <div className="comparison-grid">
              {comparisonPairs.map((pair, index) => {
                const tool1 = tools.find(t => t.id === pair.tool1)
                const tool2 = tools.find(t => t.id === pair.tool2)
                
                if (!tool1 || !tool2) return null
                
                const score1 = calculateAgencyScore(tool1)
                const score2 = calculateAgencyScore(tool2)
                
                // Compare key agency features
                const compareFeatures = [
                  { name: 'Client Portals', tool1: tool1.features?.some(f => f.toLowerCase().includes('client portal')), tool2: tool2.features?.some(f => f.toLowerCase().includes('client portal')) },
                  { name: 'Time Tracking', tool1: tool1.features?.some(f => f.toLowerCase().includes('time track')), tool2: tool2.features?.some(f => f.toLowerCase().includes('time track')) },
                  { name: 'Budget Tracking', tool1: tool1.features?.some(f => f.toLowerCase().includes('budget')), tool2: tool2.features?.some(f => f.toLowerCase().includes('budget')) },
                  { name: 'Project Templates', tool1: tool1.features?.some(f => f.toLowerCase().includes('template')), tool2: tool2.features?.some(f => f.toLowerCase().includes('template')) }
                ]
                
                return (
                  <Link 
                    key={index}
                    href={`/compare/${pair.tool1}/${pair.tool2}?team=agency`}
                    className="agency-comparison-card"
                  >
                    <div className="comparison-header">
                      <div className="tool-logos">
                        <Image src={tool1.logo} alt={tool1.name} />
                        <span className="vs-badge">VS</span>
                        <Image src={tool2.logo} alt={tool2.name} />
                      </div>
                      
                      <div className="agency-score-comparison">
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
                    
                    <div className="feature-comparison-grid">
                      {compareFeatures.map((feature, idx) => (
                        <div key={idx} className="feature-comparison">
                          <div className="feature-name">{feature.name}</div>
                          <div className="feature-statuses">
                            <span className={`status ${feature.tool1 ? 'available' : 'missing'}`}>
                              {feature.tool1 ? '✅' : '❌'}
                            </span>
                            <span className="vs-small">vs</span>
                            <span className={`status ${feature.tool2 ? 'available' : 'missing'}`}>
                              {feature.tool2 ? '✅' : '❌'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="agency-recommendation">
                      <div className="recommendation-header">
                        <span className="recommendation-icon">🏆</span>
                        <strong>Best for agencies:</strong>
                      </div>
                      <div className="recommendation-content">
                        <span className="recommended-tool">
                          {score1 > score2 ? tool1.name : tool2.name}
                        </span>
                        <span className="recommendation-reason">
                          {score1 > score2 
                            ? 'Better client management features'
                            : 'Superior time tracking and reporting'
                          }
                        </span>
                      </div>
                    </div>
                    
                    <div className="comparison-cta">
                      Compare for Agencies →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Agency Size Recommendations */}
        <section className="agency-size-recommendations">
          <div className="container">
            <div className="section-header">
              <h2>Tool Recommendations by Agency Size</h2>
              <p>Find the right tools based on your agency's scale and needs</p>
            </div>
            
            <div className="recommendation-cards">
              {agencyToolRecommendations.map((rec, index) => (
                <div key={index} className="recommendation-card">
                  <div className="recommendation-header">
                    <div className="agency-size">{rec.agencySize}</div>
                    <div className="agency-budget">{rec.budget}</div>
                  </div>
                  
                  <p className="recommendation-text">{rec.recommendation}</p>
                  
                  <div className="recommended-tools-list">
                    {rec.tools.map((tool, idx) => (
                      <div key={idx} className="recommended-tool-item">
                        <span className="tool-rank">#{idx + 1}</span>
                        <span className="tool-name">{tool}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="key-features">
                    <strong>Key Features Needed:</strong>
                    <div className="features-list">
                      {index === 0 && (
                        <>
                          <span>Basic client portals</span>
                          <span>Simple time tracking</span>
                          <span>Project templates</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span>Advanced client portals</span>
                          <span>Profitability tracking</span>
                          <span>Resource management</span>
                          <span>Custom reporting</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span>Enterprise security</span>
                          <span>Advanced analytics</span>
                          <span>Custom workflows</span>
                          <span>Dedicated support</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profitability Calculator Preview */}
        <section className="profitability-preview">
          <div className="container">
            <div className="preview-content">
              <div className="preview-text">
                <h2>Calculate Agency Profitability</h2>
                <p>
                  Use our Budget Calculator to determine the true cost and ROI of 
                  project management tools for your agency.
                </p>
                <ul>
                  <li>Calculate billable hour savings</li>
                  <li>Estimate client management efficiency gains</li>
                  <li>Compare tool costs vs. productivity benefits</li>
                </ul>
              </div>
              
              <div className="preview-actions">
                <Link 
                  href="/blog/startup-tool-budget-calculator"
                  className="btn-primary"
                >
                  💰 Open Profitability Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="team-cta">
          <div className="container">
            <div className="cta-card agency-cta-card">
              <h2>Need Help Choosing Agency Tools?</h2>
              <p>
                Get personalized recommendations based on your agency size, 
                client types, and specific workflow needs.
              </p>
              <div className="cta-buttons">
                <Link href="/startup-tool-selector" className="btn-primary">
                  🎯 Find My Agency Tool
                </Link>
                <Link href="/comparisons" className="btn-secondary">
                  📊 Compare All Tools
                </Link>
                <button className="btn-outline">
                  📋 Download Agency Checklist
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
              <Link href="/comparisons/enterprise" className="related-link">
                🏢 Enterprise Teams
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
