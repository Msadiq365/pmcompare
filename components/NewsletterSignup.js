// components/NewsletterSignup.js
import React, { useState, forwardRef } from 'react'

const NewsletterSignup = forwardRef(({ id, variant = 'default' }, ref) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [couponCode, setCouponCode] = useState('')
  const [downloadLink, setDownloadLink] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      console.log('📤 Submitting newsletter form for:', email)
      
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: variant === 'startup' ? 'startup_blog' : 'blog',
          toolInterest: variant === 'startup' ? 'startup_tools' : 'general'
        }),
      })

      const data = await response.json()
      console.log('📥 API response:', data)
      
      if (data.success) {
        setSuccess(true)
        setCouponCode(data.couponCode || '')
        setDownloadLink(data.downloadLink || '')
        setEmail('')
        
        // Clear success message after 15 seconds
        setTimeout(() => {
          setSuccess(false)
          setCouponCode('')
          setDownloadLink('')
        }, 15000)
      } else {
        setError(data.message || 'Subscription failed. Please try again.')
      }
    } catch (err) {
      console.error('❌ Newsletter error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'startup') {
    return (
      <div 
        id={id}
        ref={ref}
        style={{
          background: 'linear-gradient(135deg, #7B68EE 0%, #5D54A4 100%)',
          padding: '60px 40px',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          margin: '40px 0',
          scrollMarginTop: '80px' // Add this for better scroll positioning
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }} />
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '20px', 
            color: 'white',
            lineHeight: '1.3'
          }}>
            Startup Tool Guide Newsletter
          </h2>
          
          <p style={{ 
            marginBottom: '30px', 
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto 30px',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Join 5,000+ founders getting weekly tool comparisons, startup discounts, 
            and productivity tips to accelerate your growth.
          </p>
          
          {!success ? (
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@startup.com"
                  required
                  disabled={loading}
                  style={{
                    flex: '1 1 250px',
                    padding: '15px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    minWidth: '200px',
                    maxWidth: '100%'
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '15px 30px',
                    background: 'white',
                    color: '#7B68EE',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    if (!loading) e.target.style.opacity = '0.9'
                  }}
                  onMouseOut={(e) => {
                    if (!loading) e.target.style.opacity = '1'
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{ marginRight: '8px' }}>⏳</span>
                      Subscribing...
                    </>
                  ) : (
                    'Get Startup Tools Guide'
                  )}
                </button>
              </div>
              
              {error && (
                <div style={{ 
                  background: 'rgba(255, 183, 77, 0.1)',
                  color: '#FFB74D',
                  padding: '10px 15px',
                  borderRadius: '6px',
                  marginTop: '15px',
                  fontSize: '0.9rem',
                  display: 'inline-block'
                }}>
                  ⚠️ {error}
                </div>
              )}
              
              <p style={{ 
                fontSize: '0.875rem', 
                opacity: 0.8, 
                marginTop: '15px',
                lineHeight: '1.5'
              }}>
                Free: Startup Tool Comparison Spreadsheet + Discount Codes
              </p>
            </form>
          ) : (
            <div style={{
              padding: '30px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '12px',
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎉</div>
              <h3 style={{ marginBottom: '15px', color: 'white', fontSize: '1.5rem' }}>
                Welcome Founder!
              </h3>
              <p style={{ marginBottom: '25px', opacity: 0.95, lineHeight: '1.6' }}>
                Check your email for the startup tool spreadsheet and exclusive discounts.
                <br />
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  (In development mode, check your browser console for details)
                </span>
              </p>
              
              {couponCode && (
                <div style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '25px',
                  border: '2px dashed rgba(255,255,255,0.3)'
                }}>
                  <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', opacity: 0.9 }}>
                    Your exclusive discount code:
                  </p>
                  <div style={{
                    background: 'white',
                    color: '#7B68EE',
                    padding: '12px 25px',
                    borderRadius: '8px',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    letterSpacing: '3px',
                    margin: '10px 0'
                  }}>
                    {couponCode}
                  </div>
                  <p style={{ 
                    margin: '10px 0 0 0', 
                    fontSize: '0.85rem', 
                    opacity: 0.8,
                    fontStyle: 'italic'
                  }}>
                    Use this for 20% off on selected tools
                  </p>
                </div>
              )}
              
              {downloadLink && (
                <div style={{ marginTop: '20px' }}>
                  <a 
                    href={downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '14px 28px',
                      background: 'white',
                      color: '#7B68EE',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    📥 Download Spreadsheet Now
                  </a>
                  <p style={{ 
                    marginTop: '15px', 
                    fontSize: '0.85rem', 
                    opacity: 0.7 
                  }}>
                    (Google Sheets - Make a copy to edit)
                  </p>
                </div>
              )}
              
              <div style={{ 
                marginTop: '30px', 
                paddingTop: '20px', 
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '10px' }}>
                  What you&apos;ll receive every week:
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>✅ Tool comparisons</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>✅ Startup discounts</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>✅ Productivity tips</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default variant (for other pages)
  return (
    <div 
      id={id}
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px 30px',
        borderRadius: '12px',
        color: 'white',
        textAlign: 'center',
        margin: '40px 0',
        scrollMarginTop: '80px'
      }}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
        📬 Get Project Management Insights
      </h3>
      
      <p style={{ 
        marginBottom: '25px', 
        opacity: 0.9,
        maxWidth: '500px',
        margin: '0 auto 25px',
        fontSize: '1rem',
        lineHeight: '1.6'
      }}>
        Join our newsletter for weekly tool comparisons, productivity tips, and exclusive content.
      </p>
      
      {!success ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              required
              disabled={loading}
              style={{
                flex: '1 1 200px',
                padding: '12px 15px',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.95rem',
                outline: 'none',
                minWidth: '150px',
                maxWidth: '100%'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '12px 25px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '0.95rem',
                opacity: loading ? 0.7 : 1,
                whiteSpace: 'nowrap'
              }}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {error && (
            <p style={{ 
              color: '#FFB74D', 
              marginTop: '10px',
              fontSize: '0.85rem'
            }}>
              ⚠️ {error}
            </p>
          )}
          <p style={{ 
            fontSize: '0.8rem', 
            opacity: 0.7, 
            marginTop: '15px'
          }}>
            No spam. Unsubscribe anytime. Free comparison spreadsheet for new subscribers.
          </p>
        </form>
      ) : (
        <div style={{
          padding: '20px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <h4 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>✅ Successfully Subscribed!</h4>
          <p style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.5' }}>
            Check your email to confirm subscription and get your free resources.
          </p>
        </div>
      )}
    </div>
  )
})

NewsletterSignup.displayName = 'NewsletterSignup'

export default NewsletterSignup