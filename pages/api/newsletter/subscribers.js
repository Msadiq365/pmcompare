import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // Simple authentication
  const auth = req.headers.authorization
  if (!auth || auth !== 'Bearer pmcompare') {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const dataDir = path.join(process.cwd(), 'data')
  const subscribersFile = path.join(dataDir, 'subscribers.json')

  try {
    if (!fs.existsSync(subscribersFile)) {
      return res.status(200).json([])
    }

    const data = fs.readFileSync(subscribersFile, 'utf8')
    const subscribers = JSON.parse(data)
    
    // Sort by date, newest first
    subscribers.sort((a, b) => 
      new Date(b.subscribedAt || b.date) - new Date(a.subscribedAt || a.date)
    )
    
    res.status(200).json(subscribers)
  } catch (error) {
    console.error('Error reading subscribers:', error)
    res.status(500).json({ message: 'Error reading data' })
  }
}