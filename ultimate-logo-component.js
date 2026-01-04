// components/ToolLogo.js - Or add this to your pages
import { useState, useEffect } from 'react'

export function ToolLogo({ tool, size = 48, className = "" }) {
  const [currentSource, setCurrentSource] = useState(0)
  const [imgError, setImgError] = useState(false)
  
  // Extract domain from website URL
  const getDomain = (url) => {
    return url.replace('https://', '').replace('http://', '').split('/')[0]
  }
  
  const domain = getDomain(tool.website)
  
  // Multiple logo sources in order of preference
  const logoSources = [
    // 1. Local logos (if you've downloaded them)
    `/logos/${tool.id}.png`,
    
    // 2. Clearbit (good quality but rate limited)
    `https://logo.clearbit.com/${domain}`,
    
    // 3. Google Favicons (reliable but lower quality)
    `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
    
    // 4. UI Avatars (always works, generates nice badges)
    `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&size=256&background=random&bold=true&format=svg`,
  ]
  
  const handleImageError = () => {
    // Try next source
    if (currentSource < logoSources.length - 1) {
      setCurrentSource(currentSource + 1)
    } else {
      // All sources failed, show letter fallback
      setImgError(true)
    }
  }
  
  // Custom letter fallback for professional look
  if (imgError) {
    const colors = [
      ['#667eea', '#764ba2'], // Purple
      ['#f093fb', '#f5576c'], // Pink
      ['#4facfe', '#00f2fe'], // Blue
      ['#43e97b', '#38f9d7'], // Green
      ['#fa709a', '#fee140'], // Orange
    ]
    
    // Use tool name to consistently pick a color
    const colorIndex = tool.name.charCodeAt(0) % colors.length
    const [color1, color2] = colors[colorIndex]
    
    return (
      <div 
        className={className}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '12px',
          background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: `${size / 2}px`,
          fontWeight: 'bold',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
      >
        {tool.name.substring(0, 2)}
      </div>
    )
  }
  
  return (
    <img 
      src={logoSources[currentSource]}
      alt={`${tool.name} logo`}
      className={className}
      onError={handleImageError}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        objectFit: 'contain',
        flexShrink: 0,
        borderRadius: '8px'
      }}
    />
  )
}

// Usage in your pages:
// import { ToolLogo } from '../components/ToolLogo'
// <ToolLogo tool={tool} size={48} />
