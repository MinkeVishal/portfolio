import { Code2, BarChart3, Zap, GraduationCap, Briefcase, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Briefcase, label: 'Experience', value: '6+ Months' },
    { icon: Target, label: 'Projects', value: '10+' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech CS' },
  ];

  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with React, Node.js, and modern technologies.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Creating interactive dashboards and extracting insights using Power BI, Python & SQL.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Transforming complex challenges into elegant, efficient solutions.',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <span className="text-sm font-medium text-violet-300">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Turning Vision In To Reality
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A passionate developer bridging the gap between design and functionality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: About Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  As a Computer Science student passionate about building websites and working with data, 
                  I've honed my skills through hands-on experience as a <span className="text-violet-400 font-medium">Full Stack Intern</span>, 
                  building user-friendly web apps using React and Node.js.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I also worked as a <span className="text-cyan-400 font-medium">Business Analytics Intern</span>, 
                  creating interactive dashboards and analyzing data using Power BI and Excel.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I thrive on solving problems, learning new technologies, and turning ideas into 
                  real, impactful solutions. Whether it's frontend design, backend logic, or data analysis — 
                  I'm always excited to build and improve.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Power BI', 'PostgreSQL', 'Tailwind CSS', 'Git'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center p-2 sm:p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 mx-auto mb-1 sm:mb-2" />
                    <p className="text-lg sm:text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Services */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="group p-6 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;