import React from 'react';
import { Award } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'MERN Stack Developer',
    issuer: 'APNA COLLAGE',
    date: 'sept 2024',
    link: 'https://www.linkedin.com/in/%F0%9D%90%95%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%8C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A4%F0%9D%90%9E-850409239/" className="group relative text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"',
    image: './src/Apna Collage.png',
  },
  {
    id: 2,
    title: 'Full Stack Data Science & AI ',
    issuer: 'ALMABETTER',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/%F0%9D%90%95%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%8C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A4%F0%9D%90%9E-850409239/" className="group relative text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"',
    image: './src/Almabetter.png',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
            <Award className="text-blue-600" size={36} />
            Course & Certificates
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            My professional certifications and achievements.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 border-l-4 border-blue-500 group overflow-hidden"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 border-b border-blue-100 flex items-center justify-center overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow group-hover:scale-105 transition-transform duration-300 border border-blue-200"
                  />
                ) : (
                  <span className="text-gray-400 text-lg">No Image Available</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2 flex items-center gap-2">
                  <Award className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
                  {cert.title}
                </h3>
                <div className="flex items-center gap-4 text-blue-700 text-lg">
                  <span>{cert.issuer}</span>
                  <span className="text-gray-400">•</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
