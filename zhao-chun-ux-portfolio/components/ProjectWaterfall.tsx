
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectWaterfall: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_COUNT = 6;
  
  const displayedProjects = useMemo(() => {
    return isExpanded ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);
  }, [isExpanded]);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">SELECTED WORKS</h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-[#83FA50]"></div>
            <span className="text-white/30 text-xs tracking-widest uppercase font-bold">Portfolio Gallery / 精选作品</span>
          </div>
        </div>
        
        {PROJECTS.length > INITIAL_COUNT && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#83FA50]/50 transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-widest text-white/70 group-hover:text-[#83FA50]">
              {isExpanded ? 'COLLAPSE / 收起' : 'VIEW ALL / 展开全部'}
            </span>
            <div className={`transition-transform duration-500 text-[#83FA50] ${isExpanded ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        )}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {displayedProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="break-inside-avoid group relative rounded-3xl overflow-hidden glass cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#83FA50]/10 border border-white/5"
          >
            <div className="relative overflow-hidden bg-neutral-900 aspect-auto">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#83FA50] text-[10px] font-bold mb-2 uppercase tracking-[0.2em] block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-6xl glass rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row animate-modal border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            {/* Image Container */}
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-[80vh] bg-neutral-950 flex items-center justify-center overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between bg-black/40 border-l border-white/5">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[#83FA50] text-xs font-bold tracking-[0.2em] uppercase block mb-2">{selectedProject.category}</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="w-12 h-1 bg-[#83FA50] mb-8 rounded-full"></div>
                
                <div className="space-y-6">
                  <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <h4 className="text-[#83FA50] text-[10px] font-bold tracking-[0.2em] uppercase">Core Challenges / 核心挑战</h4>
                    <p className="text-white/40 text-sm leading-relaxed italic">
                      该项目涉及深度品牌调研、多端交互逻辑统一及复杂动效交付。通过 A/B 测试验证，设计方案显著提升了用户停留时长与交易转化。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <button className="flex-1 bg-[#83FA50] text-black h-14 rounded-2xl font-bold text-sm tracking-widest hover:shadow-[0_0_30px_#83FA50/30] transition-all hover:scale-[1.02] active:scale-[0.98]">
                  VIEW FULL CASE
                </button>
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectWaterfall;
