import React from "react";
import { Star } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  featuresRef,
  contactRef,
  aboutRef,
  scrollY,
}) => {
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 py-20 md:py-32">
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-10 bg-cover bg-center"
          style={parallaxStyle}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-indigo-600/90"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30 animate-pulse"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 8 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 inline-flex bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white/30 animate-fade-in-down">
            AI-Powered Healthcare Solutions
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl animate-fade-in-up">
            Transform Your Healthcare <br className="hidden md:block" />
            <span className="text-teal-300 relative inline-block">
              Digital Experience
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C32.3333 1.16667 96.6 -1.5 144 5.5C191.4 12.5 272.667 12.1667 299 5.5"
                  stroke="#5eead4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 animate-fade-in-up animation-delay-200">
            Leverage AI to streamline patient interactions, automate
            administrative tasks, and provide exceptional care across all your
            healthcare departments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <button className="bg-white text-violet-600 hover:bg-white/90 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/40 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto px-6 py-3 rounded-md font-medium">
              Schedule Demo
            </button>
            <button className="text-white border border-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto px-6 py-3 rounded-md font-medium">
              Explore Solutions
            </button>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-white bg-violet-200 transition-transform hover:translate-y-[-2px] duration-300"
                  >
                    <img
                      src={`/placeholder.svg?height=50&width=50&text=${i}`}
                      alt="User"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-white">
                Trusted by 500+ healthcare providers
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-white">
                4.9/5 from 2,000+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="none"
            className="w-full"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Scroll Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => scrollToSection(featuresRef)}
          className="bg-white text-violet-600 px-4 py-2 rounded-md font-semibold hover:bg-violet-100 transition"
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="bg-white text-violet-600 px-4 py-2 rounded-md font-semibold hover:bg-violet-100 transition"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="bg-white text-violet-600 px-4 py-2 rounded-md font-semibold hover:bg-violet-100 transition"
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default HeroSection;
