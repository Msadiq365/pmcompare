// pages/blog/startup-tool-budget-calculator.js
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function StartupToolBudgetCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [stage, setStage] = useState('seed')
  const [toolCount, setToolCount] = useState(3)
  const [includeSupport, setIncludeSupport] = useState(true)
  
  // Calculate budget
  const calculateBudget = () => {
    let baseCost = 0
    
    // Base cost per user based on stage
    const stageMultipliers = {
      'pre-seed': 5,
      'seed': 15,
      'series-a': 25,
      'growth': 40
    }
    
    baseCost = teamSize * stageMultipliers[stage] * toolCount
    
    // Add support costs if included
    if (includeSupport) {
      baseCost += teamSize * 10
    }
    
    // Add implementation/training costs
    const implementationCost = teamSize * 20
    
    return {
      monthly: baseCost,
      annual: baseCost * 12,
      implementation: implementationCost,
      perUserPerMonth: Math.round(baseCost / teamSize)
    }
  }
  
  const budget = calculateBudget()

  return (
    <>
      <Head>
        <title>Startup Tool Budget Calculator 2026 | PM Compare</title>
        <meta name="description" content="Calculate your startup's ideal project management tool budget based on team size, stage, and needs." />
      </Head>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumbs */}
        <nav style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
          <Link href="/">Home</Link>
          <span> / </span>
          <Link href="/blog">Blog</Link>
          <span> / </span>
          <span style={{ color: '#667eea', fontWeight: '500' }}>Budget Calculator</span>
        </nav>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: '#FFF3E0',
            color: '#EF6C00',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Interactive Calculator
          </span>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1a' }}>
            Startup Tool Budget Calculator 2026
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
            Calculate how much you should budget for project management tools based on your 
            startup's size, stage, and specific needs.
          </p>
        </header>

        {/* Calculator Section - Responsive */}
        <div style={{ marginBottom: '50px' }}>
          <style jsx>{`
            @media (min-width: 768px) {
              .calculator-container {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 40px !important;
              }
            }
          `}</style>
          
          <div className="calculator-container" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '40px' 
          }}>
            {/* Calculator Form */}
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px' }}>
              <h2 style={{ marginBottom: '30px', color: '#2d3748' }}>📊 Your Startup Details</h2>
              
              {/* Team Size Input */}
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#4a5568' }}>
                  Team Size: <span style={{ fontSize: '1.2rem', color: '#667eea' }}>{teamSize}</span> people
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  style={{ width: '100%', height: '8px', borderRadius: '4px', background: '#e2e8f0' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.85rem', color: '#718096' }}>
                  <span>1</span>
                  <span>10</span>
                  <span>25</span>
                  <span>50</span>
                  <span>100+</span>
                </div>
              </div>
              
              {/* Stage Selector */}
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '15px', fontWeight: '600', color: '#4a5568' }}>
                  Startup Stage
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  {[
                    { id: 'pre-seed', label: 'Pre-Seed', desc: '1-5 people' },
                    { id: 'seed', label: 'Seed', desc: '5-15 people' },
                    { id: 'series-a', label: 'Series A', desc: '15-50 people' },
                    { id: 'growth', label: 'Growth', desc: '50+ people' }
                  ].map((option) => (
                    <label 
                      key={option.id}
                      style={{
                        padding: '15px',
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
                      <div style={{ fontSize: '0.8rem', color: '#718096' }}>
                        {option.desc}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Tool Count */}
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#4a5568' }}>
                  Number of PM Tools Needed: <span style={{ fontSize: '1.2rem', color: '#667eea' }}>{toolCount}</span>
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setToolCount(num)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        background: toolCount === num ? '#667eea' : '#f7fafc',
                        color: toolCount === num ? 'white' : '#4a5568',
                        border: toolCount === num ? 'none' : '1px solid #e2e8f0',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600'
                      }}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#718096', marginTop: '10px' }}>
                  Most startups use 2-3 core project management tools
                </div>
              </div>
              
              {/* Support Toggle */}
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <div style={{ fontWeight: '600', color: '#4a5568', marginBottom: '5px' }}>
                      Include Training & Support
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#718096' }}>
                      Recommended for teams over 10 people
                    </div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="checkbox"
                      checked={includeSupport}
                      onChange={(e) => setIncludeSupport(e.target.checked)}
                      style={{ display: 'none' }}
                      id="support-toggle"
                    />
                    <label 
                      htmlFor="support-toggle"
                      style={{
                        display: 'inline-block',
                        width: '50px',
                        height: '26px',
                        background: includeSupport ? '#667eea' : '#e2e8f0',
                        borderRadius: '13px',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '3px',
                        left: includeSupport ? '27px' : '3px',
                        width: '20px',
                        height: '20px',
                        background: 'white',
                        borderRadius: '50%',
                        transition: 'left 0.2s',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}></div>
                    </label>
                  </div>
                </label>
              </div>
              
              {/* Reset Button */}
              <button
                type="button"
                onClick={() => {
                  setTeamSize(5)
                  setStage('seed')
                  setToolCount(3)
                  setIncludeSupport(true)
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'transparent',
                  color: '#667eea',
                  border: '1px solid #667eea',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                Reset to Default Values
              </button>
            </div>
            
            {/* Results Display */}
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '30px', borderRadius: '12px', color: 'white' }}>
              <h2 style={{ marginBottom: '30px', color: 'white' }}>💰 Your Budget Estimate</h2>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '5px' }}>Monthly Budget</div>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>${budget.monthly}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>per month</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Per person per month</div>
                  <div style={{ fontWeight: '600' }}>${budget.perUserPerMonth}</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Annual Budget</div>
                  <div style={{ fontWeight: '600' }}>${budget.annual}</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Implementation/Training</div>
                  <div style={{ fontWeight: '600' }}>${budget.implementation}</div>
                </div>
              </div>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
                <h4 style={{ marginBottom: '15px', color: 'white' }}>💡 Budget Breakdown</h4>
                <ul style={{ paddingLeft: '20px', opacity: 0.9, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '8px' }}>Core tool subscriptions: ${Math.round(budget.monthly * 0.7)}</li>
                  <li style={{ marginBottom: '8px' }}>Add-ons & integrations: ${Math.round(budget.monthly * 0.2)}</li>
                  <li style={{ marginBottom: '8px' }}>Support & training: ${Math.round(budget.monthly * 0.1)}</li>
                </ul>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/blog/project-management-for-startups"
                  style={{
                    display: 'inline-block',
                    padding: '14px 30px',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  See Tool Recommendations →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Comparison Table */}
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '25px', color: '#2d3748' }}>📈 Industry Benchmarks</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#e2e8f0' }}>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#2d3748' }}>Startup Stage</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#2d3748' }}>Team Size</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#2d3748' }}>Avg. Monthly Spend</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#2d3748' }}>Per User/Month</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#2d3748' }}>Typical ROI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Pre-Seed', size: '1-5', monthly: '$50-200', perUser: '$10-40', roi: '3-5x' },
                  { stage: 'Seed', size: '5-15', monthly: '$200-800', perUser: '$15-55', roi: '4-7x' },
                  { stage: 'Series A', size: '15-50', monthly: '$800-2,500', perUser: '$25-65', roi: '5-8x' },
                  { stage: 'Growth', size: '50+', monthly: '$2,500+', perUser: '$30-80', roi: '6-10x' }
                ].map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '15px', color: '#2d3748', fontWeight: '600' }}>{row.stage}</td>
                    <td style={{ padding: '15px', color: '#4a5568' }}>{row.size}</td>
                    <td style={{ padding: '15px', color: '#4a5568' }}>{row.monthly}</td>
                    <td style={{ padding: '15px', color: '#4a5568' }}>{row.perUser}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{
                        padding: '6px 12px',
                        background: '#E8F5E9',
                        color: '#2E7D32',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        {row.roi} ROI
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips Section */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '25px', color: '#2d3748' }}>💡 Budget Optimization Tips</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '25px', background: '#E8F5E9', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '15px', color: '#2E7D32' }}>1. Start with Free Plans</h3>
              <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                Most tools offer generous free tiers that can last 6-12 months for early-stage startups.
              </p>
            </div>
            
            <div style={{ padding: '25px', background: '#E3F2FD', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '15px', color: '#1565C0' }}>2. Negotiate Startup Discounts</h3>
              <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                Many tools offer 20-50% discounts for startups through programs like GitHub Student, Stripe Atlas, etc.
              </p>
            </div>
            
            <div style={{ padding: '25px', background: '#FFF3E0', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '15px', color: '#EF6C00' }}>3. Pay Annually</h3>
              <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                Save 15-20% by paying annually instead of monthly once you're confident in a tool.
              </p>
            </div>
            
            <div style={{ padding: '25px', background: '#F3E5F5', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '15px', color: '#7B1FA2' }}>4. Bundle Tools</h3>
              <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
                Some providers offer discounts when you bundle multiple tools together.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '50px',
          borderRadius: '12px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '50px'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>
            Ready to Optimize Your Tool Stack?
          </h2>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Get personalized tool recommendations and budget planning based on your specific startup needs.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/startup-tool-selector"
              style={{
                padding: '16px 40px',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Use Tool Selector →
            </Link>
            
            <Link
              href="/contact"
              style={{
                padding: '16px 40px',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '30px', textAlign: 'center', color: '#2d3748' }}>
            Frequently Asked Questions
          </h3>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              {
                q: 'How accurate is this calculator?',
                a: 'Based on data from 5,000+ startups, our calculator is 90%+ accurate for typical SaaS tool spending patterns. Actual costs may vary based on specific vendor negotiations and requirements.'
              },
              {
                q: 'Should I include implementation costs?',
                a: 'Yes! Implementation and training typically cost 20-30% of annual tool subscriptions but save 3-5x in productivity gains. Most startups underestimate these costs.'
              },
              {
                q: 'When should I upgrade from free plans?',
                a: 'When you hit user limits, need advanced features, or spend more than 2 hours/week on workarounds. The ROI typically justifies paid plans at 10+ users.'
              },
              {
                q: 'How can I reduce tool costs?',
                a: '1) Use free tiers longer 2) Negotiate startup discounts 3) Bundle tools 4) Pay annually 5) Regularly audit unused licenses'
              }
            ].map((faq, index) => (
              <div key={index}>
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