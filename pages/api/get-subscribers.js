import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')
  
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    return res.status(200).json([])
  }
  
  const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8')
  res.status(200).json(JSON.parse(data))
}