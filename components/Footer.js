// components/Footer.js - Converted to Regular CSS
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <h3>PM Compare</h3>
            </Link>
            <p className="footer-description">
              Helping teams find the perfect project management tools through 
              unbiased comparisons, detailed reviews, and expert insights since 2023.
            </p>
            
            {/* Tools Highlight */}
            <div className="footer-tools">
              <h5>Our Interactive Tools</h5>
              <div className="tool-links">
                <Link href="/comparisons" className="tool-link">
                  <span>📊</span> Compare Tools
                </Link>
                <Link href="/startup-tool-selector" className="tool-link">
                  <span>🎯</span> Tool Finder
                </Link>
                <Link href="/blog/startup-tool-budget-calculator" className="tool-link">
                  <span>💰</span> Budget Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Popular Comparisons */}
          <div className="footer-section">
            <h4>Popular Comparisons</h4>
            <ul className="footer-links">
              <li><Link href="/asana-vs-monday">Asana vs Monday.com</Link></li>
              <li><Link href="/clickup-vs-notion">ClickUp vs Notion</Link></li>
              <li><Link href="/trello-vs-asana">Trello vs Asana</Link></li>
              <li><Link href="/monday-vs-clickup">Monday vs ClickUp</Link></li>
              <li><Link href="/notion-vs-asana">Notion vs Asana</Link></li>
              <li><Link href="/basecamp-vs-monday">Basecamp vs Monday</Link></li>
            </ul>
          </div>

          {/* Top Tools */}
          <div className="footer-section">
            <h4>Top Tools</h4>
            <ul className="footer-links">
              <li><Link href="/asana-alternatives">Asana Review & Alternatives</Link></li>
              <li><Link href="/monday-alternatives">Monday.com Review</Link></li>
              <li><Link href="/clickup-alternatives">ClickUp Review</Link></li>
              <li><Link href="/notion-alternatives">Notion Review</Link></li>
              <li><Link href="/trello-alternatives">Trello Review</Link></li>
              <li><Link href="/basecamp-alternatives">Basecamp Review</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link href="/#tools">Browse All Tools</Link></li>
              <li><Link href="/comparisons">All Comparisons</Link></li>
              <li><Link href="/blog">Blog & Guides</Link></li>
              <li><Link href="/startup-tool-selector">Startup Tool Finder</Link></li>
              <li><Link href="/blog/startup-tool-budget-calculator">Budget Calculator</Link></li>
              <li><Link href="/#features">Why Choose Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Tools Banner */}
        <div className="footer-banner">
          <h4>Need Help Choosing?</h4>
          <p>Try our interactive tools to find your perfect solution</p>
          <div className="banner-buttons">
            <Link href="/startup-tool-selector" className="banner-btn primary">
              <span>🎯</span> Find My Tool
            </Link>
            <Link href="/blog/startup-tool-budget-calculator" className="banner-btn secondary">
              <span>💰</span> Calculate Budget
            </Link>
            <Link href="/comparisons" className="banner-btn outline">
              <span>📊</span> Compare Tools
            </Link>
          </div>
        </div>

        {/* Disclosure & Legal */}
        <div className="footer-legal">
          <div className="disclosure">
            <h5>Disclosure</h5>
            <p className="disclosure-text">
              PM Compare participates in various affiliate marketing programs. 
              We may earn commissions when you click on links to products and services 
              from our site. This helps support our research and keep our content free. 
              All opinions, reviews, and comparisons remain completely unbiased and 
              based on thorough analysis.
            </p>
          </div>
          
          <div className="legal-bottom">
<div className="legal-links">
  <Link href="/privacy">Privacy Policy</Link>
  <Link href="/terms">Terms of Service</Link>
  <Link href="/cookie">Cookie Policy</Link>
  <Link href="/disclaimer">Disclaimer</Link>
  <Link href="/contact">Contact Us</Link>
</div>
            
            <div className="copyright">
              <p>&copy; {currentYear} PM Compare. All rights reserved.</p>
              <p className="made-with">
                Made with ❤️ for project managers and teams worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #05192eff;
          color: #374151;
          padding: 3rem 0;
          margin-top: auto;
          border-top: 1px solid #e5e7eb;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          grid-column: span 2;
        }
        
        .footer-logo h3 {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1738f1ff;
          margin-bottom: 1rem;
        }
        
        .footer-description {
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
.footer-tools h5 {
  font-weight: 600;
  color: #1738f1ff;
  margin-bottom: 1rem;
}
        
        .tool-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .tool-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #3b82f6;
          text-decoration: none;
        }
        
        .tool-link:hover {
          color: #1d4ed8;
        }
        
.footer-section h4 {
  font-weight: 600;
  color: #1738f1ff;
  margin-bottom: 1rem;
  font-size: 1rem;
}
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.875rem;
        }
        
        .footer-links a:hover {
          color: #111827;
        }
        
        .footer-banner {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 3rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .footer-banner h4 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1738f1ff;
          margin-bottom: 0.5rem;
        }
        
        .footer-banner p {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }
        
        .banner-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .banner-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .banner-btn.primary {
          background: #3b82f6;
          color: white;
        }
        
        .banner-btn.primary:hover {
          background: #2563eb;
        }
        
        .banner-btn.secondary {
          background: #f3f4f6;
          color: #374151;
        }
        
        .banner-btn.secondary:hover {
          background: #e5e7eb;
        }
        
        .banner-btn.outline {
          border: 1px solid #d1d5db;
          color: #374151;
        }
        
        .banner-btn.outline:hover {
          border-color: #9ca3af;
        }
        
        .footer-legal {
          border-top: 1px solid #e5e7eb;
          padding-top: 2rem;
        }
        
.disclosure h5 {
  font-weight: 600;
  color: #1738f1ff;
  margin-bottom: 0.5rem;
}
        
        .disclosure-text {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 2rem;
        }
        
        .legal-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }
        
        @media (min-width: 768px) {
          .legal-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        
        .legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        
        .legal-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.875rem;
        }
        
        .legal-links a:hover {
          color: #111827;
        }
        
        .copyright {
          text-align: center;
        }
        
        @media (min-width: 768px) {
          .copyright {
            text-align: right;
          }
        }
        
        .copyright p {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0.25rem 0;
        }
        
        .made-with {
          font-size: 0.75rem;
          color: #9ca3af;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-brand {
            grid-column: 1;
          }
          
          .banner-buttons {
            flex-direction: column;
          }
          
          .banner-btn {
            justify-content: center;
          }
          
          .legal-links {
            justify-content: center;
          }
          
          .copyright {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}