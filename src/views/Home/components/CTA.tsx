import { Sparkles } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-5 bg-cover bg-center"></div>
      </div>

      {/* Floating elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-float"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10 reveal-on-scroll">
        <div className="inline-flex bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-white/30">
          Get Started Today
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to Transform Your Healthcare Organization?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Join hundreds of healthcare providers who have already revolutionized their practice with our AI-powered
          platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-violet-600 hover:bg-white/90 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/40 transition-all duration-300 hover:translate-y-[-2px] group w-full sm:w-auto px-6 py-3 rounded-md font-medium">
            <span>Schedule Demo</span>
            <Sparkles className="ml-2 h-4 w-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="text-white border border-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto px-6 py-3 rounded-md font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA