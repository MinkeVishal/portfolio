import { useState } from 'react';
import { Award, ExternalLink, Calendar, Building2, X, ZoomIn, ZoomOut } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'MERN Stack Developer',
    issuer: 'Apna College',
    date: 'Sept 2024',
    link: '/Apna_Collage.png',
    image: '/Apna_Collage.png',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-500/10',
  },
  {
    id: 2,
    title: 'Full Stack Data Science & AI',
    issuer: 'AlmaBetter',
    date: 'Jun 2025',
    link: '/Almabetter.png',
    image: '/Almabetter.png',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-500/10',
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (cert: typeof certificates[0]) => {
    setSelectedCertificate(cert);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setIsZoomed(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificates" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Award className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Courses & Certificates
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Certificate Image */}
                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Award className="w-20 h-20 text-slate-600" />
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 z-20 p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity`}>
                    {cert.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{cert.date}</span>
                    </div>
                  </div>

                  {/* View Link */}
                  <button
                    onClick={() => openModal(cert)}
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900">
              <div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${selectedCertificate.color} bg-clip-text text-transparent`}>
                  {selectedCertificate.title}
                </h3>
                <p className="text-slate-400 text-sm">{selectedCertificate.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image */}
            <div className="p-6 bg-slate-800/50 flex items-center justify-center overflow-auto max-h-[70vh]">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className={`rounded-lg shadow-2xl transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'max-w-full max-h-[60vh] object-contain cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
