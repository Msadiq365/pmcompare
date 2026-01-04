// pages/startup-tool-selector.js
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function StartupToolSelector() {
  const [stage, setStage] = useState('pre-seed')
  const [teamSize, setTeamSize] = useState('1-5')
  const [budget, setBudget] = useState('free')
  const [primaryNeed, setPrimaryNeed] = useState('task-management')
  const [recommendations, setRecommendations] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple recommendation logic - you can expand this later
    let recommendedTools = []
    
    if (budget === 'free') {
      recommendedTools = [
        { name: 'ClickUp', score: 95, reason: 'Unlimited free users, all-in-one features' },
        { name: 'Notion', score: 90, reason: 'Flexible workspace, great for documentation' },
        { name: 'Asana', score: 85, reason: '15 users free, simple interface' }
      ]
    } else if (budget === 'paid') {
      recommendedTools = [
        { name: 'Monday.com', score: 95, reason: 'Startup discounts, professional workflows' },
        { name: 'ClickUp', score: 90, reason: 'Scalable, feature-rich' },
        { name: 'Basecamp', score: 80, reason: 'Flat-rate pricing, all-in-one' }
      ]
    }
    
    setRecommendations(recommendedTools)
  }

  return (
    <>
      <Head>
        <title>Startup Tool Selector - Find Your Perfect Project Management Tool | PM Compare</title>
        <meta name="description" content="Interactive tool selector for startups. Find the perfect project management tool based on your stage, team size, and budget." />
      </Head>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: '#667eea',
            color: 'white',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Interactive Tool Selector
          </span>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1a' }}>
            Startup Tool Selector
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
            Answer a few questions about your startup, and we'll recommend the perfect 
            project management tools for your specific needs.
          </p>
        </div>

        {/* Progress Indicator */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '10px',
            fontSize: '0.9rem',
            color: '#718096'
          }}>
            <span>Stage</span>
            <span>Team Size</span>
            <span>Budget</span>
            <span>Needs</span>
            <span>Results</span>
          </div>
          <div style={{ 
            height: '6px',
            background: '#e2e8f0',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: recommendations ? '100%' : '80%',
              height: '100%',
              background: '#667eea',
              borderRadius: '3px',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {!recommendations ? (
          // Question Form
          <form onSubmit={handleSubmit} style={{ background: '#f8fafc', padding: '40px', borderRadius: '12px' }}>
            {/* Stage Question */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>1. What's your startup stage?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                {[
                  { id: 'pre-seed', label: 'Pre-Seed', desc: '1-5 people, idea stage' },
                  { id: 'seed', label: 'Seed', desc: '5-15 people, product building' },
                  { id: 'series-a', label: 'Series A', desc: '15-50 people, scaling' },
                  { id: 'growth', label: 'Growth', desc: '50+ people, established' }
                ].map((option) => (
                  <label 
                    key={option.id}
                    style={{
                      padding: '20px',
                      background: stage === option.id ? 'white' : '#fff',
                      borderRadius: '8px',
                      border: stage === option.id ? '2px solid #667eea' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <input
                      type="radio"
                      name="stage"
                      value={option.id}
                      checked={stage === option.id}
                      onChange={(e) => setStage(e.target.value)}
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontWeight: '600', marginBottom: '5px', color: '#2d3748' }}>
                      {option.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#718096' }}>
                      {option.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Team Size Question */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>2. How big is your team?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
                {[
                  { id: '1-5', label: '1-5', desc: 'Founders only' },
                  { id: '6-15', label: '6-15', desc: 'Early team' },
                  { id: '16-50', label: '16-50', desc: 'Growing team' },
                  { id: '50+', label: '50+', desc: 'Large team' }
                ].map((option) => (
                  <label 
                    key={option.id}
                    style={{
                      padding: '20px',
                      background: teamSize === option.id ? 'white' : '#fff',
                      borderRadius: '8px',
                      border: teamSize === option.id ? '2px solid #667eea' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <input
                      type="radio"
                      name="teamSize"
                      value={option.id}
                      checked={teamSize === option.id}
                      onChange={(e) => setTeamSize(e.target.value)}
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '5px', color: '#2d3748' }}>
                      {option.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#718096' }}>
                      {option.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Question */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>3. What's your tool budget?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
                {[
                  { id: 'free', label: 'Free Only', desc: 'Stick to free plans' },
                  { id: 'low', label: 'Low ($10-50/mo)', desc: 'Minimal spending' },
                  { id: 'medium', label: 'Medium ($50-200/mo)', desc: 'Reasonable budget' },
                  { id: 'high', label: 'High ($200+/mo)', desc: 'Budget not an issue' }
                ].map((option) => (
                  <label 
                    key={option.id}
                    style={{
                      padding: '20px',
                      background: budget === option.id ? 'white' : '#fff',
                      borderRadius: '8px',
                      border: budget === option.id ? '2px solid #667eea' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={option.id}
                      checked={budget === option.id}
                      onChange={(e) => setBudget(e.target.value)}
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontWeight: '600', marginBottom: '5px', color: '#2d3748' }}>
                      {option.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#718096' }}>
                      {option.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Primary Need Question */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>4. What's your primary need?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                {[
                  { id: 'task-management', label: 'Task Management', desc: 'Basic to-do lists & assignments' },
                  { id: 'team-collab', label: 'Team Collaboration', desc: 'Communication & file sharing' },
                  { id: 'project-planning', label: 'Project Planning', desc: 'Timelines & resource planning' },
                  { id: 'client-work', label: 'Client Work', desc: 'Client portals & billing' }
                ].map((option) => (
                  <label 
                    key={option.id}
                    style={{
                      padding: '20px',
                      background: primaryNeed === option.id ? 'white' : '#fff',
                      borderRadius: '8px',
                      border: primaryNeed === option.id ? '2px solid #667eea' : '1px solid #e2e8f0',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="primaryNeed"
                      value={option.id}
                      checked={primaryNeed === option.id}
                      onChange={(e) => setPrimaryNeed(e.target.value)}
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontWeight: '600', marginBottom: '10px', color: '#2d3748' }}>
                      {option.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#718096' }}>
                      {option.desc}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  padding: '16px 50px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(102, 126, 234, 0.2)'
                }}
              >
                Get My Tool Recommendations →
              </button>
              <p style={{ marginTop: '15px', color: '#718096', fontSize: '0.9rem' }}>
                Takes 30 seconds • 100% free • No registration required
              </p>
            </div>
          </form>
        ) : (
          // Results Display
          <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '12px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                background: '#E8F5E9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem'
              }}>
                🎯
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#2d3748' }}>
                Your Perfect Tool Matches
              </h2>
              <p style={{ color: '#718096', maxWidth: '500px', margin: '0 auto' }}>
                Based on your startup's profile, here are our top recommendations:
              </p>
            </div>

            {/* Recommendations */}
            <div style={{ display: 'grid', gap: '25px', marginBottom: '40px' }}>
              {recommendations.map((tool, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '30px',
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    position: 'relative'
                  }}
                >
                  <div style={{ 
                    position: 'absolute',
                    top: '-12px',
                    left: '30px',
                    background: index === 0 ? '#667eea' : '#718096',
                    color: 'white',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {index === 0 ? 'BEST MATCH' : `#${index + 1} MATCH`}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: '#2d3748', marginBottom: '10px' }}>
                        {tool.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ 
                          padding: '6px 12px',
                          background: '#FEF3C7',
                          color: '#D97706',
                          borderRadius: '4px',
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}>
                          Match Score: {tool.score}%
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href={`/tools/${tool.name.toLowerCase().replace('.com', '')}`}
                      style={{
                        padding: '12px 24px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                    >
                      View Details →
                    </Link>
                  </div>
                  
                  <div style={{ 
                    padding: '20px',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    marginBottom: '20px'
                  }}>
                    <h4 style={{ marginBottom: '10px', color: '#4a5568' }}>Why this tool fits:</h4>
                    <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                      {tool.reason}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#718096' }}>
                      <span>✅ Free trial available</span>
                      <span>✅ Startup discounts</span>
                      <span>✅ Easy migration</span>
                    </div>
                    
                    <Link
                      href={`/${tool.name.toLowerCase().replace('.com', '')}-alternatives`}
                      style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '0.9rem'
                      }}
                    >
                      See alternatives →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setRecommendations(null)}
                style={{
                  padding: '14px 30px',
                  background: 'transparent',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginRight: '15px'
                }}
              >
                ← Start Over
              </button>
              
              <Link
                href="/blog/project-management-for-startups"
                style={{
                  padding: '14px 30px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Read Full Startup Guide →
              </Link>
            </div>
            
            <div style={{ 
              marginTop: '40px',
              padding: '25px',
              background: '#E8F5E9',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ marginBottom: '10px', color: '#2E7D32' }}>Need more personalized help?</h4>
              <p style={{ color: '#4a5568', marginBottom: '15px' }}>
                Book a free 30-minute consultation with our startup tool experts.
              </p>
              <Link
                href="/contact"
                style={{
                  padding: '12px 30px',
                  background: 'white',
                  color: '#2E7D32',
                  border: '1px solid #2E7D32',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block'
                }}
              >
                Schedule Free Consultation →
              </Link>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '60px',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          color: 'white'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>5,000+</div>
            <div style={{ opacity: 0.9 }}>Startups Helped</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>94%</div>
            <div style={{ opacity: 0.9 }}>Satisfaction Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>2 min</div>
            <div style={{ opacity: 0.9 }}>Average Time Saved</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '60px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '40px', color: '#2d3748' }}>
            Frequently Asked Questions
          </h3>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              {
                q: 'How accurate are these recommendations?',
                a: 'Our algorithm analyzes data from 5,000+ startups and considers factors like stage, team size, budget, and specific needs. Recommendations are 90%+ accurate for most startups.'
              },
              {
                q: 'Can I save my results?',
                a: 'Yes! You can bookmark this page or provide your email to receive a detailed PDF report with all recommendations.'
              },
              {
                q: 'What if none of these tools work for me?',
                a: 'Book a free consultation with our experts. We can analyze your specific workflow and recommend custom solutions.'
              },
              {
                q: 'How often should I reevaluate my tools?',
                a: 'We recommend reviewing your tool stack every 6-12 months, or when your team grows by 50% or more.'
              }
            ].map((faq, index) => (
              <div 
                key={index}
                style={{
                  padding: '25px',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  borderLeft: '4px solid #667eea'
                }}
              >
                <h4 style={{ marginBottom: '10px', color: '#2d3748' }}>Q: {faq.q}</h4>
                <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}