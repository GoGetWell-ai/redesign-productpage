import { Check } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small practices just getting started with digital transformation.",
      features: [
        "Up to 5 providers",
        "Basic appointment scheduling",
        "Patient portal",
        "Electronic health records",
        "Standard support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$999",
      description: "Ideal for growing practices with multiple departments and specialties.",
      features: [
        "Up to 20 providers",
        "Advanced scheduling with AI optimization",
        "Enhanced patient portal with messaging",
        "Comprehensive EHR with templates",
        "Telehealth integration",
        "Priority support",
        "Custom department modules",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large healthcare organizations with complex needs.",
      features: [
        "Unlimited providers",
        "Full AI suite with custom training",
        "Advanced analytics and reporting",
        "Custom integrations",
        "White-labeled patient experience",
        "24/7 dedicated support",
        "On-site implementation assistance",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-violet-200">
            Flexible Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
            Plans for Every Healthcare Organization
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your organization's size and needs, with the flexibility to scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative overflow-hidden hover:translate-y-[-10px] transition-all duration-500 reveal-on-scroll border rounded-lg bg-white ${
                plan.popular
                  ? "border-violet-600 shadow-lg shadow-violet-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${plan.popular ? "text-violet-600" : ""}`}>{plan.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className={`text-3xl font-bold ${plan.popular ? "text-violet-600" : ""}`}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-600 ml-1">/month</span>}
                </div>
                <p className="mt-2 text-slate-500">{plan.description}</p>
              </div>
              <div className="px-6 pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 group">
                      <div
                        className={`flex items-center justify-center h-5 w-5 rounded-full ${
                          plan.popular ? "bg-violet-100 text-violet-600" : "bg-emerald-100 text-emerald-500"
                        } group-hover:scale-110 transition-transform duration-300`}
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
                  className={`w-full py-2 rounded-md ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
                      : "bg-slate-900 hover:bg-slate-800"
                  } transition-all duration-300 hover:scale-105 transform-gpu text-white`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing