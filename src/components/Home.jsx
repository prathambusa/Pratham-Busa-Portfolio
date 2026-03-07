import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Menu, X, Brain, TrendingUp } from 'lucide-react'

function Home() {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  const texts = ['AI-Driven Product-Focused Builder', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast']
  
  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(typeInterval)
  }, [currentTextIndex])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Modern monochrome background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-stone-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-50 via-white to-amber-50 opacity-60"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gray-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-10 w-36 h-36 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Pratham Busa</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-semibold tracking-tight typing-animation" style={{minHeight: '2.5rem'}}>
              {displayText}
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Building intelligent solutions at the intersection of AI and product innovation. 
              Passionate about creating impactful software that drives business value and user delight.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <a 
                href="/projects"
                className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg tracking-tight flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View My Work
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold text-lg tracking-tight"
              >
                Get In Touch
              </a>
            </div>
            
                        
                      </div>
        </div>
      </section>

          </div>
  )
}

export default Home
