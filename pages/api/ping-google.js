import axios from 'axios';

export default async function handler(req, res) {
  const sitemapUrl = 'https://pmcompare.com/sitemap.xml';

  try {
    await axios.get(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    res.status(200).json({ message: 'Ping sent to Google' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
