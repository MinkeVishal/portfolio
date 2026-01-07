import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:minkevishal@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'minkevishal@gmail.com',
      href: 'mailto:minkevishal@gmail.com',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8329800584',
      href: 'tel:+918329800584',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nanded, Maharashtra, India',
      href: '#',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <MessageSquare className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-slate-400 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:-translate-x-1"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Response Badge */}
              <div className="p-4 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-xl border border-violet-500/20">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Quick Response</p>
                    <p className="text-xs text-slate-400">Usually responds within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('name')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className={`w-full px-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-slate-500 transition-all duration-300 ${
                        isFocused === 'name' 
                          ? 'border-violet-500 ring-2 ring-violet-500/20' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className={`w-full px-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-slate-500 transition-all duration-300 ${
                        isFocused === 'email' 
                          ? 'border-violet-500 ring-2 ring-violet-500/20' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className={`w-full px-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-slate-500 transition-all duration-300 resize-none ${
                        isFocused === 'message' 
                          ? 'border-violet-500 ring-2 ring-violet-500/20' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;