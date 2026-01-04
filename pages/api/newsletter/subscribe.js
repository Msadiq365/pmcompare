import fs from 'fs'
import path from 'path'

// Create data directory if it doesn't exist
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const subscribersFile = path.join(dataDir, 'subscribers.json')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address' 
    })
  }

  try {
    // Read existing subscribers or create new file
    let subscribers = []
    if (fs.existsSync(subscribersFile)) {
      const data = fs.readFileSync(subscribersFile, 'utf8')
      try {
        subscribers = JSON.parse(data)
      } catch (e) {
        console.error('Error parsing subscribers file, resetting...')
        subscribers = []
      }
    }

    // Check for duplicate
    const emailLower = email.toLowerCase()
    const existing = subscribers.find(s => s.email.toLowerCase() === emailLower)
    
    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'Welcome back! Here\'s your spreadsheet again.',
        downloadLink: 'https://docs.google.com/spreadsheets/d/1V8Y3tLMm7IBL_-S2T2dTvQn5Z9n4kP9j8H7G6F5D4E3C2B1A0Z9Y8X7W6V5U4I3O2P1Q0R9S8T7U6V5W4/copy',
        couponCode: existing.couponCode || 'STARTUP2024',
        isReturning: true
      })
    }

    // Generate coupon code
    const couponCode = `STARTUP${Math.floor(1000 + Math.random() * 9000)}`
    
    // Use YOUR Google Sheet link here
    const downloadLink = 'https://docs.google.com/spreadsheets/d/1VDHgLhtFw6U8jk65H8ZMP8naHBEMAA28ot6bgtpxaZs/edit?usp=sharing'    
    // Replace above with: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/copy`

    // Add new subscriber
    const newSubscriber = {
      email: emailLower,
      couponCode,
      subscribedAt: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    subscribers.push(newSubscriber)
    
    // Save to JSON
    fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2))
    
    // Also save to CSV
    const csvFile = path.join(dataDir, 'subscribers.csv')
    const csvHeader = fs.existsSync(csvFile) ? '' : 'Email,Coupon Code,Date\n'
    const csvLine = `"${emailLower}","${couponCode}","${newSubscriber.date}"`
    
    if (!fs.existsSync(csvFile)) {
      fs.writeFileSync(csvFile, csvHeader + csvLine)
    } else {
      // Check if email already exists in CSV
      const csvData = fs.readFileSync(csvFile, 'utf8')
      if (!csvData.includes(emailLower)) {
        fs.appendFileSync(csvFile, '\n' + csvLine)
      }
    }

    // Log to console
    console.log('\n' + '='.repeat(60))
    console.log('🎉 NEW SUBSCRIBER CAPTURED!')
    console.log('='.repeat(60))
    console.log(`📧 Email: ${email}`)
    console.log(`🎁 Coupon Code: ${couponCode}`)
    console.log(`📅 Date: ${newSubscriber.date}`)
    console.log(`📊 Total Subscribers: ${subscribers.length}`)
    console.log('='.repeat(60))
    
    // Show all subscribers
    console.log('\n📋 ALL SUBSCRIBERS:')
    subscribers.forEach((sub, i) => {
      console.log(`${i + 1}. ${sub.email} - ${sub.couponCode} - ${sub.date}`)
    })
    console.log('')

    // Return success
    res.status(200).json({
      success: true,
      message: 'Success! Click the link below to get your spreadsheet.',
      downloadLink,
      couponCode,
      subscriberCount: subscribers.length
    })

  } catch (error) {
    console.error('❌ Error:', error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    })
  }
}