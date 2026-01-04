// pages/about.js
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About PM Compare - Project Management Tool Comparison</title>
        <meta name="description" content="Learn about PM Compare, our mission to help teams find the perfect project management software, and how we create unbiased comparisons." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <nav className="breadcrumbs" style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span>About</span>
        </nav>

        <article>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1a' }}>
            About PM Compare
          </h1>

          <p className="intro" style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '40px' }}>
            We help teams find the perfect project management software by providing honest, 
            detailed comparisons of the top tools in the market.
          </p>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>Our Mission</h2>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
              Choosing the right project management tool can make or break your team's productivity. 
              With dozens of options available, each claiming to be the best, making an informed 
              decision is challenging.
            </p>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              That's why we created PM Compare. Our mission is to simplify your decision-making 
              process by providing comprehensive, unbiased comparisons that highlight the 
              strengths and weaknesses of each platform.
            </p>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>What We Do</h2>
            <div style={{ background: '#f7fafc', padding: '30px', borderRadius: '10px', marginBottom: '20px' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold' }}>✓</span>
                  <strong>In-Depth Comparisons:</strong> We compare features, pricing, user experience, 
                  and ideal use cases for every major project management tool.
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold' }}>✓</span>
                  <strong>Regular Updates:</strong> Software changes constantly. We keep our comparisons 
                  up-to-date with the latest features and pricing.
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold' }}>✓</span>
                  <strong>Honest Reviews:</strong> We highlight both pros and cons, helping you make 
                  informed decisions based on your specific needs.
                </li>
                <li style={{ paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold' }}>✓</span>
                  <strong>Team-Focused:</strong> We understand different teams have different needs. 
                  Our comparisons help you find the right fit for your team size and workflow.
                </li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>How We Research</h2>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
              Our comparison process involves:
            </p>
            <ol style={{ lineHeight: '1.8', color: '#4a5568', paddingLeft: '25px' }}>
              <li style={{ marginBottom: '10px' }}>Testing each platform hands-on when possible</li>
              <li style={{ marginBottom: '10px' }}>Analyzing official documentation and feature lists</li>
              <li style={{ marginBottom: '10px' }}>Reading user reviews from multiple sources</li>
              <li style={{ marginBottom: '10px' }}>Monitoring pricing changes and new feature releases</li>
              <li style={{ marginBottom: '10px' }}>Consulting with teams who use these tools daily</li>
            </ol>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>Transparency & Disclosure</h2>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
              We believe in complete transparency. Some links on our site are affiliate links, 
              which means we may earn a commission if you choose to purchase a tool through our links. 
              This comes at no extra cost to you.
            </p>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
              <strong>Important:</strong> Our affiliate partnerships never influence our comparisons. 
              We compare tools based on features, pricing, and real value—not commission rates. 
              Our goal is to help you find the best tool for your needs, not the highest-paying affiliate program.
            </p>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              These commissions help us keep the site running and our comparisons free for everyone.
            </p>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>Who We Help</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Startups</h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                  Finding affordable, scalable tools that grow with your team
                </p>
              </div>
              <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Small Teams</h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                  Easy-to-use platforms that don't require extensive training
                </p>
              </div>
              <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Agencies</h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                  Client-friendly tools with time tracking and billing features
                </p>
              </div>
              <div style={{ padding: '20px', background: '#f7fafc', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Enterprises</h3>
                <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                  Enterprise-grade security and advanced features at scale
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#2d3748' }}>Get in Touch</h2>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
              Have questions, suggestions, or tool recommendations? We'd love to hear from you!
            </p>
            <Link href="/contact" style={{ 
              display: 'inline-block',
              padding: '12px 30px',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'background 0.3s'
            }}>
              Contact Us →
            </Link>
          </section>

          <section style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px',
            borderRadius: '12px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>
              Ready to Find Your Perfect Tool?
            </h2>
            <p style={{ marginBottom: '25px', opacity: 0.95 }}>
              Start comparing project management tools and make the right choice for your team
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'white',
              color: '#667eea',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
       }}>
              Browse All Tools
             </Link>
          </section>
          
        </article>
      </div>
    </>
  )
}