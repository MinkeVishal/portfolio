import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MinkeVishal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/%F0%9D%90%95%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%8C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A4%F0%9D%90%9E-850409239/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:minkevishal@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img 
                  src="/vishal_logo.png" 
                  alt="Vishal Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-400 leading-relaxed">
                Full Stack Developer & Data Science enthusiast passionate about building 
                scalable applications and extracting meaningful insights from data.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Let's Work Together</h4>
              <p className="text-slate-400">
                I'm always open to discussing new opportunities, interesting projects, 
                or collaborations.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-2">
            Develop by Vish<Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
              ©{new Date().getFullYear()} All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors text-sm"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;