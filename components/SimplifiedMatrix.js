// components/SimplifiedMatrix.js
import { useState } from 'react'
import Link from 'next/link'
import { ToolLogo } from './ToolLogo'

export default function SimplifiedMatrix({ tools }) {
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  // Filter and sort tools
  let displayTools = [...tools]

  // Price filter
  if (priceFilter === 'free') {
    displayTools = displayTools.filter(t => t.pricing.free)
  } else if (priceFilter === 'budget') {
    displayTools = displayTools.filter(t => {
      const price = t.pricing.starter || t.pricing.basic || 999
      return price <= 10
    })
  } else if (priceFilter === 'premium') {
    displayTools = displayTools.filter(t => {
      const price = t.pricing.starter || t.pricing.basic || 0
      return price > 10
    })
  }

  // Sort
  if (sortBy === 'rating') {
    displayTools.sort((a, b) => b.rating - a.rating)
  } else if (sortBy === 'price-low') {
    displayTools.sort((a, b) => {
      const priceA = a.pricing.free ? 0 : (a.pricing.starter || a.pricing.basic || 999)
      const priceB = b.pricing.free ? 0 : (b.pricing.starter || b.pricing.basic || 999)
      return priceA - priceB
    })
  } else if (sortBy === 'name') {
    displayTools.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <div className="simplified-matrix">
      <div className="matrix-header">
        <h2>Compare All Tools</h2>
        <p>Quick overview of all {tools.length} project management tools</p>
      </div>

      {/* Compact Filters */}
      <div className="matrix-filters-compact">
        <div className="filter-buttons">
          <button 
            className={priceFilter === 'all' ? 'active' : ''}
            onClick={() => setPriceFilter('all')}
          >
            All Tools
          </button>
          <button 
            className={priceFilter === 'free' ? 'active' : ''}
            onClick={() => setPriceFilter('free')}
          >
            Free Plans
          </button>
          <button 
            className={priceFilter === 'budget' ? 'active' : ''}
            onClick={() => setPriceFilter('budget')}
          >
            Budget ($0-$10)
          </button>
          <button 
            className={priceFilter === 'premium' ? 'active' : ''}
            onClick={() => setPriceFilter('premium')}
          >
            Premium ($10+)
          </button>
        </div>

        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="rating">Sort by Rating</option>
          <option value="price-low">Sort by Price</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      {/* Simplified Cards Grid */}
      <div className="matrix-cards">
        {displayTools.map((tool) => (
          <div key={tool.id} className="matrix-card">
            <div className="matrix-card-header">
              <ToolLogo tool={tool} size={40} />
              <div className="tool-info-compact">
                <h3>{tool.name}</h3>
                <span className="rating-compact">⭐ {tool.rating}</span>
              </div>
            </div>

            <div className="matrix-card-body">
              <div className="price-tag">
                {tool.pricing.free && !tool.pricing.starter && !tool.pricing.basic ? (
                  <span className="price-free">FREE</span>
                ) : (
                  <>
                    <span className="price-amount">${tool.pricing.starter || tool.pricing.basic}</span>
                    <span className="price-period">/user/mo</span>
                  </>
                )}
                {tool.pricing.free && (tool.pricing.starter || tool.pricing.basic) && (
                  <span className="has-free">+ Free plan</span>
                )}
              </div>

              <p className="best-for-compact">{tool.best_for}</p>

              <div className="quick-features">
                {tool.top_features.slice(0, 2).map((feature, idx) => (
                  <span key={idx} className="feature-tag">✓ {feature}</span>
                ))}
              </div>
            </div>

            <div className="matrix-card-footer">
              <Link href={`/${tool.id}-alternatives`} className="btn-alternatives">
                <span className="btn-icon">🔄</span>
                Alternatives
              </Link>
              <a 
                href={tool.affiliate_link} 
                className="btn-try-free"
                target="_blank"
                rel="noopener sponsored"
              >
                <span className="btn-icon">🚀</span>
                Try Free
              </a>
            </div>
          </div>
        ))}
      </div>

      {displayTools.length === 0 && (
        <div className="no-results-matrix">
          <p>No tools match your selected filter.</p>
          <button 
            onClick={() => setPriceFilter('all')}
            className="reset-btn"
          >
            Show All Tools
          </button>
        </div>
      )}
    </div>
  )
}