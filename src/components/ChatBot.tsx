import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickQuestions = [
  "What are your skills?",
  "Tell me about your projects",
  "How can I contact you?",
  "What's your experience?",
  "Download resume",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Vishal's portfolio assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return "Vishal is skilled in:\n\n🎨 Frontend: React.js, TypeScript, Tailwind CSS, Next.js\n⚙️ Backend: Node.js, Express.js, MongoDB, REST APIs\n📊 Data Science: Python, Power BI, PostgreSQL, Excel\n🛠️ Tools: Git/GitHub, Docker, AWS, AI Tools\n\nWould you like to know more about any specific skill?";
    }

    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      return "Vishal has worked on exciting projects:\n\n🚀 Trip Goals - Travel booking platform with React & Node.js\n✨ SigmaGPT - AI-powered project management tool\n🎓 Student Predictor - ML app for performance prediction\n📊 Amazon Prime EDA - Data analysis project\n\nYou can check them out in the Projects section!";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('hire')) {
      return "You can reach Vishal through:\n\n📧 Email: minkevishal@gmail.com\n💼 LinkedIn: linkedin.com/in/vishal-minke\n🐙 GitHub: github.com/MinkeVishal\n\nOr fill out the contact form in the Contact section below!";
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('work experience')) {
      return "Vishal has 6+ months of industry experience:\n\n💻 Full Stack Developer Intern @ Edudiagno Pvt.Ltd\n- Built web applications using React and Node.js\n\n📈 Business Analytics Intern @ Outlook Publishing\n- Created dashboards using Power BI and Excel\n\nCheck out the Internships section for certificates!";
    }

    if (lowerMessage.includes('resume') || lowerMessage.includes('cv') || lowerMessage.includes('download')) {
      return "You can download Vishal's resume by clicking the 'Download CV' button in the Hero section at the top of the page! 📄";
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('degree')) {
      return "Vishal is pursuing B.Tech in Computer Science 🎓\n\nHe's passionate about web development and data science, constantly learning new technologies!";
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Nice to meet you! I'm here to help you learn more about Vishal. Feel free to ask about his skills, projects, experience, or how to contact him!";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! 😊 Is there anything else you'd like to know about Vishal?";
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! 👋 Feel free to come back if you have more questions. Don't forget to check out the Contact section if you'd like to work with Vishal!";
    }

    return "I can help you with:\n\n• Vishal's skills & technologies\n• His projects & work\n• Experience & internships\n• Contact information\n• Resume download\n\nWhat would you like to know?";
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-slate-800 text-slate-400 hover:text-white'
            : 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-violet-500/25'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl shadow-violet-500/10 flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-violet-600 to-cyan-600 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
              <img 
                src="/vishal.jpeg" 
                alt="Vishal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-white">Vishal's Assistant</h3>
              <p className="text-xs text-white/80">Ask me anything about Vishal</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-violet-500/50 flex-shrink-0">
                    <img 
                      src="/vishal.jpeg" 
                      alt="Vishal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                    message.isBot
                      ? 'bg-slate-800 text-slate-200 rounded-tl-none'
                      : 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-tr-none'
                  }`}
                >
                  {message.text}
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-violet-500/50 flex-shrink-0">
                  <img 
                    src="/vishal.jpeg" 
                    alt="Vishal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 pb-2">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSendMessage(question)}
                  className="flex-shrink-0 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-sm placeholder:text-slate-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
