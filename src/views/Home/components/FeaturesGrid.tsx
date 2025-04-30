import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt />, title: "Custom AI-Powered Website", description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.", color: "bg-rose-400"
  },
  {
    icon: <FaUserSecret />, title: "Enhanced Patient Conversion", description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.", color: "bg-pink-500"
  },
  {
    icon: <BiMessageSquare />, title: "Real-Time Query Handling", description: "Instant response system for patient inquiries with AI-powered chat support.", color: "bg-orange-400"
  },
  {
    icon: <FiFileText />, title: "Medical Report Analysis", description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.", color: "bg-amber-400"
  },
  {
    icon: <BiTrendingUp />, title: "Improved Lead Generation", description: "Data-driven lead generation strategies to attract and engage potential patients.", color: "bg-red-400"
  },
  {
    icon: <BsDatabase />, title: "Comprehensive Healthcare Database", description: "Extensive medical information database for accurate patient guidance and support.", color: "bg-rose-500"
  },
  {
    icon: <LuLanguages />, title: "Multilingual Support", description: "Breaking language barriers with comprehensive multilingual communication tools.", color: "bg-pink-400"
  },
  {
    icon: <BiCreditCard />, title: "Seamless Payment Handling", description: "Secure and efficient payment processing for medical services globally.", color: "bg-orange-500"
  },
  {
    icon: <BiSearch />, title: "Marketing And SEO Support", description: "Optimized digital presence with advanced SEO and marketing strategies.", color: "bg-rose-300"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-rose-50 via-orange-50 to-pink-100 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-rose-900 mb-4 tracking-tight animate-slideInDown">
            Our Comprehensive Solutions
          </h2>
          <div className="h-1 w-24 bg-rose-500 mx-auto rounded-full animate-fadeIn delay-200"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-rose-100 shadow-xl transition-transform duration-500 hover:shadow-rose-300 hover:-translate-y-2 animate-fadeLift"
            >
              <div className="relative p-6 flex flex-col h-full">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-md transition-transform duration-300 ${solution.color} group-hover:scale-110 group-hover:rotate-6`}>
                  {solution.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-rose-900 transition-opacity duration-300 group-hover:opacity-90">
                  {solution.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed transition-opacity duration-300 group-hover:opacity-95">
                  {solution.description}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${solution.color} opacity-70`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;


@keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
@keyframes slideInDown { from {opacity: 0; transform: translateY(-20px);} to {opacity: 1; transform: translateY(0);} }
@keyframes fadeLift { from {opacity: 0; transform: translateY(20px);} to {opacity: 1; transform: translateY(0);} }


.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
.animate-slideInDown { animation: slideInDown 0.8s ease-out forwards; }
.animate-fadeLift { animation: fadeLift 0.8s ease-out forwards; }
