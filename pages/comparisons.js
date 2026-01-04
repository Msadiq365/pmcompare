import Image from 'next/image';
// pages/comparisons.js - Updated as Comparison Hub
import Link from 'next/link'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'
import toolsData from '../data/tools.json'

export default function ComparisonsHub() {
  const router = useRouter()
  const tools = toolsData.tools
  
  // Team-specific comparison scenarios
  const teamScenarios = [
    {
      id: 'startups',
      title: '🚀 Startup Teams',
      description: 'Find tools perfect for early-stage companies with limited budgets and rapid growth',
      features: ['Free plans', 'Easy setup', 'Scalability', 'Budget-friendly'],
      color: '#7B68EE',
      count: 12,
      icon: '🚀'
    },
    {
      id: 'enterprise',
      title: '🏢 Enterprise Teams',
      description: 'Tools for large organizations needing security, compliance, and deep integrations',
      features: ['Security', 'Compliance', 'Advanced permissions', 'API access'],
      color: '#1E88E5',
      count: 8,
      icon: '🏢'
    },
    {
      id: 'agencies',
      title: '🎨 Creative Agencies',
      description: 'Client management, time tracking, and profitability tools for service businesses',
      features: ['Client portals', 'Time tracking', 'Profitability', 'Resource management'],
      color: '#FF6B6B',
      count: 10,
      icon: '🎨'
    },
    {
      id: 'remote-teams',
      title: '🌍 Remote Teams',
      description: 'Tools optimized for distributed teams across time zones and locations',
      features: ['Async collaboration', 'Time zone support', 'Video integration', 'Document sharing'],
      color: '#10B981',
      count: 9,
      icon: '🌍'
    },
    {
      id: 'development-teams',
      title: '💻 Development Teams',
      description: 'Git integration, sprint planning, and code review features for technical teams',
      features: ['Git integration', 'Sprint planning', 'Code review', 'Bug tracking'],
      color: '#F59E0B',
      count: 7,
      icon: '💻'
    },
    {
      id: 'non-profit-teams',
      title: '🤝 Non-Profit Teams',
      description: 'Affordable solutions with volunteer management and grant tracking features',
      features: ['Discount programs', 'Volunteer management', 'Grant tracking', 'Simple interfaces'],
      color: '#8B5CF6',
      count: 6,
      icon: '🤝'
    }
  ]

  // Popular comparisons for quick access
  const popularComparisons = [
    { tool1: 'asana', tool2: 'monday', label: 'Asana vs Monday.com' },
    { tool1: 'clickup', tool2: 'notion', label: 'ClickUp vs Notion' },
    { tool1: 'trello', tool2: 'asana', label: 'Trello vs Asana' },
    { tool1: 'monday', tool2: 'clickup', label: 'Monday.com vs ClickUp' },
  ]

  const handleQuickCompare = (tool1Id, tool2Id) => {
    router.push(`/compare/${tool1Id}/${tool2Id}`)
  }

  return (
    <>
      <SEO 
        title="Project Management Tool Comparisons 2026 | PM Compare"
        description="Compare project management tools for startups, enterprises, agencies, remote teams, and more. Find the perfect tool for your specific team needs."
      />

      <div className="comparisons-container">
        {/* Hero Section with Breadcrumb */}
        <section className="comparisons-hero">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span> / </span>
              <span className="current">Comparisons Hub</span>
            </nav>
            
            <h1 className="hero-title">
              Smart Comparisons for <span className="highlight">Your Team Type</span>
            </h1>
            <p className="hero-description">
              Don't settle for generic comparisons. We analyze tools based on what matters most 
              for your specific team structure, industry, and workflow needs.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{tools.length}</span>
                <span className="stat-label">Tools Analyzed</span>
              </div>
              <div className="stat">
                <span className="stat-number">{(tools.length * (tools.length - 1)) / 2}</span>
                <span className="stat-label">Possible Comparisons</span>
              </div>
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Team Types</span>
              </div>
              <div className="stat">
                <span className="stat-number">2026</span>
                <span className="stat-label">Updated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team-Specific Scenarios */}
        <section className="team-scenarios-section">
          <div className="container">
            <div className="section-header">
              <h2>Find Comparisons for Your Team Type</h2>
              <p>Select your team type to see tailored comparisons and recommendations</p>
            </div>
            
            <div className="scenarios-grid">
              {teamScenarios.map(scenario => (
                <Link 
                  key={scenario.id}
                  href={`/comparisons/${scenario.id}`}
                  className="scenario-card"
                  style={{ 
                    borderTop: `4px solid ${scenario.color}`,
                    background: `linear-gradient(135deg, ${scenario.color}10, ${scenario.color}05)`
                  }}
                >
                  <div className="scenario-header">
                    <div className="scenario-icon" style={{ color: scenario.color }}>
                      {scenario.icon}
                    </div>
                    <div className="scenario-count">
                      {scenario.count} comparisons
                    </div>
                  </div>
                  
                  <h3 className="scenario-title">{scenario.title}</h3>
                  
                  <p className="scenario-description">
                    {scenario.description}
                  </p>
                  
                  <div className="scenario-features">
                    {scenario.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="scenario-cta">
                    View Comparisons →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Compare Tool */}
        <section className="quick-compare-section">
          <div className="container">
            <div className="section-header">
              <h2>Quick Tool Comparison</h2>
              <p>Select two tools to compare them side-by-side instantly</p>
            </div>
            
            <div className="quick-compare-tool">
              <div className="tool-selectors">
                <select className="tool-select" id="tool1-select">
                  <option value="">Select first tool</option>
                  {tools.map(tool => (
                    <option key={tool.id} value={tool.id}>{tool.name}</option>
                  ))}
                </select>
                
                <div className="vs-badge">VS</div>
                
                <select className="tool-select" id="tool2-select">
                  <option value="">Select second tool</option>
                  {tools.map(tool => (
                    <option key={tool.id} value={tool.id}>{tool.name}</option>
                  ))}
                </select>
              </div>
              
              <button 
                className="compare-button"
                onClick={() => {
                  const tool1 = document.getElementById('tool1-select').value
                  const tool2 = document.getElementById('tool2-select').value
                  if (tool1 && tool2) {
                    router.push(`/compare/${tool1}/${tool2}`)
                  } else {
                    alert('Please select two tools to compare')
                  }
                }}
              >
                Compare Now →
              </button>
            </div>
          </div>
        </section>

        {/* Popular Comparisons */}
        <section className="popular-comparisons-section">
          <div className="container">
            <div className="section-header">
              <h2>Most Popular Comparisons</h2>
              <p>Browse our most-viewed tool comparisons</p>
            </div>
            
            <div className="popular-grid">
              {popularComparisons.map((comp, index) => {
                const tool1 = tools.find(t => t.id === comp.tool1)
                const tool2 = tools.find(t => t.id === comp.tool2)
                
                if (!tool1 || !tool2) return null
                
                return (
                  <div 
                    key={index}
                    className="popular-card"
                    onClick={() => handleQuickCompare(comp.tool1, comp.tool2)}
                  >
                    <div className="popular-logos">
                      <Image src={tool1.logo} alt={tool1.name} className="tool-logo" />
                      <span className="vs">VS</span>
                      <Image src={tool2.logo} alt={tool2.name} className="tool-logo" />
                    </div>
                    
                    <h3 className="popular-title">{comp.label}</h3>
                    
                    <div className="popular-stats">
                      <div className="stat">
                        <span>⭐ {tool1.rating}</span>
                        <small>{tool1.name} rating</small>
                      </div>
                      <div className="stat">
                        <span>⭐ {tool2.rating}</span>
                        <small>{tool2.name} rating</small>
                      </div>
                    </div>
                    
                    <div className="popular-cta">
                      Compare Now →
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Tools List */}
        <section className="all-tools-section">
          <div className="container">
            <div className="section-header">
              <h2>All Tools We Compare</h2>
              <p>Browse individual tool reviews and alternatives</p>
            </div>
            
            <div className="tools-list">
              {tools.map(tool => (
                <Link 
                  key={tool.id}
                  href={`/${tool.id}-alternatives`}
                  className="tool-item"
                >
                  <Image src={tool.logo} alt={tool.name} className="tool-logo" />
                  <div className="tool-info">
                    <h3>{tool.name}</h3>
                    <p className="tool-best-for">{tool.best_for}</p>
                  </div>
                  <div className="tool-rating">
                    <span className="stars">⭐ {tool.rating}</span>
                    <span className="view-alternatives">View Alternatives →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="comparisons-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Still Not Sure Which Tool is Right?</h2>
              <p>Try our Startup Tool Finder for personalized recommendations</p>
              <div className="cta-buttons">
                <Link href="/startup-tool-selector" className="btn-primary">
                  🎯 Find My Perfect Tool
                </Link>
                <Link href="/blog/startup-tool-budget-calculator" className="btn-secondary">
                  💰 Calculate Budget
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
