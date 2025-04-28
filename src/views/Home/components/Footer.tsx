import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-1 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="text-xl font-bold group-hover:text-violet-400 transition-colors duration-300">
                GoGetWell
              </span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-md">
              Empowering healthcare providers with AI-driven solutions to enhance patient care, streamline operations,
              and improve outcomes.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <Link
                  key={social}
                  to="#"
                  className="bg-slate-800 hover:bg-violet-600 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 transform-gpu hover:shadow-lg hover:shadow-violet-500/20"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {social === "twitter" && (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    )}
                    {social === "facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    )}
                    {social === "instagram" && <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>}
                    {social === "linkedin" && (
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-violet-300">Solutions</h3>
            <ul className="space-y-2">
              {["For Primary Care", "For Specialists", "For Hospitals", "For Telehealth", "For Billing"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="text-slate-400 hover:text-white transition-colors duration-300 relative group"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-violet-300">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Press", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    to="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-violet-300">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "Help Center", "Webinars", "Case Studies", "API Reference"].map((item, i) => (
                <li key={i}>
                  <Link
                    to="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2023 GoGetWell. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <Link
                key={i}
                to="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer