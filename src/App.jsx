import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Comprehensive programs list from Multipolitan
  const allPrograms = [
    // Citizenship by Investment
    { id: 1, country: 'Antigua & Barbuda', flag: '🇦🇬', type: 'Citizenship by Investment', amount: 'USD 230,000', category: 'citizenship', description: 'Known for its 365 beaches, offers a vibrant lifestyle and an accessible path to citizenship.' },
    { id: 2, country: 'Austria', flag: '🇦🇹', type: 'Citizenship by Investment', amount: 'EUR 3,000,000', category: 'citizenship', description: 'Renowned for its cultural heritage and stunning alpine landscapes, provides a prestigious path to citizenship.' },
    { id: 3, country: 'Dominica', flag: '🇩🇲', type: 'Citizenship by Investment', amount: 'USD 200,000', category: 'citizenship', description: 'Known for its stunning landscapes and vibrant culture, offers global benefits.' },
    { id: 4, country: 'Egypt', flag: '🇪🇬', type: 'Citizenship by Investment', amount: 'USD 250,000', category: 'citizenship', description: 'Famous for its ancient heritage and modern strategic importance, offers a gateway to the Middle East and Africa.' },
    { id: 5, country: 'Jordan', flag: '🇯🇴', type: 'Citizenship by Investment', amount: 'USD 400,000', category: 'citizenship', description: 'Renowned for its rich cultural heritage and stunning landscapes, offers a unique pathway to citizenship.' },
    { id: 6, country: 'Grenada', flag: '🇬🇩', type: 'Citizenship by Investment', amount: 'USD 235,000', category: 'citizenship', description: 'Known as the "Spice Isle" of the Caribbean, offers stunning landscapes and a gateway to global mobility.' },
    { id: 7, country: 'Malta', flag: '🇲🇹', type: 'Citizenship by Investment', amount: 'EUR 690,000', category: 'citizenship', description: 'Nestled in the Mediterranean, offers a seamless path to European citizenship through the MEIN program.' },
    { id: 8, country: 'St. Kitts & Nevis', flag: '🇰🇳', type: 'Citizenship by Investment', amount: 'USD 250,000', category: 'citizenship', description: 'Offers investors a fast track to citizenship through its renowned CBI program.' },
    { id: 9, country: 'St. Lucia', flag: '🇱🇨', type: 'Citizenship by Investment', amount: 'USD 240,000', category: 'citizenship', description: 'Known for its beauty, tourism, and investment-friendly policies.' },
    { id: 10, country: 'Turkey', flag: '🇹🇷', type: 'Citizenship by Investment', amount: 'USD 400,000', category: 'citizenship', description: 'Situated at the crossroads of East and West, offers a fast and efficient path to citizenship.' },
    { id: 11, country: 'Vanuatu', flag: '🇻🇺', type: 'Citizenship by Investment', amount: 'USD 130,000', category: 'citizenship', description: 'Pacific island nation featuring diverse landscapes and rich cultural heritage.' },
    
    // Citizenship by Descent
    { id: 12, country: 'Austria', flag: '🇦🇹', type: 'Citizenship by Descent', amount: 'EUR 40,000', category: 'citizenship', description: 'For descendants of those who were persecuted during the Nazi regime.' },
    { id: 13, country: 'Italy', flag: '🇮🇹', type: 'Citizenship by Descent', amount: 'EUR 15,000', category: 'citizenship', description: 'For individuals with Italian ancestry.' },
    { id: 14, country: 'Portugal', flag: '🇵🇹', type: 'Citizenship by Descent', amount: 'EUR 12,000', category: 'citizenship', description: 'For individuals with Portuguese ancestry.' },
    
    // Golden Visa / Residence by Investment
    { id: 15, country: 'Cyprus', flag: '🇨🇾', type: 'Residence by Investment', amount: 'EUR 300,000', category: 'residency', description: 'Offers fast permanent residency in Europe with access to the EU and Mediterranean lifestyle.' },
    { id: 16, country: 'France', flag: '🇫🇷', type: 'Residence by Investment', amount: 'EUR 500,000', category: 'residency', description: 'Provides a prime opportunity for high-net-worth individuals to gain residency.' },
    { id: 17, country: 'Latvia', flag: '🇱🇻', type: 'Golden Visa', amount: 'EUR 250,000', category: 'residency', description: 'Gain residency and enjoy visa-free access to the Schengen Area.' },
    { id: 18, country: 'Greece', flag: '🇬🇷', type: 'Golden Visa', amount: 'EUR 250,000', category: 'residency', description: 'Offers stunning landscapes, rich history, Schengen access and a stable economy.' },
    { id: 19, country: 'Hong Kong', flag: '🇭🇰', type: 'Residence by Investment', amount: 'HKD 30,000,000', category: 'residency', description: 'A bustling financial hub in East Asia, offers vibrant culture and great opportunities.' },
    { id: 20, country: 'Hungary', flag: '🇭🇺', type: 'Golden Visa', amount: 'EUR 250,000', category: 'residency', description: 'In the heart of Europe, offers rich culture, stunning architecture and access to the Schengen Zone.' },
    { id: 21, country: 'Paraguay', flag: '🇵🇾', type: 'Residence by Investment', amount: 'USD 70,000', category: 'residency', description: 'Offers an attractive residency program in one of South America\'s most stable countries.' },
    { id: 22, country: 'Portugal', flag: '🇵🇹', type: 'Golden Visa', amount: 'EUR 280,000', category: 'residency', description: 'Offers a perfect blend of lifestyle, Schengen access, and investment opportunities.' },
    { id: 23, country: 'Malta', flag: '🇲🇹', type: 'Permanent Residence Program', amount: 'EUR 150,000', category: 'residency', description: 'Secure Malta residency with investment, enjoy Schengen visa-free travel and favorable taxes.' },
    { id: 24, country: 'Mauritius', flag: '🇲🇺', type: 'Residence by Investment', amount: 'USD 375,000', category: 'residency', description: 'A paradise known for its beaches, strong economy, and tax incentives.' },
    { id: 25, country: 'Montenegro', flag: '🇲🇪', type: 'Residence by Investment', amount: 'EUR 250,000', category: 'residency', description: 'Secure residency through a fast and efficient investment via real estate acquisition.' },
    { id: 26, country: 'Singapore', flag: '🇸🇬', type: 'Residence by Investment', amount: 'SGD 2,500,000', category: 'residency', description: 'Ranks among Asia\'s best cities with top infrastructure and high standard of living.' },
    { id: 27, country: 'Spain', flag: '🇪🇸', type: 'Golden Visa', amount: 'EUR 500,000', category: 'residency', description: 'Offers vibrant culture, a sunny climate, Schengen access, and an attractive residency program.' },
    
    // Business/Investor Visas
    { id: 28, country: 'Bulgaria', flag: '🇧🇬', type: 'Business Set-Up Visa', amount: 'EUR 50,000', category: 'visa', description: 'Establish your business benefiting from its growing economy, low taxes, and strategic location in Europe.' },
    { id: 29, country: 'Denmark', flag: '🇩🇰', type: 'Startup Visa', amount: 'EUR 50,000', category: 'visa', description: 'Establish your innovative business with the Denmark Start-up Visa for non-EU entrepreneurs.' },
    { id: 30, country: 'Singapore', flag: '🇸🇬', type: 'Business Set-Up Visa', amount: 'USD 10,000', category: 'visa', description: 'Establishing a business offers access to a stable, business-friendly environment.' },
    { id: 31, country: 'United Kingdom', flag: '🇬🇧', type: 'Business Expansion Visa', amount: 'GBP 20,000', category: 'visa', description: 'Expand your business into the UK by establishing a branch of your overseas company.' },
    { id: 32, country: 'UAE', flag: '🇦🇪', type: 'Business Visa', amount: 'AED 100,000', category: 'visa', description: 'Secure residency and establish your business in one of the world\'s fastest-growing economies.' },
    { id: 33, country: 'Japan', flag: '🇯🇵', type: 'Active Investor Visa', amount: 'JPY 5,000,000', category: 'visa', description: 'Start your business with the Active Investor Visa, a gateway to Asia\'s thriving economy.' },
    { id: 34, country: 'Canada', flag: '🇨🇦', type: 'Startup Visa', amount: 'CAD 200,000', category: 'visa', description: 'The Canada Startup Visa Program helps immigrant entrepreneurs establish innovative businesses.' },
    
    // Special Programs
    { id: 35, country: 'Thailand', flag: '🇹🇭', type: 'Privilege Residence Program', amount: 'USD 600,000', category: 'residency', description: 'Privilege Residence Program offering a range of residency options for high-net-worth individuals.' },
    { id: 36, country: 'Thailand', flag: '🇹🇭', type: 'LTR Visa', amount: 'USD 80,000', category: 'visa', description: 'Long-Term Resident Visa offers residency with flexible options and exclusive benefits.' },
    
    // US Programs
    { id: 37, country: 'United States', flag: '🇺🇸', type: 'EB-1 Visa', amount: 'USD 50,000', category: 'visa', description: 'EB-1 Extraordinary Ability visa offers top professionals a fast path to U.S. residency.' },
    { id: 38, country: 'United States', flag: '🇺🇸', type: 'EB-2 NIW Visa', amount: 'USD 30,000', category: 'visa', description: 'EB-2 NIW visa offers skilled professionals with advanced degrees a fast path to U.S. residency.' },
    { id: 39, country: 'United States', flag: '🇺🇸', type: 'EB-5 Visa', amount: 'USD 800,000', category: 'visa', description: 'EB-5 Immigrant Investor program offers U.S. residency through investment.' }
  ];

  const filteredPrograms = activeFilter === 'all' 
    ? allPrograms 
    : allPrograms.filter(program => program.category === activeFilter);

  const citizenshipCount = allPrograms.filter(p => p.category === 'citizenship').length;
  const residencyCount = allPrograms.filter(p => p.category === 'residency').length;
  const visaCount = allPrograms.filter(p => p.category === 'visa').length;

  const blogPosts = [
    {
      id: 1,
      title: 'Portugal Golden Visa Program: 2025 Updates and Investment Opportunities',
      excerpt: 'Discover the latest changes to Portugal\'s Golden Visa program and how they affect investment opportunities for global citizens.',
      date: '6/10/2025',
      readTime: '5 min read',
      category: 'Program Updates',
      icon: '🇵🇹'
    },
    {
      id: 2,
      title: 'Caribbean Citizenship Programs: A Comprehensive Comparison',
      excerpt: 'Compare the leading Caribbean citizenship by investment programs including Dominica, St. Kitts, and Antigua & Barbuda.',
      date: '6/5/2025',
      readTime: '8 min read',
      category: 'Guides',
      icon: '🏝️'
    },
    {
      id: 3,
      title: 'Tax Benefits of Second Citizenship: What You Need to Know',
      excerpt: 'Understanding the tax implications and benefits of obtaining a second citizenship through investment programs.',
      date: '5/28/2025',
      readTime: '6 min read',
      category: 'Tax Planning',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Malta Citizenship by Investment: Complete Guide for 2025',
      excerpt: 'Everything you need to know about Malta\'s MEIN program and the path to European citizenship.',
      date: '5/20/2025',
      readTime: '7 min read',
      category: 'Program Guides',
      icon: '🇲🇹'
    },
    {
      id: 5,
      title: 'Digital Nomad Visas vs Citizenship by Investment',
      excerpt: 'Comparing the benefits and limitations of digital nomad visas versus full citizenship programs.',
      date: '5/15/2025',
      readTime: '5 min read',
      category: 'Comparison',
      icon: '💻'
    },
    {
      id: 6,
      title: 'Due Diligence in Citizenship by Investment Programs',
      excerpt: 'Understanding the background check process and requirements for citizenship by investment applications.',
      date: '5/10/2025',
      readTime: '4 min read',
      category: 'Process',
      icon: '🔍'
    }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'EU Announces New Regulations for Golden Visa Programs',
      excerpt: 'The European Union has introduced stricter due diligence requirements for citizenship by investment programs across member states.',
      date: '6/12/2025',
      readTime: '3 min read',
      category: 'Regulatory Updates'
    },
    {
      id: 2,
      title: 'Caribbean CBI Programs See Record Investment Levels',
      excerpt: 'Investment levels in Caribbean citizenship programs reached an all-time high in Q1 2025, driven by increased global mobility needs.',
      date: '6/8/2025',
      readTime: '4 min read',
      category: 'Market News'
    },
    {
      id: 3,
      title: 'Portugal Updates Golden Visa Investment Thresholds',
      excerpt: 'Portugal has revised its Golden Visa program with new investment thresholds and expanded qualifying investment categories.',
      date: '6/1/2025',
      readTime: '5 min read',
      category: 'Program Updates'
    },
    {
      id: 4,
      title: 'Malta Citizenship Program Introduces Digital Application System',
      excerpt: 'Malta\'s citizenship by investment program now features a streamlined digital application system for enhanced efficiency.',
      date: '5/25/2025',
      readTime: '3 min read',
      category: 'Technology'
    }
  ];

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Get Expert Consultation</h3>
          <button 
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country of Residence</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select your country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>France</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Citizenship Programs</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select preferred programs</option>
              <option>Malta Citizenship by Investment</option>
              <option>Portugal Golden Visa</option>
              <option>Antigua & Barbuda Citizenship</option>
              <option>Grenada Citizenship</option>
              <option>St. Kitts & Nevis</option>
              <option>Turkey Citizenship</option>
              <option>Multiple Programs</option>
              <option>Not Sure - Need Guidance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Investment Budget Range</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select budget range</option>
              <option>$200,000 - $300,000</option>
              <option>$300,000 - $500,000</option>
              <option>$500,000 - $1,000,000</option>
              <option>$1,000,000 - $2,000,000</option>
              <option>$2,000,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timeline for Application</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select timeline</option>
              <option>Immediate (1-3 months)</option>
              <option>Short-term (3-6 months)</option>
              <option>Medium-term (6-12 months)</option>
              <option>Long-term (12+ months)</option>
              <option>Just exploring options</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brief Message/Requirements</label>
            <textarea rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your specific goals, family situation, or any questions..."></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
            Schedule Free Consultation
          </button>
          <p className="text-xs text-gray-500 text-center">
            Your information is secure and confidential. We'll contact you within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );

  if (currentView === 'blog') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <span className="text-gray-900">CitizenPaths</span>
              <span className="text-orange-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, program updates, and comprehensive guides for citizenship by investment
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                      {post.icon} {post.category}
                    </span>
                    <div className="text-sm text-gray-500">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {showModal && <ContactModal />}
      </div>
    );
  }

  if (currentView === 'news') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <span className="text-gray-900">Latest</span>
              <span className="text-orange-600">News</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments in citizenship by investment programs worldwide
            </p>
          </div>

          <div className="grid gap-6">
            {newsArticles.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                    <div className="text-sm text-gray-500">
                      {article.date} • {article.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                    Read Full Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {showModal && <ContactModal />}
      </div>
    );
  }

  if (currentView === 'programs') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment <span className="text-orange-600">Programs</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of citizenship by investment, residency, and visa programs worldwide
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              All Programs ({allPrograms.length})
            </button>
            <button 
              onClick={() => setActiveFilter('citizenship')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === 'citizenship' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              Citizenship ({citizenshipCount})
            </button>
            <button 
              onClick={() => setActiveFilter('residency')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === 'residency' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              Residency ({residencyCount})
            </button>
            <button 
              onClick={() => setActiveFilter('visa')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === 'visa' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              Visas ({visaCount})
            </button>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{program.flag}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{program.country}</h3>
                    <span className="text-lg font-bold text-orange-600">{program.amount}</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{program.type}</p>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && <ContactModal />}
      </div>
    );
  }

  if (currentView === 'citizenship-investment') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Citizenship by <span className="text-orange-600">Investment</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure a second passport through strategic investment in carefully selected programs worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPrograms.filter(p => p.category === 'citizenship').map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{program.flag}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{program.country}</h3>
                    <span className="text-lg font-bold text-orange-600">{program.amount}</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{program.type}</p>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && <ContactModal />}
      </div>
    );
  }

  if (currentView === 'golden-visa') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Golden Visa & <span className="text-orange-600">Residency Programs</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtain residency and enjoy visa-free travel through strategic investment in premium destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPrograms.filter(p => p.category === 'residency').map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{program.flag}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{program.country}</h3>
                    <span className="text-lg font-bold text-orange-600">{program.amount}</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{program.type}</p>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && <ContactModal />}
      </div>
    );
  }

  if (currentView === 'business-visas') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Business & <span className="text-orange-600">Investor Visas</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Establish your business and secure visas in strategic global markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPrograms.filter(p => p.category === 'visa').map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{program.flag}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{program.country}</h3>
                    <span className="text-lg font-bold text-orange-600">{program.amount}</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{program.type}</p>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showModal && <ContactModal />}
      </div>
    );
  }

  // Home view
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setCurrentView('home')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-bold text-gray-900">CitizenPaths</span>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setShowModal(true)} className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors font-medium">LEARN MORE</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Unlock Global Citizenship<br />
            <span className="text-orange-600">Through Strategic Investment</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert guidance for high-net-worth investors seeking citizenship by investment. Trusted by 500+ successful clients worldwide.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-sm">
            <div className="flex items-center">
              <span className="text-orange-400 text-2xl mr-2">✓</span>
              <span>500+ Successful Applications</span>
            </div>
            <div className="flex items-center">
              <span className="text-orange-400 text-2xl mr-2">✓</span>
              <span>98% Approval Rate</span>
            </div>
            <div className="flex items-center">
              <span className="text-orange-400 text-2xl mr-2">✓</span>
              <span>15+ Years Experience</span>
            </div>
          </div>
          
          <button 
            onClick={() => setShowModal(true)}
            className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            SCHEDULE FREE CONSULTATION →
          </button>
        </div>
      </section>

      {/* Choose Destination Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose a <span className="text-orange-600">Destination</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a world of possibilities. Browse programs tailored to your ambitions, and unlock the path to your next home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPrograms.slice(0, 9).map(program => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{program.flag}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{program.country}</h3>
                    <span className="text-lg font-bold text-orange-600">{program.amount}</span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{program.type}</p>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentView('programs')}
              className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              View All Programs ({allPrograms.length})
            </button>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore <span className="text-orange-600">Endlessly</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive resources, expert insights, and detailed program information to make informed decisions about your global mobility journey.
            </p>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              LEARN MORE →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-orange-600">Questions</span></h2>
          </div>
          
          {/* FAQ Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is citizenship by investment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Citizenship by investment programs allow individuals to obtain citizenship in a country by making a qualifying investment, such as real estate, government bonds, or business investments."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How long does the process typically take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Processing times vary by program, ranging from 3-6 months for Caribbean programs to 12-36 months for European programs, depending on due diligence requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can family members be included?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most programs allow inclusion of spouse, dependent children, and sometimes parents or grandparents, though specific eligibility varies by program."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the tax implications?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Tax implications vary significantly by program and your current tax residency. We recommend consulting with tax professionals familiar with international tax law."
                  }
                }
              ]
            })}
          </script>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is citizenship by investment?</h3>
              <p className="text-gray-600">Citizenship by investment programs allow individuals to obtain citizenship in a country by making a qualifying investment, such as real estate, government bonds, or business investments.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the process typically take?</h3>
              <p className="text-gray-600">Processing times vary by program, ranging from 3-6 months for Caribbean programs to 12-36 months for European programs, depending on due diligence requirements.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can family members be included?</h3>
              <p className="text-gray-600">Most programs allow inclusion of spouse, dependent children, and sometimes parents or grandparents, though specific eligibility varies by program.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the tax implications?</h3>
              <p className="text-gray-600">Tax implications vary significantly by program and your current tax residency. We recommend consulting with tax professionals familiar with international tax law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
            
            {/* Column 1 - Navigation */}
            <div className="space-y-3">
              <button onClick={() => setCurrentView('home')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">HOME</button>
              <button onClick={() => setCurrentView('programs')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">OUR PROCESS</button>
              <button onClick={() => setShowModal(true)} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">ABOUT US</button>
              <button onClick={() => setCurrentView('blog')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">RESOURCES</button>
              <button onClick={() => setShowModal(true)} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">CONTACT</button>
              <button onClick={() => setCurrentView('programs')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">CRYPTO WEALTH</button>
            </div>

            {/* Column 2 - Programs */}
            <div className="space-y-3">
              <button onClick={() => setCurrentView('programs')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">EXPLORE ALL COUNTRIES</button>
              <button onClick={() => setCurrentView('citizenship-investment')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">CITIZENSHIP BY INVESTMENT</button>
              <button onClick={() => setCurrentView('programs')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">CITIZENSHIP BY DESCENT</button>
              <button onClick={() => setCurrentView('golden-visa')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">RESIDENCE BY INVESTMENT</button>
              <button onClick={() => setCurrentView('programs')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">DIGITAL NOMAD VISAS</button>
              <button onClick={() => setCurrentView('programs')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">TALENT VISAS</button>
              <button onClick={() => setCurrentView('business-visas')} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">BUSINESS VISAS</button>
            </div>

            {/* Column 3 - Dubai Office */}
            <div className="space-y-1">
              <div className="text-orange-400 font-semibold uppercase tracking-wide">CITIZENPATHS L.L.C-FZ</div>
              <div className="text-gray-300">THE CENTRAL FZ09</div>
              <div className="text-gray-300">CENTRAL BUILDING, UNIT 201-FF</div>
              <div className="text-gray-300">SHEIKH ZAYED RD, DUBAI, U.A.E</div>
              
              <div className="pt-4 space-y-1">
                <div className="text-orange-400 font-semibold uppercase tracking-wide">CITIZENPATHS L.L.C-FZ</div>
                <div className="text-gray-300">REGUS JLT 1405</div>
                <div className="text-gray-300">AV. JUSCELINO KUBITSCHEK, 1455</div>
                <div className="text-gray-300">SÃO PAULO - SP, 04543-011, BRAZIL</div>
              </div>
            </div>

            {/* Column 4 - Singapore Office */}
            <div className="space-y-1">
              <div className="text-orange-400 font-semibold uppercase tracking-wide">CITIZENPATHS PTE. LTD.</div>
              <div className="text-gray-300">22 CROSS STREET</div>
              <div className="text-gray-300">#03-106, 048421</div>
              <div className="text-gray-300">SINGAPORE</div>
              
              <div className="pt-4 space-y-1">
                <div className="text-orange-400 font-semibold uppercase tracking-wide">CITIZENPATHS L.L.C-FZ</div>
                <div className="text-gray-300">REGUS SARONA</div>
                <div className="text-gray-300">AZRIELI SARONA TOWER</div>
                <div className="text-gray-300">DERECH MENACHEM BEGIN 121-123</div>
                <div className="text-gray-300">TEL AVIV-YAFO 6701203, ISRAEL</div>
              </div>
            </div>

            {/* Column 5 - Legal Links */}
            <div className="space-y-3">
              <button onClick={() => setShowModal(true)} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">TERMS AND CONDITIONS</button>
              <button onClick={() => setShowModal(true)} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">PRIVACY POLICY</button>
              <button onClick={() => setShowModal(true)} className="block text-gray-300 hover:text-orange-400 transition-colors uppercase tracking-wide">COOKIE PREFERENCES</button>
            </div>

            {/* Column 6 - Social Media */}
            <div className="flex flex-col items-end space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
              <div className="text-right text-xs text-gray-400 mt-8">
                © CITIZENPATHS 2025 ALL RIGHTS RESERVED
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-300 mb-4">Thrive Anywhere</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">Start Your Application Now</h3>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            GET STARTED TODAY
          </button>
        </div>
      </section>

      {showModal && <ContactModal />}
    </div>
  );
};

export default App;

