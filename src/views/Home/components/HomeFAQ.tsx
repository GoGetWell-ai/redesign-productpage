import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Filter, X, MessageCircleQuestion, CheckCircle, Clock, Shield, Settings, Users, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, category, index }) => {
  // Create category-specific styling
  const getCategoryStyle = (cat) => {
    const styles = {
      'General': {icon: <HelpCircle />, color: 'from-blue-500 to-cyan-400'},
      'Features': {icon: <CheckCircle />, color: 'from-indigo-600 to-blue-500'},
      'Website': {icon: <Settings />, color: 'from-purple-600 to-pink-500'},
      'Integration': {icon: <Settings />, color: 'from-emerald-500 to-green-400'},
      'Security': {icon: <Shield />, color: 'from-rose-500 to-red-500'},
      'Getting Started': {icon: <Clock />, color: 'from-amber-500 to-orange-400'},
      'Support': {icon: <MessageCircleQuestion />, color: 'from-cyan-500 to-blue-400'},
      'Marketing': {icon: <Users />, color: 'from-violet-600 to-purple-500'}
    };
    
    return styles[cat] || {icon: <HelpCircle />, color: 'from-gray-500 to-gray-400'};
  };
  
  const categoryStyle = getCategoryStyle(category);
  
  return (
    <div 
      className={`mb-6 overflow-hidden transition-all duration-500 group ${
        isOpen ? 'scale-[1.02]' : 'hover:scale-[1.01]'
      }`}
    >
      <div className={`
        border border-transparent rounded-2xl overflow-hidden transition-all duration-500
        ${isOpen ? 'shadow-lg bg-white' : 'shadow-md bg-white/70 hover:shadow-lg hover:bg-white/90 backdrop-blur-sm'}
      `}>
        {/* Top accent gradient line */}
        <div className={`h-1 w-full bg-gradient-to-r ${categoryStyle.color} transform origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-700`}></div>
        
        <button
          onClick={onClick}
          className="w-full p-6 flex items-center justify-between text-left transition-colors focus:outline-none"
        >
          <div className="flex items-start gap-4">
            {/* Icon with animated background */}
            <div className={`hidden md:flex flex-shrink-0 w-10 h-10 rounded-xl items-center justify-center bg-gradient-to-br ${categoryStyle.color} text-white shadow-sm transition-all duration-500 ${isOpen ? 'scale-110' : 'group-hover:scale-110'}`}>
              {categoryStyle.icon}
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                {category && (
                  <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${categoryStyle.color}`}>
                    {category}
                  </span>
                )}
                <span className="text-xs text-gray-400">#{String(index+1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {question}
              </h3>
            </div>
          </div>
          
          <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-indigo-50 transition-all duration-300 ${isOpen ? 'bg-indigo-50 rotate-180' : ''}`}>
            <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}`} />
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 text-gray-600">
            {/* Divider with gradient */}
            <div className="h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4"></div>
            
            <p className="leading-relaxed">{answer}</p>
            
            {/* Actions row */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <button className="text-indigo-500 hover:text-indigo-700 transition-colors">
                  Was this helpful?
                </button>
              </div>
              <button className="text-indigo-500 hover:text-indigo-700 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const faqData = [
    {
      que: 'What is gogetwell.ai?',
      ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
      category: 'General'
    },
    {
      que: 'What is the AI Front Office for Healthcare Agents?',
      ans: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.',
      category: 'Features'
    },
    {
      que: 'How does the AI Agent assist me in my healthcare business?',
      ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.',
      category: 'Features'
    },
    {
      que: 'Can I customize the website for my healthcare services?',
      ans: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.',
      category: 'Website'
    },
    {
      que: 'How does this platform support independent healthcare facilitators like me?',
      ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.',
      category: 'General'
    },
    {
      que: 'How does the platform help me manage patient leads?',
      ans: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.',
      category: 'Features'
    },
    {
      que: 'Is it easy to integrate the platform with the hospitals I work with?',
      ans: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.',
      category: 'Integration'
    },
    {
      que: 'Is the platform secure and compliant with healthcare regulations?',
      ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.",
      category: 'Security'
    },
    {
      que: 'How quickly can I get started with the platform?',
      ans: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.',
      category: 'Getting Started'
    },
    {
      que: 'What kind of customer support is available if I need help?',
      ans: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.',
      category: 'Support'
    },
    {
      que: 'How does the platform help me attract more patients?',
      ans: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.',
      category: 'Marketing'
    },
  ];

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  // Filter FAQ data based on search query and active category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.que.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        faq.ans.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // Reset open index when filters change
    setOpenIndex(filteredFAQs.length > 0 ? 0 : -1);
  }, [searchQuery, activeCategory, filteredFAQs.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with animated gradient */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 -top-10 blur-3xl opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transform -translate-y-1/2"></div>
          
          {/* Premium Badge */}
          <div className="inline-block mb-6">
            <div className="px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full text-indigo-700 text-sm font-semibold backdrop-blur-sm">
              Knowledge Center
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8 relative">
            Everything you need to know about our AI-powered healthcare platform
          </p>
          
          {/* Animated underline */}
          <div className="relative h-1 w-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Search and filters in premium glass card */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 -z-10 blur-xl opacity-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl"></div>
          
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/60 p-6">
            <div className="relative">
              <div className={`absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none transition-opacity duration-300 ${isSearchFocused ? 'opacity-100' : 'opacity-70'}`}>
                <Search className={`w-5 h-5 transition-colors duration-300 ${isSearchFocused ? 'text-indigo-600' : 'text-gray-400'}`} />
              </div>
              
              <input
                type="text"
                className={`bg-white/80 w-full p-4 pl-12 pr-16 rounded-xl border transition-all duration-300 focus:ring-0 focus:border-indigo-400 ${
                  isSearchFocused 
                    ? 'border-indigo-300 shadow-md shadow-indigo-100' 
                    : 'border-gray-200 shadow-sm'
                }`}
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-300 ${
                  showFilters 
                    ? 'bg-indigo-100 text-indigo-600' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            {/* Animated category filters */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showFilters ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="flex flex-wrap gap-2 items-center pt-2">
                <span className="text-sm text-gray-500 mr-2">Filter by:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                        : 'bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                
                {(searchQuery || activeCategory !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className="ml-auto text-sm flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                  >
                    <X className="w-4 h-4" /> Clear filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Items with premium styling */}
        <div>
          {filteredFAQs.length > 0 ? (
            <>
              {filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.que}
                  answer={faq.ans}
                  category={faq.category}
                  isOpen={index === openIndex}
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  index={index}
                />
              ))}
            </>
          ) : (
            <div className="py-16 text-center bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/60">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-500">
                <Search className="w-8 h-8" />
              </div>
              <p className="text-xl font-medium text-gray-700 mb-2">No results found</p>
              <p className="text-gray-500 mb-6">We couldn't find any FAQs matching your criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all duration-300"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
        {/* Contact support section with premium design */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 blur-2xl opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl"></div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-indigo-100 mb-8 max-w-lg mx-auto">
                Our team is here to help you get started with gogetwell.ai and answer any questions you may have
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-indigo-700 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Support
                </a>
                <a 
                  href="#documentation" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;