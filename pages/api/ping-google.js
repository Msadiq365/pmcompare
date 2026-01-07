import axios from 'axios';

export default async function handler(req, res) {
  const sitemapUrls = [
    'https://pmcompare.com/sitemap-0.xml'
    // add sitemap-1.xml, sitemap-2.xml if you have multiple
  ];

  try {
    for (const url of sitemapUrls) {
      await axios.get(`https://www.google.com/ping?sitemap=${url}`);
    }
    res.status(200).json({ message: 'Ping sent to Google for all sitemaps' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
