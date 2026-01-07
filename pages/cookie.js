// pages/cookie-policy.js - COMPLETE FILE - COPY THIS ENTIRE THING
import Head from 'next/head'
import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy - PM Compare</title>
        <meta name="description" content="PM Compare Cookie Policy. Learn about how we use cookies and similar technologies on our website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <nav className="breadcrumbs" style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span>Cookie Policy</span>
        </nav>

        <article style={{ lineHeight: '1.8', color: '#4a5568' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Cookie Policy
          </h1>
          
          <p style={{ color: '#718096', marginBottom: '40px' }}>
            <strong>Last Updated:</strong> January 2, 2025
          </p>

          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #667eea' }}>
            <p style={{ margin: 0 }}>
              <strong>In Short:</strong> We use cookies to make our website work properly and to understand how visitors use it. 
              You can control cookies through your browser settings.
            </p>
          </div>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit our website. 
              They help the website remember information about your visit, which can make it easier to visit again and make the site more useful to you.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              2. How We Use Cookies
            </h2>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2d3748', marginTop: '20px' }}>
              Essential Cookies (Required)
            </h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you.
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Functionality:</strong> Remember your cookie preferences</li>
              <li><strong>Security:</strong> Protect the website from malicious activity</li>
            </ul>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2d3748', marginTop: '25px' }}>
              Analytics Cookies (Optional)
            </h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Google Analytics:</strong> Tracks how you use our website (pages visited, time spent, etc.)</li>
              <li><strong>Performance:</strong> Understand which pages are popular and how visitors move through the site</li>
            </ul>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2d3748', marginTop: '25px' }}>
              Third-Party Cookies
            </h3>
            <p>
              Some third-party services we use may set their own cookies:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Affiliate Networks:</strong> When you click on affiliate links, our partners may place cookies to track referrals</li>
              <li><strong>Embedded Content:</strong> If we embed videos or other content, those providers may use cookies</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              3. How to Control Cookies
            </h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and 
              set most browsers to prevent them from being placed.
            </p>
            <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ margin: 0 }}>
                <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. 
                Visit your browser's help section to learn how to manage cookies.
              </p>
            </div>
            <p style={{ marginTop: '15px' }}>
              <strong>Opt-out Links:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>
                <strong>Google Analytics:</strong> 
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', marginLeft: '5px' }}>
                  Opt-out of Google Analytics
                </a>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              4. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy 
              on this page and updating the "Last Updated" date.
            </p>
          </section>

          <div style={{ 
            marginTop: '50px', 
            paddingTop: '30px', 
            borderTop: '2px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <p style={{ color: '#718096', marginBottom: '20px' }}>
              <Link href="/privacy" style={{ color: '#667eea', marginRight: '20px' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: '#667eea' }}>Terms of Service</Link>
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Back to Home
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}