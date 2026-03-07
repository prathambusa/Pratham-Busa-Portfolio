import React, { useState } from 'react'
import { Mail, Phone, MapPin, Brain, Send, MessageSquare, Linkedin, ArrowLeft, Target, Lightbulb } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', project: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Contact Section - Primary View */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-semibold tracking-tight">
              Ready to Build Something Amazing Together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info - Left Side */}
            <div className="flex flex-col h-full">
              <div className="modern-card rounded-3xl p-8 flex-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-gray-900">Email</h3>
                      <p className="text-gray-700 font-medium">busapratham@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-gray-900">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/prathambusa15/" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        linkedin.com/in/prathambusa15
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-white font-bold text-sm">T</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-gray-900">Tableau</h3>
                      <a href="https://public.tableau.com/app/profile/prathambusa/vizzes" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        public.tableau.com/app/profile/prathambusa/vizzes
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-white font-bold text-sm">M</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-gray-900">Medium</h3>
                      <a href="https://medium.com/@prathamb" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        medium.com/@prathamb
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-gray-900">Location</h3>
                      <p className="text-gray-700 font-medium">United States</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-black mb-4 text-gray-900">What I Can Help With</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-gray-700" />
                      <span className="text-gray-700 font-medium">Product Strategy & Consulting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-gray-700" />
                      <span className="text-gray-700 font-medium">AI/ML Project Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-gray-700" />
                      <span className="text-gray-700 font-medium">Data Engineering/Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="flex flex-col h-full">
              <div className="modern-card rounded-3xl p-8 flex-1">
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Brain className="text-white" size={24} />
                    </div>
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Target className="text-gray-700" size={24} />
                    </div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <Lightbulb className="text-gray-700" size={24} />
                    </div>
                  </div>
                  <p className="text-center text-gray-700 font-medium text-lg">
                    Tell me about your project and how I can help bring your vision to life.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-300 font-medium"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-300 font-medium"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tell me about the role, project, or anything you'd like to discuss…</label>
                    <textarea 
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all duration-300 resize-none font-medium"
                      placeholder="Tell me about your project, goals, and how I can help..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg tracking-tight"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
