// components/ComparisonMatrix.js
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ComparisonMatrix({ tools }) {
  const [priceFilter, setPriceFilter] = useState('all')
  const [teamSizeFilter, setTeamSizeFilter] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  // Filter and sort tools
  let displayTools = [...tools]

  // Price filter
  if (priceFilter === 'free') {
    displayTools = displayTools.filter(t => t.pricing.free)
  } else if (priceFilter === 'paid') {
    displayTools = displayTools.filter(t => !t.pricing.free || (t.pricing.starter || t.pricing.basic))
  }

  // Team size filter
  if (teamSizeFilter === 'small') {
    displayTools = displayTools.filter(t => 
      t.ideal_team_size.includes('1-') || 
      t.ideal_team_size.includes('5-') ||
      t.ideal_team_size.startsWith('1-')
    )
  } else if (teamSizeFilter === 'medium') {
    displayTools = displayTools.filter(t => 
      t.ideal_team_size.includes('10-') || 
      t.ideal_team_size.includes('20-') ||
      t.ideal_team_size.includes('50-')
    )
  } else if (teamSizeFilter === 'large') {
    displayTools = displayTools.filter(t => 
      t.ideal_team_size.includes('100') || 
      t.ideal_team_size.includes('200') ||
      t.ideal_team_size.includes('500') ||
      t.ideal_team_size.includes('1000')
    )
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
  } else if (sortBy === 'price-high') {
    displayTools.sort((a, b) => {
      const priceA = a.pricing.starter || a.pricing.basic || 0
      const priceB = b.pricing.starter || b.pricing.basic || 0
      return priceB - priceA
    })
  } else if (sortBy === 'name') {
    displayTools.sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <div className="comparison-matrix">
      <div className="matrix-header">
        <h2>📊 Complete Feature Comparison Matrix</h2>
        <p>Compare all {tools.length} tools at a glance</p>
      </div>

      {/* Filters */}
      <div className="matrix-filters">
        <div className="filter-group">
          <label>Price:</label>
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All Tools</option>
            <option value="free">Free Plan Available</option>
            <option value="paid">Paid Plans Only</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Team Size:</label>
          <select value={teamSizeFilter} onChange={(e) => setTeamSizeFilter(e.target.value)}>
            <option value="all">All Sizes</option>
            <option value="small">Small (1-20 people)</option>
            <option value="medium">Medium (20-100 people)</option>
            <option value="large">Large (100+ people)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="matrix-results-count">
        Showing <strong>{displayTools.length}</strong> of {tools.length} tools
      </div>

      {/* Matrix Table */}
      <div className="matrix-table-wrapper">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Rating</th>
              <th>Starting Price</th>
              <th>Free Plan</th>
              <th>Team Size</th>
              <th>Best For</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayTools.map((tool) => (
              <tr key={tool.id}>
                <td className="tool-name-cell">
                  <Image src={tool.logo_url} alt={tool.name} />
                  <div>
                    <strong>{tool.name}</strong>
                    <span className="tool-tagline-small">{tool.tagline}</span>
                  </div>
                </td>
                <td className="rating-cell">
                  <span className="rating-badge">⭐ {tool.rating}</span>
                </td>
                <td className="price-cell">
                  <strong>
                    {tool.pricing.free && !tool.pricing.starter && !tool.pricing.basic ? 
                      'Free' : 
                      `$${tool.pricing.starter || tool.pricing.basic || tool.pricing.pro}`
                    }
                  </strong>
                  {(tool.pricing.starter || tool.pricing.basic) && (
                    <span className="price-period">/user/mo</span>
                  )}
                </td>
                <td className="free-plan-cell">
                  {tool.pricing.free ? '✅ Yes' : '❌ No'}
                </td>
                <td className="team-size-cell">{tool.ideal_team_size}</td>
                <td className="best-for-cell">{tool.best_for}</td>
                <td className="actions-cell">
                  <Link href={`/${tool.id}-alternatives`} className="matrix-btn matrix-btn-secondary">
                    Alternatives
                  </Link>
                  <a 
                    href={tool.affiliate_link} 
                    className="matrix-btn matrix-btn-primary"
                    target="_blank"
                    rel="noopener sponsored"
                  >
                    Try Free
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {displayTools.length === 0 && (
        <div className="no-matrix-results">
          <p>No tools match your selected filters.</p>
          <button 
            onClick={() => {
              setPriceFilter('all')
              setTeamSizeFilter('all')
            }}
            className="reset-filters-btn"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
