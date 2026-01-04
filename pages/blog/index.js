// pages/blog/index.js - Updated Version
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '/styles/BlogIndex.module.css'
import NewsletterSignup from '../../components/NewsletterSignup'

// Updated blog posts array with missing posts
const blogPosts = [
  {
    slug: 'project-management-for-startups',
    title: '🚀 Project Management for Startups: Best Tools for Early-Stage Teams 2026',
    excerpt: 'Complete guide to project management tools for startups. Compare ClickUp, Notion, Monday.com and find the perfect tool for your stage, budget, and growth plans.',
    date: '2026-03-20',
    readTime: '10 min read',
    category: 'Startup',
    color: '#7B68EE',
    featured: true,
    trending: true,
    views: '2.4K',
    emoji: '🚀',
    specialTag: 'HIGH DEMAND'
  },
  {
    slug: 'scaling-tools-startup-growth',
    title: 'Scaling Project Management Tools: How to Transition as Your Startup Grows',
    excerpt: 'Learn when and how to upgrade from simple tools to robust project management platforms as your team expands.',
    date: '2026-03-18',
    readTime: '8 min read',
    category: 'Startup',
    color: '#8A2BE2',
    featured: true,
    trending: true,
    views: '1.8K',
    emoji: '📈',
    specialTag: 'GROWTH GUIDE'
  },
  {
    slug: 'clickup-vs-notion',
    title: 'ClickUp vs Notion 2026: Complete Comparison for Project Management',
    excerpt: 'Detailed comparison of ClickUp vs Notion for project management, team collaboration, and productivity.',
    date: '2026-03-16',
    readTime: '12 min read',
    category: 'Comparison',
    color: '#667eea',
    featured: true,
    views: '3.2K',
    emoji: '⚖️'
  },
  {
    slug: 'team-missing-deadlines',
    title: 'Team Missing Deadlines? These Project Management Tools Will Fix It',
    excerpt: 'Discover how the right software can transform your team\'s ability to meet deadlines consistently.',
    date: '2026-03-15',
    readTime: '8 min read',
    category: 'Productivity',
    color: '#FF6363',
    featured: true,
    views: '1.8K',
    emoji: '⚡'
  },
  {
    slug: 'free-project-management-tools',
    title: 'Best Free Project Management Software 2026 (17 Tools Compared)',
    excerpt: 'Complete comparison of free project management tools for teams of all sizes and budgets.',
    date: '2026-03-10',
    readTime: '12 min read',
    category: 'Tools',
    color: '#667eea',
    featured: true,
    views: '3.2K',
    emoji: '🆓'
  },
  {
    slug: 'project-management-for-agencies',
    title: 'Project Management for Agencies: Best Tools & Strategies 2026',
    excerpt: 'Client portals, time tracking, and profitability tools for marketing, creative, and digital agencies.',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Agency',
    color: '#1E88E5',
    featured: true,
    views: '1.5K',
    emoji: '🏢'
  },
  {
    slug: 'time-tracking-tools',
    title: 'Time Tracking Tools for Project Management: Integrated vs Standalone 2026',
    excerpt: 'Compare ClickUp, Teamwork, Toggl, Harvest and choose between integrated or standalone time tracking.',
    date: '2026-03-01',
    readTime: '9 min read',
    category: 'Productivity',
    color: '#EF6C00',
    featured: false,
    views: '1.2K',
    emoji: '⏱️'
  },
  {
    slug: 'gantt-chart-software',
    title: 'Gantt Chart Software: 10 Best Tools for Visual Project Planning 2026',
    excerpt: 'Compare Monday.com, ClickUp, Asana, Wrike, and other tools for visual project timelines and planning.',
    date: '2026-02-25',
    readTime: '11 min read',
    category: 'Visual Planning',
    color: '#1565C0',
    featured: false,
    views: '900',
    emoji: '📊'
  },
  {
    slug: 'remote-team-collaboration',
    title: 'Best Project Management Tools for Remote Teams 2026',
    excerpt: 'Essential features and tools for effective remote team collaboration and project management.',
    date: '2026-02-20',
    readTime: '9 min read',
    category: 'Remote Work',
    color: '#10B981',
    featured: false,
    views: '1.1K',
    emoji: '🌍'
  },
  {
    slug: 'saas-tools-comparison',
    title: 'SaaS Project Management Tools: Monthly vs Annual Costs Analysis',
    excerpt: 'Cost-benefit analysis of different pricing models for project management software.',
    date: '2026-02-15',
    readTime: '7 min read',
    category: 'Cost Analysis',
    color: '#8B5CF6',
    featured: false,
    views: '850',
    emoji: '💰'
  }
]

// Updated categories with new counts
const categories = [
  { name: 'All Articles', count: 10, icon: '📚' },
  { name: 'Startup', count: 2, icon: '🚀' },
  { name: 'Tools', count: 2, icon: '🛠️' },
  { name: 'Productivity', count: 2, icon: '⚡' },
  { name: 'Comparison', count: 1, icon: '⚖️' },
  { name: 'Agency', count: 1, icon: '🏢' },
  { name: 'Visual Planning', count: 1, icon: '📊' },
  { name: 'Remote Work', count: 1, icon: '🌍' },
  { name: 'Cost Analysis', count: 1, icon: '💰' }
]

// Tools showcase data
const featuredTools = [
  { id: 'comparisons', name: 'Tool Comparisons', icon: '📊', description: 'Compare any two project management tools side-by-side', link: '/comparisons', color: '#667eea' },
  { id: 'selector', name: 'Startup Tool Finder', icon: '🎯', description: 'Get personalized tool recommendations for your startup', link: '/startup-tool-selector', color: '#7B68EE' },
  { id: 'calculator', name: 'Budget Calculator', icon: '💰', description: 'Calculate and compare tool costs for your team', link: '/blog/startup-tool-budget-calculator', color: '#10B981' }
]

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const router = useRouter()

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmailSubmitted(true)
    setTimeout(() => {
      setEmailSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'All Articles' && post.category !== selectedCategory) {
      return false
    }
    
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    
    return true
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 4)
  const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 3)

  return (
    <>
      <Head>
        <title>PM Compare Blog - Project Management Insights, Tools & Comparisons 2026</title>
        <meta name="description" content="Expert insights, tool comparisons, and guides on project management software. Learn how to choose and implement the right tools for your team." />
        <meta name="keywords" content="project management blog, pm tools comparison, team productivity, software reviews, project management tips, startup tools" />
        <meta property="og:title" content="PM Compare Blog - Project Management Insights & Tool Comparisons 2026" />
        <meta property="og:description" content="Expert insights on project management tools, team productivity, and software comparisons for startups and teams." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.blogContainer}>
        
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span> / </span>
          <span style={{ color: '#667eea', fontWeight: '500' }}>Blog</span>
        </nav>

        {/* Hero Header */}
        <header className={styles.heroHeader}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              PM Compare <span className={styles.highlight}>Blog</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Expert insights, detailed comparisons, and practical guides on project management software.
              Helping teams make informed decisions since 2023.
            </p>
            
            {/* Hero Stats */}
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Articles</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15K+</span>
                <span className={styles.statLabel}>Monthly Readers</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Tools Compared</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2026</span>
                <span className={styles.statLabel}>Updated</span>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="🔍 Search blog articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
          </div>
        </header>

        {/* Featured Tools Section */}
        <section className={styles.toolsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Helpful Tools</h2>
            <p className={styles.sectionSubtitle}>Try our interactive tools to find the perfect solution</p>
          </div>
          
          <div className={styles.toolsGrid}>
            {featuredTools.map(tool => (
              <div 
                key={tool.id}
                className={styles.toolCard}
                style={{ borderTop: `4px solid ${tool.color}` }}
                onClick={() => router.push(tool.link)}
              >
                <div className={styles.toolIcon} style={{ color: tool.color }}>
                  {tool.icon}
                </div>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolDescription}>{tool.description}</p>
                <button className={styles.toolButton} style={{ background: tool.color }}>
                  Try Tool →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SPECIAL HIGHLIGHT: Startup Articles Banner */}
        <section className={styles.startupBannerSection}>
          <div className={styles.startupBanner}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerTags}>
                <span className={styles.trendingTag}>🚀 STARTUP FOCUS</span>
                <span className={styles.highDemandTag}>🔥 HIGH DEMAND</span>
              </div>
              
              <h2 className={styles.bannerTitle}>
                Startup Project Management Guides
              </h2>
              
              <p className={styles.bannerDescription}>
                Everything startups need to know about choosing, implementing, and scaling 
                project management tools as they grow.
              </p>
              
              <div className={styles.bannerButtons}>
                <Link 
                  href="/blog/project-management-for-startups"
                  className={styles.primaryButton}
                >
                  Read Complete Guide →
                </Link>
                
                <Link 
                  href="/blog/scaling-tools-startup-growth"
                  className={styles.secondaryButton}
                >
                  Scaling Guide →
                </Link>
              </div>
            </div>
            
            <div className={styles.bannerImage}>
              <div className={styles.floatingRocket}>🚀</div>
              <div className={styles.floatingChart}>📈</div>
              <div className={styles.floatingTool}>🛠️</div>
            </div>
          </div>
        </section>

        {/* Categories with Icons */}
        <div className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>
            Browse by Category
          </h2>
          
          <div className={styles.categoriesGrid}>
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.name ? styles.categoryButtonActive : ''
                } ${category.name === 'Startup' && selectedCategory === category.name ? styles.startupActive : ''}`}
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
                <span className={styles.categoryCount}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Articles */}
        {searchQuery === '' && selectedCategory === 'All Articles' && (
          <section className={styles.trendingSection}>
            <h2 className={styles.sectionTitle}>
              🔥 Trending Now
            </h2>
            
            <div className={styles.trendingGrid}>
              {trendingPosts.map((post, index) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.trendingLink}
                >
                  <div className={styles.trendingCard}>
                    <div className={styles.trendingBadge}>
                      #{index + 1} Trending
                    </div>
                    
                    <div className={styles.trendingContent}>
                      <div className={styles.trendingMeta}>
                        <div className={styles.trendingCategory} style={{ 
                          background: post.category === 'Startup' ? '#7B68EE20' : '#f7fafc',
                          color: post.category === 'Startup' ? '#7B68EE' : post.color 
                        }}>
                          {post.emoji} {post.category}
                        </div>
                        <span className={styles.trendingDate}>{post.date}</span>
                      </div>
                      
                      <h3 className={styles.trendingTitle}>{post.title}</h3>
                      
                      <p className={styles.trendingExcerpt}>{post.excerpt}</p>
                      
                      <div className={styles.trendingFooter}>
                        <span className={styles.readMore}>
                          Read Article →
                        </span>
                        <span className={styles.searchVolume}>
                          {post.views} searches/mo
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Featured Posts */}
        {searchQuery === '' && selectedCategory === 'All Articles' && (
          <section className={styles.featuredSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                📚 Featured Articles
              </h2>
              <p className={styles.sectionSubtitle}>In-depth guides and detailed comparisons</p>
            </div>
            
            <div className={styles.featuredGrid}>
              {featuredPosts.map(post => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.featuredLink}
                >
                  <div className={styles.featuredCard}>
                    <div className={styles.featuredHeader} style={{ 
                      background: post.category === 'Startup' 
                        ? 'linear-gradient(135deg, #7B68EE 0%, #5D54A4 100%)'
                        : `linear-gradient(135deg, ${post.color} 0%, ${post.color}80 100%)`
                    }}>
                      <div className={styles.featuredEmoji}>
                        {post.emoji}
                      </div>
                      {post.slug === 'clickup-vs-notion' && (
                        <div className={styles.comparisonBadge}>
                          ⚖️ Comparison
                        </div>
                      )}
                    </div>
                    
                    <div className={styles.featuredContent}>
                      <div className={styles.featuredMeta}>
                        <div className={styles.categoryBadge} style={{ 
                          background: post.category === 'Startup' ? '#7B68EE20' : '#f7fafc',
                          color: post.category === 'Startup' ? '#7B68EE' : post.color
                        }}>
                          {post.category}
                        </div>
                        <span className={styles.featuredDate}>
                          📅 {post.date} • {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className={styles.featuredTitle}>
                        {post.title}
                      </h3>
                      
                      <p className={styles.featuredExcerpt}>
                        {post.excerpt}
                      </p>
                      
                      <div className={styles.featuredFooter}>
                        <span className={styles.readMore}>
                          Read Full Article →
                        </span>
                        {post.views && (
                          <span className={styles.viewCount}>
                            👁️ {post.views}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className={styles.allPostsSection}>
          <div className={styles.allPostsHeader}>
            <h2 className={styles.sectionTitle}>
              {searchQuery ? `Search Results for "${searchQuery}"` : 
               selectedCategory === 'All Articles' ? 'All Articles' : `${selectedCategory} Articles`}
              <span className={styles.postCount}>
                ({filteredPosts.length} articles)
              </span>
            </h2>
            
            {selectedCategory === 'All Articles' && (
              <Link 
                href="/startup-tool-selector"
                className={styles.startupCtaButton}
              >
                🎯 Find Your Tool
              </Link>
            )}
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3 className={styles.noResultsTitle}>No articles found</h3>
              <p className={styles.noResultsText}>
                Try a different search term or browse all categories
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Articles')
                }}
                className={styles.clearButton}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={styles.postsList}>
              {filteredPosts.map((post, index) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.postLink}
                >
                  <div className={styles.postCard}>
                    {index < 3 && selectedCategory === 'All Articles' && (
                      <div className={styles.numberBadge}>
                        #{index + 1}
                      </div>
                    )}
                    
                    {post.slug === 'clickup-vs-notion' && (
                      <div className={styles.comparisonIndicator}>
                        ⚖️ Comparison Article
                      </div>
                    )}
                    
                    <div className={styles.postCardContent}>
                      <div className={styles.postMeta}>
                        <div className={styles.postCategory} style={{ 
                          background: post.category === 'Startup' ? '#7B68EE20' : '#f7fafc',
                          color: post.category === 'Startup' ? '#7B68EE' : post.color 
                        }}>
                          {post.emoji || (post.category === 'Startup' ? '🚀' : '📝')} {post.category}
                        </div>
                        <span className={styles.postDate}>
                          {post.date} • {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className={styles.postTitle}>
                        {post.title}
                      </h3>
                      
                      <p className={styles.postExcerpt}>
                        {post.excerpt}
                      </p>
                      
                      <div className={styles.postFooter}>
                        <span className={styles.readPostLink}>
                          Read Full Article →
                        </span>
                        
                        <div className={styles.postStats}>
                          {post.views && (
                            <span className={styles.searchVolume}>
                              {post.views} views
                            </span>
                          )}
                          {post.featured && (
                            <span className={styles.featuredTag}>
                              Featured
                            </span>
                          )}
                          {post.slug === 'project-management-for-startups' && (
                            <span className={styles.trendingTagSmall}>
                              ⭐ Trending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section id="newsletter-section" className={styles.newsletterSection}>
          <NewsletterSignup variant="blog" />
        </section>

        {/* Popular Topics */}
        <section className={styles.topicsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              📚 Popular Topics
            </h2>
            <p className={styles.sectionSubtitle}>Explore our most-read categories</p>
          </div>
          
          <div className={styles.topicsGrid}>
            {/* Startup Card - Enhanced */}
            <Link href="/blog?category=Startup" className={styles.topicLink}>
              <div className={styles.startupTopicCard}>
                <div className={styles.topicPattern}>🚀</div>
                <div className={styles.topicEmoji}>🚀</div>
                <h3 className={styles.topicTitle}>
                  Startup Tools
                </h3>
                <p className={styles.topicDescription}>
                  Tools and strategies for early-stage companies and founders
                </p>
                <div className={styles.topicBadge}>
                  MOST POPULAR
                </div>
              </div>
            </Link>
            
            {/* Comparison Card */}
            <Link href="/blog?category=Comparison" className={styles.topicLink}>
              <div className={styles.topicCard} style={{ background: '#667eea10', color: '#667eea', borderColor: '#667eea30' }}>
                <div className={styles.topicEmoji}>⚖️</div>
                <h3 className={styles.topicTitle}>Tool Comparisons</h3>
                <p className={styles.topicDescription}>
                  Detailed comparisons of project management software
                </p>
              </div>
            </Link>
            
            {/* Productivity Card */}
            <Link href="/blog?category=Productivity" className={styles.topicLink}>
              <div className={styles.topicCard} style={{ background: '#10b98110', color: '#10b981', borderColor: '#10b98130' }}>
                <div className={styles.topicEmoji}>⚡</div>
                <h3 className={styles.topicTitle}>Productivity Tips</h3>
                <p className={styles.topicDescription}>
                  Strategies to improve team efficiency and output
                </p>
              </div>
            </Link>
            
            {/* Tools Card */}
            <Link href="/blog?category=Tools" className={styles.topicLink}>
              <div className={styles.topicCard} style={{ background: '#8b5cf610', color: '#8b5cf6', borderColor: '#8b5cf630' }}>
                <div className={styles.topicEmoji}>🛠️</div>
                <h3 className={styles.topicTitle}>Software Tools</h3>
                <p className={styles.topicDescription}>
                  Reviews and guides for specific project management tools
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Posts */}
        <section className={styles.recentSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              📖 Recent Articles
            </h2>
            <Link href="/blog" className={styles.viewAllLink}>
              View All Articles →
            </Link>
          </div>
          
          <div className={styles.recentGrid}>
            {recentPosts.map(post => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.recentLink}
              >
                <div className={styles.recentCard}>
                  <div className={styles.recentMeta}>
                    <div className={styles.recentCategory} style={{ 
                      background: post.category === 'Startup' ? '#7B68EE20' : '#f7fafc',
                      color: post.category === 'Startup' ? '#7B68EE' : '#4a5568'
                    }}>
                      {post.category}
                    </div>
                    <span className={styles.recentDate}>
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className={styles.recentTitle}>
                    {post.title}
                  </h3>
                  
                  <p className={styles.recentExcerpt}>
                    {post.excerpt.substring(0, 100)}...
                  </p>
                  
                  <div className={styles.recentReadMore}>
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Need Help Choosing the Right Tool?
            </h2>
            
            <p className={styles.ctaDescription}>
              Use our interactive tools to find the perfect project management solution for your team.
            </p>
            
            <div className={styles.ctaButtons}>
              <button 
                className={styles.ctaButtonPrimary}
                onClick={() => router.push('/startup-tool-selector')}
              >
                🎯 Find My Tool
              </button>
              
              <button 
                className={styles.ctaButtonSecondary}
                onClick={() => router.push('/blog/startup-tool-budget-calculator')}
              >
                💰 Calculate Budget
              </button>
              
              <button 
                className={styles.ctaButtonOutline}
                onClick={() => router.push('/comparisons')}
              >
                📊 Compare Tools
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>
            About PM Compare Blog
          </h2>
          
          <p className={styles.aboutDescription}>
            We provide unbiased, detailed comparisons of project management tools to help teams make 
            informed decisions. Our content is based on hands-on testing, user feedback, and continuous 
            market research. Trusted by thousands of teams worldwide.
          </p>
          
          <div className={styles.aboutButtons}>
            <Link 
              href="/about"
              className={styles.aboutButton}
            >
              About Us
            </Link>
            
            <Link 
              href="/contact"
              className={styles.contactButton}
            >
              Contact Us
            </Link>
            
            <button 
              onClick={() => {
                const newsletterSection = document.getElementById('newsletter-section')
                if (newsletterSection) {
                  newsletterSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={styles.subscribeButton}
            >
              📬 Subscribe
            </button>
          </div>
        </section>

      </div>
    </>
  )
}