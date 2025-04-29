import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

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


    return (
         
<div className="bg-gradient-to-br from-blue-950 via-[#01052f] to-indigo-900 w-full relative overflow-hidden">
  {/* Abstract shapes for visual interest */}
  <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 z-0">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-40 right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
  </div>
  
  {/* Navigation Bar */}
  <HomeNavbar
    scrollToSection={scrollToSection}
    featuresRef={featuresRef}
    contactRef={contactRef}
    aboutRef={aboutRef}
  />

  {/* Hero Content */}
  <div className="min-h-screen flex items-center py-16">
    {/* Background grid pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
    
    {/* Main Content Container */}
    <div className="container mx-auto px-4 lg:px-8 z-10 relative">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-300">AI-Powered Healthcare Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Front Office</span> 
            <br />for Healthcare Agents
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Launch your <span className="text-blue-400 font-semibold">AI Store</span> in minutes and 
            scale your healthcare practice with powerful <span className="text-blue-400 font-semibold">Digital Marketing</span> tools.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <HcfSignupPopup 
              popupButtonStatus 
              buttonChildren={
                <Button block className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300">
                  Get Started Free
                </Button>
              } 
            />
            <button className="flex items-center justify-center gap-2 text-white bg-white bg-opacity-10 hover:bg-opacity-20 py-3 px-8 rounded-lg transition-all duration-300">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6.5L3 12V1L11 6.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Watch Demo
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className="pt-8 border-t border-white border-opacity-10">
            <p className="text-sm text-gray-400 mb-4">Trusted by healthcare professionals worldwide</p>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col items-start">
                <h3 className="text-3xl font-bold">
                  2,100<span className="text-blue-400">+</span>
                </h3>
                <p className="text-sm text-gray-300">Qualified Doctors</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-3xl font-bold">
                  1,000<span className="text-blue-400">+</span>
                </h3>
                <p className="text-sm text-gray-300">Partner Hospitals</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-3xl font-bold">
                  800<span className="text-blue-400">+</span>
                </h3>
                <p className="text-sm text-gray-300">Treatment Plans</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Dashboard Preview */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white border-opacity-10 bg-gradient-to-br from-gray-900 to-blue-900">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-gray-800 rounded-md px-4 py-1 text-xs text-gray-400">healthcare-ai-dashboard.app</div>
            </div>
            <div className="pt-12">
              <img 
                src="/api/placeholder/800/500" 
                alt="AI Healthcare Dashboard" 
                className="w-full object-cover" 
              />
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg transform rotate-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">AI Diagnosis Complete</p>
                <p className="text-xs text-gray-300">2 minutes ago</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg transform -rotate-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Patient Appointment</p>
                <p className="text-xs text-gray-300">Scheduled for tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default HeroSection;