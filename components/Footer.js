// components/Footer.js - Enhanced Version with Tailwind CSS
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PM Compare</h3>
            </Link>
            <p className="text-gray-600 mb-6">
              Helping teams find the perfect project management tools through 
              unbiased comparisons, detailed reviews, and expert insights since 2023.
            </p>
            
            {/* Tools Highlight */}
            <div className="mt-8">
              <h5 className="font-semibold text-gray-900 mb-4">Our Interactive Tools</h5>
              <div className="space-y-3">
                <Link href="/comparisons" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <span>📊</span> Compare Tools
                </Link>
                <Link href="/startup-tool-selector" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <span>🎯</span> Tool Finder
                </Link>
                <Link href="/blog/startup-tool-budget-calculator" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <span>💰</span> Budget Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Popular Comparisons */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Popular Comparisons</h4>
            <ul className="space-y-2">
              <li><Link href="/asana-vs-monday" className="text-gray-600 hover:text-gray-900">Asana vs Monday.com</Link></li>
              <li><Link href="/clickup-vs-notion" className="text-gray-600 hover:text-gray-900">ClickUp vs Notion</Link></li>
              <li><Link href="/trello-vs-asana" className="text-gray-600 hover:text-gray-900">Trello vs Asana</Link></li>
              <li><Link href="/monday-vs-clickup" className="text-gray-600 hover:text-gray-900">Monday vs ClickUp</Link></li>
              <li><Link href="/notion-vs-asana" className="text-gray-600 hover:text-gray-900">Notion vs Asana</Link></li>
              <li><Link href="/basecamp-vs-monday" className="text-gray-600 hover:text-gray-900">Basecamp vs Monday</Link></li>
            </ul>
          </div>

          {/* Top Tools */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Top Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/asana-alternatives" className="text-gray-600 hover:text-gray-900">Asana Review & Alternatives</Link></li>
              <li><Link href="/monday-alternatives" className="text-gray-600 hover:text-gray-900">Monday.com Review</Link></li>
              <li><Link href="/clickup-alternatives" className="text-gray-600 hover:text-gray-900">ClickUp Review</Link></li>
              <li><Link href="/notion-alternatives" className="text-gray-600 hover:text-gray-900">Notion Review</Link></li>
              <li><Link href="/trello-alternatives" className="text-gray-600 hover:text-gray-900">Trello Review</Link></li>
              <li><Link href="/basecamp-alternatives" className="text-gray-600 hover:text-gray-900">Basecamp Review</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/#tools" className="text-gray-600 hover:text-gray-900">Browse All Tools</Link></li>
              <li><Link href="/comparisons" className="text-gray-600 hover:text-gray-900">All Comparisons</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog & Guides</Link></li>
              <li><Link href="/startup-tool-selector" className="text-gray-600 hover:text-gray-900">Startup Tool Finder</Link></li>
              <li><Link href="/blog/startup-tool-budget-calculator" className="text-gray-600 hover:text-gray-900">Budget Calculator</Link></li>
              <li><Link href="/#features" className="text-gray-600 hover:text-gray-900">Why Choose Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Tools Banner */}
        <div className="bg-white rounded-xl p-8 mb-12 shadow-sm border">
          <h4 className="text-xl font-bold text-gray-900 mb-2">Need Help Choosing?</h4>
          <p className="text-gray-600 mb-6">Try our interactive tools to find your perfect solution</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/startup-tool-selector" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <span>🎯</span> Find My Tool
            </Link>
            <Link href="/blog/startup-tool-budget-calculator" className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 flex items-center gap-2">
              <span>💰</span> Calculate Budget
            </Link>
            <Link href="/comparisons" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:border-gray-400 flex items-center gap-2">
              <span>📊</span> Compare Tools
            </Link>
          </div>
        </div>

        {/* Disclosure & Legal */}
        <div className="border-t pt-8">
          <div className="mb-8">
            <h5 className="font-semibold text-gray-900 mb-4">Disclosure</h5>
            <p className="text-gray-600 text-sm">
              PM Compare participates in various affiliate marketing programs. 
              We may earn commissions when you click on links to products and services 
              from our site. This helps support our research and keep our content free. 
              All opinions, reviews, and comparisons remain completely unbiased and 
              based on thorough analysis.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-600 hover:text-gray-900 text-sm">Cookie Policy</Link>
              <Link href="/disclaimer" className="text-gray-600 hover:text-gray-900 text-sm">Disclaimer</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact Us</Link>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">&copy; {currentYear} PM Compare. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">
                Made with ❤️ for project managers and teams worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}