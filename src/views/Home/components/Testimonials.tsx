import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "GoGetWell has revolutionized how we manage patient interactions. The AI-powered documentation alone has saved our physicians hours each day.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      organization: "Metropolitan Health System",
    },
    {
      quote:
        "The department-specific features have been a game-changer for our multi-specialty practice. Each team has exactly what they need without the clutter.",
      author: "Michael Chen",
      role: "IT Director",
      organization: "Westside Medical Group",
    },
    {
      quote:
        "Patient satisfaction scores have increased by 35% since implementing GoGetWell. The intuitive interface and self-service options make all the difference.",
      author: "Dr. James Wilson",
      role: "Director of Patient Experience",
      organization: "Sunshine Health Partners",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-white/30">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trusted by Healthcare Leaders</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            See how healthcare organizations across the country have transformed their operations and patient care
            with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/20 transition-all duration-300 hover:translate-y-[-5px] reveal-on-scroll p-6 rounded-lg"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="inline-block h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-6 italic relative">
                <svg
                  className="absolute -top-4 -left-2 h-8 w-8 text-white/20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-3.22 3.59-5.39 3.59-5.39V2.24S6.66 4.41 5.33 8.14c-1.33 3.7-1.33 5.7-1.33 5.7h3.63c.45 0 .83.15 1.14.46.3.3.46.7.46 1.15 0 .46-.16.84-.46 1.14-.3.3-.7.45-1.14.45H3.3c-.45 0-.84-.15-1.14-.45-.3-.3-.46-.68-.46-1.14 0-3.54 1.05-6.42 3.14-8.65l-1.36.92c-.9.57-1.7.57-2.37 0-.36-.37-.54-.8-.54-1.3 0-.37.1-.7.33-1l2.38-3.24c.23-.3.5-.5.8-.6.9-.33 1.68-.1 2.3.7zm9.56 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-3.22 3.59-5.39 3.59-5.39V2.24s-4.45 2.17-5.78 5.9c-1.33 3.7-1.33 5.7-1.33 5.7h3.63c.45 0 .83.15 1.14.46.3.3.46.7.46 1.15 0 .46-.16.84-.46 1.14-.3.3-.7.45-1.14.45h-3.63c-.45 0-.84-.15-1.14-.45-.3-.3-.46-.68-.46-1.14 0-3.54 1.05-6.42 3.14-8.65l-1.36.92c-.9.57-1.7.57-2.37 0-.36-.37-.54-.8-.54-1.3 0-.37.1-.7.33-1l2.38-3.24c.23-.3.5-.5.8-.6.9-.33 1.68-.1 2.3.7z" />
                </svg>
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 overflow-hidden relative group">
                  <img
                    src={`/placeholder.svg?height=50&width=50&text=${testimonial.author.charAt(0)}`}
                    alt={testimonial.author}
                    className="h-full w-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-white/80">{testimonial.role}</div>
                  <div className="text-sm text-white/80">{testimonial.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials