import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'Software Engineer',
  'Web Developer',
  'Data Science Enginer',
  'Backend developer',
];

const Hero = () => {
  // Removed unused currentRole and setCurrentRole
  const [typing, setTyping] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingTimeout = useRef<number | null>(null);

  // Typewriter effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      typingTimeout.current = setTimeout(() => {
        setTyping((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else {
      setTimeout(() => {
        setTyping('');
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1200);
    }
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [charIndex, roleIndex]);
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-2xl animate-blob z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-2xl animate-blob2 z-0" />
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white/80 rounded-3xl shadow-2xl p-8 md:p-16 backdrop-blur-md border border-blue-100 relative">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Vishal Minke</span>
              </h1>
              <div className="h-10 md:h-12 flex items-center justify-center md:justify-start">
                <span className="text-xl md:text-2xl text-blue-700 font-mono">
                  {typing}
                  <span className="border-r-2 border-blue-700 animate-pulse ml-1" />
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 mt-2">
                An Experienced software engineer with skills in web development and Data Science. Interested in building scalable and innovative solutions in dynamic organizations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg focus:ring-4 focus:ring-blue-200"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 focus:ring-4 focus:ring-blue-200"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a href="https://github.com/MinkeVishal" className="group relative text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300">
                <Github size={28} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded px-2 py-1 pointer-events-none">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/%F0%9D%90%95%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%8C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A4%F0%9D%90%9E-850409239/" className="group relative text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300">
                <Linkedin size={28} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded px-2 py-1 pointer-events-none">LinkedIn</span>
              </a>
              <a href="mailto:minkevishal@gmail.com" className="group relative text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300">
                <Mail size={28} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded px-2 py-1 pointer-events-none">Email</span>
              </a>
            </div>
          </div>
          {/* Right: Animated Profile Image */}
          <div className="flex-shrink-0 mt-8 md:mt-0 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-xl opacity-60 animate-pulse-slow z-0" />
            <img
              src="/vishal.jpeg"
              alt="Vishal Minke"
              className="relative w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-500 shadow-xl animate-float hover:scale-105 transition-transform duration-300 z-10"
            />
          </div>
        </div>
      </div>
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 animate-bounce z-20 focus:outline-none focus:ring-4 focus:ring-blue-200"
        aria-label="Scroll Down"
      >
        <ChevronDown size={36} className="transition-transform duration-300 group-hover:scale-125" />
      </button>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1, 0.9) translate(30px, -20px); }
          66% { transform: scale(0.9, 1.1) translate(-20px, 30px); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animate-blob2 { animation: blob 10s infinite ease-in-out; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
      `}</style>
    </section>
  );
};

export default Hero;