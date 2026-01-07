// pages/disclaimer.js - COMPLETE FILE - COPY THIS ENTIRE THING
import Head from 'next/head'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer - PM Compare</title>
        <meta name="description" content="PM Compare Disclaimer. Important legal information about our recommendations, affiliate relationships, and content accuracy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <nav className="breadcrumbs" style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span>Disclaimer</span>
        </nav>

        <article style={{ lineHeight: '1.8', color: '#4a5568' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Disclaimer
          </h1>
          
          <p style={{ color: '#718096', marginBottom: '40px' }}>
            <strong>Last Updated:</strong> January 2, 2025
          </p>

          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #667eea' }}>
            <p style={{ margin: 0 }}>
              <strong>In Short:</strong> We provide tool comparisons to help you make informed decisions, but we cannot guarantee 
              specific results. Always verify information directly with the tool providers before making decisions.
            </p>
          </div>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              1. General Information
            </h2>
            <p>
              The information provided by PM Compare ("we," "us," or "our") on 
              <Link href="/" style={{ color: '#667eea', margin: '0 5px' }}>https://pm-compare.vercel.app</Link> 
              (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, 
              however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
              validity, reliability, availability, or completeness of any information on the Site.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              2. Professional Advice
            </h2>
            <p>
              <strong>The Site does not contain professional advice.</strong> The information provided is not a substitute for 
              professional advice from a qualified expert in project management, business operations, or legal counsel.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>ALWAYS</strong> seek the advice of qualified professionals with any questions you may have regarding 
              business decisions, software implementation, or legal matters. Never disregard professional advice or delay in 
              seeking it because of something you have read on this Site.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              3. Affiliate Disclaimer
            </h2>
            <p>
              <strong>This Site contains affiliate links.</strong> We participate in various affiliate marketing programs, which means 
              we may get paid commissions on purchases made through our links to retailer sites.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Our recommendations are independent.</strong> We only recommend products and services we believe will add value to our users. 
              Our affiliate relationships <strong>do not</strong> influence our reviews, comparisons, or recommendations.
            </p>
            <p style={{ marginTop: '15px' }}>
              When you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you.
            </p>
            <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ margin: 0 }}>
                <strong>Note:</strong> Prices and terms of the products and services mentioned are subject to change without notice. 
                Always verify current pricing, features, and terms directly on the provider's website before making a purchase.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              4. Tool Recommendations & Comparisons
            </h2>
            <p>
              Our tool comparisons and recommendations are based on:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Our own research and analysis</li>
              <li>User feedback and reviews</li>
              <li>Publicly available information</li>
              <li>Industry standards and trends</li>
            </ul>
            <p style={{ marginTop: '15px' }}>
              <strong>However, we cannot guarantee:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>That a recommended tool will work perfectly for your specific situation</li>
              <li>The accuracy of pricing information (always check the provider's site)</li>
              <li>That features mentioned are still available or unchanged</li>
              <li>Compatibility with your specific technical setup</li>
            </ul>
            <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
              You are solely responsible for evaluating any tool before purchase or implementation.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              5. Limitation of Liability
            </h2>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result 
              of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance 
              on any information on the Site is solely at your own risk.
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