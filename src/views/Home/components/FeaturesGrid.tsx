// import React from 'react';
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
//     color: "bg-blue-500"
//   },
//   {
//     icon: <FaUserSecret />,
//     title: "Enhanced Patient Conversion",
//     description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
//     color: "bg-purple-500"
//   },
//   {
//     icon: <BiMessageSquare />,
//     title: "Real-Time Query Handling",
//     description: "Instant response system for patient inquiries with AI-powered chat support.",
//     color: "bg-green-500"
//   },
//   {
//     icon: <FiFileText />,
//     title: "Medical Report Analysis",
//     description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
//     color: "bg-orange-500"
//   },
//   {
//     icon: <BiTrendingUp />,
//     title: "Improved Lead Generation",
//     description: "Data-driven lead generation strategies to attract and engage potential patients.",
//     color: "bg-pink-500"
//   },
//   {
//     icon: <BsDatabase />,
//     title: "Comprehensive Healthcare Database",
//     description: "Extensive medical information database for accurate patient guidance and support.",
//     color: "bg-indigo-500"
//   },
//   {
//     icon: <LuLanguages />,
//     title: "Multilingual Support",
//     description: "Breaking language barriers with comprehensive multilingual communication tools.",
//     color: "bg-red-500"
//   },
//   {
//     icon: <BiCreditCard />,
//     title: "Seamless Payment Handling",
//     description: "Secure and efficient payment processing for medical services globally.",
//     color: "bg-teal-500"
//   },
//   {
//     icon: <BiSearch />,
//     title: "Marketing And SEO Support",
//     description: "Optimized digital presence with advanced SEO and marketing strategies.",
//     color: "bg-cyan-500"
//   }
// ];

// const FeaturesGrid: React.FC = () => {
//   return (
      
// <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//   {/* Background Elements */}
//   <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
//   <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
//   <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
  
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     {/* Section Header */}
//     <div className="max-w-2xl mx-auto text-center mb-20">
//       <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
//         Our Platform
//       </div>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//         Comprehensive Solutions for Healthcare
//       </h2>
//       <p className="text-xl text-gray-600 max-w-xl mx-auto">
//         Powerful tools designed specifically for healthcare professionals to streamline operations and improve patient care.
//       </p>
//     </div>

//     {/* Solutions Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {solutions.map((solution, index) => (
//         <div
//           key={index}
//           className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
//         >
//           {/* Card Top Accent Line */}
//           <div className={`h-1.5 w-full ${solution.color}`}></div>
          
//           <div className="p-8">
//             {/* Icon */}
//             <div className="mb-6 relative">
//               <div className={`${solution.color} bg-opacity-10 inline-flex p-4 rounded-2xl mb-4 transition-all duration-300 group-hover:shadow-lg`}>
//                 <div className={`${solution.color} text-2xl`}>
//                   {solution.icon}
//                 </div>
//               </div>
              
//               {/* Small decorative element */}
//               <div className={`absolute top-0 right-0 w-8 h-8 rounded-full ${solution.color} bg-opacity-5 transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
//             </div>
            
//             {/* Content */}
//             <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//               {solution.title}
//             </h3>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               {solution.description}
//             </p>
            
//             {/* Learn More Link */}
//             <div className="flex items-center text-blue-600 font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//               Learn more
//               <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//               </svg>
//             </div>
//           </div>
          
//           {/* Corner Decoration */}
//           <div className={`absolute -bottom-8 -right-8 w-16 h-16 rounded-full ${solution.color} bg-opacity-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150`}></div>
//         </div>
//       ))}
//     </div>
    
//     {/* Bottom CTA (optional) */}
//     <div className="mt-16 text-center">
//       <button className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-md hover:shadow-lg border border-blue-100 transition-all duration-300">
//         Explore All Solutions
//       </button>
//     </div>
//   </div>
// </div>
//   );
// };

// export default FeaturesGrid;


import React, { useState } from 'react';
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
  
  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-blue-50 opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-100 to-indigo-50 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full text-blue-600 text-sm font-semibold mb-6 backdrop-blur-sm">
            Enterprise Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Healthcare Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed specifically for healthcare professionals to streamline operations and improve patient care.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card container with glass effect */}
              <div className={`h-full bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 overflow-hidden transition-all duration-500 ${activeCard === index ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'}`}>
                
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Badge if present */}
                {solution.badge && (
                  <div className="absolute top-6 right-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${solution.color} text-white shadow-lg`}>
                      {solution.badge}
                    </div>
                  </div>
                )}
                
                {/* Card content */}
                <div className="p-8 relative">
                  {/* Icon with animated ring */}
                  <div className="mb-8 relative">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-md bg-gradient-to-br ${solution.color} text-white relative z-10 transition-all duration-500 group-hover:shadow-lg`}>
                      <div className="text-2xl">
                        {solution.icon}
                      </div>
                    </div>
                    
                    {/* Animated decorative circle */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${solution.color} opacity-10 group-hover:scale-125 transition-all duration-700`}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  
                  {/* Action area with animated arrow */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className={`flex items-center text-transparent bg-clip-text bg-gradient-to-r ${solution.color} font-medium transition-all duration-300`}>
                      Explore solution
                      <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                    
                    {/* Interactive pulse dot */}
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse`}></div>
                  </div>
                </div>
                
                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore All Enterprise Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;