// pages/contact.js - COMPLETE FILE - COPY THIS ENTIRE THING
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('') // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Use Formspree with your form ID
    try {
      const response = await fetch('https://formspree.io/f/mwvpokbe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `PM Compare Contact: ${formData.subject}`
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact Us - PM Compare</title>
        <meta name="description" content="Get in touch with PM Compare. We'd love to hear your feedback, suggestions, or answer any questions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <nav className="breadcrumbs" style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span>Contact</span>
        </nav>

        <article>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1a' }}>
            Get in Touch
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '40px' }}>
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ padding: '30px', background: '#f7fafc', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#2d3748' }}>
                💼 Business Inquiries
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Interested in partnerships or advertising? Let's talk!
              </p>
            </div>

            <div style={{ padding: '30px', background: '#f7fafc', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#2d3748' }}>
                🛠️ Tool Submissions
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Have a tool we should review? Send us the details!
              </p>
            </div>

            <div style={{ padding: '30px', background: '#f7fafc', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#2d3748' }}>
                💬 General Feedback
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Found an error or have suggestions? We appreciate your input!
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#2d3748' }}>
              Send Us a Message
            </h2>

            {status === 'success' && (
              <div style={{ 
                padding: '15px', 
                background: '#d4edda', 
                color: '#155724', 
                borderRadius: '6px', 
                marginBottom: '20px',
                border: '1px solid #c3e6cb'
              }}>
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div style={{ 
                padding: '15px', 
                background: '#f8d7da', 
                color: '#721c24', 
                borderRadius: '6px', 
                marginBottom: '20px',
                border: '1px solid #f5c6cb'
              }}>
                ✗ Oops! Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2d3748' }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2d3748' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2d3748' }}>
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    background: 'white'
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Business Partnership">Business Partnership</option>
                  <option value="Tool Submission">Tool Submission</option>
                  <option value="Feedback/Suggestion">Feedback/Suggestion</option>
                  <option value="Report an Error">Report an Error</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2d3748' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  padding: '14px 40px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'white',
                  background: status === 'sending' ? '#a0aec0' : '#667eea',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div style={{ marginTop: '50px', padding: '30px', background: '#f7fafc', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>
              Other Ways to Connect
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '15px' }}>
              Prefer email? You can reach us directly at:
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#667eea' }}>
              contact@pmcompare.com
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#667eea',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Browse All Tools →
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}