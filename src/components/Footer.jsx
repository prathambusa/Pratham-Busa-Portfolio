import React from 'react'
import { Brain, Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-gray-300" />
              <span className="text-2xl font-black">Pratham Busa</span>
            </div>
            <p className="text-gray-300 font-medium">
              Building the future with AI and innovative product solutions
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:pratham@example.com" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-600/50 pt-8 text-center">
          <p className="text-gray-300 font-medium">
            © 2025 Pratham Busa. All rights reserved. | 
            <span className="text-gray-400"> AI-Driven Developer & Product Strategist</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
