// Improved Tool Selector - Add this component to pages/index.js
import { useState } from 'react'
import { useRouter } from 'next/router'

function ImprovedToolSelector({ tools }) {
  const router = useRouter()
  const [tool1, setTool1] = useState('')
  const [tool2, setTool2] = useState('')

  const handleCompare = () => {
    if (tool1 && tool2 && tool1 !== tool2) {
      const [first, second] = [tool1, tool2].sort()
      router.push(`/${first}-vs-${second}`)
    }
  }

  return (
    <div className="tool-selector-compact">
      <div className="selector-inline">
        <select 
          value={tool1} 
          onChange={(e) => setTool1(e.target.value)}
          className="tool-select-compact"
        >
          <option value="">Select tool 1...</option>
          {tools.map(tool => (
            <option key={tool.id} value={tool.id} disabled={tool.id === tool2}>
              {tool.name}
            </option>
          ))}
        </select>

        <span className="vs-text">vs</span>

        <select 
          value={tool2} 
          onChange={(e) => setTool2(e.target.value)}
          className="tool-select-compact"
        >
          <option value="">Select tool 2...</option>
          {tools.map(tool => (
            <option key={tool.id} value={tool.id} disabled={tool.id === tool1}>
              {tool.name}
            </option>
          ))}
        </select>

        <button 
          onClick={handleCompare}
          disabled={!tool1 || !tool2 || tool1 === tool2}
          className="compare-btn-compact"
        >
          Compare
        </button>
      </div>
    </div>
  )
}

export default ImprovedToolSelector