// import React, { ReactNode } from 'react'
// import aboutUs from '@/assets/images/about_us.gif'
// import mission from '@/assets/images/our_mission.gif'
// import challenges from '@/assets/images/challenges_solve.gif'

// interface SectionProps {
//     img: any
//     icon1: ReactNode
//     icon2: ReactNode
//     title: string
//     content1: string
//     content2: string
//     icontitle1: string
//     iconp1: string
//     icontitle2: string
//     iconp2: string
//     status: 'left' | 'right'
// }

// const Section: React.FC<SectionProps> = ({
//     status,
//     img,
//     icon1,
//     icon2,
//     title,
//     content1,
//     content2,
//     icontitle1,
//     iconp1,
//     icontitle2,
//     iconp2,
// }) => {
//     return (
//         <div className="flex flex-col lg:flex-row gap-8 items-center">
//             {/* Image Section */}
//             <div
//                 className={`w-full lg:w-1/2 flex items-center justify-center ${status && 'order-last lg:order-first'}`}
//             >
//                 <img
//                     src={img}
//                     alt="About us"
//                     className="w-full object-cover rounded-lg max-w-[400px]"
//                 />
//             </div>

//             {/* Content Section */}
//             <div
//                 className={`w-full lg:w-1/2 ${status && 'order-first lg:order-last'}`}
//             >
//                 <div className="mb-6">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                         {title}
//                     </h2>
//                     <div className="h-1 w-20 bg-primary rounded-full"></div>
//                 </div>

//                 <div className="space-y-4">
//                     <p className="text-gray-600 leading-relaxed">{content1}</p>

//                     <p className="text-gray-600 leading-relaxed">{content2}</p>
//                 </div>

//                 {/* Feature Points */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                     <div className="flex items-start gap-3">
//                         <div className="flex-shrink-0">
//                             <div className="p-3 bg-blue-100 rounded-lg">
//                                 {icon1}
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-gray-800">
//                                 {icontitle1}
//                             </h4>
//                             <p className="text-sm text-gray-600">{iconp1}</p>
//                         </div>
//                     </div>

//                     <div className="flex items-start gap-3">
//                         <div className="flex-shrink-0">
//                             <div className="p-3 bg-blue-100 rounded-lg">
//                                 {icon2}
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-gray-800">
//                                 {icontitle2}
//                             </h4>
//                             <p className="text-sm text-gray-600">{iconp2}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const FullPageSections = () => {
//     const sections = [
//         {
//             img: aboutUs,
//             icon1: (
//                 <svg
//                     className="w-6 h-6 text-primary"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                 </svg>
//             ),
//             icon2: (
//                 <svg
//                     className="w-6 h-6 text-primary"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                     />
//                 </svg>
//             ),
//             title: 'About Us',
//             content1:
//                 'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
//             content2:
//                 'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
//             icontitle1: 'Modern Solutions',
//             iconp1: 'Leveraging AI technology for healthcare',
//             icontitle2: 'Patient-Centric',
//             iconp2: 'Personalized healthcare experiences',
//             status: 'left',
//         },
//         {
//             img: mission,
//             icon1: (
//                 <svg
//                     className="w-6 h-6 text-blue-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                 </svg>
//             ),
//             icon2: (
//                 <svg
//                     className="w-6 h-6 text-blue-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                     />
//                 </svg>
//             ),
//             title: 'Our Mission',
//             content1:
//                 'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
//             content2:
//                 'We strive to become the leading platform for healthcare tourism management and digital transformation.',
//             icontitle1: 'Modern Solutions',
//             iconp1: 'Leveraging AI technology for healthcare',
//             icontitle2: 'Patient-Centric',
//             iconp2: 'Personalized healthcare experiences',
//             status: 'left',
//         },
//     ]


//     return (
          
// <div className="w-full bg-white relative overflow-hidden">
//   {/* Decorative background elements */}
//   <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//     <div className="absolute top-40 -right-64 w-96 h-96 rounded-full bg-blue-50 opacity-80"></div>
//     <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-50 opacity-60"></div>
//     <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-70"></div>
//   </div>

//   {/* Content container */}
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
//     {/* Section intro */}
//     <div className="text-center max-w-3xl mx-auto mb-20">
//       <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
//         <span className="flex w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
//         About Our Platform
//       </div>
//       <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//         Revolutionizing <span className="text-blue-600">Medical Tourism</span> With AI
//       </h2>
//       <p className="text-lg text-gray-600">
//         We're building the infrastructure to transform healthcare facilitation across borders.
//       </p>
//     </div>

//     {/* First feature block */}
//     <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
//       {/* Image with decorative elements */}
//       <div className="w-full lg:w-1/2 relative">
//         <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-50 to-indigo-50 p-2">
//           <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-70 -mr-10 -mt-10"></div>
//           <img
//             src={aboutUs}
//             alt="About us"
//             className="w-full object-cover rounded-2xl relative z-10 shadow-xl"
//           />
//           <div className="absolute -bottom-4 -left-4 p-4 bg-white rounded-xl shadow-lg">
//             <div className="flex items-center gap-3">
//               <div className="bg-blue-600 text-white p-2 rounded-lg">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500">Trusted by</p>
//                 <p className="font-medium text-gray-900">2100+ Healthcare Facilities</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2">
//         <div className="mb-6 inline-flex flex-col items-start">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">About Us</h2>
//           <div className="h-1 w-16 bg-blue-600 rounded-full"></div>
//         </div>

//         <div className="space-y-6 text-lg">
//           <p className="text-gray-700 leading-relaxed">
//             We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
//           </p>
//         </div>

//         {/* Feature Points with modern styling */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
//           <div className="group">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
//                 <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-lg mb-2">Modern Solutions</h4>
//                 <p className="text-gray-600">Leveraging AI technology to transform healthcare delivery across borders</p>
//               </div>
//             </div>
//           </div>

//           <div className="group">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
//                 <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-lg mb-2">Patient-Centric</h4>
//                 <p className="text-gray-600">Creating personalized healthcare experiences for patients worldwide</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Second feature block */}
//     <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
//       {/* Image with interactive elements */}
//       <div className="w-full lg:w-1/2 relative">
//         <div className="relative rounded-3xl overflow-hidden bg-gradient-to-bl from-indigo-50 to-blue-50 p-2">
//           <div className="absolute bottom-0 left-0 w-20 h-20 bg-indigo-100 rounded-full blur-xl opacity-70 -ml-10 -mb-10"></div>
//           <img
//             src={mission}
//             alt="Our Mission"
//             className="w-full object-cover rounded-2xl relative z-10 shadow-xl"
//           />
//           <div className="absolute -top-4 -right-4 p-4 bg-white rounded-xl shadow-lg">
//             <div className="flex items-center gap-3">
//               <div className="bg-indigo-600 text-white p-2 rounded-lg">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
//                   <path d="M15 12L12 9M12 9L9 12M12 9V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500">Global reach in</p>
//                 <p className="font-medium text-gray-900">45+ Countries</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2">
//         <div className="mb-6 inline-flex flex-col items-start">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Mission</h2>
//           <div className="h-1 w-16 bg-indigo-600 rounded-full"></div>
//         </div>

//         <div className="space-y-6 text-lg">
//           <p className="text-gray-700 leading-relaxed">
//             Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators' operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             We strive to become the leading platform for healthcare tourism management and digital transformation.
//           </p>
//         </div>

//         {/* Feature Points */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
//           <div className="group">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
//                 <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-lg mb-2">AI-Powered Solutions</h4>
//                 <p className="text-gray-600">Optimizing healthcare operations with advanced machine learning technology</p>
//               </div>
//             </div>
//           </div>

//           <div className="group">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
//                 <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-lg mb-2">Growth Focus</h4>
//                 <p className="text-gray-600">Maximizing revenue opportunities and expanding healthcare access</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Third feature block */}
//     <div className="flex flex-col lg:flex-row items-center gap-16">
//       {/* Image */}
//       <div className="w-full lg:w-1/2 relative">
//         <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-50 to-blue-50 p-2">
//           <div className="absolute top-0 left-0 w-20 h-20 bg-purple-100 rounded-full blur-xl opacity-70 -ml-10 -mt-10"></div>
//           <img
//             src={challenges}
//             alt="Challenges in Medical Tourism"
//             className="w-full object-cover rounded-2xl relative z-10 shadow-xl"
//           />
//           <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-xl shadow-lg">
//             <div className="flex items-center gap-3">
//               <div className="bg-purple-600 text-white p-2 rounded-lg">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 15V17M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500">Solutions for</p>
//                 <p className="font-medium text-gray-900">800+ Treatment Plans</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2">
//         <div className="mb-6 inline-flex flex-col items-start">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">The Challenges We Solve</h2>
//           <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
//         </div>

//         <div className="space-y-6 text-lg">
//           <p className="text-gray-700 leading-relaxed">
//             Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.
//           </p>
//         </div>

//         {/* Feature Points */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
//           <div className="group">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
//                 <svg className="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-lg mb-2">Efficient Operations</h4>
//                 <p className="text-gray-600">Streamlining bookings and patient management with intelligent automation</p>
//               </div>
//             </div>
//           </div>

//           <div className="group">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
//                 <svg className="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-lg mb-2">Enhanced Support</h4>
//                 <p className="text-gray-600">Improving patient communication and experience throughout their healthcare journey</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     {/* Stats bar */}
//     <div className="mt-32 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
//             <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </div>
//           <h3 className="text-4xl font-bold text-gray-900 mb-2">2,100<span className="text-blue-600">+</span></h3>
//           <p className="text-gray-600">Qualified Doctors</p>
//         </div>
        
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
//             <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//             </svg>
//           </div>
//           <h3 className="text-4xl font-bold text-gray-900 mb-2">1,000<span className="text-indigo-600">+</span></h3>
//           <p className="text-gray-600">Partner Hospitals</p>
//         </div>
        
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
//             <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//             </svg>
//           </div>
//           <h3 className="text-4xl font-bold text-gray-900 mb-2">800<span className="text-purple-600">+</span></h3>
//           <p className="text-gray-600">Treatment Plans</p>
//         </div>
        
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
//             <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
//             </svg>
//           </div>
//           <h3 className="text-4xl font-bold text-gray-900 mb-2">45<span className="text-green-600">+</span></h3>
//           <p className="text-gray-600">Countries Served</p>
//         </div>
//       </div>
//     </div>
    
//     {/* CTA */}
//     <div className="mt-24 text-center">
//       <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300">
//         Start Transforming Healthcare Today
//       </button>
//     </div>
//   </div>
// </div>
//     )
// }

// export default FullPageSections



import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Users, Hospital, Globe, FileText, TrendingUp, Shield, Star } from 'lucide-react';
import abouttUs from '@/assets/images/download.jpeg'
import mission from '@/assets/images/our_mission.gif'
import aboutUs from '@/assets/images/about_us.gif'
import challenges from '@/assets/images/challenges_solve.gif'

const FullPageSections = () => {
  // For animation on scroll
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    mission: false,
    challenges: false,
    stats: false
  });
  
  // Mock placeholder images
  const images = {
    heroImage: "/api/placeholder/600/400",
    aboutUs: "/api/placeholder/500/400",
    mission: "/api/placeholder/500/400",
    challenges: "/api/placeholder/500/400"
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Detect elements and set visibility
      const sections = ['hero', 'about', 'mission', 'challenges', 'stats'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollPosition > element.offsetTop + 100) {
          setIsVisible(prev => ({ ...prev, [section]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation classes
  const getAnimationClass = (section) => {
    return isVisible[section] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  };

  return (
    <div className="w-full bg-slate-50 text-gray-900 overflow-hidden">
      {/* Decorative top wave */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute text-blue-500/5 h-40 w-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" className={`relative pt-32 pb-20 px-4 transition-all duration-1000 ease-out ${getAnimationClass('hero')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 pr-0 lg:pr-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="flex w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Revolutionizing Medical Tourism
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Healthcare <br />Across Borders
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
                We're building the future of medical tourism with advanced AI technology that connects patients to world-class healthcare, wherever they are.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 flex items-center">
                  Get Started
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                
                <button className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-medium rounded-xl shadow-md transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="flex items-center text-slate-600">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map(num => (
                    <div key={num} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={abouttUs} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">
                  <span className="font-semibold">2,000+</span> healthcare providers trust our platform
                </span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-1 rounded-3xl shadow-2xl">
                <img 
                  src={challenges} 
                  alt="Medical Tourism Platform" 
                  className="rounded-2xl w-full h-auto shadow-lg"
                />
                
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">45+ Countries</span>
                </div>
                
                <div className="absolute -bottom-6 left-10 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Patients Served</p>
                      <p className="text-xl font-bold text-slate-800">25,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm uppercase tracking-wider text-slate-500 font-medium mb-8">
            Trusted by leading healthcare providers worldwide
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img 
                  src={abouttUs} 
                  alt={`Partner ${num}`} 
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className={`py-24 px-4 relative transition-all duration-1000 ease-out ${getAnimationClass('about')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-blue-400/10 z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-indigo-400/10 z-0"></div>
                
                <div className="relative z-10 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-blue-500/20 via-white to-indigo-500/20 shadow-2xl">
                  <img
                    src={aboutUs}
                    alt="About our platform"
                    className="w-full h-auto rounded-2xl  object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Success Rate</p>
                      <p className="text-xl font-bold text-slate-800">98.7%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 mb-6">
                About Us
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Pioneering AI-Driven <br /><span className="text-blue-600">Healthcare Solutions</span>
              </h2>
              
              <div className="h-1 w-16 bg-blue-600 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
                </p>
                
                <p>
                  Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience with a focus on security, transparency, and exceptional care.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="group hover:bg-white hover:shadow-xl p-6 rounded-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Secure Platform</h3>
                  <p className="text-slate-600">End-to-end encryption and privacy-first approach to healthcare data</p>
                </div>
                
                <div className="group hover:bg-white hover:shadow-xl p-6 rounded-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Star className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Premium Care</h3>
                  <p className="text-slate-600">Personalized healthcare experiences with world-class providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div id="mission" className={`py-24 px-4 bg-white relative transition-all duration-1000 ease-out ${getAnimationClass('mission')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full bg-indigo-400/10 z-0"></div>
                <div className="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-purple-400/10 z-0"></div>
                
                <div className="relative z-10 rounded-3xl overflow-hidden p-1 bg-gradient-to-bl from-indigo-500/20 via-white to-purple-500/20 shadow-2xl">
                  <img
                    src={mission}
                    alt="Our mission"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Global Network</p>
                      <p className="text-xl font-bold text-slate-800">45+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600 mb-6">
                Our Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Simplifying Cross-Border <br /><span className="text-indigo-600">Healthcare Access</span>
              </h2>
              
              <div className="h-1 w-16 bg-indigo-600 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators' operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
                </p>
                
                <p>
                  We strive to become the leading platform for healthcare tourism management and digital transformation, connecting patients with life-changing medical care regardless of borders.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="group hover:bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">AI-Powered Growth</h3>
                  <p className="text-slate-600">Maximizing revenue opportunities through smart automation and analytics</p>
                </div>
                
                <div className="group hover:bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Patient-Centered</h3>
                  <p className="text-slate-600">Creating seamless healthcare experiences with compassionate support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges We Solve Section */}
      <div id="challenges" className={`py-24 px-4 relative transition-all duration-1000 ease-out ${getAnimationClass('challenges')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-purple-400/10 z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-blue-400/10 z-0"></div>
                
                <div className="relative z-10 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-purple-500/20 via-white to-blue-500/20 shadow-2xl">
                  <img
                    src={aboutUs}
                    alt="Challenges we solve"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Treatment Plans</p>
                      <p className="text-xl font-bold text-slate-800">800+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600 mb-6">
                Challenges We Solve
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Overcoming <span className="text-purple-600">Inefficiencies</span> <br />in Medical Tourism
              </h2>
              
              <div className="h-1 w-16 bg-purple-600 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.
                </p>
                
                <p>
                  Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike, creating a seamless experience for all stakeholders.
                </p>
              </div>
              
              <div className="space-y-6 mt-10">
                <div className="bg-white hover:shadow-xl p-6 rounded-2xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Hospital className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-800">Streamlined Operations</h3>
                      <p className="text-slate-600">Our AI automates patient matching, appointment scheduling, and document management, reducing administrative burden by up to 70%.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white hover:shadow-xl p-6 rounded-2xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-800">Enhanced Patient Experience</h3>
                      <p className="text-slate-600">Multilingual support, real-time updates, and personalized care plans ensure patients feel supported throughout their medical journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div id="stats" className={`py-24 px-4 bg-white transition-all duration-1000 ease-out ${getAnimationClass('stats')}`}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative p-12 md:p-16">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                  Transforming Healthcare <br className="hidden md:block" />Across Borders
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">2,100+</div>
                    <p className="text-blue-100">Qualified Doctors</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                      <Hospital className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">1,000+</div>
                    <p className="text-blue-100">Partner Hospitals</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">800+</div>
                    <p className="text-blue-100">Treatment Plans</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">45+</div>
                    <p className="text-blue-100">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
            Ready to Transform <span className="text-blue-600">Healthcare Delivery?</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Join 2,000+ healthcare providers already using our platform to streamline operations and deliver exceptional patient care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300">
              Get Started Now
            </button>
            
            <button className="px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-medium rounded-xl shadow-md transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageSections;