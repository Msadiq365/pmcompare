import { useState, useEffect } from 'react'
// Simple page to view captured emails
export default function ViewSubscribers() {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch('/api/get-subscribers')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setSubscribers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])
  
  if (loading) return <div style={{ padding: '40px' }}>Loading...</div>
  if (error) return <div style={{ padding: '40px' }}>Error: {error}</div>
  
  return (
    <div style={{ padding: '40px' }}>
      <h1>Captured Emails: {subscribers.length}</h1>
      <ul>
        {subscribers.map((sub, i) => (
          <li key={i}>
            {sub.email} - {new Date(sub.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  )
}