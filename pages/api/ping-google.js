import axios from 'axios';

export default async function handler(req, res) {
  try {
    // List all actual sitemap URLs
    const sitemapUrls = [
      'https://pmcompare.com/sitemap-0.xml',
      // Add more if your next-sitemap generates sitemap-1.xml, sitemap-2.xml, etc.
    ];

    // Ping each sitemap to Google
    const results = [];
    for (const url of sitemapUrls) {
      try {
        const response = await axios.get(`https://www.google.com/ping?sitemap=${url}`);
        results.push({ url, status: response.status });
      } catch (err) {
        // Record any ping errors but continue
        results.push({ url, error: err.response?.status || err.message });
      }
    }

    res.status(200).json({ message: 'Ping completed', results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
