import React, { useState, useEffect, useRef } from 'react'
import { Brain, Target, GraduationCap, Calendar, MapPin, Award, Camera, Book, ChefHat, X, ChevronDown } from 'lucide-react'

function About() {
  const [showPersonalSection, setShowPersonalSection] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const theatreScrollRef = useRef(null)
  const booksScrollRef = useRef(null)
  const photoScrollRef = useRef(null)
  const cookingScrollRef = useRef(null)

  useEffect(() => {
    const refs = [theatreScrollRef, booksScrollRef, photoScrollRef, cookingScrollRef]
    const positions = refs.map(() => 0)
    const scrollSpeed = 1

    const scroll = () => {
      refs.forEach((ref, i) => {
        const el = ref.current
        if (!el) return
        const halfScroll = (el.scrollWidth - el.clientWidth) / 2
        if (halfScroll <= 0) return
        positions[i] += scrollSpeed
        if (positions[i] >= halfScroll) positions[i] = 0
        el.scrollLeft = positions[i]
      })
    }

    const intervalId = setInterval(scroll, 30)
    return () => clearInterval(intervalId)
  }, [showPersonalSection])
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-6 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Modern monochrome background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-50 via-white to-stone-50 opacity-60"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gray-200/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-24 sm:w-48 h-24 sm:h-48 bg-gray-300/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-20 sm:w-40 h-20 sm:h-40 bg-gray-200/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 sm:bottom-40 right-5 sm:right-10 w-16 sm:w-36 h-16 sm:h-36 bg-gray-300/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
              </section>

      {/* About Details Section */}
      <section className="py-24 sm:py-32 md:py-48 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900">My Journey</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg font-medium">
                Born and raised in Mumbai, India. From a young age I was always curious about how things worked and had this constant urge to build something meaningful, something that could leave a real impact. That curiosity eventually led me to study CS. But somewhere along the way I realized it was never just about writing code for me. What really fascinated me was the bigger picture: why products exist, how ideas turn into real solutions, and how technology can actually touch people's lives. The moment that truly changed things for me was when I got the chance to work on taking a product from an idea all the way to development and launch. Watching something go from a rough concept to a real product people could actually use was the kind of high I wanted to spend my life chasing. That realization eventually brought me to the United States to find my path into product management.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="modern-card rounded-2xl sm:rounded-3xl h-64 sm:h-80 md:h-[28rem] flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/images/IMG_1278.jpg" 
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">Education</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gray-800 mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-3xl mx-auto px-4">
              Academic foundation that fuels my passion for AI and product innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="modern-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2 text-gray-900">University of Washington</h3>
                  <p className="text-gray-600 font-medium mb-2 text-sm sm:text-base">Master of Science in Information Management</p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 font-medium">
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
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-black mb-2 text-gray-900">Scrum Alliance</h4>
                <p className="text-gray-600 font-medium">Certified Scrum Product Owner</p>
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
                    During my undergraduate years, I was an active member of our college theatre team, <span className="font-black text-gray-900">Team Rhapsody</span>. We weren't just performing 
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

              {/* Theatre Carousel */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <div
                  ref={theatreScrollRef}
                  className="overflow-x-auto"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="flex gap-3" style={{ width: 'max-content' }}>
                    {[
                      '/images/theatre/10712.JPG',
                      '/images/theatre/10713.jpg',
                      '/images/theatre/107471.jpg',
                      '/images/theatre/3915.JPG',
                      '/images/theatre/5241.jpg',
                      '/images/theatre/6066.JPG',
                      '/images/theatre/80968.JPG',
                      '/images/theatre/80970.jpg',
                      '/images/theatre/82752.JPG',
                      '/images/theatre/IMG_7589.JPG',
                      '/images/theatre/10712.JPG',
                      '/images/theatre/10713.jpg',
                      '/images/theatre/107471.jpg',
                      '/images/theatre/3915.JPG',
                      '/images/theatre/5241.jpg',
                      '/images/theatre/6066.JPG',
                      '/images/theatre/80968.JPG',
                      '/images/theatre/80970.jpg',
                      '/images/theatre/82752.JPG',
                      '/images/theatre/IMG_7589.JPG',
                    ].map((src, i) => (
                      <div key={`theatre-${i}`} className="relative group cursor-pointer flex-shrink-0" style={{ width: 'calc((100vw - 10rem) / 10)' }}>
                        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <p className="text-white text-xs font-medium">View</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                    Books have been my constant companions since childhood. From the moment I discovered the magic of words, I knew reading would be a lifelong passion. Each book opened new worlds, introduced me to different perspectives, and shaped how I understand the world around me. The <span className="font-black text-gray-900">Harry Potter</span> series, in particular, holds a special place in my heart - it taught me about friendship, courage, and the power of love in the face of darkness.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you feel an uncontrollable urge to reach out… don't worry about it. Totally normal. Definitely not the Imperius Curse.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-black mb-4 text-gray-900">Favorite Genres</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Psychological Thrillers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Science Fiction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Self Help</span>
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

              {/* Books Carousel */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <div
                  ref={booksScrollRef}
                  className="overflow-x-auto"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="flex gap-3" style={{ width: 'max-content' }}>
                    {[
                      '/images/books/61848.JPG',
                      '/images/books/87549.JPG',
                      '/images/books/IMG_3728.JPG',
                      '/images/books/IMG_5249.JPG',
                      '/images/books/IMG_7390.JPG',
                      '/images/books/cpm35 2025-09-17 182931.351.JPG',
                      '/images/books/61848.JPG',
                      '/images/books/87549.JPG',
                      '/images/books/IMG_3728.JPG',
                      '/images/books/IMG_5249.JPG',
                      '/images/books/IMG_7390.JPG',
                      '/images/books/cpm35 2025-09-17 182931.351.JPG',
                    ].map((src, i) => (
                      <div key={`book-${i}`} className="relative group cursor-pointer flex-shrink-0" style={{ width: 'calc((100vw - 10rem) / 10)' }}>
                        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <p className="text-white text-xs font-medium">View</p>
                        </div>
                      </div>
                    ))}
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
                    From the chaotic, colorful streets of Mumbai to the dreamy, ever-changing skies of Seattle, my camera has followed me through two completely different worlds. In India, everything moves fast. There's energy everywhere. In Seattle, I found myself constantly looking up. The skies here have a way of stealing the show, whether it's soft sunsets, dramatic clouds, or that rare, perfect blue.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I won't call myself a professional photographer… but I have, very confidently, single handedly upgraded my friends' Instagram game. At this point, I'm basically their unpaid creative director.
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
                      "For me, photography isn't about perfect shots. It's about capturing moments that feel real, slightly imperfect, and worth coming back to."
                    </p>
                  </div>
                </div>
              </div>

              {/* Photography Carousel */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <div
                  ref={photoScrollRef}
                  className="overflow-x-auto"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="flex gap-3" style={{ width: 'max-content' }}>
                    {[
                      '/images/photos/0A38C08C-B298-491F-92EB-84EA944E8329.PNG',
                      '/images/photos/111478.JPG',
                      '/images/photos/AD0939C7-10AF-4B52-990E-31A278610FEB.PNG',
                      '/images/photos/IMG_2079.jpg',
                      '/images/photos/IMG_3722.JPG',
                      '/images/photos/IMG_4077.JPG',
                      '/images/photos/IMG_4491.JPG',
                      '/images/photos/IMG_4917.JPG',
                      '/images/photos/IMG_7491.JPG',
                      '/images/photos/cpm35 2025-06-09 172622.376.JPG',
                      '/images/photos/cpm35 2025-06-09 200149.763.JPG',
                      '/images/photos/cpm35 2025-06-11 213031.220.JPG',
                      '/images/photos/cpm35 2025-06-13 174547.242.JPG',
                      '/images/photos/cpm35 2025-07-04 222207.346.JPG',
                      '/images/photos/cpm35 2025-08-09 162327.979.JPG',
                      '/images/photos/cpm35 2025-08-11 121236.628.JPG',
                      '/images/photos/cpm35 2025-08-24 120530.519.JPG',
                      '/images/photos/cpm35 2025-09-17 183940.691.JPG',
                      '/images/photos/cpm35 2025-09-17 184015.676.JPG',
                      '/images/photos/cpm35 2025-10-09 010337.123.jpg',
                      '/images/photos/0A38C08C-B298-491F-92EB-84EA944E8329.PNG',
                      '/images/photos/111478.JPG',
                      '/images/photos/AD0939C7-10AF-4B52-990E-31A278610FEB.PNG',
                      '/images/photos/IMG_2079.jpg',
                      '/images/photos/IMG_3722.JPG',
                      '/images/photos/IMG_4077.JPG',
                      '/images/photos/IMG_4491.JPG',
                      '/images/photos/IMG_4917.JPG',
                      '/images/photos/IMG_7491.JPG',
                      '/images/photos/cpm35 2025-06-09 172622.376.JPG',
                      '/images/photos/cpm35 2025-06-09 200149.763.JPG',
                      '/images/photos/cpm35 2025-06-11 213031.220.JPG',
                      '/images/photos/cpm35 2025-06-13 174547.242.JPG',
                      '/images/photos/cpm35 2025-07-04 222207.346.JPG',
                      '/images/photos/cpm35 2025-08-09 162327.979.JPG',
                      '/images/photos/cpm35 2025-08-11 121236.628.JPG',
                      '/images/photos/cpm35 2025-08-24 120530.519.JPG',
                      '/images/photos/cpm35 2025-09-17 183940.691.JPG',
                      '/images/photos/cpm35 2025-09-17 184015.676.JPG',
                      '/images/photos/cpm35 2025-10-09 010337.123.jpg',
                    ].map((src, i) => (
                      <div key={`photo-${i}`} className="relative group cursor-pointer flex-shrink-0" style={{ width: 'calc((100vw - 10rem) / 10)' }}>
                        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <p className="text-white text-xs font-medium">View</p>
                        </div>
                      </div>
                    ))}
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
                    My cooking journey started pretty randomly. Right after high school, my friends and I got bored of playing badminton and cricket every day, so we signed up for cooking classes. Somehow, that stuck. Back home in India, I started cooking to help my mom out… but ended up getting more compliments than she did. That's still a running joke.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Over time, the kitchen became my escape. Part experiment lab, part creative studio. I've always enjoyed recreating flavors from home while exploring new ones that I found here.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As an international student, days can get hectic, but cooking for my roommates was always the reset. Feeding 4–5 people, sharing meals, and seeing their reactions made it all worth it. At this point, if it works, it's skill. If it doesn't, it's "iteration."
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
                      <span className="text-gray-700 font-medium">Pastas & Risottos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Ramen & Dumplings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Baking & Desserts</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed">
                      "Cooking, in a weird way, feels a lot like product management to me. There's always a lot going on. You're prepping, multitasking, managing dependencies, making sure nothing breaks or burns. Sometimes I've even "led" the kitchen with friends, delegating tasks based on strengths, all of us working together to bring one dish to life."
                    </p>
                  </div>
                </div>
              </div>

              {/* Cooking Carousel */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <div
                  ref={cookingScrollRef}
                  className="overflow-x-auto"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="flex gap-3" style={{ width: 'max-content' }}>
                    {[
                      '/images/food/48587.JPG',
                      '/images/food/50413.JPG',
                      '/images/food/7705.JPG',
                      '/images/food/7972.JPG',
                      '/images/food/IMG_2145.JPG',
                      '/images/food/IMG_6848.JPG',
                      '/images/food/IMG_7383.JPG',
                      '/images/food/IMG_7446.JPG',
                      '/images/food/48587.JPG',
                      '/images/food/50413.JPG',
                      '/images/food/7705.JPG',
                      '/images/food/7972.JPG',
                      '/images/food/IMG_2145.JPG',
                      '/images/food/IMG_6848.JPG',
                      '/images/food/IMG_7383.JPG',
                      '/images/food/IMG_7446.JPG',
                    ].map((src, i) => (
                      <div key={`cooking-${i}`} className="relative group cursor-pointer flex-shrink-0" style={{ width: 'calc((100vw - 10rem) / 10)' }}>
                        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <p className="text-white text-xs font-medium">View</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default About
