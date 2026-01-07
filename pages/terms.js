// pages/terms.js
import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - PM Compare</title>
        <meta name="description" content="PM Compare Terms of Service. Read our terms and conditions for using the website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <nav className="breadcrumbs" style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span>Terms of Service</span>
        </nav>

        <article style={{ lineHeight: '1.8', color: '#4a5568' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1a1a1a' }}>
            Terms of Service
          </h1>
          
          <p style={{ color: '#718096', marginBottom: '40px' }}>
            <strong>Last Updated:</strong> January 2, 2026
          </p>

          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #667eea' }}>
            <p style={{ margin: 0 }}>
              <strong>Agreement:</strong> By accessing and using PM Compare, you agree to be bound by these terms. 
              If you don't agree, please don't use our website.
            </p>
          </div>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to PM Compare ("we," "us," or "our"). By accessing or using our website at pmcompare.com 
              (the "Site"), you agree to comply with and be bound by these Terms of Service ("Terms"). 
              These Terms apply to all visitors, users, and others who access or use the Site.
            </p>
            <p style={{ marginTop: '15px' }}>
              If you do not agree to these Terms, you may not access or use the Site.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              2. Description of Service
            </h2>
            <p>
              PM Compare provides information, reviews, and comparisons of project management software and tools. 
              Our services include:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Side-by-side comparisons of project management tools</li>
              <li>Feature analysis and pricing information</li>
              <li>User reviews and ratings</li>
              <li>Recommendations and best practices</li>
              <li>Links to third-party software providers</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              3. Affiliate Disclosure
            </h2>
            <p>
              PM Compare participates in various affiliate marketing programs. This means we may earn a 
              commission when you click on certain links and purchase products or services through those links.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Important Points:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>You pay the same price whether you use our links or go directly to the vendor</li>
              <li>Affiliate relationships do not influence our comparisons or recommendations</li>
              <li>We provide honest, unbiased reviews regardless of affiliate status</li>
              <li>Commission earnings help us maintain and improve the Site</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              4. Accuracy of Information
            </h2>
            <p>
              We strive to provide accurate, up-to-date information about project management tools. However:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Pricing, features, and availability may change without notice</li>
              <li>Information is provided "as is" without warranties of any kind</li>
              <li>We are not responsible for errors, omissions, or outdated information</li>
              <li>Always verify details directly with the software provider before making a purchase</li>
            </ul>
            <p style={{ marginTop: '15px' }}>
              If you notice incorrect information, please <Link href="/contact" style={{ color: '#667eea' }}>contact us</Link> 
               so we can update it.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              5. User Responsibilities
            </h2>
            <p>When using our Site, you agree to:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Provide accurate information when contacting us</li>
              <li>Not use the Site for any illegal or unauthorized purpose</li>
              <li>Not attempt to interfere with the Site's functionality</li>
              <li>Not copy, reproduce, or distribute our content without permission</li>
              <li>Not use automated systems (bots, scrapers) to access the Site</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              6. Intellectual Property
            </h2>
            <p>
              All content on PM Compare, including text, graphics, logos, images, and software, is the property 
              of PM Compare or its content suppliers and is protected by copyright and trademark laws.
            </p>
            <p style={{ marginTop: '15px' }}>
              You may:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>View and print pages for personal, non-commercial use</li>
              <li>Share links to our comparisons on social media</li>
            </ul>
            <p style={{ marginTop: '15px' }}>
              You may not:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Reproduce, distribute, or modify our content without written permission</li>
              <li>Use our content for commercial purposes without authorization</li>
              <li>Remove copyright or trademark notices</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              7. Third-Party Links and Services
            </h2>
            <p>
              Our Site contains links to third-party websites and services. These links are provided for your convenience, 
              but we do not endorse or control these external sites.
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Please note:</strong>
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>We are not responsible for the content, privacy policies, or practices of third-party sites</li>
              <li>Transactions with third-party vendors are between you and them</li>
              <li>We are not liable for any issues arising from third-party services</li>
              <li>Review the terms and policies of any third-party site before engaging with them</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              8. Disclaimer of Warranties
            </h2>
            <p>
              THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" 
              WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p style={{ marginTop: '15px' }}>
              We do not warrant that:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>The Site will be uninterrupted, secure, or error-free</li>
              <li>The information provided is complete, accurate, or reliable</li>
              <li>Any defects will be corrected</li>
              <li>The Site is free of viruses or harmful components</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              9. Limitation of Liability
            </h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, PM COMPARE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE.
            </p>
            <p style={{ marginTop: '15px' }}>
              This includes, but is not limited to, damages for:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Loss of profits or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Business interruption</li>
              <li>Decisions made based on our content</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless PM Compare and its affiliates from any claims, 
              liabilities, damages, losses, and expenses (including legal fees) arising from:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Any content you submit or transmit through the Site</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
              posting to the Site. Your continued use of the Site after changes are posted constitutes your 
              acceptance of the modified Terms.
            </p>
            <p style={{ marginTop: '15px' }}>
              We will update the "Last Updated" date at the top of this page when changes are made.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              12. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your access to the Site at any time, without notice, 
              for any reason, including violation of these Terms.
            </p>
          </section>

          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>
              13. Contact Information
            </h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ margin: 0 }}><strong>Email:</strong> info@pmcompare.com</p>
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
              <Link href="/privacy" style={{ color: '#667eea', marginRight: '20px' }}>Privacy Policy</Link>
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