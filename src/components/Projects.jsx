import React, { useState } from 'react'
import { Brain, Github, ExternalLink, Lightbulb, ArrowLeft, FileText } from 'lucide-react'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const projects = [
    {
      title: "Spotify",
      description: "Developed Spotify Spotlight, a fan-driven engagement feature allowing Premium users to vote on artist collaborations and access exclusive content, enhancing user experience and retention.",
      tech: ["Fan Engagement", "User Growth", "Monetization", "Agile Development"],
      metrics: "Product Strategy",
      category: "Product",
      details: "Conducted market research and competitive benchmarking to validate feature viability, defining a data-driven roadmap to optimize engagement, increase premium subscriptions, and drive artist-fan interactions."
    },
    {
      title: "DoorDash",
      description: "Conducted an in-depth teardown of DoorDash's product strategy, analysing pain points in customer experience and competitive positioning to identify growth opportunities.",
      tech: ["User Retention", "Competitive Positioning", "Feature Prioritization"],
      metrics: "Product Strategy",
      category: "Product",
      details: "Proposed a roadmap for feature enhancements, including UI/UX optimizations and personalized incentives, leading to a projected 10% boost in user engagement and 5% improvement in order conversion rates."
    },
    {
      title: "BrandBridge",
      description: "Designed, coded, and deployed an end-to-end AI-native platform with a FastAPI backend, SQLite database, and Netlify frontend; created wireframes in Figma to guide UI layout, enabling brands to intelligently discover and collaborate with creators for targeted campaigns.",
      tech: ["Python", "Open AI API", "FastAPI", "SQLite", "Netlify", "Docker", "Figma"],
      metrics: "Agentic AI",
      category: "AI/Machine Learning",
      details: "Integrated Open AI API + embeddings to deliver high-quality recommendations, containerized the system with Docker for reproducibility, and shipped a scrappy prototype from ideation to deployment that demonstrated full-stack product building."
    },
    {
      title: "YaarAI",
      description: "Orchestrated multi-agent flows for research, drafting, and review using LangChain and function calling, integrated retrieval over enterprise knowledge with embeddings and metadata filters.",
      tech: ["Python", "Streamlit", "NLP", "Sentiment Analysis", "Conversational AI", "Multi-Agent Systems"],
      metrics: "Agentic AI",
      category: "AI/Machine Learning",
      details: "Designed and deployed modular AI agents for sentiment analysis, intent classification, and dynamic response generation. Developed an interactive Streamlit-based UI for real-time inference, with a roadmap for React-based front-end and text-to-speech integration."
    },
    {
      title: "RedShield (WIP)",
      description: "A defence layer that detects and mitigates prompt injection and data exfiltration attempts using attack pattern libraries, heuristic and model-based classifiers, and streaming output filters; isolating tool calls with sandboxed execution and least-privilege policies.",
      tech: ["Python", "FastAPI", "LangChain", "Docker", "Postgres", "AWS", "LLMOps"],
      metrics: "AI Security/Red Teaming",
      category: "AI/Machine Learning",
      details: "Establishing an evaluation harness with seeded red-team scenarios, jailbreak taxonomies, and regression tests; implementing allow lists and blocklists, audit logs, and configurable policy rules to harden LLM apps in production-like environments."
    },
    {
      title: "Cloud-Powered ETL & Analytics Pipeline",
      description: "Engineered a serverless ETL pipeline using AWS Glue, S3, and Athena, automating data extraction, transformation, and storage to enhance scalability and performance.",
      tech: ["Amazon Web Services", "ETL", "Data Engineering", "Cloud Computing", "Business Intelligence Tools"],
      metrics: "Cloud/Data Engineering",
      category: "Data Engineering/Analytics",
      details: "Optimized AWS Athena queries by partitioning structured datasets, reducing scan size and query time by 40%, and built an Amazon QuickSight dashboard for sales trends, revenue distribution, and product performance, leveraging AWS-native solutions."
    },
    {
      title: "Fake News Detection",
      description: "Developed a hybrid deep learning model (LSTM with attention mechanisms) to enhance detection of context-aware misinformation, implementing batch normalization and dropout for improved model generalization.",
      tech: ["Advanced Data Science", "Data Engineering", "Data Management & Scaling"],
      metrics: "NLP/ML",
      category: "AI/Machine Learning",
      details: "Employed distributed computing frameworks to accelerate TF-IDF vectorization and LSTM training, boosting data processing speeds by 40% for efficient large-scale classification tasks."
    },
    {
      title: "HR Analytics Dashboard",
      description: "Designed an interactive Tableau dashboard with 15+ dynamic visualizations including KPIs, heatmaps, and trend charts to analyze key HR metrics such as hiring funnel efficiency, gender diversity, and workforce distribution across departments and locations.",
      tech: ["Tableau", "Excel", "Python", "Data Visualization", "Predictive Analytics"],
      metrics: "November 2024",
      category: "Data Engineering/Analytics",
      details: "Conducted in-depth analysis on employee pay, performance, and educational background using Python, Excel, and VBA, uncovering significant disparities that informed DEI strategy and helped improve workforce planning and equity-based decision-making."
    },
    {
      title: "Spotify Data Analysis",
      description: "Uncovering patterns, insights, and surprises in my own Spotify listening data—because data never lies, but my playlists might! Extracted personal Spotify data using API, processed with Pandas, and created visualizations to identify peak listening hours and artist preferences.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Spotify API", "Data Visualization"],
      metrics: "Personal Data Analysis",
      category: "Data Engineering/Analytics",
      details: "Analyzed personal Spotify listening history to uncover trends in music consumption patterns, identified peak listening times, and explored artist preferences through data visualization and statistical analysis."
    },
    {
      title: "Crime Data Analysis",
      description: "Predictive analysis of crime patterns in New York and Chicago using supervised learning models to analyze correlations between crime rates and geographical, temporal, and legal factors.",
      tech: ["Python", "Random Forest", "XGBoost", "ARIMA", "Pandas", "Machine Learning"],
      metrics: "Predictive Analytics",
      category: "Data Engineering/Analytics",
      details: "Applied regression models, Random Forest, and XGBoost to capture complex relationships between crime indicators. Used ARIMA for time series analysis to predict crime patterns and inform public safety policy making."
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations and intuitive navigation.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide Icons"],
      metrics: "2025",
      category: "Web Development",
      details: "Built a single-page application with React and Vite for optimal performance, featuring a clean monochrome design, project filtering system, and fully responsive layout for all devices."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Categories Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['All Projects', 'Product', 'AI/Machine Learning', 'Data Engineering/Analytics', 'Web Development'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                  activeFilter === filter
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => activeFilter === 'All Projects' || (Array.isArray(project.category) ? project.category.includes(activeFilter) : project.category === activeFilter)).map((project, index) => (
              <div key={index} className="modern-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group">
                <div className="h-48 bg-gray-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <Brain size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {project.metrics}
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.title === "Spotify" ? (
                      <a href="https://medium.com/@prathamb/spotify-spotlight-redefining-fan-engagement-and-artist-collaboration-401ed21845a5" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <FileText size={16} /> Article
                      </a>
                    ) : project.title === "DoorDash" ? (
                      <a href="https://medium.com/@prathamb/doordash-product-teardown-6c46ceb55b14" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <FileText size={16} /> Article
                      </a>
                    ) : project.title === "BrandBridge" ? (
                      <a href="https://github.com/prathambusa/BrandBridge" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <Github size={16} /> Code
                      </a>
                    ) : project.title === "YaarAI" ? (
                      <a href="https://github.com/prathambusa/YaarAI" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <Github size={16} /> Code
                      </a>
                    ) : project.title === "RedShield (WIP)" ? (
                      <div className="flex gap-3"></div>
                    ) : project.title === "Cloud-Powered ETL & Analytics Pipeline" ? (
                      <a href="https://www.linkedin.com/posts/prathambusa15_cloudjobs-dataengineering-awscloud-activity-7293328055559757827-Pjym?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9he3sBZCwHajCUGiOXRZWnUMXCbVvmOQs" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <ExternalLink size={16} /> LinkedIn
                      </a>
                    ) : project.title === "Fake News Detection" ? (
                      <a href="https://github.com/prathambusa/FakeNewsDetection" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <Github size={16} /> Code
                      </a>
                    ) : project.title === "HR Analytics Dashboard" ? (
                      <a href="https://public.tableau.com/app/profile/prathambusa/viz/HRDashboard_17309531485660/HRSummary" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <ExternalLink size={16} /> Demo
                      </a>
                    ) : project.title === "Personal Portfolio Website" ? (
                      <a href="https://github.com/prathambusa/Pratham-Busa-Portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <Github size={16} /> Code
                      </a>
                    ) : project.title === "Spotify Data Analysis" ? (
                      <a href="https://github.com/prathambusa/Spotify-Data-Analysis" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <Github size={16} /> Code
                      </a>
                    ) : project.title === "Crime Data Analysis" ? (
                      <a href="https://github.com/prathambusa/NY-and-Chicago-Crime-Data-Analysis" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                        <Github size={16} /> Code
                      </a>
                    ) : (
                      <>
                        <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                          <Github size={16} /> Code
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm font-semibold transition-colors">
                          <ExternalLink size={16} /> Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

export default Projects
