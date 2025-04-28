import { useState, useEffect, useRef } from 'react'
import Header from './Home/components/Header'
import HeroSection from './Home/components/HeroSection'
import ClaimLandingSection from './Home/components/ClaimLandingSection'
import DepartmentTiles from './Home/components/DepartmentTiles'
import Features from './Home/components/Features'
import Testimonials from './Home/components/Testimonials'
import Pricing from './Home/components/Pricing'
import CTA from './Home/components/CTA'
import ContactForm from './Home/components/ContactForm'
import Footer from './Home/components/Footer'

const Views = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const featuresRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      <HeroSection
        scrollY={scrollY}
        scrollToSection={scrollToSection}
        featuresRef={featuresRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />
      <ClaimLandingSection isOpen={false} onClose={() => {}} />
      <DepartmentTiles />
      <div ref={featuresRef}>
        <Features />
      </div>
      <Testimonials />
      <Pricing />
      <CTA />
      <div ref={aboutRef}>
        {/* Place content here that belongs to About Section */}
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Views
