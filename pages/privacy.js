// pages/privacy.js - COMPLETE FILE - COPY THIS ENTIRE THING
import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - PM Compare</title>
        <meta name="description" content="PM Compare Privacy Policy. Learn how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <nav className="breadcrumbs" style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span>Privacy Policy</span>
        </nav>

        <article style={{ lineHeight: '1.8', color: '#4a5568' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Privacy Policy
          </h1>
          
          <p style={{ color: '#718096', marginBottom: '40px' }}>
            <strong>Last Updated:</strong> January 2, 2025
          </p>

          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #667eea' }}>
            <p style={{ margin: 0 }}>
              <strong>In Short:</strong> We respect your privacy. We collect minimal information, 
              don't sell your data, and use standard analytics to improve our site.
            </p>
          </div>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2d3748', marginTop: '20px' }}>
              Information You Provide
            </h3>
            <p>
              When you contact us through our contact form, we collect:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Your name</li>
              <li>Your email address</li>
              <li>The content of your message</li>
            </ul>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#2d3748', marginTop: '25px' }}>
              Information Automatically Collected
            </h3>
            <p>
              When you visit our website, we automatically collect:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Analytics Data:</strong> We use Google Analytics to understand how visitors use our site.</li>
              <li><strong>Cookies:</strong> We use cookies for analytics and to remember your preferences.</li>
              <li><strong>Technical Data:</strong> Browser type, operating system, IP address, and referring website.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and user experience</li>
              <li>Understand which comparisons are most helpful to users</li>
              <li>Analyze traffic patterns and site performance</li>
            </ul>
            <p style={{ marginTop: '15px' }}>
              <strong>We do NOT:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Sell your personal information to third parties</li>
              <li>Send unsolicited marketing emails</li>
              <li>Share your data except as described in this policy</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              3. Affiliate Links Disclosure
            </h2>
            <p>
              PM Compare participates in affiliate programs. When you click on certain links and make a purchase, 
              we may earn a commission at no additional cost to you.
            </p>
            <p style={{ marginTop: '15px' }}>
              Affiliate relationships do not influence our comparisons or recommendations.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              4. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this privacy policy, please contact us:
            </p>
            <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ margin: 0 }}><strong>Email:</strong> privacy@pmcompare.com</p>
              <p style={{ margin: '10px 0 0 0' }}>
                <strong>Contact Form:</strong> <Link href="/contact" style={{ color: '#667eea' }}>Send us a message</Link>
              </p>
            </div>
          </section>

          <div style={{ 
            marginTop: '50px', 
            paddingTop: '30px', 
            borderTop: '2px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <p style={{ color: '#718096', marginBottom: '20px' }}>
              <Link href="/terms" style={{ color: '#667eea', marginRight: '20px' }}>Terms of Service</Link>
              <Link href="/contact" style={{ color: '#667eea' }}>Contact Us</Link>
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