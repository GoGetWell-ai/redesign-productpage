 


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  User, 
  Send, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  
  const [focused, setFocused] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ fullname: '', email: '', message: '' });
      // Add your actual form submission logic here
    }, 1500);
  };
  
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br bg-white" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="md:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md:leading-tight">
                Let's start a conversation
              </h2>
              <p className="text-gray-600 text-lg">
                Have questions? Need help? Our support team is ready to assist you with any inquiries about GoGetWell.AI.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Details */}
              <div className="flex items-center space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-all border border-gray-100">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call us at</p>
                  <a 
                    href="tel:+919811396858" 
                    className="text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                  >
                    +91 9811396858
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-all border border-gray-100">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email us at</p>
                  <a 
                    href="mailto:hello@gogetwell.ai" 
                    className="text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                  >
                    hello@gogetwell.ai
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Connect With Us</h3>
              <div className="flex space-x-3">
                <Link 
                  to="https://x.com/gogetwellai"
                  target="_blank"
                  className="flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all border border-gray-100"
                >
                  <Twitter className="w-4 h-4 text-indigo-600" />
                </Link>
                <Link 
                  to="https://www.linkedin.com/company/gogetwellai/" 
                  target="_blank"
                  className="flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all border border-gray-100"
                >
                  <Linkedin className="w-4 h-4 text-indigo-600" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-8 md:p-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                    <div className="relative">
                      <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                        focused === 'fullname' || formState.fullname 
                          ? 'text-indigo-600' 
                          : 'text-gray-400'
                      }`}>
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        placeholder="Enter your name"
                        value={formState.fullname}
                        onChange={handleChange}
                        onFocus={() => setFocused('fullname')}
                        onBlur={() => setFocused('')}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <div className="relative">
                      <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                        focused === 'email' || formState.email 
                          ? 'text-indigo-600' 
                          : 'text-gray-400'
                      }`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <div className="relative">
                      <div className={`absolute left-3 top-4 ${
                        focused === 'message' || formState.message 
                          ? 'text-indigo-600' 
                          : 'text-gray-400'
                      }`}>
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span>Send Message</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Form Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactForm;

 