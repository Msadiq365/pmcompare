import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [subscribers, setSubscribers] = useState([])
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'pmcompare') {
      setLoggedIn(true)
      fetchData()
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      // In a real app, this would call your API
      // For now, we'll create mock data
      const response = await fetch('/api/newsletter/subscribers')
      if (response.ok) {
        const data = await response.json()
        setSubscribers(data)
      }
    } catch (error) {
      console.log('Using mock data for demo')
      // Mock data for testing
      setSubscribers([
        { email: 'test@example.com', couponCode: 'STARTUP1234', date: 'Mar 25, 2024, 10:30 AM' }
      ])
    }
    setLoading(false)
  }

  const exportToCSV = () => {
    const csv = subscribers.map(s => 
      `${s.email},${s.couponCode},${s.date}`
    ).join('\n')
    
    const blob = new Blob(['Email,Coupon,Date\n' + csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'subscribers.csv'
    a.click()
  }

  if (!loggedIn) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f8fafc'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
            🔐 Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password: pmcompare"
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '20px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#7B68EE',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
          <p style={{
            marginTop: '20px',
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          }}>
            Password: <code>pmcompare</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1>📋 Newsletter Subscribers ({subscribers.length})</h1>
        <button
          onClick={exportToCSV}
          style={{
            padding: '10px 20px',
            background: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          📥 Export CSV
        </button>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '20px' }}>⏳</div>
          <p>Loading subscribers...</p>
        </div>
      ) : subscribers.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#f8fafc',
          borderRadius: '12px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📭</div>
          <h3>No subscribers yet</h3>
          <p>Check back after people sign up on your blog</p>
          <p style={{ marginTop: '20px', color: '#666' }}>
            Data is stored in: <code>C:\comparison-site\data\subscribers.json</code>
          </p>
        </div>
      ) : (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            padding: '15px 20px',
            background: '#f7fafc',
            borderBottom: '1px solid #e2e8f0',
            fontWeight: '600'
          }}>
            <div>Email</div>
            <div>Coupon Code</div>
            <div>Date</div>
          </div>
          {subscribers.map((sub, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                padding: '15px 20px',
                borderBottom: index < subscribers.length - 1 ? '1px solid #e2e8f0' : 'none'
              }}
            >
              <div style={{ fontFamily: 'monospace' }}>{sub.email}</div>
              <div style={{ fontFamily: 'monospace', color: '#7B68EE', fontWeight: '600' }}>
                {sub.couponCode}
              </div>
              <div>{sub.date}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: '#f8fafc',
        borderRadius: '8px',
        fontSize: '14px',
        color: '#666'
      }}>
        <p><strong>💡 Quick Tips:</strong></p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Data is automatically saved to <code>data/subscribers.json</code></li>
          <li>Also saved to <code>data/subscribers.csv</code> for easy opening in Excel</li>
          <li>Check your terminal console for real-time subscriber notifications</li>
          <li>To use your Google Sheet, replace the link in the API file</li>
        </ul>
      </div>
    </div>
  )
}