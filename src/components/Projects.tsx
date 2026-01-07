import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Sparkles, Code2, Rocket, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Trip Goals',
      subtitle: 'Travel Booking Platform',
      description: 'A responsive travel booking website where users can explore tour packages, view details, and submit enquiries. Built with React frontend and backend APIs for managing travel data.',
      image: '/Trip_goal.png',
      technologies: ['React', 'Node.js', 'Appwrite', 'Express'],
      liveUrl: 'https://www.tripgoals.co.in/',
      githubUrl: 'https://github.com/MinkeVishal/tripgoals',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-500/10',
      icon: Rocket
    },
    {
      id: 2,
      title: 'SigmaGPT',
      subtitle: 'AI-Powered Project Management',
      description: 'A collaborative project management tool with real-time updates, team chat, and advanced analytics. Features AI-powered task suggestions and smart scheduling.',
      image: '/SigmaGPT.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      liveUrl: 'https://github.com/MinkeVishal/SigmaGPT-main',
      githubUrl: 'https://github.com/MinkeVishal/SigmaGPT-main',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      icon: Sparkles
    },
    {
      id: 3,
      title: 'Student Predictor',
      subtitle: 'ML Performance System',
      description: 'Machine learning web application that predicts student performance based on study hours, attendance, and previous scores using Logistic Regression.',
      image: '/Student_predictor.png',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
      liveUrl: 'https://student-performance-predictor-bpc3.onrender.com/',
      githubUrl: 'https://github.com/MinkeVishal/student-performance-predictor',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-500/10',
      icon: Code2
    },
    {
      id: 4,
      title: 'Amazon Prime EDA',
      subtitle: 'TV Shows & Movies Analysis',
      description: 'Exploratory Data Analysis project on Amazon Prime Video content. Analyzed trends in TV shows and movies, genres, ratings, and release patterns using Python data visualization libraries.',
      image: '/Amazon_analysis.png',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      liveUrl: 'https://github.com/MinkeVishal/Amazon-Prime-TV-Shows-and-Movies-EDA-Project',
      githubUrl: 'https://github.com/MinkeVishal/Amazon-Prime-TV-Shows-and-Movies-EDA-Project',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-500/10',
      icon: BarChart3
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">My Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Crafted with passion and precision — showcasing my journey in 
              <span className="text-violet-400"> Full Stack Development</span> and 
              <span className="text-cyan-400"> Machine Learning</span>
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              const isHovered = hoveredId === project.id;
              
              return (
                <div
                  key={project.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Card */}
                  <div className={`relative h-full rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden transition-all duration-500 ${isHovered ? 'border-slate-600 shadow-2xl shadow-violet-500/10 -translate-y-2' : ''}`}>
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-5' : ''}`}></div>
                    
                    {/* Image Container */}
                    <div className="relative h-52 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10`}></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />
                      
                      {/* Floating Icon Badge */}
                      <div className={`absolute top-4 right-4 z-20 p-3 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 pt-2">
                      {/* Title */}
                      <div className="mb-4">
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}>
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium">{project.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${project.bgColor} text-slate-300 border border-slate-700/50 transition-all duration-300 hover:border-slate-600`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98]`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 text-slate-300 font-semibold text-sm border border-slate-700 transition-all duration-300 hover:bg-slate-700 hover:text-white hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform origin-left transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="mt-16 text-center">
            <a
              href="https://github.com/MinkeVishal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 active:scale-95 group"
            >
              <Github className="w-5 h-5" />
              View All Projects
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;