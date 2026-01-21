
import React, { useEffect, useState } from 'react';
import { SKILLS, EXPERIENCE } from './constants';
import ProjectWaterfall from './components/ProjectWaterfall';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 导航栏高度偏移
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#83FA50]/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 px-6 md:px-12 py-6 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-xl font-extrabold tracking-tighter hover:text-[#83FA50] cursor-pointer transition-colors"
          >
            ZHAO CHUN <span className="text-[#83FA50]">.</span>
          </a>
          <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest text-white/60">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#83FA50] transition-colors cursor-pointer">关于我 / ABOUT</a>
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-[#83FA50] transition-colors cursor-pointer">作品 / WORK</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-[#83FA50] transition-colors cursor-pointer">经历 / EXPERIENCE</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-[#83FA50] transition-colors cursor-pointer">技能 / SKILLS</a>
          </div>
          <a href="mailto:zhaochun@baozun.com" className="bg-[#83FA50] text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-white transition-all transform hover:scale-105">开始交谈 / TALK</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-12 text-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#83FA50]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
          {/* Profile Image Container - Refined with highly reliable portrait */}
          <div className="relative mb-10 group">
            <div className="absolute -inset-2 bg-[#83FA50] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#83FA50] via-green-400 to-[#83FA50] rounded-full opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-spin-slow"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-[#050505] bg-neutral-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                alt="赵淳" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
            
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 bg-[#83FA50] border-4 border-[#050505] rounded-full z-20">
               <div className="absolute inset-0 bg-[#83FA50] rounded-full animate-ping opacity-75"></div>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#83FA50] text-black text-[9px] font-black px-4 py-1.5 rounded-full shadow-xl transform group-hover:scale-110 transition-transform whitespace-nowrap z-20">
              SENIOR UX DESIGNER
            </div>
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-[#83FA50] text-[10px] font-bold tracking-[0.2em] mb-8 animate-bounce">
            资深用户体验设计师 / READY TO INNOVATE
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-8 text-gradient">
            赵淳 CHUN.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            毕业于上海建桥学院 • 影视艺术与动画。
            <br className="hidden md:block" />
            7年+ UI/UX 经验，深耕品牌数字化，致力于将艺术创意转化为商业增长力。
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="group relative px-10 py-4 bg-[#83FA50] text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(131,250,80,0.4)]"
            >
              <span className="relative z-10">精选作品集 / PORTFOLIO</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')}
              className="px-10 py-4 glass rounded-full font-bold text-white/80 hover:bg-white/5 hover:text-white transition-all active:scale-95 border border-white/10"
            >
              设计旅程 / JOURNEY
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">WORK EXPERIENCE / 工作历程</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl glass border-[#83FA50]/20">
                <h3 className="text-2xl font-bold mb-2 text-[#83FA50]">{EXPERIENCE[0].company}</h3>
                <p className="text-white/60 mb-4">{EXPERIENCE[0].role} | {EXPERIENCE[0].period}</p>
                <p className="text-sm text-white/40 leading-relaxed">
                  聚焦国际品牌数字化产品全流程设计。涵盖 HOKA、Ferragamo、Adidas 等一线品牌。
                </p>
              </div>
              <div className="p-6 rounded-3xl glass border-white/5 hover:border-[#83FA50]/30 transition-colors">
                <h4 className="font-bold mb-4 text-[#83FA50]/80 uppercase tracking-widest text-xs">核心成就</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li>• 主导品牌级小程序从 0 到 1 的视觉重构</li>
                  <li>• 建立高效的设计交付体系与 Figma 组件库</li>
                  <li>• 跨国团队协作，赋能品牌中国区电商增长</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EXPERIENCE[0].projects.map((p, idx) => (
                  <div key={idx} className="p-6 rounded-2xl glass hover:bg-white/10 transition-all group cursor-default">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-[#83FA50]/20 text-[#83FA50] rounded-full text-[10px] font-bold tracking-wider">{p.tag}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#83FA50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold group-hover:text-[#83FA50] transition-colors">{p.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectWaterfall />

      {/* Skills & AI Section */}
      <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">SKILLS & TOOLS / 技能体系</h2>
            <p className="text-white/50 mb-12 text-lg leading-relaxed">
              10年 Figma 深度使用者，精通系统化组件库搭建。深度集成 AI 工具于设计流中，通过 Kling 等工具探索 AIGC 在商业视觉中的应用可能。
            </p>
            <div className="space-y-8">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{skill.icon} {skill.name}</span>
                    <span className="text-[#83FA50]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#83FA50] rounded-full transition-all duration-1000 delay-500" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#83FA50] to-green-300 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative glass p-12 rounded-[2rem] border-white/10 text-center">
              <div className="text-8xl mb-8 group-hover:scale-110 transition-transform duration-500">🚀</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">准备好一起创造了吗？</h3>
              <p className="text-white/60 mb-8 italic">
                "设计不仅仅是视觉，更是产品灵魂的表达。让我们一起打造极致的用户体验。"
              </p>
              <a href="mailto:zhaochun@baozun.com" className="inline-block px-12 py-5 bg-[#83FA50] text-black rounded-full font-bold hover:shadow-[0_0_20px_#83FA50] transition-all transform hover:scale-105">
                立即联络
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 text-xs tracking-[0.3em]">
        <p>&copy; {new Date().getFullYear()} ZHAO CHUN. 资深 UX 设计师作品集. 保持热爱, 奔赴星海.</p>
      </footer>

      {/* AI Assistant Component */}
      <AIAssistant />
    </div>
  );
};

export default App;
