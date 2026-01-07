import { useState } from 'react';
import { Briefcase, ExternalLink, Calendar, Building2, X, ZoomIn, ZoomOut } from 'lucide-react';

const internships = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    company: 'Edudiagno Pvt.Ltd',
    duration: 'March 2025 - September 2025',
    link: '/Internship1.png',
    image: '/Internship1.png',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500/10',
    description: 'Built user-friendly web applications using React and Node.js.',
  },
  {
    id: 2,
    title: 'Business Analytics Intern',
    company: 'Outlook Publishing pvt.Ltd.',
    duration: 'Jan 2025 - May 2025',
    link: '/Outlook certificate.jpeg',
    image: '/Outlook certificate.jpeg',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-500/10',
    description: 'Created interactive dashboards and analyzed data using Power BI and Excel.',
  },
];

const Internships = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof internships[0] | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (internship: typeof internships[0]) => {
    setSelectedCertificate(internship);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setIsZoomed(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="internships" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                Internship Experience
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Hands-on industry experience that shaped my professional journey
            </p>
          </div>

          {/* Internships Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Certificate Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  {internship.image ? (
                    <img
                      src={internship.image}
                      alt={internship.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Briefcase className="w-20 h-20 text-slate-600" />
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 z-20 p-3 rounded-xl bg-gradient-to-br ${internship.color} shadow-lg`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${internship.color} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity`}>
                    {internship.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{internship.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{internship.duration}</span>
                    </div>
                  </div>

                  {/* View Link */}
                  <button
                    onClick={() => openModal(internship)}
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${internship.color} transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}></div>
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
                <p className="text-slate-400 text-sm">{selectedCertificate.company}</p>
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

export default Internships;
