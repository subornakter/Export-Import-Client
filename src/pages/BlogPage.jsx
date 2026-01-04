import { motion } from 'framer-motion';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const allBlogPosts = [
  // Existing 8
  {
    id: 1,
    title: "Top Emerging Markets for Import in 2026",
    excerpt: "Discover the fastest-growing countries for sourcing products this year, including new opportunities in Southeast Asia and Africa.",
    date: "January 01, 2026",
    category: "Market Trends",
    image: "https://porta-stor.com/wp-content/uploads/2018/12/Global-Trade.jpg"
  },
  {
    id: 2,
    title: "How to Avoid Common Customs Delays in International Shipping",
    excerpt: "Expert tips on preparing proper documentation and avoiding costly hold-ups at borders.",
    date: "December 28, 2025",
    category: "Regulations",
    image: "https://www.usps.com/assets/images/business/customs-forms.jpg"
  },
  {
    id: 3,
    title: "Beginner's Guide to One-Click Importing Platforms",
    excerpt: "Learn how modern platforms like Alpha Global Trade make importing easier than ever before.",
    date: "December 20, 2025",
    category: "Import Tips",
    image: "https://www.global-e.com/wp-content/uploads/2024/03/Dashboard.svg"
  },
  {
    id: 4,
    title: "Success Story: How a Small Business Scaled Globally",
    excerpt: "Real story of an entrepreneur who grew from local seller to international exporter using smart sourcing.",
    date: "December 15, 2025",
    category: "Success Stories",
    image: "https://a.storyblok.com/f/102007/768x432/9dafac0110/strive-learning-network-event-helping-small-businesses-find-success-with-international-trade.jpg"
  },
  {
    id: 5,
    title: "2026 Global Trade Forecast: What Importers Need to Know",
    excerpt: "Key predictions on tariffs, supply chains, and rising product categories for the coming year.",
    date: "December 10, 2025",
    category: "Market Trends",
    image: "https://www.goldmansachs.com/images/insights/articles/global-macro-2026/outlooks-2026-rate-cut-graph.png"
  },
  {
    id: 6,
    title: "Best Export Strategies for New Sellers",
    excerpt: "Step-by-step guide to finding buyers, pricing competitively, and shipping safely overseas.",
    date: "December 05, 2025",
    category: "Export Guides",
    image: "https://static.wixstatic.com/media/a9cb5b_b18b2797ccb044b59ab0fb763c336921~mv2.webp"
  },
  {
    id: 7,
    title: "How E-Commerce is Changing Global Trade Forever",
    excerpt: "The rise of online marketplaces and direct-to-consumer importing trends in 2026.",
    date: "November 28, 2025",
    category: "Market Trends",
    image: "https://diplo-media.s3.eu-central-1.amazonaws.com/2022/02/Diplo-illustration-e-commerce-negotiations.png"
  },
  {
    id: 8,
    title: "From Local to Global: One Entrepreneur's Journey",
    excerpt: "Inspiring interview with a trader who built a million-dollar import business from scratch.",
    date: "November 20, 2025",
    category: "Success Stories",
    image: "https://thumbs.dreamstime.com/b/businessman-handshake-office-international-agreement-asian-caucasian-men-multi-ethnic-agreement-business-deal-181236467.jpg"
  },
  // New 10 posts
  {
    id: 9,
    title: "Sustainable Shipping: Eco-Friendly Practices for Global Traders",
    excerpt: "How to reduce carbon footprint while importing/exporting – new green logistics trends in 2026.",
    date: "January 02, 2026",
    category: "Regulations",
    image: "https://res.cloudinary.com/dws6h6h5x/image/upload/v1759309803/enpps2jti8veuhz34eoo.jpg"
  },
  {
    id: 10,
    title: "Rising Opportunities in Africa-Asia Trade Corridors",
    excerpt: "New trade agreements opening doors for importers in emerging African and Asian markets.",
    date: "December 30, 2025",
    category: "Market Trends",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQH1whOTwrAjVA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732667235592?e=2147483647&v=beta&t=QVB4Z6oQyLNRjscEFRVs6iQGSpeIxjp7fUofl9i5Ee0"
  },
  {
    id: 11,
    title: "How AI is Revolutionizing Customs Clearance",
    excerpt: "Automated documentation and prediction tools saving time and money for importers.",
    date: "December 25, 2025",
    category: "Import Tips",
    image: "https://cdn.prod.website-files.com/660e658d0cfb31720d8934d0/66bc68dd7454d459429d0006_USPS-Customs-Declaration.gif"
  },
  {
    id: 12,
    title: "Top 5 Products to Import from Southeast Asia in 2026",
    excerpt: "Electronics, textiles, and furniture – where to source and why now is the best time.",
    date: "December 18, 2025",
    category: "Import Tips",
    image: "https://www.westgulf.com/wp-content/uploads/2024/03/Shipping-Containers-The-Backbone-of-Global-Trade-and-Commerce.jpg"
  },
  {
    id: 13,
    title: "Building Trust with International Suppliers",
    excerpt: "Tips for verifying exporters, negotiating better terms, and avoiding scams.",
    date: "December 12, 2025",
    category: "Export Guides",
    image: "https://businessafricaonline.com/wp-content/uploads/2022/07/Trading-Easier.jpg"
  },
  {
    id: 14,
    title: "The Impact of New Tariffs on Global Supply Chains",
    excerpt: "What importers need to prepare for in 2026 – strategies to minimize costs.",
    date: "December 08, 2025",
    category: "Regulations",
    image: "https://www.goldmansachs.com/images/insights/articles/global-macro-2026/outlooks-2026-china-surplus-graph.png"
  },
  {
    id: 15,
    title: "How Blockchain is Securing International Payments",
    excerpt: "Faster, cheaper, and safer cross-border transactions for traders.",
    date: "December 03, 2025",
    category: "Market Trends",
    image: "https://www.coherentmarketinsights.com/images/research-%20methodology/cross-border-ecommerce-market-key-factors.webp"
  },
  {
    id: 16,
    title: "Case Study: Importing Luxury Goods from Europe",
    excerpt: "Step-by-step journey of a buyer sourcing watches and perfumes successfully.",
    date: "November 30, 2025",
    category: "Success Stories",
    image: "https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1972/2017/08/04022029/FourGlobalBusinessStrategies2.png"
  },
  {
    id: 17,
    title: "Preparing for Peak Season Shipping in 2026",
    excerpt: "Avoid delays during holidays – booking tips and carrier recommendations.",
    date: "November 25, 2025",
    category: "Import Tips",
    image: "https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2024/04/shutterstock_2304019105-scaled.jpg?fit=589%2C393&ssl=1"
  },
  {
    id: 18,
    title: "The Future of Direct-to-Consumer Global Trade",
    excerpt: "How brands are bypassing middlemen and selling directly worldwide.",
    date: "November 18, 2025",
    category: "Market Trends",
    image: "https://diplo-media.s3.eu-central-1.amazonaws.com/2022/02/Global-volume-of-data-Statista.png"
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = allBlogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero with gradient overlay */}
      <section className="relative bg-gradient-to-br from-pink-100 via-red-50 to-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-pink-200 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-6"
          >
            Alpha Global Trade Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
          >
            Expert insights, tips, and updates on global import-export and market trends.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
                      <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">{post.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-5 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 line-clamp-3">{post.excerpt}</p>
                    <a 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Read More <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))
            ) : (
              <p className="text-center text-gray-500 text-xl py-20">No posts found matching your search.</p>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Search Articles</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white border-0 rounded-2xl shadow-inner focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
                />
                <Search className="absolute left-4 top-5 text-pink-600" size={24} />
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Categories</h3>
              <ul className="space-y-4">
                {["Import Tips", "Export Guides", "Market Trends", "Regulations", "Success Stories"].map(cat => (
                  <li key={cat}>
                    <a href="#" className="block text-lg text-gray-700 hover:text-pink-600 hover:translate-x-2 transition-all">
                      {cat} <span className="float-right text-gray-400">(8)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h3>
              <ul className="space-y-6">
                {allBlogPosts.slice(0,4).map(post => (
                  <li key={post.id} className="flex gap-4">
                    <img src={post.image} alt="" className="w-24 h-24 object-cover rounded-2xl shadow-md" />
                    <div>
                      <h4 className="font-semibold text-gray-800 hover:text-pink-600 transition line-clamp-2">{post.title}</h4>
                      <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}