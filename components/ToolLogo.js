// components/ToolLogo.js - Enhanced version
import { useState } from 'react'
import Image from 'next/image' // ← Add this import

export function ToolLogo({ tool, size = 48 }) {
  const [currentSource, setCurrentSource] = useState(0)
  const [allFailed, setAllFailed] = useState(false)
  
  // Get domain from website URL
  const domain = tool.website
    .replace('https://', '')
    .replace('http://', '')
    .split('/')[0]
  
  // Multiple logo sources (tries them in order)
  const logoSources = [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
    `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&size=256&background=random&bold=true`
  ]
  
  // Try next source when current one fails
  const handleError = () => {
    if (currentSource < logoSources.length - 1) {
      setCurrentSource(currentSource + 1)
    } else {
      setAllFailed(true)
    }
  }
  
  // Fallback badge if all sources fail
  if (allFailed) {
    return (
      <div style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: `${size / 2.5}px`,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flexShrink: 0
      }}>
        {tool.name.substring(0, 2)}
      </div>
    )
  }
  
  return (
    <Image 
      src={logoSources[currentSource]}
      alt={`${tool.name} logo`}
      width={size}
      height={size}
      onError={handleError}
      style={{ 
        objectFit: 'contain',
        flexShrink: 0
      }}
      unoptimized={true} // Required for external images
    />
  )
}