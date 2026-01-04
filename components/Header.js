// components/Header.js - Fixed Mobile Version
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  // Handle homepage anchor links
  const handleHomepageAnchor = (href) => {
    if (router.pathname === '/') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/${href}`)
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header" style={{ position: 'relative' }}>
      <div className="container header-content">
        <Link href="/" className="logo">
          <h1>PM Compare</h1>
          <span className="tagline">Find Your Perfect Project Management Tool</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none', // Will be shown by CSS media query
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#4b5563',
            zIndex: 1001,
            padding: '0.5rem'
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <Link 
            href="/" 
            className={router.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          
                    
          <Link 
            href="/comparisons" 
            className={router.pathname === '/comparisons' ? 'active' : ''}
          >
            Compare Tools
          </Link>
          
          <Link 
            href="/startup-tool-selector" 
            className={router.pathname === '/startup-tool-selector' ? 'active' : ''}
          >
            Tool Finder
          </Link>
          
          <Link 
            href="/blog/startup-tool-budget-calculator" 
            className={router.pathname === '/blog/startup-tool-budget-calculator' ? 'active' : ''}
          >
            Budget Calculator
          </Link>
                 </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav" style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            background: 'white',
            padding: '1rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <Link 
              href="/" 
              className={router.pathname === '/' ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              Home
            </Link>
            
            <a 
              href="#tools"
              className={router.pathname === '/' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleHomepageAnchor('#tools')
                setMobileMenuOpen(false)
              }}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              Browse Tools
            </a>
            
            <Link 
              href="/comparisons" 
              className={router.pathname === '/comparisons' ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              Compare Tools
            </Link>
            
            <Link 
              href="/startup-tool-selector" 
              className={router.pathname === '/startup-tool-selector' ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              Tool Finder
            </Link>
            
            <Link 
              href="/blog/startup-tool-budget-calculator" 
              className={router.pathname === '/blog/startup-tool-budget-calculator' ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              Budget Calculator
            </Link>
            
            <Link 
              href="/comparisons/startups" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              🚀 Startup Tools
            </Link>
            
            <Link 
              href="/comparisons/agencies" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              🎨 Agency Tools
            </Link>
            
            <Link 
              href="/comparisons/enterprise" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.75rem', display: 'block' }}
            >
              🏢 Enterprise Tools
            </Link>
          </div>
        )}
      </div>

      {/* Critical CSS for mobile - Inline to ensure it works */}
      <style jsx global>{`
        /* Show mobile menu button on mobile */
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .main-nav.desktop-nav {
            display: none !important;
          }
          
          .mobile-nav {
            display: flex !important;
          }
        }
        
        /* Hide mobile nav on desktop */
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
          
          .main-nav.desktop-nav {
            display: flex !important;
          }
        }
        
        /* Desktop navigation styles */
        .main-nav.desktop-nav {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        
        .main-nav.desktop-nav a {
          font-weight: 500;
          color: #4b5563;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .main-nav.desktop-nav a:hover,
        .main-nav.desktop-nav a.active {
          background: #f3f4f6;
          color: #4F46E5;
        }
      `}</style>
    </header>
  )
}