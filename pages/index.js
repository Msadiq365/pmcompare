// pages/index.js - Enhanced Version with All Improvements
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToolLogo } from '../components/ToolLogo'
import SimplifiedMatrix from '../components/SimplifiedMatrix'
import ImprovedToolSelector from '../components/ImprovedToolSelector'
import SEO from '../components/SEO'
import toolsData from '../data/tools.json'
import Image from 'next/image'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  const tools = toolsData.tools
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTools, setFilteredTools] = useState(tools)
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [primaryUse, setPrimaryUse] = useState('')
  const [budget, setBudget] = useState('')
  const [quickRecommendation, setQuickRecommendation] = useState(null)
  
  // Improved Tool Selector States
  const [selectedTool1, setSelectedTool1] = useState(null)
  const [selectedTool2, setSelectedTool2] = useState(null)
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false)
  const [currentSelectingTool, setCurrentSelectingTool] = useState(null)
  const [searchToolsTerm, setSearchToolsTerm] = useState('')
  const router = useRouter()

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    
    if (term === '') {
      setFilteredTools(tools)
    } else {
      const filtered = tools.filter(tool => 
        tool.name.toLowerCase().includes(term) ||
        tool.tagline.toLowerCase().includes(term) ||
        tool.best_for.toLowerCase().includes(term)
      )
      setFilteredTools(filtered)
    }
  }

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterStatus('Subscribing...')
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setNewsletterStatus('Success! Check your email to confirm.')
        setEmail('')
      } else {
        setNewsletterStatus(data.error || 'Subscription failed')
      }
    } catch (error) {
      setNewsletterStatus('Network error. Please try again.')
    }
  }

  // Generate quick recommendation
  const getQuickRecommendation = () => {
    if (!teamSize || !primaryUse || !budget) {
      setNewsletterStatus('Please answer all 3 questions')
      return
    }

    let recommended = [...tools]

    // Filter by team size
    if (teamSize === '1-5') {
      recommended = recommended.filter(tool => tool.pricing.free || (tool.pricing.starter && tool.pricing.starter <= 15))
    } else if (teamSize === '6-20') {
      recommended = recommended.filter(tool => tool.pricing.team || tool.pricing.professional)
    }

    // Filter by primary use
    if (primaryUse === 'task-management') {
      recommended = recommended.filter(tool => 
        tool.top_features.some(f => f.toLowerCase().includes('task')) ||
        tool.best_for.toLowerCase().includes('task')
      )
    } else if (primaryUse === 'project-planning') {
      recommended = recommended.filter(tool => 
        tool.top_features.some(f => f.toLowerCase().includes('project') || f.toLowerCase().includes('gantt'))
      )
    } else if (primaryUse === 'documentation') {
      recommended = recommended.filter(tool => 
        tool.top_features.some(f => f.toLowerCase().includes('doc')) ||
        tool.name === 'Notion' || tool.name === 'ClickUp'
      )
    }

    // Filter by budget
    if (budget === 'free') {
      recommended = recommended.filter(tool => tool.pricing.free)
    } else if (budget === 'under-10') {
      recommended = recommended.filter(tool => 
        tool.pricing.free || 
        (tool.pricing.starter && tool.pricing.starter <= 10)
      )
    }

    if (recommended.length > 0) {
      setQuickRecommendation(recommended[0])
    } else {
      setQuickRecommendation(null)
      setNewsletterStatus('No perfect match found. Try adjusting your criteria.')
    }
  }

  // Improved Tool Selector Functions
  const openToolSelection = (toolNumber) => {
    setCurrentSelectingTool(toolNumber)
    setIsSelectionModalOpen(true)
    setSearchToolsTerm('')
  }

  const selectTool = (tool) => {
    if (currentSelectingTool === 'tool1') {
      setSelectedTool1(tool)
    } else if (currentSelectingTool === 'tool2') {
      setSelectedTool2(tool)
    }
    setIsSelectionModalOpen(false)
  }

  const swapTools = () => {
    const temp = selectedTool1
    setSelectedTool1(selectedTool2)
    setSelectedTool2(temp)
  }

  const resetSelection = () => {
    setSelectedTool1(null)
    setSelectedTool2(null)
  }

  const handleCompare = () => {
    if (selectedTool1 && selectedTool2) {
      router.push(`/compare/${selectedTool1.id}/${selectedTool2.id}`)
    }
  }

  const filteredSearchTools = searchToolsTerm
    ? tools.filter(tool =>
        tool.name.toLowerCase().includes(searchToolsTerm.toLowerCase()) ||
        tool.tagline.toLowerCase().includes(searchToolsTerm.toLowerCase())
      )
    : tools.slice(0, 10) // Show first 10 tools by default

  // Popular comparison pairs
  const popularComparisons = [
    { tool1: 'asana', tool2: 'monday', label: 'Asana vs Monday.com' },
    { tool1: 'clickup', tool2: 'notion', label: 'ClickUp vs Notion' },
    { tool1: 'trello', tool2: 'asana', label: 'Trello vs Asana' },
    { tool1: 'monday', tool2: 'clickup', label: 'Monday.com vs ClickUp' },
    { tool1: 'notion', tool2: 'asana', label: 'Notion vs Asana' },
    { tool1: 'trello', tool2: 'notion', label: 'Trello vs Notion' },
  ]

  // Latest updates data
  const latestUpdates = [
    { date: 'Mar 2024', title: 'Monday.com Adds AI Features', description: 'New AI-powered project predictions and automations added.' },
    { date: 'Feb 2024', title: 'ClickUp 3.0 Released', description: 'Major update with improved performance and new views.' },
    { date: 'Jan 2024', title: 'Asana Price Changes', description: 'Updated pricing information for Asana Business plan.' },
    { date: 'Dec 2023', title: 'Notion Projects Beta', description: 'New project management features in beta testing.' },
  ]

  // FAQ data
  const faqItems = [
    { question: 'How often are prices updated?', answer: 'We update prices quarterly and monitor for any changes between updates. All pricing is verified directly from vendor websites.' },
    { question: 'Are your reviews unbiased?', answer: 'Yes! We analyze tools based on features, pricing, and user feedback, not paid placements. We disclose any affiliate links transparently.' },
    { question: 'Can I suggest a tool to add?', answer: 'Absolutely! Contact us with any tool suggestions. We\'re always looking to expand our comparisons.' },
    { question: 'How do you calculate ratings?', answer: 'Ratings are based on user reviews from multiple sources, feature analysis, and value for money considerations.' },
    { question: 'Do you offer implementation help?', answer: 'While we don\'t directly implement tools, we provide detailed guides and resources to help you get started.' },
    { question: 'Is the data up-to-date?', answer: 'Yes, we regularly verify all information. Each page shows the last updated date.' },
  ]

  // Trust signals
  const trustedBy = ['Tech Startup', 'Marketing Agency', 'Software Team', 'Consulting Firm', 'Non-Profit', 'E-commerce']

  return (
    <>
      
      <SEO 
        title="Compare Project Management Tools - Find the Best PM Software 2025"
        description="Compare the best project management tools including Asana, Monday.com, ClickUp, Trello, and Notion. Find the perfect software for your team with detailed comparisons."
        canonical="/"
      />

      <div className="homepage">
        {/* Hero Section with Search */}
        <section className="hero-section">
          <div className="hero-content">
           
     <p className="hero-title">Find Your Perfect</p>
     <h1 className="highlight" style={{textAlign: 'center', margin: '0 auto', display: 'block'}}>
  Project Management Tool</h1>

            <p className="hero-description">
              Compare features, pricing, and reviews of the top project management 
              software to make the right choice for your team.
            </p>

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="🔍 Search for tools (e.g., Asana, ClickUp, Trello...)"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setFilteredTools(tools)
                  }}
                  className="search-clear"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="quick-actions">
              <button 
                className="quick-action-btn"
                onClick={() => router.push('/comparisons')}
              >
                <span className="quick-action-icon">📊</span>
                <span className="quick-action-text">Compare Tools</span>
              </button>
              <button 
                className="quick-action-btn"
                onClick={() => router.push('/startup-tool-selector')}
              >
                <span className="quick-action-icon">🎯</span>
                <span className="quick-action-text">Find My Tool</span>
              </button>
              <button 
                className="quick-action-btn"
                onClick={() => router.push('/blog/startup-tool-budget-calculator')}
              >
                <span className="quick-action-icon">💰</span>
                <span className="quick-action-text">Calculate Budget</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{tools.length}+</span>
                <span className="stat-label">Tools Compared</span>
              </div>
              <div className="stat">
                <span className="stat-number">{(tools.length * (tools.length - 1)) / 2}</span>
                <span className="stat-label">Comparisons</span>
              </div>
              <div className="stat">
                <span className="stat-number">2025</span>
                <span className="stat-label">Updated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        {!searchTerm && (
          <section className="trust-section">
            <div className="container">
              <div className="section-header">
                <h3>Trusted by Teams Worldwide</h3>
                <p>Helping teams make informed decisions since 2023</p>
              </div>
              
              <div className="trust-logos">
                {trustedBy.map((company, index) => (
                  <div key={index} className="trust-logo">
                    {company}
                  </div>
                ))}
              </div>

              <div className="user-testimonials">
                <div className="testimonial">
                  <p className="testimonial-text">"Saved us weeks of research finding the right tool for our remote team!"</p>
                  <div className="testimonial-author">
                    <strong>Sarah Chen</strong>
                    <span>Product Manager, Tech Startup</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search Results Info */}
        {searchTerm && (
          <section className="search-results-info">
            <div className="container">
              <p>
                Found <strong>{filteredTools.length}</strong> {filteredTools.length === 1 ? 'tool' : 'tools'} 
                matching "<strong>{searchTerm}</strong>"
              </p>
            </div>
          </section>
        )}

        {/* Quick Decision Helper */}
        {!searchTerm && (
          <section className="decision-helper-section">
            <div className="container">
              <div className="decision-helper-card">
                <h3>🎯 Quick Recommendation Tool</h3>
                <p className="helper-description">Answer 3 simple questions to get a personalized tool suggestion</p>
                
                <div className="decision-questions">
                  <div className="question-group">
                    <label>1. Team size?</label>
                    <select 
                      value={teamSize} 
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="question-select"
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 people</option>
                      <option value="6-20">6-20 people</option>
                      <option value="20+">20+ people</option>
                    </select>
                  </div>
                  
                  <div className="question-group">
                    <label>2. Primary use?</label>
                    <select 
                      value={primaryUse} 
                      onChange={(e) => setPrimaryUse(e.target.value)}
                      className="question-select"
                    >
                      <option value="">Select primary use</option>
                      <option value="task-management">Task management</option>
                      <option value="project-planning">Project planning</option>
                      <option value="documentation">Documentation</option>
                      <option value="team-collaboration">Team collaboration</option>
                    </select>
                  </div>
                  
                  <div className="question-group">
                    <label>3. Budget per user?</label>
                    <select 
                      value={budget} 
                      onChange={(e) => setBudget(e.target.value)}
                      className="question-select"
                    >
                      <option value="">Select budget</option>
                      <option value="free">Free</option>
                      <option value="under-10">Under $10/user</option>
                      <option value="10-20">$10-$20/user</option>
                      <option value="20+">$20+/user</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  className="recommendation-btn"
                  onClick={getQuickRecommendation}
                >
                  Get Recommendation →
                </button>

                {newsletterStatus && (
                  <div className={`status-message ${newsletterStatus.includes('Success') ? 'success' : 'error'}`}>
                    {newsletterStatus}
                  </div>
                )}

                {quickRecommendation && (
                  <div className="recommendation-result">
                    <div className="result-header">
                      <h4>Recommended for you:</h4>
                      <button 
                        className="reset-btn"
                        onClick={() => {
                          setQuickRecommendation(null)
                          setTeamSize('')
                          setPrimaryUse('')
                          setBudget('')
                        }}
                      >
                        Try again
                      </button>
                    </div>
                    <div className="recommended-tool">
                      <div className="recommended-tool-header">
                        <ToolLogo tool={quickRecommendation} size={48} />
                        <div>
                          <h5>{quickRecommendation.name}</h5>
                          <p className="tool-reason">{quickRecommendation.best_for}</p>
                        </div>
                      </div>
                      <div className="recommended-tool-actions">
                        <Link 
                          href={`/${quickRecommendation.id}-alternatives`}
                          className="btn-secondary"
                        >
                          Learn More
                        </Link>
                        <a 
                          href={quickRecommendation.affiliate_link}
                          className="btn-primary"
                          target="_blank"
                          rel="noopener sponsored"
                        >
                          Try Free
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Feature Tools Section */}
        {!searchTerm && (
          <section className="feature-tools-section">
            <div className="container">
              <div className="section-header">
                <h2>Our Helpful Tools</h2>
                <p>Use these tools to find the perfect project management solution</p>
              </div>
              
              <div className="feature-tools-grid">
                <div className="feature-tool-card">
                  <div className="feature-tool-icon">📊</div>
                  <h3>Detailed Comparisons</h3>
                  <p>
                    Compare any two project management tools side-by-side with 
                    detailed feature breakdowns, pricing analysis, and user reviews.
                  </p>
                  <button 
                    className="feature-tool-btn"
                    onClick={() => router.push('/comparisons')}
                  >
                    Compare Tools →
                  </button>
                </div>
                
                <div className="feature-tool-card">
                  <div className="feature-tool-icon">🎯</div>
                  <h3>Startup Tool Finder</h3>
                  <p>
                    Answer a few questions about your team and needs to get 
                    personalized tool recommendations for your startup.
                  </p>
                  <button 
                    className="feature-tool-btn"
                    onClick={() => router.push('/startup-tool-selector')}
                  >
                    Find My Tool →
                  </button>
                </div>
                
                <div className="feature-tool-card">
                  <div className="feature-tool-icon">💰</div>
                  <h3>Budget Calculator</h3>
                  <p>
                    Calculate your monthly and annual costs for project management 
                    tools. Compare options and find potential savings.
                  </p>
                  <button 
                    className="feature-tool-btn"
                    onClick={() => router.push('/blog/startup-tool-budget-calculator')}
                  >
                    Calculate Budget →
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Comparison Section */}
        {!searchTerm && (
          <section className="pricing-comparison-section">
            <div className="container">
              <div className="section-header">
                <h2>💰 Visual Price Comparison</h2>
                <p>Compare monthly costs for popular tools (Business tier pricing)</p>
              </div>
              
              <div className="pricing-bars">
                {tools.slice(0, 6).map(tool => {
                  const price = tool.pricing.business || tool.pricing.professional || tool.pricing.starter || 0
                  const width = Math.min(price * 5, 100)
                  
                  // Determine bar color based on price
                  let barClass = 'bar'
                  if (price === 0) barClass += ' free'
                  else if (price <= 10) barClass += ' low-price'
                  else if (price <= 20) barClass += ' medium-price'
                  else barClass += ' high-price'
                  
                  return (
                    <div key={tool.id} className="pricing-bar-item">
                      <div className="bar-label">
                        <Image 
                          src={tool.logo} 
                          alt={tool.name} 
                          style={{ width: '32px', height: '32px' }}
                        />
                        <span>{tool.name}</span>
                      </div>
                      <div className="bar-container">
                        <div 
                          className={barClass}
                          style={{ width: `${width}%` }}
                        >
                          <span className="bar-amount">
                            {price === 0 ? 'Free' : `$${price}/user`}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="pricing-note">
                Prices shown are per user per month for business/professional plans. 
                Most tools offer annual discounts of 20-30%.
              </p>
            </div>
          </section>
        )}

        {/* Tool Comparison Selector - Enhanced Version */}
        {!searchTerm && (
          <section className="compare-selector-section">
            <div className="container">
              <div className="improved-tool-selector">
                <div className="selector-header">
                  <h3>🔍 Compare Any Two Tools</h3>
                  <p>Select tools from our database to see detailed feature-by-feature comparison</p>
                </div>
                
                <div className="tool-selector-grid">
                  {/* Tool 1 Selection */}
                  <div className="tool-select-column">
                    <div className="column-header">
                      <div className="tool-icon">1</div>
                      <h4>First Tool</h4>
                    </div>
                    {selectedTool1 ? (
                      <div className="selected-tool">
                        <Image src={selectedTool1.logo} alt={selectedTool1.name} />
                        <div className="tool-info">
                          <h5>{selectedTool1.name}</h5>
                          <div className="price">
                            {selectedTool1.pricing.business 
                              ? `$${selectedTool1.pricing.business}/user`
                              : 'Free tier available'
                            }
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="no-tool-selected">
                        <div className="placeholder-icon">📊</div>
                        <p>Select a tool to compare</p>
                      </div>
                    )}
                    <button 
                      className="btn-secondary" 
                      onClick={() => openToolSelection('tool1')}
                    >
                      {selectedTool1 ? 'Change Tool' : 'Select Tool'}
                    </button>
                  </div>
                  
                  {/* VS Column */}
                  <div className="vs-column">
                    <div className="vs-badge-large">VS</div>
                    <button className="swap-tools" onClick={swapTools}>
                      <span>🔄 Swap</span>
                    </button>
                  </div>
                  
                  {/* Tool 2 Selection */}
                  <div className="tool-select-column">
                    <div className="column-header">
                      <div className="tool-icon">2</div>
                      <h4>Second Tool</h4>
                    </div>
                    {selectedTool2 ? (
                      <div className="selected-tool">
                        <Image src={selectedTool2.logo} alt={selectedTool2.name} />
                        <div className="tool-info">
                          <h5>{selectedTool2.name}</h5>
                          <div className="price">
                            {selectedTool2.pricing.business 
                              ? `$${selectedTool2.pricing.business}/user`
                              : 'Free tier available'
                            }
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="no-tool-selected">
                        <div className="placeholder-icon">📈</div>
                        <p>Select a tool to compare</p>
                      </div>
                    )}
                    <button 
                      className="btn-secondary" 
                      onClick={() => openToolSelection('tool2')}
                    >
                      {selectedTool2 ? 'Change Tool' : 'Select Tool'}
                    </button>
                  </div>
                </div>
                
                <div className="selector-actions">
                  <button 
                    className="compare-now-btn"
                    onClick={handleCompare}
                    disabled={!selectedTool1 || !selectedTool2}
                  >
                    <span>⚡ Compare Now</span>
                  </button>
                  <button className="reset-btn" onClick={resetSelection}>
                    Reset Selection
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Popular Comparisons */}
        {!searchTerm && (
          <section id="comparisons" className="popular-section">
            <div className="container">
              <div className="section-header">
                <h2>🔥 Most Popular Comparisons</h2>
                <p>See how the top tools stack up against each other</p>
              </div>
              
              <div className="comparison-grid">
                {popularComparisons.map((comp, index) => {
                  const tool1Data = tools.find(t => t.id === comp.tool1)
                  const tool2Data = tools.find(t => t.id === comp.tool2)
                  
                  if (!tool1Data || !tool2Data) return null
                  
                  return (
                    <Link 
                      href={`/${comp.tool1}-vs-${comp.tool2}`} 
                      key={index}
                      className="comparison-card"
                    >
                      <div className="comparison-logos">
                        <ToolLogo tool={tool1Data} size={64} />
                        <span className="vs-badge">VS</span>
                        <ToolLogo tool={tool2Data} size={64} />
                      </div>
                      <h3>{comp.label}</h3>
                      <p className="comparison-preview">
                        Compare pricing, features, and find which is better for your team
                      </p>
                      <span className="read-more">Read Comparison →</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Tools Section */}
        <section id="tools" className="tools-section">
          <div className="container">
            <div className="section-header">
              <h2>{searchTerm ? 'Search Results' : 'All Project Management Tools'}</h2>
              <p>{searchTerm ? `Showing ${filteredTools.length} matching tools` : 'Explore detailed reviews and comparisons for each tool'}</p>
            </div>

            {filteredTools.length === 0 ? (
              <div className="no-results">
                <h3>No tools found matching "{searchTerm}"</h3>
                <p>Try searching for: Asana, Monday, ClickUp, Trello, Notion, Basecamp, etc.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setFilteredTools(tools)
                  }}
                  className="btn-primary"
                >
                  View All Tools
                </button>
              </div>
            ) : (
              <div className="tools-grid">
                {filteredTools.map((tool) => (
                  <div key={tool.id} className="tool-card">
                    <div className="tool-card-header">
                      <ToolLogo tool={tool} size={48} />
                      <div className="tool-rating">
                        <span className="stars">⭐ {tool.rating}</span>
                      </div>
                    </div>

                    <div className="tool-card-body">
                      <h3>{tool.name}</h3>
                      <p className="tool-tagline">{tool.tagline}</p>
                      <p className="tool-best-for">{tool.best_for}</p>
                      
                      <div className="tool-pricing">
                        <span className="price-label">Starting at</span>
                        <span className="price">
                          {tool.pricing.free ? 'Free' : `$${tool.pricing.starter || tool.pricing.basic}`}
                          {!tool.pricing.free && <span className="price-period">/user/mo</span>}
                        </span>
                      </div>

                      <div className="tool-features-preview">
                        <ul>
                          {tool.top_features.slice(0, 3).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="tool-card-footer">
                      <Link href={`/${tool.id}-alternatives`} className="btn-secondary">
                        View Alternatives
                      </Link>
                      <a 
                        href={tool.affiliate_link} 
                        className="btn-primary"
                        target="_blank"
                        rel="noopener sponsored"
                      >
                        Try Free →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Comparison Matrix - Simplified Version */}
        {!searchTerm && (
          <SimplifiedMatrix tools={tools} />
        )}

        {/* Latest Updates Section */}
        {!searchTerm && (
          <section className="updates-section">
            <div className="container">
              <div className="section-header">
                <h2>📰 Latest Updates & News</h2>
                <p>Stay informed about the latest tool updates and industry news</p>
              </div>
              
              <div className="updates-grid">
                {latestUpdates.map((update, index) => (
                  <div key={index} className="update-card">
                    <span className="update-date">{update.date}</span>
                    <h4>{update.title}</h4>
                    <p>{update.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {!searchTerm && (
          <section className="faq-section">
            <div className="container">
              <div className="section-header">
                <h2>❓ Frequently Asked Questions</h2>
                <p>Common questions about our comparison methodology and data</p>
              </div>
              
              <div className="faq-grid">
                {faqItems.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {!searchTerm && (
          <section className="features-section">
            <div className="container">
              <div className="section-header">
                <h2>Why Use PM Compare?</h2>
              </div>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3>Side-by-Side Comparisons</h3>
                  <p>
                    See detailed feature, pricing, and capability comparisons 
                    between any two tools in an easy-to-read format.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">💰</div>
                  <h3>Transparent Pricing</h3>
                  <p>
                    Get accurate, up-to-date pricing information for all plans 
                    and tiers to make informed budget decisions.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">⭐</div>
                  <h3>Real User Reviews</h3>
                  <p>
                    Access aggregated ratings and reviews from actual users 
                    to understand real-world experiences.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h3>Use Case Matching</h3>
                  <p>
                    Find tools that match your specific needs whether you're 
                    a startup, agency, or enterprise team.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🔄</div>
                  <h3>Always Updated</h3>
                  <p>
                    Our comparisons are regularly updated to reflect the latest 
                    features, pricing changes, and new tools.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">✅</div>
                  <h3>Unbiased Analysis</h3>
                  <p>
                    We present objective comparisons based on features and value, 
                    not paid placements or sponsorships.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        {!searchTerm && (
          <section className="newsletter-section">
            <div className="container">
              <div className="newsletter-content">
                <div className="newsletter-icon">📬</div>
                <h3>Get Weekly Tool Updates</h3>
                <p className="newsletter-description">
                  Stay updated on new features, price changes, and tool releases. 
                  Plus get exclusive comparison tips.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
                
                {newsletterStatus && (
                  <div className={`newsletter-status ${newsletterStatus.includes('Success') ? 'success' : ''}`}>
                    {newsletterStatus}
                  </div>
                )}
                
                <p className="newsletter-note">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {!searchTerm && (
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Find Your Perfect Tool?</h2>
                <p>
                  Start comparing project management software and make the right choice for your team
                </p>
                <div className="cta-buttons">
                  <Link href="#tools" className="btn-primary-large">
                    Browse All Tools
                  </Link>
                  <button 
                    className="btn-secondary-large"
                    onClick={() => router.push('/comparisons')}
                  >
                    Compare Tools
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tool Selection Modal */}
        {isSelectionModalOpen && (
          <div className="modal-overlay" onClick={() => setIsSelectionModalOpen(false)}>
            <div className="tool-selection-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h4>Select a Tool</h4>
                <button className="close-modal" onClick={() => setIsSelectionModalOpen(false)}>
                  ✕
                </button>
              </div>
              
              <div className="tool-search">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchToolsTerm}
                  onChange={(e) => setSearchToolsTerm(e.target.value)}
                />
              </div>
              
              <div className="tool-list">
                {filteredSearchTools.map((tool) => {
                  const isSelected = 
                    (currentSelectingTool === 'tool1' && selectedTool1?.id === tool.id) ||
                    (currentSelectingTool === 'tool2' && selectedTool2?.id === tool.id)
                  
                  return (
                    <button
                      key={tool.id}
                      className={`tool-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => selectTool(tool)}
                      disabled={isSelected}
                    >
                      <Image src={tool.logo} alt={tool.name} />
                      <div className="option-info">
                        <h6>{tool.name}</h6>
                        <div className="price">
                          {tool.pricing.free 
                            ? 'Free tier available'
                            : `From $${tool.pricing.starter || tool.pricing.basic}/user`
                          }
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}