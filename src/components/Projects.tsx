import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Zerodha Clone',
      description: 'Built a responsive frontend clone of Zerodha clone of offical website as part of apna collage web development course. recreated the layout navigations bar landing page and interactive elements to closely  match the original site.',
      image: './src/zerodha.png',
      technologies: ['Reactjs', 'Node.js', 'MongoDB', 'Expressjs'],
      liveUrl: 'https://github.com/MinkeVishal',
      githubUrl: 'https://github.com/MinkeVishal'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team chat, and advanced analytics. Built with React and Firebase.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://github.com/MinkeVishal',
      githubUrl: 'https://github.com/MinkeVishal'
    },
    {
      id: 3,
      title: 'Bank Data Analytics Dashboard',
      description: 'A comprehensive analytics platform with machine learning insights, data visualization, and predictive analytics for business intelligence.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
      technologies: ['Python', 'PowerBI', 'TensorFlow', 'PostgerSQL'],
      liveUrl: 'https://github.com/MinkeVishal',
      githubUrl: 'https://github.com/MinkeVishal'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work that showcases my skills in Frontend development and Data Science.
            </p>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;