import { useState } from 'react';
import { Code2, Database, Wrench, Sparkles, Server } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Tailwind CSS', level: 80, icon: '🎨' },
        { name: 'Next.js', level: 75, icon: '▲' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '⚡' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'REST APIs', level: 85, icon: '🔗' },
      ]
    },
    {
      title: 'Data Science',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      skills: [
        { name: 'Python', level: 60, icon: '🐍' },
        { name: 'Power BI', level: 88, icon: '📊' },
        { name: 'PostgreSQL', level: 82, icon: '🗄️' },
        { name: 'Excel', level: 80, icon: '📈' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: '🐙' },
        { name: 'Docker', level: 40, icon: '🐳' },
        { name: 'AWS', level: 50, icon: '☁️' },
        { name: 'AI Tools', level: 85, icon: '🤖' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">My Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Icon */}
                <div className="text-4xl mb-4">{skill.icon}</div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white mb-4">{skill.name}</h3>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Proficiency</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">Always learning and exploring new technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['ReactJs','NodeJs', 'ExpressJs', 'MongoDB', 'VS Code'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800/30 text-slate-500 rounded-lg text-sm border border-slate-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;