import React, { useState, useEffect, useRef } from 'react'
import { Brain, Target, GraduationCap, Calendar, MapPin, Award, Camera, Book, ChefHat, X, ChevronDown } from 'lucide-react'

function About() {
  const [showPersonalSection, setShowPersonalSection] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const scroll = () => {
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      } else {
        scrollPosition += scrollSpeed
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30) // ~33fps

    return () => clearInterval(intervalId)
  }, [showPersonalSection])
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Modern monochrome background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-50 via-white to-stone-50 opacity-60"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gray-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-10 w-36 h-36 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-gray-900">About Me</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-semibold tracking-tight">
              Building AI-Powered Solutions with Product Mindset
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              I'm a passionate software developer with expertise in AI/ML applications and product strategy. 
              With a keen eye for user experience and business impact, I specialize in building intelligent systems 
              that solve real-world problems at scale.
            </p>
          </div>
        </div>
      </section>

      {/* About Details Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="modern-card rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <Brain size={120} className="text-gray-700 relative z-10" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-6 text-gray-900">My Journey</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                Born and raised in Mumbai, India. From a young age I was always curious about how things worked and had this constant urge to build something meaningful, something that could leave a real impact. That curiosity eventually led me to study CS. But somewhere along the way I realized it was never just about writing code for me. What really fascinated me was the bigger picture: why products exist, how ideas turn into real solutions, and how technology can actually touch people's lives. The moment that truly changed things for me was when I got the chance to work on taking a product from an idea all the way to development and launch. Watching something go from a rough concept to a real product people could actually use was the kind of high I wanted to spend my life chasing. That realization eventually brought me to the United States to find my path into product management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 text-gray-900">Education</h2>
            <div className="w-24 h-1.5 bg-gray-800 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Academic foundation that fuels my passion for AI and product innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="modern-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2 text-gray-900">University of Washington</h3>
                  <p className="text-gray-600 font-medium mb-2">Master of Science in Information Management</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2023 - 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Seattle, WA
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      GPA 3.95/4.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 font-medium">Specialization: Data Science & Product Management</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Specialized in Artificial Intelligence and Machine Learning with focus on Natural Language Processing 
                  and Computer Vision. Completed thesis on "Deep Learning Applications in Product Analytics."
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Machine Learning</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Data Structures</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Algorithms</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Neural Networks</span>
                </div>
              </div>
            </div>

            <div className="modern-card p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2 text-gray-900">University of Mumbai</h3>
                  <p className="text-gray-600 font-medium mb-2">Bachelor of Technology in Computer Engineering</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2019 - 2023
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Mumbai, India
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      GPA 3.9/4.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 font-medium">Specialization: IT & Data Science</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive engineering program with focus on information technology and data science fundamentals. 
                  Developed strong foundation in algorithms, data structures, and software engineering principles.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Data Structures</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Algorithms</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Database Systems</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">Software Engineering</span>
                </div>
              </div>
            </div>

            </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-black mb-8 text-center text-gray-900">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="modern-card p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-black mb-2 text-gray-900">AWS Certified</h4>
                <p className="text-gray-600 font-medium">Certified Cloud Practitioner</p>
              </div>
              <div className="modern-card p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-black mb-2 text-gray-900">Google Cloud</h4>
                <p className="text-gray-600 font-medium">ML Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section Button */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={() => setShowPersonalSection(!showPersonalSection)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
          >
            {showPersonalSection ? 'Hide My Story' : 'Pssst... Wanna know more?'}
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showPersonalSection ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* Personal Section */}
      {showPersonalSection && (
        <section className="py-20 bg-gradient-to-br from-stone-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-gray-900">Who I Really Am</h2>
              <div className="w-24 h-1.5 bg-gray-800 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                Beyond the code and products, here's the story that shaped me
              </p>
            </div>

            {/* Theatre Story */}
            <div className="modern-card p-12 rounded-3xl mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">My Theatrical Journey</h3>
                  <p className="text-gray-600 font-medium">Actor, Writer, and Social Advocate</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">The Beginning</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    My theatrical worm began in school when I first discovered Shakespeare's "Merchant of Venice." 
                    The moment I read those lines, I was hooked. Can you guess who were my favorite characters to play? 
                    <span className="font-black text-gray-900"> Shylock and Gratiano</span> - the complexity and the theatrics were absolutely amazing!
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Those early experiences taught me about character depth, emotional expression, and the power of storytelling 
                    - skills that would later become invaluable in my professional life.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">College Theatre Troupe</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    During my undergraduate years, I was an active member of our college theatre team. We weren't just performing 
                    for entertainment - we were on a mission. We toured different colleges across Mumbai and India, using the powerful 
                    medium of theatre to spread important messages.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Voting Awareness Campaigns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Mental Health Advocacy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Women's Rights Initiatives</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl">
                <h4 className="text-xl font-black mb-4 text-gray-900">Our Impact</h4>
                <p className="text-gray-700 leading-relaxed">
                  Through street plays, stage performances, and short films, we reached thousands of students and community members. 
                  We tackled sensitive topics with creativity and empathy, sparking conversations that mattered. Those experiences taught me 
                  how to connect with diverse audiences, tell compelling stories, and drive meaningful change - lessons I carry with me 
                  in every product I build today.
                </p>
              </div>
            </div>

            {/* Books Section */}
            <div className="modern-card p-12 rounded-3xl mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <Book className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">Book Lover</h3>
                  <p className="text-gray-600 font-medium">Always Lost in a Good Story</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">My Reading Journey</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Books have been my constant companions since childhood. From the moment I discovered the magic of words, 
                    I knew reading would be a lifelong passion. Each book opened new worlds, introduced me to different perspectives, 
                    and shaped how I understand the world around me.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Literature taught me empathy, philosophy taught me critical thinking, and technical books expanded my mind. 
                    Every page turned was an investment in my intellectual and emotional growth.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">Favorite Genres</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Classic Literature</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Philosophy & Psychology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Technology & AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Biographies & Memoirs</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed">
                      "Reading expands my mind and fuels my creativity. Every book is a conversation with someone who might have lived centuries ago, 
                      yet speaks directly to my present moment."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photography Section */}
            <div className="modern-card p-12 rounded-3xl mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <Camera className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">Memory Keeper</h3>
                  <p className="text-gray-600 font-medium">Capturing Life Through My Lens</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">The Art of Seeing</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Photography taught me to see the world differently. Suddenly, ordinary moments became extraordinary, 
                    shadows told stories, and light became paint. My camera became an extension of my eyes, 
                    capturing emotions that words could never express.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From street photography in Mumbai's bustling lanes to quiet landscapes, each frame is a piece of time preserved forever. 
                    It's not just about taking pictures - it's about telling visual stories that resonate with the human experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">Photography Philosophy</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Candid Moments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Street & Documentary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Portrait Photography</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Nature & Landscapes</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed">
                      "Every picture tells a story and preserves the beauty of everyday life. Through my lens, I capture not just images, 
                      but emotions, memories, and moments that might otherwise fade away."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cooking Section */}
            <div className="modern-card p-12 rounded-3xl mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <ChefHat className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">Cooking for Love</h3>
                  <p className="text-gray-600 font-medium">The Kitchen is My Happy Place</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">Culinary Adventures</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cooking found me when I was looking for a way to express care. There's something magical about transforming 
                    raw ingredients into something that brings joy to others. The kitchen became my laboratory, my studio, 
                    and my sanctuary all in one.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From experimenting with traditional Indian recipes to exploring international cuisines, each dish is an adventure. 
                    The sizzle of spices, the aroma of fresh herbs, the satisfaction of a perfectly balanced flavor - 
                    these are the moments that make cooking so rewarding.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">What I Love to Cook</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Traditional Indian Cuisine</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Italian Pasta & Pizza</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Baking & Desserts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Fusion Experiments</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed">
                      "There's something magical about cooking for loved ones. It's my way of showing care and bringing people together. 
                      Every meal is an opportunity to create memories around the dining table."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery - Outside Card */}
            <div className="modern-card p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black mb-4 text-gray-900">Captured Moments</h3>
                <p className="text-gray-600 font-medium">A visual journey through my lens</p>
              </div>
              
              <div className="relative">
                {/* Automatic horizontal scroll container */}
                <div 
                  ref={scrollRef}
                  className="overflow-x-auto pb-4 scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex gap-4 min-w-max">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div 
                        key={num}
                        className="relative group cursor-pointer flex-shrink-0"
                        onClick={() => setSelectedImage(num)}
                      >
                        <div className="w-64 h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <Camera className="text-gray-400" size={48} />
                          <span className="absolute bottom-2 left-2 text-xs text-gray-600 font-medium">
                            Memory {num}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <p className="text-white text-sm font-medium">Click to view</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Auto-scroll indicator */}
                <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm text-gray-600 font-medium">⟳ Auto-scrolling</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-96 flex items-center justify-center">
              <Camera className="text-gray-400" size={64} />
              <span className="absolute bottom-4 left-4 text-lg text-gray-600 font-medium">
                Memory {selectedImage}
              </span>
            </div>
            <p className="text-white text-center mt-4 font-medium">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
