const ContactForm = () => {
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 reveal-on-scroll">
            <div className="inline-flex bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-violet-200">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
              Have Questions? Contact Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team is ready to answer your questions and help you find the right solution for your healthcare organization.
            </p>
          </div>
          
          <div className="border-0 shadow-lg reveal-on-scroll bg-white rounded-lg">
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium">
                    Organization
                  </label>
                  <input
                    id="organization"
                    type="text"
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Your Healthcare Organization"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 text-white py-2 rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ContactForm