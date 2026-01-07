import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Data Science Engineer',
  'Business Analyst',
  'Problem Solver',
];

const Hero = () => {
  const [typing, setTyping] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTimeout = useRef<number | null>(null);

  // Enhanced typewriter effect with deleting
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting && charIndex < currentRole.length) {
      typingTimeout.current = window.setTimeout(() => {
        setTyping(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentRole.length) {
      typingTimeout.current = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout.current = window.setTimeout(() => {
        setTyping(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/30 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-violet-300">Available for opportunities</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Vishal Minke
                </span>
              </h1>

              <div className="h-12 flex items-center justify-center lg:justify-start mb-6">
                <span className="text-2xl md:text-3xl text-slate-300 font-light">
                  I'm a{' '}
                  <span className="text-cyan-400 font-medium">
                    {typing}
                    <span className="inline-block w-0.5 h-7 bg-cyan-400 ml-1 animate-pulse"></span>
                  </span>
                </span>
              </div>

              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about building scalable web applications and extracting insights from data. 
                I transform ideas into elegant, user-centric digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/Vishal_Minke_Fresher 2025 Batch.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 text-white rounded-xl font-semibold border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <a 
                  href="https://github.com/MinkeVishal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-violet-400 transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/%F0%9D%90%95%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%8C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A4%F0%9D%90%9E-850409239/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a 
                  href="mailto:minkevishal@gmail.com" 
                  className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-40 animate-pulse-glow"></div>
              
              {/* Rotating Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900">
                <img
                  src="/vishal.jpeg"
                  alt="Vishal Minke"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-slate-900/90 backdrop-blur-xl rounded-xl border border-slate-700 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs text-slate-400">Experience</p>
                    <p className="text-sm font-semibold text-white">6+ Months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors cursor-pointer"
        aria-label="Scroll Down"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;