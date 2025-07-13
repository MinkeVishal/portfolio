import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Vishal Minke</div>
              <p className="text-gray-400 mb-4">
                Frontend developer & Data Science passionate building scalable applications.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/MinkeVishal" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/%F0%9D%90%95%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%8C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A4%F0%9D%90%9E-850409239/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:minkevishal@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Work Together</h4>
              <p className="text-gray-400 mb-4">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Vish © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;