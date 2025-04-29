// import smallBG from '@/assets/images/main-bg-small.png';
// import { Button } from '@/components/ui';
// import HomeNavbar from '@/components/shared/HomeNav';
// import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

// interface HeroSectionProps {
//     scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
//     featuresRef: React.RefObject<HTMLElement>;
//     contactRef: React.RefObject<HTMLElement>;
//     aboutRef: React.RefObject<HTMLElement>;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//     scrollToSection,
//     featuresRef,
//     contactRef,
//     aboutRef,
// }) => {


//     return (
         
// <div className="bg-gradient-to-br from-blue-950 via-[#01052f] to-indigo-900 w-full relative overflow-hidden">
//   {/* Abstract shapes for visual interest */}
//   <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 z-0">
//     <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
//     <div className="absolute bottom-40 right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
//   </div>
  
//   {/* Navigation Bar */}
//   <HomeNavbar
//     scrollToSection={scrollToSection}
//     featuresRef={featuresRef}
//     contactRef={contactRef}
//     aboutRef={aboutRef}
//   />

//   {/* Hero Content */}
//   <div className="min-h-screen flex items-center py-16">
//     {/* Background grid pattern */}
//     <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
    
//     {/* Main Content Container */}
//     <div className="container mx-auto px-4 lg:px-8 z-10 relative">
//       <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
//         {/* Left Content */}
//         <div className="w-full lg:w-1/2 text-white space-y-8">
//           <div className="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full mb-4">
//             <span className="text-sm font-medium text-blue-300">AI-Powered Healthcare Solutions</span>
//           </div>
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Front Office</span> 
//             <br />for Healthcare Agents
//           </h1>
          
//           <p className="text-xl text-gray-300 leading-relaxed">
//             Launch your <span className="text-blue-400 font-semibold">AI Store</span> in minutes and 
//             scale your healthcare practice with powerful <span className="text-blue-400 font-semibold">Digital Marketing</span> tools.
//           </p>
          
//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <HcfSignupPopup 
//               popupButtonStatus 
//               buttonChildren={
//                 <Button block className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300">
//                   Get Started Free
//                 </Button>
//               } 
//             />
//             <button className="flex items-center justify-center gap-2 text-white bg-white bg-opacity-10 hover:bg-opacity-20 py-3 px-8 rounded-lg transition-all duration-300">
//               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20">
//                 <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M11 6.5L3 12V1L11 6.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Watch Demo
//             </button>
//           </div>
          
//           {/* Trust Badges */}
//           <div className="pt-8 border-t border-white border-opacity-10">
//             <p className="text-sm text-gray-400 mb-4">Trusted by healthcare professionals worldwide</p>
//             <div className="flex flex-wrap gap-x-12 gap-y-6">
//               <div className="flex flex-col items-start">
//                 <h3 className="text-3xl font-bold">
//                   2,100<span className="text-blue-400">+</span>
//                 </h3>
//                 <p className="text-sm text-gray-300">Qualified Doctors</p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <h3 className="text-3xl font-bold">
//                   1,000<span className="text-blue-400">+</span>
//                 </h3>
//                 <p className="text-sm text-gray-300">Partner Hospitals</p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <h3 className="text-3xl font-bold">
//                   800<span className="text-blue-400">+</span>
//                 </h3>
//                 <p className="text-sm text-gray-300">Treatment Plans</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Right Content - Dashboard Preview */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white border-opacity-10 bg-gradient-to-br from-gray-900 to-blue-900">
//             <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-4">
//               <div className="flex gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               <div className="mx-auto bg-gray-800 rounded-md px-4 py-1 text-xs text-gray-400">healthcare-ai-dashboard.app</div>
//             </div>
//             <div className="pt-12">
//               <img 
//                 src="/api/placeholder/800/500" 
//                 alt="AI Healthcare Dashboard" 
//                 className="w-full object-cover" 
//               />
//             </div>
//           </div>
          
//           {/* Floating elements */}
//           <div className="absolute -top-4 -right-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg transform rotate-3">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-white text-sm font-medium">AI Diagnosis Complete</p>
//                 <p className="text-xs text-gray-300">2 minutes ago</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="absolute -bottom-6 -left-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg transform -rotate-3">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
//                   <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-white text-sm font-medium">Patient Appointment</p>
//                 <p className="text-xs text-gray-300">Scheduled for tomorrow</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     );
// };

// export default HeroSection;


// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui';
// import HomeNavbar from '@/components/shared/HomeNav';
// import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
// import { motion } from 'framer-motion';

// interface HeroSectionProps {
//     scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
//     featuresRef: React.RefObject<HTMLElement>;
//     contactRef: React.RefObject<HTMLElement>;
//     aboutRef: React.RefObject<HTMLElement>;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//     scrollToSection,
//     featuresRef,
//     contactRef,
//     aboutRef,
// }) => {
//     const [isLoaded, setIsLoaded] = useState(false);
    
//     useEffect(() => {
//         setIsLoaded(true);
//     }, []);
    
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.3
//             }
//         }
//     };
    
//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: { 
//             y: 0, 
//             opacity: 1,
//             transition: { duration: 0.5 }
//         }
//     };

//     return (
//         <div className="relative w-full overflow-hidden bg-black min-h-screen">
//             {/* Gradient overlay and background effects */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Main background gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#01052f] to-indigo-950"></div>
                
//                 {/* Dynamic mesh gradient */}
//                 <div className="absolute top-0 left-0 w-full h-full opacity-40">
//                     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.3),transparent_70%)]"></div>
//                     <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(76,29,149,0.4),transparent_70%)]"></div>
//                 </div>
                
//                 {/* Grid pattern */}
//                 <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                
//                 {/* Animated particles effect (simplified with pseudo-elements) */}
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
//                     <div className="absolute top-3/4 left-2/3 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//                     <div className="absolute top-1/2 left-1/5 w-48 h-48 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//                 </div>
//             </div>
            
//             {/* Navigation Bar */}
//             <HomeNavbar
//                 scrollToSection={scrollToSection}
//                 featuresRef={featuresRef}
//                 contactRef={contactRef}
//                 aboutRef={aboutRef}
//             />
            
//             {/* Hero Content */}
//             <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16 min-h-[calc(100vh-80px)] flex items-center">
//                 <motion.div 
//                     className="w-full"
//                     initial="hidden"
//                     animate={isLoaded ? "visible" : "hidden"}
//                     variants={containerVariants}
//                 >
//                     <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//                         {/* Left Content - Text and CTA */}
//                         <motion.div className="w-full lg:w-1/2 text-white space-y-8" variants={itemVariants}>
//                             {/* Badge */}
//                             <motion.div 
//                                 className="inline-flex items-center px-4 py-2 space-x-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-md rounded-full border border-blue-500/20" 
//                                 variants={itemVariants}
//                             >
//                                 <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
//                                 <span className="text-sm font-medium text-blue-300">Revolutionizing Healthcare Management</span>
//                             </motion.div>
                            
//                             {/* Headline */}
//                             <motion.h1 
//                                 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" 
//                                 variants={itemVariants}
//                             >
//                                 <span className="block">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">AI-Powered</span></span>
//                                 <span className="block">Healthcare Platform</span>
//                             </motion.h1>
                            
//                             {/* Description */}
//                             <motion.p 
//                                 className="text-xl text-gray-300 leading-relaxed max-w-xl" 
//                                 variants={itemVariants}
//                             >
//                                 Deploy your <span className="text-blue-400 font-semibold">AI Health Store</span> in minutes. 
//                                 Streamline patient care, automate diagnostics, and scale your practice with 
//                                 powerful <span className="text-purple-400 font-semibold">Digital Marketing</span> tools.
//                             </motion.p>
                            
//                             {/* CTA Buttons */}
//                             <motion.div 
//                                 className="flex flex-col sm:flex-row gap-5 pt-8" 
//                                 variants={itemVariants}
//                             >
//                                 <HcfSignupPopup 
//                                     popupButtonStatus 
//                                     buttonChildren={
//                                         <Button className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300">
//                                             <span className="relative z-10">Get Started Free</span>
//                                             <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
//                                         </Button>
//                                     } 
//                                 />
//                                 <button className="group flex items-center justify-center gap-3 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 py-4 px-8 rounded-xl transition-all duration-300">
//                                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
//                                         <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M11 6.5L3 12V1L11 6.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                         </svg>
//                                     </span>
//                                     <span>Watch Demo</span>
//                                 </button>
//                             </motion.div>
                            
//                             {/* Trust Indicators */}
//                             <motion.div 
//                                 className="pt-12 border-t border-white/10" 
//                                 variants={itemVariants}
//                             >
//                                 <div className="flex items-center gap-2 mb-6">
//                                     <p className="text-sm text-gray-400">Trusted by healthcare leaders worldwide</p>
//                                     <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
//                                 </div>
                                
//                                 <div className="grid grid-cols-3 gap-6">
//                                     <div className="flex flex-col items-start">
//                                         <div className="flex items-baseline gap-1">
//                                             <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">2,100</h3>
//                                             <span className="text-lg text-indigo-400 font-bold">+</span>
//                                         </div>
//                                         <p className="text-sm text-gray-300">Qualified Doctors</p>
//                                     </div>
                                    
//                                     <div className="flex flex-col items-start">
//                                         <div className="flex items-baseline gap-1">
//                                             <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">1,000</h3>
//                                             <span className="text-lg text-indigo-400 font-bold">+</span>
//                                         </div>
//                                         <p className="text-sm text-gray-300">Partner Hospitals</p>
//                                     </div>
                                    
//                                     <div className="flex flex-col items-start">
//                                         <div className="flex items-baseline gap-1">
//                                             <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">800</h3>
//                                             <span className="text-lg text-indigo-400 font-bold">+</span>
//                                         </div>
//                                         <p className="text-sm text-gray-300">Treatment Plans</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </motion.div>
                        
//                         {/* Right Content - Interactive Dashboard Preview */}
//                         <motion.div 
//                             className="w-full lg:w-1/2 relative" 
//                             variants={itemVariants}
//                         >
//                             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10 bg-gradient-to-br from-gray-900 to-blue-950 backdrop-blur-md">
//                                 {/* Browser-like top bar */}
//                                 <div className="absolute top-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-md flex items-center px-4 border-b border-white/10">
//                                     <div className="flex gap-2">
//                                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                                     </div>
//                                     <div className="mx-auto bg-white/10 backdrop-blur-md rounded-md px-4 py-1 text-xs text-gray-300 flex items-center gap-2">
//                                         <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
//                                             <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                         </svg>
//                                         ai-health-dashboard.app
//                                     </div>
//                                 </div>
                                
//                                 {/* Dashboard image */}
//                                 <div className="pt-12">
//                                     <img 
//                                         src="/api/placeholder/800/500" 
//                                         alt="AI Healthcare Dashboard" 
//                                         className="w-full object-cover"
//                                     />
//                                 </div>
//                             </div>
                            
//                             {/* Floating notification cards */}
//                             <motion.div 
//                                 className="absolute -top-8 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10"
//                                 initial={{ opacity: 0, y: 20, rotate: 3 }}
//                                 animate={{ opacity: 1, y: 0, rotate: 3 }}
//                                 transition={{ delay: 0.8, duration: 0.5 }}
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/30">
//                                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <p className="text-white text-sm font-medium">AI Diagnosis Complete</p>
//                                         <div className="flex items-center gap-2">
//                                             <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
//                                             <p className="text-xs text-gray-300">2 minutes ago</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
                            
//                             <motion.div 
//                                 className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10"
//                                 initial={{ opacity: 0, y: 20, rotate: -3 }}
//                                 animate={{ opacity: 1, y: 0, rotate: -3 }}
//                                 transition={{ delay: 1, duration: 0.5 }}
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md shadow-green-500/30">
//                                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
//                                             <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                         </svg>
//                                     </div>
//                                     <div>
//                                         <p className="text-white text-sm font-medium">Patient Appointment</p>
//                                         <div className="flex items-center gap-2">
//                                             <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
//                                             <p className="text-xs text-gray-300">Scheduled for tomorrow</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* Interactive animated elements */}
//                             <motion.div 
//                                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/5 backdrop-blur-md rounded-full w-24 h-24 border border-white/10 flex items-center justify-center"
//                                 initial={{ scale: 0, opacity: 0 }}
//                                 animate={{ scale: 1, opacity: 1 }}
//                                 transition={{ delay: 1.2, duration: 0.5 }}
//                             >
//                                 <motion.div 
//                                     className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
//                                     animate={{ scale: [1, 1.1, 1] }}
//                                     transition={{ repeat: Infinity, duration: 2 }}
//                                 >
//                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                     </svg>
//                                 </motion.div>
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>
            
//             {/* Bottom gradient */}
//             <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
//         </div>
//     );
// };

// export default HeroSection;


import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-black min-h-screen">
            {/* Gradient overlay and background effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#01052f] to-indigo-950"></div>
                
                {/* Dynamic mesh gradient */}
                <div className="absolute top-0 left-0 w-full h-full opacity-40">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.3),transparent_70%)]"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(76,29,149,0.4),transparent_70%)]"></div>
                </div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                
                {/* Animated particles effect (simplified with pseudo-elements) */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
                    <div className="absolute top-3/4 left-2/3 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/5 w-48 h-48 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
            </div>
            
            {/* Navigation Bar - Fixed position with higher z-index */}
            <div className="sticky top-0 w-full z-50 bg-gradient-to-b from-blue-950/90 to-blue-950/70 backdrop-blur-md border-b border-white/10 shadow-md">
                <HomeNavbar
                    scrollToSection={scrollToSection}
                    featuresRef={featuresRef}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                />
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16 min-h-[calc(100vh-80px)] flex items-center">
                <motion.div 
                    className="w-full"
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Content - Text and CTA */}
                        <motion.div className="w-full lg:w-1/2 text-white space-y-8" variants={itemVariants}>
                            {/* Badge */}
                            <motion.div 
                                className="inline-flex items-center px-4 py-2 space-x-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20  backdrop-blur-md rounded-full border border-blue-500/20" 
                                variants={itemVariants}
                            >
                                <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
                                <span className="text-sm font-medium text-blue-300">Revolutionizing Healthcare Management</span>
                            </motion.div>
                            
                            {/* Headline */}
                            {/* <motion.h1 
                                className="text-5xl md:text-6xl lg:text-7xl font-bold  " 
                                variants={itemVariants}
                            >
                                <span className="block">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">AI-Powered</span></span>
                                <span className="block  ">Healthcare Platform</span>
                            </motion.h1> */}


<motion.h1 
    className="text-5xl md:text-6xl lg:text-7xl font-bold" 
    variants={itemVariants}
>
    <span className="block">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">AI-Powered</span>
    </span>
    <span className="block">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Healthcare Platform</span>
    </span>
</motion.h1>



                            
                            {/* Description */}
                            <motion.p 
                                className="text-xl text-gray-300 leading-relaxed max-w-xl" 
                                variants={itemVariants}
                            >
                                Deploy your <span className="text-blue-400 font-semibold">AI Health Store</span> in minutes. 
                                Streamline patient care, automate diagnostics, and scale your practice with 
                                powerful <span className="text-purple-400 font-semibold">Digital Marketing</span> tools.
                            </motion.p>
                            
                            {/* CTA Buttons */}
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-5 pt-8" 
                                variants={itemVariants}
                            >
                                <HcfSignupPopup 
                                    popupButtonStatus 
                                    buttonChildren={
                                        <Button className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300">
                                            <span className="relative z-10">Get Started Free</span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                                        </Button>
                                    } 
                                />
                                <button className="group flex items-center justify-center gap-3 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 py-4 px-8 rounded-xl transition-all duration-300">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 6.5L3 12V1L11 6.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span>Watch Demo</span>
                                </button>
                            </motion.div>
                            
                            {/* Trust Indicators */}
                            <motion.div 
                                className="pt-12 border-t border-white/10" 
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <p className="text-sm text-gray-400">Trusted by healthcare leaders worldwide</p>
                                    <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-baseline gap-1">
                                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">2,100</h3>
                                            <span className="text-lg text-indigo-400 font-bold">+</span>
                                        </div>
                                        <p className="text-sm text-gray-300">Qualified Doctors</p>
                                    </div>
                                    
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-baseline gap-1">
                                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">1,000</h3>
                                            <span className="text-lg text-indigo-400 font-bold">+</span>
                                        </div>
                                        <p className="text-sm text-gray-300">Partner Hospitals</p>
                                    </div>
                                    
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-baseline gap-1">
                                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">800</h3>
                                            <span className="text-lg text-indigo-400 font-bold">+</span>
                                        </div>
                                        <p className="text-sm text-gray-300">Treatment Plans</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Right Content - Interactive Dashboard Preview */}
                        <motion.div 
                            className="w-full lg:w-1/2 relative" 
                            variants={itemVariants}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10 bg-gradient-to-br from-gray-900 to-blue-950 backdrop-blur-md">
                                {/* Browser-like top bar */}
                                <div className="absolute top-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-md flex items-center px-4 border-b border-white/10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="mx-auto bg-white/10 backdrop-blur-md rounded-md px-4 py-1 text-xs text-gray-300 flex items-center gap-2">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        ai-health-dashboard.app
                                    </div>
                                </div>
                                
                                {/* Dashboard image */}
                                <div className="pt-12">
                                    <img 
                                        src="/api/placeholder/800/500" 
                                        alt="AI Healthcare Dashboard" 
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Floating notification cards */}
                            <motion.div 
                                className="absolute -top-8 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10"
                                initial={{ opacity: 0, y: 20, rotate: 3 }}
                                animate={{ opacity: 1, y: 0, rotate: 3 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/30">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">AI Diagnosis Complete</p>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                                            <p className="text-xs text-gray-300">2 minutes ago</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10"
                                initial={{ opacity: 0, y: 20, rotate: -3 }}
                                animate={{ opacity: 1, y: 0, rotate: -3 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md shadow-green-500/30">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                                            <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">Patient Appointment</p>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                                            <p className="text-xs text-gray-300">Scheduled for tomorrow</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Interactive animated elements */}
                            <motion.div 
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/5 backdrop-blur-md rounded-full w-24 h-24 border border-white/10 flex items-center justify-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                <motion.div 
                                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default HeroSection;