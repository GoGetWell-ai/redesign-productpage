 


// import React, { useState } from 'react';
// import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
// import { BsDatabase } from 'react-icons/bs';
// import { FaUserSecret } from 'react-icons/fa';
// import { FiFileText } from 'react-icons/fi';
// import { LuLanguages } from 'react-icons/lu';

// const solutions = [
//   {
//     icon: <BiGlobeAlt />,
//     title: "Custom AI-Powered Website",
//     description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
//     color: "from-blue-600 to-cyan-400",
//     badge: "Popular"
//   },
//   {
//     icon: <FaUserSecret />,
//     title: "Enhanced Patient Conversion",
//     description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
//     color: "from-purple-600 to-indigo-500",
//     badge: ""
//   },
//   {
//     icon: <BiMessageSquare />,
//     title: "Real-Time Query Handling",
//     description: "Instant response system for patient inquiries with AI-powered chat support.",
//     color: "from-emerald-500 to-green-400",
//     badge: "New"
//   },
//   {
//     icon: <FiFileText />,
//     title: "Medical Report Analysis",
//     description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
//     color: "from-orange-500 to-amber-400",
//     badge: ""
//   },
//   {
//     icon: <BiTrendingUp />,
//     title: "Improved Lead Generation",
//     description: "Data-driven lead generation strategies to attract and engage potential patients.",
//     color: "from-pink-500 to-rose-400",
//     badge: "Hot"
//   },
//   {
//     icon: <BsDatabase />,
//     title: "Comprehensive Healthcare Database",
//     description: "Extensive medical information database for accurate patient guidance and support.",
//     color: "from-indigo-600 to-blue-500",
//     badge: ""
//   },
//   {
//     icon: <LuLanguages />,
//     title: "Multilingual Support",
//     description: "Breaking language barriers with comprehensive multilingual communication tools.",
//     color: "from-red-500 to-orange-500",
//     badge: ""
//   },
//   {
//     icon: <BiCreditCard />,
//     title: "Seamless Payment Handling",
//     description: "Secure and efficient payment processing for medical services globally.",
//     color: "from-teal-500 to-emerald-400",
//     badge: ""
//   },
//   {
//     icon: <BiSearch />,
//     title: "Marketing And SEO Support",
//     description: "Optimized digital presence with advanced SEO and marketing strategies.",
//     color: "from-cyan-500 to-blue-400",
//     badge: "Featured"
//   }
// ];

// const FeaturesGrid = () => {
//   const [activeCard, setActiveCard] = useState(null);
  
//   return (
//     <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
//       <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-blue-50 opacity-50 blur-3xl"></div>
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-100 to-indigo-50 opacity-50 blur-3xl"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-20">
//           <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full text-blue-600 text-sm font-semibold mb-6 backdrop-blur-sm">
//             Enterprise Solutions
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Healthcare Solutions</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Powerful tools designed specifically for healthcare professionals to streamline operations and improve patient care.
//           </p>
//         </div>

//         {/* Solutions Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => (
//             <div
//               key={index}
//               className="relative group"
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               {/* Card container with glass effect */}
//               <div className={`h-full bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 overflow-hidden transition-all duration-500 ${activeCard === index ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'}`}>
                
//                 {/* Animated gradient background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
//                 {/* Badge if present */}
//                 {solution.badge && (
//                   <div className="absolute top-6 right-6">
//                     <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${solution.color} text-white shadow-lg`}>
//                       {solution.badge}
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Card content */}
//                 <div className="p-8 relative">
//                   {/* Icon with animated ring */}
//                   <div className="mb-8 relative">
//                     <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-md bg-gradient-to-br ${solution.color} text-white relative z-10 transition-all duration-500 group-hover:shadow-lg`}>
//                       <div className="text-2xl">
//                         {solution.icon}
//                       </div>
//                     </div>
                    
//                     {/* Animated decorative circle */}
//                     <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${solution.color} opacity-10 group-hover:scale-125 transition-all duration-700`}></div>
//                   </div>
                  
//                   {/* Content */}
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600">
//                     {solution.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed mb-8">
//                     {solution.description}
//                   </p>
                  
//                   {/* Action area with animated arrow */}
//                   <div className="flex items-center justify-between mt-auto">
//                     <div className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${solution.color} font-medium transition-all duration-300`}>
//                       Explore solution
//                       <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                       </svg>
//                     </div>
                    
//                     {/* Interactive pulse dot */}
//                     <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse`}></div>
//                   </div>
//                 </div>
                
//                 {/* Bottom gradient line */}
//                 <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//             Explore All Enterprise Solutions
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesGrid;


import React, { useState, useEffect } from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "from-blue-600 to-cyan-400",
    badge: "Popular"
  },
  {
    icon: <FaUserSecret />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "from-purple-600 to-indigo-500",
    badge: ""
  },
  {
    icon: <BiMessageSquare />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "from-emerald-500 to-green-400",
    badge: "New"
  },
  {
    icon: <FiFileText />,
    title: "Medical Report Analysis", 
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "from-orange-500 to-amber-400",
    badge: ""
  },
  {
    icon: <BiTrendingUp />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "from-pink-500 to-rose-400",
    badge: "Hot"
  },
  {
    icon: <BsDatabase />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "from-indigo-600 to-blue-500",
    badge: ""
  },
  {
    icon: <LuLanguages />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "from-red-500 to-orange-500",
    badge: ""
  },
  {
    icon: <BiCreditCard />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "from-teal-500 to-emerald-400",
    badge: ""
  },
  {
    icon: <BiSearch />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "from-cyan-500 to-blue-400",
    badge: "Featured"
  }
];

const FeaturesGrid = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItems, setHoveredItems] = useState({});

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize hover states for each item
    const initialHoverStates = {};
    solutions.forEach((_, index) => {
      initialHoverStates[index] = false;
    });
    setHoveredItems(initialHoverStates);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
    setHoveredItems(prev => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setActiveCard(null);
    setHoveredItems(prev => ({ ...prev, [index]: false }));
  };

  // Get card colors based on index for staggered hover effects
  const getCardTransition = (index) => {
    return `transition-all duration-500 delay-${(index % 3) * 100}`;
  };

  return (
    <div className="py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Advanced Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/5 blur-3xl rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-cyan-600/5 blur-3xl rounded-full animate-pulse"></div>
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header with fancier animations */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div 
            className={`inline-block px-6 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full text-blue-400 text-sm font-semibold mb-8 backdrop-blur-md border border-white/10 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <span className="inline-block animate-shimmer bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl font-bold mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-gray-100">Comprehensive </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient">
              Healthcare Solutions
            </span>
          </h2>
          
          <p 
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Powerful tools designed specifically for healthcare professionals to streamline operations and improve patient care with cutting-edge AI technology.
          </p>
        </div>

        {/* Solutions Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Card container with premium glass effect */}
              <div 
                className={`h-full backdrop-blur-xl rounded-3xl border overflow-hidden transition-all duration-500 ${
                  activeCard === index 
                    ? 'border-white/20 shadow-2xl shadow-blue-500/20 scale-105 bg-gradient-to-br from-gray-800/90 to-gray-900/90' 
                    : 'border-white/10 shadow-xl hover:shadow-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:border-white/15'
                }`}
              >
                {/* Animated spotlight effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-gleam"></div>
                
                {/* Animated gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                ></div>
                
                {/* Badge with premium styling */}
                {solution.badge && (
                  <div className="absolute top-6 right-6 z-20">
                    <div 
                      className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${solution.color} text-white shadow-lg backdrop-blur-md`}
                    >
                      {solution.badge}
                    </div>
                  </div>
                )}
                
                {/* Premium glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 ${hoveredItems[index] ? 'opacity-20' : ''} transition-opacity duration-700`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} blur-2xl`}></div>
                </div>
                
                {/* Card content with enhanced spacing */}
                <div className="p-10 relative">
                  {/* Icon with animated effects */}
                  <div className="mb-10 relative">
                    {/* Decorative rings */}
                    <div className={`absolute -inset-4 ${solution.color} opacity-10 rounded-full blur-md group-hover:animate-pulse transition-opacity duration-700`}></div>
                    
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br ${solution.color} text-white relative z-10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-${solution.color.split('-')[2]}-500/20`}>
                      <div className="text-2xl">
                        {solution.icon}
                      </div>
                    </div>
                    
                    {/* Animated decorative circle */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${solution.color} opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`}>
                    </div>
                  </div>
                  
                  {/* Content with enhanced text styling */}
                  <h3 
                    className={`text-2xl font-bold mb-5 transition-colors duration-500 ${
                      hoveredItems[index] 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r ' + solution.color
                        : 'text-white'
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                    {solution.description}
                  </p>
                  
                  {/* Action area with premium animation */}
                  <div className="flex items-center justify-between mt-auto">
                    <div 
                      className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${solution.color} font-medium text-lg transition-all duration-300 group-hover:font-semibold`}
                    >
                      Explore solution
                      <svg 
                        className={`w-6 h-6 ml-2 transition-all duration-500 ${hoveredItems[index] ? 'translate-x-2' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                    
                    {/* Interactive glow dot */}
                    <div 
                      className={`relative w-3 h-3 rounded-full bg-gradient-to-r ${solution.color} transition-all duration-300 ${hoveredItems[index] ? 'scale-150 animate-pulse' : ''}`}
                    >
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${solution.color} blur-md opacity-50 ${hoveredItems[index] ? 'animate-ping' : ''}`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom gradient line with enhanced animation */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${solution.color} transform origin-left scale-x-0 ${hoveredItems[index] ? 'scale-x-100' : ''} transition-transform duration-700 ease-out`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Bottom CTA */}
        <div 
          className={`mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <button 
            className="group relative px-10 py-5 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            
            {/* Button text */}
            <div className="relative flex items-center justify-center gap-3">
              Explore All Enterprise Solutions
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </button>
          
          {/* Added button glow effect */}
          <div className="mt-6 w-full flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-50 blur-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes gleam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gleam {
          animation: gleam 2s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 6s linear infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturesGrid;