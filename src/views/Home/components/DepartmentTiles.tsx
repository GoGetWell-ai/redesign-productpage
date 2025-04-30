import { Check } from 'lucide-react'

const DepartmentTiles = () => {
  const departments = [
    {
      title: "Primary Care",
      description: "Streamline appointments, patient records, and follow-ups for general practitioners.",
      icon: "🏥",
      color: "from-emerald-500 to-teal-500",
      features: ["Patient scheduling", "Medical history tracking", "Prescription management"],
    },
    {
      title: "Cardiology",
      description: "Advanced tools for heart monitoring, test results, and specialized patient care.",
      icon: "❤️",
      color: "from-red-500 to-pink-500",
      features: ["ECG integration", "Cardiac monitoring", "Risk assessment tools"],
    },
    {
      title: "Pediatrics",
      description: "Child-friendly interfaces and specialized tools for pediatric care management.",
      icon: "👶",
      color: "from-blue-500 to-cyan-500",
      features: ["Growth tracking", "Vaccination schedules", "Parent portal"],
    },
    {
      title: "Radiology",
      description: "Seamless image management, reporting, and integration with diagnostic tools.",
      icon: "🔬",
      color: "from-violet-500 to-purple-500",
      features: ["Image storage & sharing", "AI-assisted diagnosis", "Report generation"],
    },
    {
      title: "Orthopedics",
      description: "Specialized tools for bone and joint care, rehabilitation tracking, and surgery planning.",
      icon: "🦴",
      color: "from-amber-500 to-orange-500",
      features: ["3D anatomy visualization", "Rehabilitation tracking", "Surgery planning"],
    },
    {
      title: "Mental Health",
      description: "Secure platforms for therapy sessions, patient progress tracking, and resource sharing.",
      icon: "🧠",
      color: "from-indigo-500 to-blue-500",
      features: ["Telehealth integration", "Mood tracking", "Resource library"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, #6d28d9 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-violet-200">
            Specialized Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
            Tailored for Every Department
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our comprehensive platform offers specialized tools for each department in your healthcare organization,
            ensuring seamless operations and improved patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <div
              key={i}
              className="overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-500  bg-white rounded-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${dept.color}`}></div>
              <div className="pt-6 px-6">
                <div className="flex justify-between items-start">
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {dept.icon}
                  </div>
                  <div className="inline-flex border border-slate-200 text-xs px-2 py-1 rounded-full">
                    Department
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-violet-600 transition-colors duration-300">
                  {dept.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">{dept.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {dept.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${j * 0.05}s` }}
                    >
                      <div
                        className={`h-5 w-5 rounded-full flex items-center justify-center bg-gradient-to-r ${dept.color} text-white`}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button
                  className="w-full justify-between group-hover:text-violet-600 transition-colors relative overflow-hidden flex items-center py-2 text-sm font-medium"
                >
                  <span className="relative z-10">Explore Solutions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-violet-50 group-hover:w-full transition-all duration-300 ease-out"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentTiles