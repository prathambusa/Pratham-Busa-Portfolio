import React from 'react'
import { Brain, Target, Code, Database, ArrowLeft } from 'lucide-react'

function Skills() {
  const skills = [
    {
      icon: Target,
      title: "Product",
      items: [
        "Product Roadmapping",
        "User Research & Analytics",
        "Agile & Scrum Methodologies",
        "Go-to-Market Strategy",
        "A/B Testing & Optimization",
        "Product Analytics"
      ],
      level: "Advanced"
    },
    {
      icon: Brain,
      title: "AI/ML",
      items: [
        "TensorFlow & PyTorch",
        "Natural Language Processing",
        "Computer Vision",
        "MLOps & Model Deployment",
        "Reinforcement Learning",
        "Deep Learning Architectures"
      ],
      level: "Expert"
    },
    {
      icon: Database,
      title: "Data",
      items: [
        "SQL & NoSQL Databases",
        "Data Warehousing",
        "ETL Pipelines",
        "Data Visualization",
        "Statistical Analysis",
        "Big Data Technologies"
      ],
      level: "Advanced"
    },
    {
      icon: Code,
      title: "Software",
      items: [
        "React & Next.js",
        "Python & Node.js",
        "Cloud Architecture (AWS/GCP)",
        "Microservices & APIs",
        "Database Design",
        "DevOps & CI/CD"
      ],
      level: "Expert"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Journey through roles that shaped my expertise in product and data leadership
            </p>
          </div>

          <div className="relative">
            {/* Centered timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-purple-500"></div>
            
            <div className="space-y-16">
              {/* Harris County - Right side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Right */}
                <div className="w-5/12 ml-auto modern-card p-6 rounded-2xl">
                  <div className="text-purple-600 font-semibold mb-2">October 2025 – Present</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Product Manager</h3>
                  <p className="text-gray-600 font-medium mb-3">Harris County • Houston, TX</p>
                  <p className="text-gray-700 leading-relaxed">
                    Data & Financial Platforms
                  </p>
                </div>
              </div>

              {/* Trimlite LLC - Left side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Left */}
                <div className="w-5/12 mr-auto modern-card p-6 rounded-2xl text-right">
                  <div className="text-purple-600 font-semibold mb-2">November 2024 – June 2025</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">AI Product Manager</h3>
                  <p className="text-gray-600 font-medium mb-3">Trimlite LLC • Seattle, WA</p>
                  <p className="text-gray-700 leading-relaxed">
                    AI & Data Product Management
                  </p>
                </div>
              </div>

              {/* King County - Right side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Right */}
                <div className="w-5/12 ml-auto modern-card p-6 rounded-2xl">
                  <div className="text-purple-600 font-semibold mb-2">June 2024 – May 2025</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Product Data Analyst</h3>
                  <p className="text-gray-600 font-medium mb-3">King County • Seattle, WA</p>
                  <p className="text-gray-700 leading-relaxed">
                    Financial Analytics & Operations
                  </p>
                </div>
              </div>

              {/* Graduate Teaching Assistant - Left side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Left */}
                <div className="w-5/12 mr-auto modern-card p-6 rounded-2xl text-right">
                  <div className="text-purple-600 font-semibold mb-2">Sept 2023 – June 2025</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Graduate Teaching Assistant</h3>
                  <p className="text-gray-600 font-medium mb-3">University of Washington • Seattle, WA</p>
                  <p className="text-gray-700 leading-relaxed">
                    Management Consulting, Data Science, Cloud Architecture, Library Info Sciences
                  </p>
                </div>
              </div>

              {/* InCred Financial Services - Right side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Right */}
                <div className="w-5/12 ml-auto modern-card p-6 rounded-2xl">
                  <div className="text-purple-600 font-semibold mb-2">January 2023 – June 2023</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Product Data Scientist</h3>
                  <p className="text-gray-600 font-medium mb-3">InCred Financial Services • Mumbai, India</p>
                  <p className="text-gray-700 leading-relaxed">
                    Risk Analytics & FinTech
                  </p>
                </div>
              </div>
            {/* Chenoa Information Services - Left side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Left */}
                <div className="w-5/12 mr-auto modern-card p-6 rounded-2xl text-right">
                  <div className="text-purple-600 font-semibold mb-2">Jun 2022 – Dec 2022</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Software Engineering Intern</h3>
                  <p className="text-gray-600 font-medium mb-3">Chenoa Information Services • Mumbai, India</p>
                  <p className="text-gray-700 leading-relaxed">
                    Full-Stack Development & Cloud Infrastructure
                  </p>
                </div>
              </div>

              {/* Levyne - Right side */}
              <div className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content - Right */}
                <div className="w-5/12 ml-auto modern-card p-6 rounded-2xl">
                  <div className="text-purple-600 font-semibold mb-2">Mar 2021 – Aug 2021</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Software Engineering Intern</h3>
                  <p className="text-gray-600 font-medium mb-3">Levyne • Mumbai, India</p>
                  <p className="text-gray-700 leading-relaxed">
                    Mobile and Web App Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Skills</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-semibold tracking-tight">
              Bridging Technology and Product Innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="modern-card p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-gray-900">{skill.title}</h3>
                  <ul className="space-y-3 text-gray-700 font-medium">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-white">
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

export default Skills
