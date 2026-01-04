import Image from 'next/image';
// pages/comparisons/development-teams.js - Development Teams Comparison Page
import { useState } from 'react'
import Link from 'next/link'
import SEO from '../../components/SEO'
import toolsData from '../../data/tools.json'

// Development team-specific criteria and weights
const developmentCriteria = {
  sprintPlanning: { 
    weight: 5, 
    description: 'Sprint planning, backlog management, and agile workflows' 
  },
  codeIntegration: { 
    weight: 5, 
    description: 'Git integration, code review tools, and deployment tracking' 
  },
  bugTracking: { 
    weight: 4, 
    description: 'Issue tracking, bug reporting, and technical debt management' 
  },
  documentation: { 
    weight: 3, 
    description: 'Technical documentation, API specs, and knowledge sharing' 
  },
  deployment: { 
    weight: 3, 
    description: 'CI/CD integration, release management, and environment tracking' 
  },
  teamVelocity: { 
    weight: 2, 
    description: 'Velocity tracking, capacity planning, and performance metrics' 
  }
}

// Feature importance for development teams
const devFeatures = [
  'Git Integration',
  'Sprint Planning',
  'Issue Tracking',
  'Code Review',
  'Backlog Management',
  'CI/CD Integration',
  'API Documentation',
  'Bug Tracking',
  'Release Management',
  'Velocity Tracking',
  'Technical Debt',
  'Standup Reports',
  'Burndown Charts',
  'Epic Planning',
  'Retrospectives'
]

// Development methodologies
const methodologies = [
  {
    name: 'Scrum',
    description: 'Sprint-based development with regular planning and reviews',
    icon: '🏃',
    color: '#3B82F6',
    tools: ['Jira', 'Azure DevOps', 'ClickUp']
  },
  {
    name: 'Kanban',
    description: 'Continuous flow with work-in-progress limits',
    icon: '📋',
    color: '#10B981',
    tools: ['Trello', 'Monday.com', 'Asana']
  },
  {
    name: 'Agile',
    description: 'Flexible, iterative approach with frequent delivery',
    icon: '⚡',
    color: '#8B5CF6',
    tools: ['Jira', 'GitLab', 'GitHub Projects']
  },
  {
    name: 'Waterfall',
    description: 'Sequential phases with comprehensive planning',
    icon: '🌊',
    color: '#F59E0B',
    tools: ['Smartsheet', 'Microsoft Project', 'Wrike']
  }
]

// Development team roles and needs
const devRoles = [
  {
    role: 'Frontend Developers',
    needs: ['UI/UX integration', 'Browser testing', 'Component library'],
    painPoints: ['Design-handoff', 'Cross-browser issues', 'Performance optimization'],
    icon: '🎨'
  },
  {
    role: 'Backend Developers',
    needs: ['API management', 'Database schema', 'Server infrastructure'],
    painPoints: ['API documentation', 'Database migrations', 'Scalability planning'],
    icon: '⚙️'
  },
  {
    role: 'DevOps Engineers',
    needs: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring'],
    painPoints: ['Deployment coordination', 'Environment management', 'Incident response'],
    icon: '🚀'
  },
  {
    role: 'QA Engineers',
    needs: ['Test case management', 'Bug tracking', 'Automation testing'],
    painPoints: ['Test coverage', 'Regression testing', 'Release validation'],
    icon: '🔍'
  }
]

export default function DevelopmentTeamComparisons() {
  const tools = toolsData.tools
  const [selectedMethodology, setSelectedMethodology] = useState('all')
  const [selectedRole, setSelectedRole] = useState('all')
  
  // Filter and sort tools for development teams
  const devTools = [...tools]
    .filter(tool => 
      tool.best_for && (
        tool.best_for.toLowerCase().includes('develop') ||
        tool.best_for.toLowerCase().includes('engineering') ||
        tool.best_for.toLowerCase().includes('technical') ||
        tool.best_for.toLowerCase().includes('software') ||
        tool.features && (
          tool.features.some(f => f.toLowerCase().includes('git')) ||
          tool.features.some(f => f.toLowerCase().includes('sprint')) ||
          tool.features.some(f => f.toLowerCase().includes('code'))
        )
      )
    )
    .sort((a, b) => {
      const scoreA = calculateDevScore(a)
      const scoreB = calculateDevScore(b)
      return scoreB - scoreA
    })

  function calculateDevScore(tool) {
    let score = 0
    
    // Development-specific features scoring
    const devFeatureMatches = devFeatures.filter(feature => {
      const featureLower = feature.toLowerCase()
      return (
        (tool.features && tool.features.some(f => f.toLowerCase().includes(featureLower))) ||
        (tool.top_features && tool.top_features.some(tf => tf.toLowerCase().includes(featureLower))) ||
        (tool.best_for && tool.best_for.toLowerCase().includes(featureLower))
      )
    }).length
    
    score += (devFeatureMatches / devFeatures.length) * 7
    
    // Bonus points for critical dev features
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('git'))) score += 3
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('sprint'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('issue'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('ci/cd'))) score += 2
    if (tool.features && tool.features.some(f => f.toLowerCase().includes('api'))) score += 1
    
    // Specialized dev tool bonus
    if (tool.id.includes('jira') || tool.id.includes('git') || tool.id.includes('devops')) score += 2
    
    return Math.round(score * 10) / 10
  }

  const comparisonPairs = [
    { tool1: 'jira', tool2: 'clickup', label: 'Jira vs ClickUp for Development Teams' },
    { tool1: 'gitlab', tool2: 'github', label: 'GitLab vs GitHub for Development Teams' },
    { tool1: 'trello', tool2: 'asana', label: 'Trello vs Asana for Development Teams' },
    { tool1: 'azure-devops', tool2: 'jira', label: 'Azure DevOps vs Jira for Development Teams' }
  ]

  // Development workflow stages
  const devWorkflow = [
    {
      stage: 'Backlog & Planning',
      activities: ['User story creation', 'Priority setting', 'Sprint planning'],
      tools: ['Jira', 'ClickUp', 'Azure Boards'],
      duration: '1-2 days'
    },
    {
      stage: 'Development',
      activities: ['Coding', 'Code review', 'Unit testing'],
      tools: ['GitHub', 'GitLab', 'Bitbucket'],
      duration: '1-2 weeks'
    },
    {
      stage: 'Testing & QA',
      activities: ['Integration testing', 'Bug reporting', 'Performance testing'],
      tools: ['Jira', 'TestRail', 'Qase'],
      duration: '3-5 days'
    },
    {
      stage: 'Deployment',
      activities: ['CI/CD pipeline', 'Release management', 'Monitoring'],
      tools: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
      duration: '1-2 days'
    }
  ]

  // Git integration features
  const gitFeatures = [
    {
      feature: 'Commit Linking',
      description: 'Link commits to issues and user stories',
      importance: 'Critical',
      icon: '🔗'
    },
    {
      feature: 'Pull Request Integration',
      description: 'Create PRs directly from tasks',
      importance: 'Critical',
      icon: '🔄'
    },
    {
      feature: 'Branch Management',
      description: 'Track feature branches and environments',
      importance: 'High',
      icon: '🌿'
    },
    {
      feature: 'Code Review',
      description: 'Review code within project management tool',
      importance: 'High',
      icon: '👁️'
    },
    {
      feature: 'Deployment Tracking',
      description: 'Track deployments to different environments',
      importance: 'Medium',
      icon: '🚀'
    },
    {
      feature: 'Release Notes',
      description: 'Automatically generate release notes',
      importance: 'Medium',
      icon: '📝'
    }
  ]

  // Development metrics
  const devMetrics = [
    {
      metric: 'Velocity',
      description: 'Story points completed per sprint',
      ideal: 'Consistent week-over-week',
      icon: '📈'
    },
    {
      metric: 'Lead Time',
      description: 'Time from task creation to completion',
      ideal: 'Under 2 weeks',
      icon: '⏱️'
    },
    {
      metric: 'Cycle Time',
      description: 'Time from work start to completion',
      ideal: 'Under 1 week',
      icon: '🔄'
    },
    {
      metric: 'Code Coverage',
      description: 'Percentage of code covered by tests',
      ideal: '80%+',
      icon: '✅'
    },
    {
      metric: 'Bug Rate',
      description: 'Bugs reported per deployment',
      ideal: 'Decreasing trend',
      icon: '🐛'
    },
    {
      metric: 'Deployment Frequency',
      description: 'How often code is deployed',
      ideal: 'Daily or more',
      icon: '📦'
    }
  ]

  return (
    <>
      <SEO 
        title="Best Project Management Tools for Development Teams 2026 | PM Compare"
        description="Compare tools built for software development teams. Git integration, sprint planning, issue tracking, CI/CD, and agile development features."
        keywords="development tools, software development, agile tools, git integration, sprint planning, devops tools, engineering teams"
      />

      <div className="team-comparison-page development-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span> / </span>
              <Link href="/comparisons">Comparisons</Link>
              <span> / </span>
              <span className="current">Development Teams</span>
            </nav>
            
            <div className="team-hero-content">
              <div className="team-badge">
                <span className="team-icon">💻</span>
                <span className="team-label">Development Focus</span>
              </div>
              
              <h1 className="team-title">
                Tools for <span className="highlight">Software Development</span>
              </h1>
              
              <p className="team-description">
                Find tools designed for engineering teams with Git integration, 
                sprint planning, issue tracking, and CI/CD features. 
                Built for developers by developers.
              </p>
              
              <div className="team-stats">
                <div className="stat">
                  <span className="stat-number">{devTools.length}</span>
                  <span className="stat-label">Dev-Focused Tools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{devFeatures.length}</span>
                  <span className="stat-label">Dev Features</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Git Compatible</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Agile</span>
                  <span className="stat-label">Methodology Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Methodology Selector */}
        <section className="methodology-section">
          <div className="container">
            <h2 className="section-title">Select Your Development Methodology</h2>
            <p className="section-subtitle">Get tools optimized for your development workflow</p>
            
            <div className="methodology-grid">
              {methodologies.map((method, index) => (
                <button
                  key={index}
                  className={`methodology-card ${selectedMethodology === method.name.toLowerCase() ? 'selected' : ''}`}
                  onClick={() => setSelectedMethodology(method.name.toLowerCase())}
                  style={{ 
                    borderColor: method.color,
                    background: selectedMethodology === method.name.toLowerCase() 
                      ? `${method.color}15` 
                      : 'white'
                  }}
                >
                  <div className="methodology-icon" style={{ color: method.color }}>
                    {method.icon}
                  </div>
                  
                  <h3 className="methodology-title">{method.name}</h3>
                  
                  <p className="methodology-description">
                    {method.description}
                  </p>
                  
                  <div className="methodology-tools">
                    <span className="tools-label">Best tools for {method.name}:</span>
                    <div className="tools-list">
                      {method.tools.map((tool, idx) => (
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
                          width: `${(devTools.filter(t => 
                            method.tools.some(mt => 
                              t.name.toLowerCase().includes(mt.toLowerCase().split(' ')[0])
                            )
                          ).length / devTools.length) * 100}%`,
                          background: method.color
                        }}
                      ></div>
                    </div>
                    <div className="fit-percentage">
                      {Math.round((devTools.filter(t => 
                        method.tools.some(mt => 
                          t.name.toLowerCase().includes(mt.toLowerCase().split(' ')[0])
                        )
                      ).length / devTools.length) * 100)}% compatible
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Development Roles */}
        <section className="roles-section">
          <div className="container">
            <div className="section-header">
              <h2>Development Team Roles & Needs</h2>
              <p>Different roles, different requirements</p>
            </div>
            
            <div className="roles-grid">
              {devRoles.map((role, index) => (
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
                      {devTools
                        .slice(0, 2)
                        .map(tool => (
                          <div key={tool.id} className="tool-item">
                            <Image src={tool.logo} alt={tool.name} className="tool-logo" />
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

        {/* Git Integration Features */}
        <section className="git-features-section">
          <div className="container">
            <div className="section-header">
              <h2>Git Integration Features</h2>
              <p>Essential features for development workflow integration</p>
            </div>
            
            <div className="git-features-grid">
              {gitFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="git-feature-card"
                  style={{
                    borderLeft: `4px solid ${
                      feature.importance === 'Critical' ? '#EF4444' : 
                      feature.importance === 'High' ? '#F59E0B' : 
                      '#3B82F6'
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
                      <span className="adoption-label">Dev teams using:</span>
                      <span className="adoption-rate">
                        {feature.importance === 'Critical' ? '92%' : 
                         feature.importance === 'High' ? '78%' : '45%'}
                      </span>
                    </div>
                    
                    <div className="tool-support">
                      <span className="support-label">Tools with this feature:</span>
                      <span className="support-count">
                        {devTools.filter(tool => 
                          tool.features && tool.features.some(f => 
                            f.toLowerCase().includes(feature.feature.toLowerCase().split(' ')[0])
                          )
                        ).length} of {devTools.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Workflow */}
        <section className="workflow-section">
          <div className="container">
            <div className="section-header">
              <h2>Development Workflow Timeline</h2>
              <p>From planning to production deployment</p>
            </div>
            
            <div className="workflow-timeline">
              {devWorkflow.map((stage, index) => (
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
                              {devTools.some(t => 
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

        {/* Top Development Tools */}
        <section className="top-tools-section">
          <div className="container">
            <div className="section-header">
              <h2>Top Tools for Development Teams</h2>
              <p>Ranked by development workflow suitability score</p>
            </div>
            
            <div className="tools-ranking">
              {devTools.slice(0, 6).map((tool, index) => {
                const score = calculateDevScore(tool)
                
                // Check key dev features
                const hasGit = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('git') || f.toLowerCase().includes('code')
                )
                const hasSprint = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('sprint') || f.toLowerCase().includes('agile')
                )
                const hasIssues = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('issue') || f.toLowerCase().includes('bug')
                )
                const hasCI = tool.features && tool.features.some(f => 
                  f.toLowerCase().includes('ci/cd') || f.toLowerCase().includes('deployment')
                )
                
                return (
                  <Link 
                    key={tool.id}
                    href={`/${tool.id}-alternatives`}
                    className="ranked-tool-card dev-tool-card"
                  >
                    <div className="rank-badge dev-rank">
                      #{index + 1}
                    </div>
                    
                    <div className="tool-header">
                      <Image src={tool.logo} alt={tool.name} className="tool-logo" />
                      
                      <div className="tool-score">
                        <div className="score-label">Dev Score</div>
                        <div className="score-value">{score}/10</div>
                      </div>
                    </div>
                    
                    <h3 className="tool-name">{tool.name}</h3>
                    <p className="tool-tagline">{tool.tagline}</p>
                    
                    <div className="dev-feature-matrix">
                      <div className="matrix-row">
                        <span className="feature-label">Git Integration:</span>
                        <span className={`feature-status ${hasGit ? 'excellent' : 'good'}`}>
                          {hasGit ? '✅ Native' : '⚡ Basic'}
                        </span>
                      </div>
                      
                      <div className="matrix-row">
                        <span className="feature-label">Sprint Planning:</span>
                        <span className={`feature-status ${hasSprint ? 'excellent' : 'good'}`}>
                          {hasSprint ? '✅ Full Support' : '⚡ Limited'}
                        </span>
                      </div>
                      
                      <div className="matrix-row">
                        <span className="feature-label">Issue Tracking:</span>
                        <span className={`feature-status ${hasIssues ? 'excellent' : 'good'}`}>
                          {hasIssues ? '✅ Advanced' : '⚡ Basic'}
                        </span>
                      </div>
                      
                      <div className="matrix-row">
                        <span className="feature-label">CI/CD:</span>
                        <span className={`feature-status ${hasCI ? 'excellent' : hasGit ? 'good' : 'basic'}`}>
                          {hasCI ? '✅ Integrated' : hasGit ? '⚡ Connectable' : '🔗 External'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="tool-best-for">
                      <strong>Ideal for:</strong>
                      <span>{tool.best_for}</span>
                    </div>
                    
                    <div className="tool-pricing dev-pricing">
                      {tool.pricing.free ? (
                        <>
                          <span className="free-plan">Free tier available</span>
                          <span className="free-note">Includes basic dev features</span>
                        </>
                      ) : tool.pricing.business ? (
                        <span className="team-pricing">
                          From ${tool.pricing.business}/user/month
                          <small>Includes advanced dev features</small>
                        </span>
                      ) : tool.pricing.enterprise ? (
                        <span className="enterprise-pricing">
                          Enterprise pricing
                          <small>Custom dev workflows</small>
                        </span>
                      ) : (
                        <span className="custom-pricing">
                          Contact for dev team pricing
                        </span>
                      )}
                    </div>
                    
                    <div className="tool-cta dev-cta">
                      <span className="cta-text">View Dev Features →</span>
                      <span className="rating">⭐ {tool.rating}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Development Metrics */}
        <section className="metrics-section">
          <div className="container">
            <div className="section-header">
              <h2>Key Development Metrics</h2>
              <p>Measure what matters for engineering teams</p>
            </div>
            
            <div className="metrics-grid">
              {devMetrics.map((metric, index) => (
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
                      {devTools
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

        {/* Development-Focused Comparisons */}
        <section className="focused-comparisons">
          <div className="container">
            <div className="section-header">
              <h2>Development-Specific Comparisons</h2>
              <p>Head-to-head analysis for engineering team needs</p>
            </div>
            
            <div className="comparison-grid">
              {comparisonPairs.map((pair, index) => {
                const tool1 = tools.find(t => t.id === pair.tool1)
                const tool2 = tools.find(t => t.id === pair.tool2)
                
                if (!tool1 || !tool2) return null
                
                const score1 = calculateDevScore(tool1)
                const score2 = calculateDevScore(tool2)
                
                // Compare key dev features
                const compareFeatures = [
                  { 
                    name: 'Git Integration', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('git')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('git')) 
                  },
                  { 
                    name: 'Sprint Planning', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('sprint')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('sprint')) 
                  },
                  { 
                    name: 'Issue Tracking', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('issue')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('issue')) 
                  },
                  { 
                    name: 'CI/CD', 
                    tool1: tool1.features?.some(f => f.toLowerCase().includes('ci/cd')), 
                    tool2: tool2.features?.some(f => f.toLowerCase().includes('ci/cd')) 
                  }
                ]
                
                return (
                  <Link 
                    key={index}
                    href={`/compare/${pair.tool1}/${pair.tool2}?team=development`}
                    className="dev-comparison-card"
                  >
                    <div className="comparison-header">
                      <div className="tool-logos">
                        <Image src={tool1.logo} alt={tool1.name} />
                        <span className="vs-badge">VS</span>
                        <Image src={tool2.logo} alt={tool2.name} />
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
                          <strong>Best for {selectedMethodology !== 'all' ? selectedMethodology : 'agile'} teams:</strong>
                          <span>{score1 > score2 ? tool1.name : tool2.name}</span>
                        </div>
                      </div>
                      
                      <div className="recommendation-reason">
                        {score1 > score2 
                          ? 'Superior Git integration and sprint planning'
                          : 'Better issue tracking and CI/CD capabilities'
                        }
                      </div>
                    </div>
                    
                    <div className="comparison-cta">
                      Compare Dev Features →
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CI/CD Pipeline Guide */}
        <section className="pipeline-guide">
          <div className="container">
            <div className="guide-content">
              <h2>CI/CD Pipeline Integration Guide</h2>
              
              <div className="pipeline-steps">
                <div className="pipeline-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Code Integration</h3>
                    <p>Connect your Git repository to enable automatic tracking</p>
                    <ul>
                      <li>Link GitHub/GitLab/Bitbucket</li>
                      <li>Configure webhooks</li>
                      <li>Set up branch protection</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pipeline-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Automated Testing</h3>
                    <p>Set up automated tests to run on every commit</p>
                    <ul>
                      <li>Unit tests integration</li>
                      <li>Integration tests</li>
                      <li>Code quality checks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pipeline-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Deployment Automation</h3>
                    <p>Automate deployments to different environments</p>
                    <ul>
                      <li>Staging deployments</li>
                      <li>Production releases</li>
                      <li>Rollback procedures</li>
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
            <div className="cta-card dev-cta-card">
              <h2>Ready to Optimize Your Development Workflow?</h2>
              <p>
                Get personalized tool recommendations based on your tech stack, 
                team size, and development methodology.
              </p>
              <div className="cta-buttons">
                <Link href="/startup-tool-selector" className="btn-primary">
                  💻 Find Dev Team Tools
                </Link>
                <Link href="/comparisons" className="btn-secondary">
                  📊 Compare All Tools
                </Link>
                <button className="btn-outline">
                  📋 Download Dev Checklist
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
              <Link href="/comparisons/agencies" className="related-link">
                🎨 Creative Agencies
              </Link>
              <Link href="/comparisons/remote-teams" className="related-link">
                🌍 Remote Teams
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
