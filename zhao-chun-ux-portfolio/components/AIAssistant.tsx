
import React, { useState, useRef, useEffect } from 'react';
import { askZhaoChunAI } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '你好！我是赵淳的数字孪生 AI。有什么关于我的设计经历或作品想了解的吗？' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const aiResponse = await askZhaoChunAI(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-[#83FA50]/20 animate-in fade-in zoom-in duration-300">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#83FA50] animate-pulse" />
              <span className="font-semibold text-sm">赵淳 AI 助手</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 text-sm scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  m.role === 'user' ? 'bg-[#83FA50] text-black font-medium' : 'bg-white/10 text-white/90'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-2xl animate-pulse text-[#83FA50]">思考中...</div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="问问我的项目经历..."
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#83FA50]"
            />
            <button onClick={handleSend} className="bg-[#83FA50] p-2 rounded-full hover:bg-white transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#83FA50] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[#83FA50]/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
