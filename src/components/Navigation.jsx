import React, { useState } from 'react'
import { Github, Linkedin, Mail, Menu, X, Brain } from 'lucide-react'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full glass-effect z-50 border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-black text-gray-900 flex items-center gap-2">
            <Brain className="w-6 h-6 text-gray-700" />
            PB
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold tracking-tight">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold tracking-tight">About</a>
            <a href="/projects" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold tracking-tight">Projects</a>
            <a href="/skills" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold tracking-tight">Experience & Skills</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold tracking-tight">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-300 font-medium">Home</a>
            <a href="/about" className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-300 font-medium">About</a>
            <a href="/projects" className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-300 font-medium">Projects</a>
            <a href="/skills" className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-300 font-medium">Experience & Skills</a>
            <a href="/contact" className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all duration-300 font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
