import { MessageSquare, Clock, Shield, Users } from 'lucide-react'

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-indigo-200">
            AI-Powered Platform
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our platform integrates cutting-edge AI technology with healthcare expertise to deliver a seamless
            experience for providers and patients alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-2xl bg-gradient-to-r from-violet-100 to-indigo-100 p-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
              <div className="rounded-xl overflow-hidden bg-white">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Provider+Dashboard"
                  alt="Provider Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
              Streamline Your Practice
            </h3>
            <p className="text-slate-600">
              Our comprehensive platform helps healthcare providers optimize workflows, reduce administrative
              burden, and focus more on patient care.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "AI-Powered Documentation",
                  description: "Automatically generate clinical notes from patient conversations.",
                  icon: <MessageSquare className="h-5 w-5 text-violet-600" />,
                },
                {
                  title: "Smart Scheduling",
                  description: "Optimize appointment slots and reduce no-shows with predictive analytics.",
                  icon: <Clock className="h-5 w-5 text-violet-600" />,
                },
                {
                  title: "Secure Patient Portal",
                  description: "HIPAA-compliant communication and document sharing with patients.",
                  icon: <Shield className="h-5 w-5 text-violet-600" />,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-4 group hover:bg-violet-50 p-3 rounded-lg transition-colors duration-300"
                >
                  <div className="mt-1 rounded-lg bg-violet-100 p-2 group-hover:bg-violet-200 transition-colors duration-300 group-hover:scale-110 transform-gpu">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-violet-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:translate-y-[-2px] text-white px-6 py-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent">
              Enhanced Patient Experience
            </h3>
            <p className="text-slate-600">
              Empower patients with intuitive tools for managing their healthcare journey, from appointment
              scheduling to accessing medical records.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Easy Appointment Booking",
                  description: "Book, reschedule, or cancel appointments with just a few clicks.",
                  icon: <Clock className="h-5 w-5 text-indigo-600" />,
                },
                {
                  title: "Secure Medical Records",
                  description: "Access your complete medical history anytime, anywhere.",
                  icon: <Shield className="h-5 w-5 text-indigo-600" />,
                },
                {
                  title: "Telehealth Integration",
                  description: "Connect with your healthcare provider through secure video consultations.",
                  icon: <Users className="h-5 w-5 text-indigo-600" />,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-4 group hover:bg-indigo-50 p-3 rounded-lg transition-colors duration-300"
                >
                  <div className="mt-1 rounded-lg bg-indigo-100 p-2 group-hover:bg-indigo-200 transition-colors duration-300 group-hover:scale-110 transform-gpu">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-indigo-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 hover:translate-y-[-2px] text-white px-6 py-2 rounded-md">
              Learn More
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-100 to-blue-100 p-1 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
              <div className="rounded-xl overflow-hidden bg-white">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Patient+Portal"
                  alt="Patient Portal"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features