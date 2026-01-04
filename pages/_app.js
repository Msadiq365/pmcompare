// pages/_app.js - Clean Version
import Header from '../components/Header'
import Footer from '../components/Footer'
import GoogleAnalytics from '../components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import '../styles/comparison.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="site-container">
      <GoogleAnalytics />
      <Analytics />
      <Header />
      
      <main className="main-content">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}