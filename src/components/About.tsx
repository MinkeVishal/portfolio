import React from 'react';
import { Code, Palette, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold max-w-3xl mx-auto">
              I'm a passionate developer with 6 month of experience creating digital solutions that bridge the gap between design and functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a Computer Science student about building websites and working with data. I was working as a Full Stack Intern, where I built user-friendly web apps using React and Node.js.  
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                And also as a Business Analytics Intern, where I created dashboards and analyzed data using tools like Power BI and Excel. 
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I enjoy solving problems, learning new things, and turning ideas into real, working solutions. Whether it's frontend design or backend logic, 
                or even making sense of complex data, I'm always excited to build and improve.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['ReactJs', 'TypeScript', 'Node.js', 'Python', 'PowerBI', 'SQL'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <Code className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                <p className="text-gray-600">Building scalable web applications with modern technologies and best practices.</p>
              </div>
              
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <svg
                    className="text-blue-600 mb-4"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <rect x="3" y="10" width="4" height="10" />
                    <rect x="10" y="6" width="4" height="14" />
                    <rect x="17" y="2" width="4" height="18" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science</h3>
                    <p className="text-gray-600">Create an interactive PowerBI Dashboard to visualize</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;