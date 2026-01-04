// pages/comparisons/non-profit-teams.js - Non-Profit Teams Comparison Page
import { useState } from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO'
import toolsData from '../../data/tools.json'

// Non-profit specific criteria and weights
const nonProfitCriteria = {
  volunteerManagement: { 
    weight: 5, 
    description: 'Volunteer scheduling, tracking, and communication' 
  },
  donationTracking: { 
    weight: 5, 
    description: 'Donation processing, tracking, and reporting' 
  },
  grantManagement: { 
    weight: 4, 
    description: 'Grant applications, tracking, and reporting' 
  },
  eventPlanning: { 
    weight: 4, 
    description: 'Event management, registration, and ticketing' 
  },
  reporting: { 
    weight: 3, 
    description: 'Impact reporting, financial transparency, and compliance' 
  },
  stakeholderCommunication: { 
    weight: 3, 
    description: 'Donor communication, newsletter management, and outreach' 
  }
}

// Feature importance for non-profit teams
const nonProfitFeatures = [
  'Donation Tracking',
  'Volunteer Management',
  'Grant Management',
  'Event Planning',
  'Impact Reporting',
  'Donor CRM',
  'Email Campaigns',
  'Fundraising',
  'Budget Management',
  'Compliance Tracking',
  'Membership Management',
  'Program Management',
  'Volunteer Scheduling',
  'Recurring Donations',
  'Transparency Reports'
]

// Non-profit focus areas
const focusAreas = [
  {
    name: 'Fundraising Focused',
    description: 'Primarily focused on raising funds and donor management',
    icon: '💰',
    color: '#10B981',
    tools: ['Bloomerang', 'DonorPerfect', 'Kindful']
  },
  {
    name: 'Volunteer Driven',
    description: 'Relies heavily on volunteer coordination and management',
    icon: '👥',
    color: '#3B82F6',
    tools: ['VolunteerLocal', 'SignUpGenius', 'BetterImpact']
  },
  {
    name: 'Program Delivery',
    description: 'Focused on program implementation and impact measurement',
    icon: '🎯',
    color: '#8B5CF6',
    tools: ['Salesforce NPSP', 'Apricot', 'CharityTracker']
  },
  {
    name: 'Advocacy & Awareness',
    description: 'Campaign-focused with outreach and advocacy activities',
    icon: '📢',
    color: '#EF4444',
    tools: ['Action Network', 'NationBuilder', 'Salsa']
  }
]

// Non-profit team roles and needs
const nonProfitRoles = [
  {
    role: 'Executive Director',
    needs: ['Board reporting', 'Financial oversight', 'Strategic planning'],
    painPoints: ['Limited budget', 'Funding uncertainty', 'Compliance requirements'],
    icon: '👔'
  },
  {
    role: 'Development Officer',
    needs: ['Donor tracking', 'Grant applications', 'Fundraising campaigns'],
    painPoints: ['Donor retention', 'Grant deadlines', 'Reporting requirements'],
    icon: '💼'
  },
  {
    role: 'Volunteer Coordinator',
    needs: ['Volunteer scheduling', 'Training management', 'Impact tracking'],
    painPoints: ['Volunteer turnover', 'Scheduling conflicts', 'Background checks'],
    icon: '🤝'
  },
  {
    role: 'Program Manager',
    needs: ['Program tracking', 'Beneficiary data', 'Outcome measurement'],
    painPoints: ['Data collection', 'Impact measurement', 'Resource allocation'],
    icon: '📊'
  }
]

export default function NonProfitTeamComparisons() {
  const tools = toolsData.tools
  const [selectedFocus, setSelectedFocus] = useState('all')
  const [selectedRole, setSelectedRole] = useState('all')
  
  // Filter and sort tools for non-profit teams
  const nonProfitTools = [...tools]
    .filter(tool => 
      tool.best_for && (
        tool.best_for.toLowerCase().includes('non-profit') ||
        tool.best_for.toLowerCase().includes('nonprofit') ||
        tool.best_for.toLowerCase().includes('charity') ||
        tool.best_for.toLowerCase().includes('fundraising') ||
        tool.best_for.toLowerCase().includes('ngo') ||
        tool.features && (
          tool.features.some(f => f.toLowerCase().includes('donation')) ||
          tool.features.some(f => f.toLowerCase().includes('volunteer')) ||
          tool.features.some(f => f.toLowerCase().includes('grant'))
        )
      )
    )
    .sort((a, b) => {
      const scoreA = calculateNonProfitScore(a)
      const scoreB = calculateNonProfitScore(b)
      return scoreB - scoreA
    })

  function calculateNonProfitScore(tool) {
    let score = 0
    
    // Non-profit-specific features scoring
    const nonProfitFeatureMatches = nonProfitFeatures.filter(feature => {
      const featureLower = feature.toLowerCase()
      return (
        (tool.features && tool.features.some(f => f.toLowerCase().includes(featureLower))) ||
        (tool.top_features && tool.top_features.some(tf => tf.toLowerCase().includes(featureLower))) ||
        (tool.best_for && tool.best_for.toLowerCase().includes(featureLower))
      )
    }).length
    
    score += (nonProfitFeatureMatches / nonProfitFeatures.length) * 7
    
    // Bonus points for critical non-profit features
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('donation'))) score += 3
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('volunteer'))) score += 3
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('grant'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('event'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('report'))) score += 2
    
    // Non-profit discount bonus
    if (tool.pricing && tool.pricing.non_profit_discount) score += 2
    
    // Specialized non-profit tool bonus
    if (tool.id.includes('bloomerang') || tool.id.includes('donorperfect') || tool.id.includes('kindful')) score += 2
    
    return Math.round(score * 10) / 10
  }

  const comparisonPairs = [
    { tool1: 'bloomerang', tool2: 'donorperfect', label: 'Bloomerang vs DonorPerfect for Non-Profits' },
    { tool1: 'salesforce', tool2: 'apricot', label: 'Salesforce NPSP vs Apricot for Non-Profits' },
    { tool1: 'asana', tool2: 'trello', label: 'Asana vs Trello for Non-Profit Management' },
    { tool1: 'quickbooks', tool2: 'xero', label: 'QuickBooks vs Xero for Non-Profit Accounting' }
  ]

  // Non-profit workflow stages
  const nonProfitWorkflow = [
    {
      stage: 'Fundraising Planning',
      activities: ['Campaign strategy', 'Donor research', 'Goal setting'],
      tools: ['Bloomerang', 'DonorPerfect', 'Kindful'],
      duration: '2-4 weeks'
    },
    {
      stage: 'Volunteer Coordination',
      activities: ['Recruitment', 'Scheduling', 'Training'],
      tools: ['VolunteerLocal', 'SignUpGenius', 'BetterImpact'],
      duration: 'Ongoing'
    },
    {
      stage: 'Program Delivery',
      activities: ['Beneficiary tracking', 'Service delivery', 'Progress monitoring'],
      tools: ['Salesforce NPSP', 'Apricot', 'CharityTracker'],
      duration: 'Ongoing'
    },
    {
      stage: 'Reporting & Compliance',
      activities: ['Impact reporting', 'Financial reporting', 'Grant reporting'],
      tools: ['QuickBooks', 'Excel', 'Google Sheets'],
      duration: 'Monthly/Quarterly'
    }
  ]

  // Donation management features
  const donationFeatures = [
    {
      feature: 'Recurring Donations',
      description: 'Set up and manage monthly/regular donations',
      importance: 'Critical',
      icon: '🔄'
    },
    {
      feature: 'Donor CRM',
      description: 'Track donor relationships and communication history',
      importance: 'Critical',
      icon: '📇'
    },
    {
      feature: 'Online Giving',
      description: 'Accept donations through website and social media',
      importance: 'Critical',
      icon: '🌐'
    },
    {
      feature: 'Grant Management',
      description: 'Track grant applications, deadlines, and reporting',
      importance: 'High',
      icon: '📋'
    },
    {
      feature: 'Receipt Generation',
      description: 'Automatically generate tax receipts for donations',
      importance: 'High',
      icon: '🧾'
    },
    {
      feature: 'Campaign Tracking',
      description: 'Track specific fundraising campaigns and appeals',
      importance: 'Medium',
      icon: '📊'
    }
  ]

  // Non-profit metrics
  const nonProfitMetrics = [
    {
      metric: 'Donor Retention',
      description: 'Percentage of donors who give again',
      ideal: '45%+ annually',
      icon: '📈'
    },
    {
      metric: 'Fundraising ROI',
      description: 'Return on investment for fundraising efforts',
      ideal: '3:1 or higher',
      icon: '💰'
    },
    {
      metric: 'Program Efficiency',
      description: 'Percentage of budget spent on programs',
      ideal: '75%+',
      icon: '⚡'
    },
    {
      metric: 'Volunteer Hours',
      description: 'Total hours contributed by volunteers',
      ideal: 'Increasing trend',
      icon: '⏰'
    },
    {
      metric: 'Impact Reach',
      description: 'Number of people served/impacted',
      ideal: 'Growing annually',
      icon: '🌍'
    },
    {
      metric: 'Administrative Ratio',
      description: 'Percentage of budget on administration',
      ideal: 'Under 25%',
      icon: '📉'
    }
  ]

  return (
    <>
      <SEO 
        title="Best Project Management Tools for Non-Profit Organizations 2026 | PM Compare"
        description="Compare tools built for non-profits, charities, and NGOs. Volunteer management, donation tracking, grant management, and impact reporting features."
        keywords="non-profit tools, charity software, NGO management, volunteer management, donation tracking, grant management, fundraising software"
      />

      <div className="team-comparison-page non-profit-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span> / </span>
              <Link href="/comparisons">Comparisons</Link>
              <span> / </span>
              <span className="current">Non-Profit Teams</span>
            </nav>
            
            <div className="team-hero-content">
              <div className="team-badge">
                <span className="team-icon">❤️</span>
                <span className="team-label">Non-Profit Focus</span>
              </div>
              
              <h1 className="team-title">
                Tools for <span className="highlight">Non-Profit Organizations</span>
              </h1>
              
              <p className="team-description">
                Find tools designed for charities, NGOs, and non-profits with 
                donation tracking, volunteer management, grant management, 
                and impact reporting features. Built for mission-driven organizations.
              </p>
              
              <div className="team-stats">
                <div className="stat">
                  <span className="stat-number">{nonProfitTools.length}</span>
                  <span className="stat-label">Non-Profit Tools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{nonProfitFeatures.length}</span>
                  <span className="stat-label">NPO Features</span>
                </div>
                <div className="stat">
                  <span className="stat-number">90%</span>
                  <span className="stat-label">Offer Discounts</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Free</span>
                  <span className="stat-label">Tiers Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Area Selector */}
        <section className="methodology-section">
          <div className="container">
            <h2 className="section-title">Select Your Non-Profit Focus Area</h2>
            <p className="section-subtitle">Get tools optimized for your specific mission and operations</p>
            
            <div className="methodology-grid">
              {focusAreas.map((focus, index) => (
                <button
                  key={index}
                  className={`methodology-card ${selectedFocus === focus.name.toLowerCase() ? 'selected' : ''}`}
                  onClick={() => setSelectedFocus(focus.name.toLowerCase())}
                  style={{ 
                    borderColor: focus.color,
                    background: selectedFocus === focus.name.toLowerCase() 
                      ? `${focus.color}15` 
                      : 'white'
                  }}
                >
                  <div className="methodology-icon" style={{ color: focus.color }}>
                    {focus.icon}
                  </div>
                  
                  <h3 className="methodology-title">{focus.name}</h3>
                  
                  <p className="methodology-description">
                    {focus.description}
                  </p>
                  
                  <div className="methodology-tools">
                    <span className="tools-label">Best tools for {focus.name}:</span>
                    <div className="tools-list">
                      {focus.tools.map((tool, idx) => (
                        <span key={idx} className="tool-name">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="methodology-fit">
                    <div className="fit-label">Tool Compatibility:</div>
                    <div className="fit-bar">
                      <div 
                        className="fit-fill"
                        style={{ 
                          width: `${(nonProfitTools.filter(t => 
                            focus.tools.some(ft => 
                              t.name.toLowerCase().includes(ft.toLowerCase().split(' ')[0])
                            )
                          ).length / nonProfitTools.length) * 100}%`,
                          background: focus.color
                        }}
                      ></div>
                    </div>
                    <div className="fit-percentage">
                      {Math.round((nonProfitTools.filter(t => 
                        focus.tools.some(ft => 
                          t.name.toLowerCase().includes(ft.toLowerCase().split(' ')[0])
                        )
                      ).length / nonProfitTools.length) * 100)}% compatible
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Profit Roles */}
        <section className="roles-section">
          <div className="container">
            <div className="section-header">
              <h2>Non-Profit Team Roles & Needs</h2>
              <p>Different roles, different requirements in mission-driven work</p>
            </div>
            
            <div className="roles-grid">
              {nonProfitRoles.map((role, index) => (
                <button
                  key={index}
                  className={`role-card ${selectedRole === role.role.toLowerCase() ? 'selected' : ''}`}
                  onClick={() => setSelectedRole(role.role.toLowerCase())}
                >
                  <div className="role-icon">{role.icon}</div>
                  
                  <h3 className="role-title">{role.role}</h3>
                  
                  <div className="role-needs">
                    <strong>Key Needs:</strong>
                    <div className="needs-list">
                      {role.needs.map((need, idx) => (
                        <span key={idx} className="need-tag">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="role-painpoints">
                    <strong>Common Pain Points:</strong>
                    <div className="painpoints-list">
                      {role.painPoints.map((point, idx) => (
                        <span key={idx} className="painpoint">
                          • {point}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="role-tools">
                    <span className="tools-label">Recommended tools:</span>
                    <div className="tools-list">
                      {nonProfitTools
                        .filter(tool => 
                          tool.best_for && (
                            role.role === 'Development Officer' && tool.best_for.toLowerCase().includes('fundraising') ||
                            role.role === 'Volunteer Coordinator' && tool.best_for.toLowerCase().includes('volunteer') ||
                            role.role === 'Program Manager' && tool.best_for.toLowerCase().includes('program')
                          )
                        )
                        .slice(0, 2)
                        .map(tool => (
                          <div key={tool.id} className="tool-item">
                            <img src={tool.logo} alt={tool.name} className="tool-logo" />
                            <span className="tool-name">{tool.name}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Management Features */}
        <section className="git-features-section">
          <div className="container">
            <div className="section-header">
              <h2>Donation & Fundraising Features</h2>
              <p>Essential features for sustainable fundraising operations</p>
            </div>
            
            <div className="git-features-grid">
              {donationFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="git-feature-card"
                  style={{
                    borderLeft: `4px solid ${
                      feature.importance === 'Critical' ? '#10B981' : 
                      feature.importance === 'High' ? '#3B82F6' : 
                      '#8B5CF6'
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
                  
                  <div className="feature-adoption">
                    <div className="adoption-stats">
                      <span className="adoption-label">NPOs using:</span>
                      <span className="adoption-rate">
                        {feature.importance === 'Critical' ? '85%' : 
                         feature.importance === 'High' ? '70%' : '40%'}
                      </span>
                    </div>
                    
                    <div className="tool-support">
                      <span className="support-label">Tools with this feature:</span>
                      <span className="support-count">
                        {nonProfitTools.filter(tool => 
                          tool.features && tool.features.some(f => 
                            f.toLowerCase().includes(feature.feature.toLowerCase().split(' ')[0])
                          )
                        ).length} of {nonProfitTools.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Profit Workflow */}
        <section className="workflow-section">
          <div className="container">
            <div className="section-header">
              <h2>Non-Profit Workflow Timeline</h2>
              <p>From fundraising to impact reporting</p>
            </div>
            
            <div className="workflow-timeline">
              {nonProfitWorkflow.map((stage, index) => (
                <div key={index} className="workflow-stage">
                  <div className="stage-marker">
                    <div className="marker-number">{index + 1}</div>
                    <div className="marker-line"></div>
                  </div>
                  
                  <div className="stage-content">
                    <div className="stage-header">
                      <h3 className="stage-title">{stage.stage}</h3>
                      <div className="stage-duration">{stage.duration}</div>
                    </div>
                    
                    <div className="stage-activities">
                      <strong>Key Activities:</strong>
                      <div className="activities-list">
                        {stage.activities.map((activity, idx) => (
                          <span key={idx} className="activity-tag">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="stage-tools">
                      <strong>Recommended Tools:</strong>
                      <div className="tools-list">
                        {stage.tools.map((tool, idx) => (
                          <div key={idx} className="stage-tool">
                            <span className="tool-name">{tool}</span>
                            <span className="tool-match">
                              {nonProfitTools.some(t => 
                                t.name.toLowerCase().includes(tool.toLowerCase().split(' ')[0])
                              ) ? '✅' : '⚡'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Non-Profit Tools */}
        <section className="top-tools-section">
          <div className="container">
            <div className="section-header">
              <h2>Top Tools for Non-Profit Teams</h2>
              <p>Ranked by non-profit workflow suitability score</p>
            </div>
            
            <div className="tools-ranking">
              {nonProfitTools.slice(0, 6).map((tool, index) => {
                const score = calculateNonProfitScore(tool)
                
                // Check key non-profit features
                const hasDonations = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('donation') || f.toLowerCase().includes('fundraising')
                )
                const hasVolunteers = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('volunteer') || f.toLowerCase().includes('volunteer')
                )
                const hasGrants = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('grant') || f.toLowerCase().includes('grant')
                )
                const hasReports = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('report') || f.toLowerCase().includes('compliance')
                )
                
                return (
                  <Link 
                    key={tool.id}
                    href={`/${tool.id}-alternatives`}
                    className="ranked-tool-card non-profit-tool-card"
                  >
                    <div className="rank-badge non-profit-rank">
                      #{index + 1}
                    </div>
                    
                    <div className="tool-header">
                      <img src={tool.logo} alt={tool.name} className="tool-logo" />
                      
                      <div className="tool-score">
                        <div className="score-label">NPO Score</div>
                        <div className="score-value">{score}/10</div>
                      </div>
                    </div>
                    
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-tagline">{tool.tagline}</p>
                    
                    <div className="dev-feature-matrix">
                      <div className="matrix-row">
                        <span className="feature-label">Donation Tracking:</span>
                        <span className={`feature-status ${hasDonations ? 'excellent' : 'good'}`}>
                          {hasDonations ? '✅ Native' : '⚡ Basic'}
                        </span>
                      </div>
                      
                      <div className="matrix-row">
                        <span className="feature-label">Volunteer Management:</span>
                        <span className={`feature-status ${hasVolunteers ? 'excellent' : 'good'}`}>
                          {hasVolunteers ? '✅ Full Support' : '⚡ Limited'}
                        </span>
                      </div>
                      
                      <div className="matrix-row">
                        <span className="feature-label">Grant Management:</span>
                        <span className={`feature-status ${hasGrants ? 'excellent' : 'good'}`}>
                          {hasGrants ? '✅ Advanced' : '⚡ Basic'}
                        </span>
                      </div>
                      
                      <div className="matrix-row">
                        <span className="feature-label">Impact Reporting:</span>
                        <span className={`feature-status ${hasReports ? 'excellent' : 'good'}`}>
                          {hasReports ? '✅ Integrated' : hasDonations ? '⚡ Connectable' : '🔗 External'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="tool-best-for">
                      <strong>Ideal for:</strong>
                      <span>{tool.best_for}</span>
                    </div>
                    
                    <div className="tool-pricing non-profit-pricing">
                      {tool.pricing.non_profit_discount ? (
                        <>
                          <span className="discount-plan">Non-Profit Discount Available</span>
                          <span className="discount-note">Up to {tool.pricing.non_profit_discount}% off</span>
                        </>
                      ) : tool.pricing.free ? (
                        <span className="free-plan">
                          Free tier available
                          <small>Perfect for small NPOs</small>
                        </span>
                      ) : tool.pricing.business ? (
                        <span className="team-pricing">
                          From ${tool.pricing.business}/user/month
                          <small>Contact for NPO pricing</small>
                        </span>
                      ) : (
                        <span className="custom-pricing">
                          Contact for non-profit pricing
                        </span>
                      )}
                    </div>
                    
                    <div className="tool-cta non-profit-cta">
                      <span className="cta-text">View NPO Features →</span>
                      <span className="rating">⭐ {tool.rating}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Non-Profit Metrics */}
        <section className="metrics-section">
          <div className="container">
            <div className="section-header">
              <h2>Key Non-Profit Metrics</h2>
              <p>Measure what matters for mission-driven organizations</p>
            </div>
            
            <div className="metrics-grid">
              {nonProfitMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-icon">{metric.icon}</div>
                  
                  <h3 className="metric-name">{metric.metric}</h3>
                  
                  <p className="metric-description">{metric.description}</p>
                  
                  <div className="metric-ideal">
                    <strong>Ideal Target:</strong>
                    <span>{metric.ideal}</span>
                  </div>
                  
                  <div className="metric-tools">
                    <span className="tools-label">Tools that track this:</span>
                    <div className="tools-list">
                      {nonProfitTools
                        .filter(tool => 
                          tool.features && tool.features.some(f => 
                            f.toLowerCase().includes(metric.metric.toLowerCase())
                          )
                        )
                        .slice(0, 2)
                        .map(tool => (
                          <span key={tool.id} className="tool-tag">
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

        {/* Non-Profit Focused Comparisons */}
        <section className="focused-comparisons">
          <div className="container">
            <div className="section-header">
              <h2>Non-Profit Specific Comparisons</h2>
              <p>Head-to-head analysis for mission-driven organization needs</p>
            </div>
            
            <div className="comparison-grid">
              {comparisonPairs.map((pair, index) => {
                const tool1 = tools.find(t => t.id === pair.tool1)
                const tool2 = tools.find(t => t.id === pair.tool2)
                
                if (!tool1 || !tool2) return null
                
                const score1 = calculateNonProfitScore(tool1)
                const score2 = calculateNonProfitScore(tool2)
                
                // Compare key non-profit features
                const compareFeatures = [
                  { 
                    name: 'Donation Tracking', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('donation')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('donation')) 
                  },
                  { 
                    name: 'Volunteer Management', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('volunteer')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('volunteer')) 
                  },
                  { 
                    name: 'Grant Management', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('grant')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('grant')) 
                  },
                  { 
                    name: 'Impact Reporting', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('report')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('report')) 
                  }
                ]
                
                return (
                  <Link 
                    key={index}
                    href={`/compare/${pair.tool1}/${pair.tool2}?team=non-profit`}
                    className="dev-comparison-card"
                  >
                    <div className="comparison-header">
                      <div className="tool-logos">
                        <img src={tool1.logo} alt={tool1.name} />
                        <span className="vs-badge">VS</span>
                        <img src={tool2.logo} alt={tool2.name} />
                      </div>
                      
                      <div className="dev-score-comparison">
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
                    
                    <div className="dev-feature-grid">
                      {compareFeatures.map((feature, idx) => (
                        <div key={idx} className="feature-cell">
                          <div className="feature-name">{feature.name}</div>
                          <div className="feature-comparison">
                            <span className={`tool-status ${feature.tool1 ? 'yes' : 'no'}`}>
                              {feature.tool1 ? '✅' : '❌'}
                            </span>
                            <span className="comparison-vs">vs</span>
                            <span className={`tool-status ${feature.tool2 ? 'yes' : 'no'}`}>
                              {feature.tool2 ? '✅' : '❌'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="dev-recommendation">
                      <div className="recommendation-header">
                        <div className="recommendation-icon">🏆</div>
                        <div className="recommendation-text">
                          <strong>Best for {selectedFocus !== 'all' ? selectedFocus.replace('-', ' ') : 'fundraising'} focused NPOs:</strong>
                          <span>{score1 > score2 ? tool1.name : tool2.name}</span>
                        </div>
                      </div>
                      
                      <div className="recommendation-reason">
                        {score1 > score2 
                          ? 'Superior donation tracking and volunteer management'
                          : 'Better grant management and impact reporting capabilities'
                        }
                      </div>
                    </div>
                    
                    <div className="comparison-cta">
                      Compare NPO Features →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Grant Writing Guide */}
        <section className="pipeline-guide">
          <div className="container">
            <div className="guide-content">
              <h2>Grant Management & Fundraising Guide</h2>
              
              <div className="pipeline-steps">
                <div className="pipeline-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Grant Research & Identification</h3>
                    <p>Find and evaluate potential funding opportunities</p>
                    <ul>
                      <li>Foundation research</li>
                      <li>Government grants</li>
                      <li>Corporate partnerships</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pipeline-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Proposal Development</h3>
                    <p>Create compelling grant proposals and applications</p>
                    <ul>
                      <li>Needs assessment</li>
                      <li>Budget preparation</li>
                      <li>Impact measurement plan</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pipeline-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Donor Cultivation</h3>
                    <p>Build and maintain relationships with donors</p>
                    <ul>
                      <li>Donor communication</li>
                      <li>Stewardship plans</li>
                      <li>Impact reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="team-cta">
          <div className="container">
            <div className="cta-card non-profit-cta-card">
              <h2>Ready to Empower Your Mission?</h2>
              <p>
                Get personalized tool recommendations based on your organization size, 
                focus area, and budget constraints. Special non-profit discounts available.
              </p>
              <div className="cta-buttons">
                <Link href="/non-profit-tool-selector" className="btn-primary">
                  ❤️ Find Non-Profit Tools
                </Link>
                <Link href="/comparisons" className="btn-secondary">
                  📊 Compare All Tools
                </Link>
                <button className="btn-outline">
                  📋 Download NPO Tool Checklist
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
              <Link href="/comparisons/development-teams" className="related-link">
                💻 Development Teams
              </Link>
              <Link href="/comparisons/startups" className="related-link">
                🚀 Startup Teams
              </Link>
              <Link href="/comparisons/education" className="related-link">
                🎓 Education Teams
              </Link>
              <Link href="/comparisons/healthcare" className="related-link">
                🏥 Healthcare Teams
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}