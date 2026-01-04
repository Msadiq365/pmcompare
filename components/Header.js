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

  return (
    <header className="site-header">
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
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className="main-nav desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/comparisons">Compare Tools</Link>
          <Link href="/startup-tool-selector">Tool Finder</Link>
          <Link href="/blog/startup-tool-budget-calculator">Budget Calculator</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/comparisons" onClick={() => setMobileMenuOpen(false)}>Compare Tools</Link>
            <Link href="/startup-tool-selector" onClick={() => setMobileMenuOpen(false)}>Tool Finder</Link>
            <Link href="/blog/startup-tool-budget-calculator" onClick={() => setMobileMenuOpen(false)}>Budget Calculator</Link>
            <Link href="/about">About</Link>
          </div>
        )}
      </div>

      {/* Mobile CSS */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .main-nav.desktop-nav {
            display: none !important;
          }
          
          .mobile-nav {
            display: flex !important;
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            flex-direction: column;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 1000;
            gap: 0.5rem;
          }
          
          .mobile-nav a {
            padding: 0.75rem;
            display: block;
            border-bottom: 1px solid #eee;
          }
          
          .mobile-nav a:last-child {
            border-bottom: none;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none !important;
          }
          
          .mobile-nav {
            display: none !important;
          }
          
          .main-nav.desktop-nav {
            display: flex !important;
            gap: 1.5rem;
            align-items: center;
          }
        }
        
        /* Desktop navigation */
        .main-nav.desktop-nav a {
          color: #4b5563;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .main-nav.desktop-nav a:hover {
          background: #f3f4f6;
          color: #4F46E5;
        }
      `}</style>
    </header>
  )
}