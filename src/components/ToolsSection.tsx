import React from 'react';
import { Sparkles, Wrench } from 'lucide-react';
import { TOOLS_DATA } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-20 md:py-24 relative bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE9E0] text-[#FF745A] text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Creative Toolkit</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#20284F] tracking-tight">
            Tools I Work With
          </h2>
          <p className="mt-3 text-base text-[#7E7A78] font-body">
            Combining industry-standard design software with cutting-edge AI workflows for rapid, high-quality execution.
          </p>
        </div>

        {/* Tools Grid (5 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TOOLS_DATA.map((tool) => (
            <div
              key={tool.id}
              className="bg-white p-6 rounded-3xl border border-[#FFE9E0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Software Logo */}
                <div className="flex items-center justify-between mb-5">
                  {/* Custom Software Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-xl shadow-xs ${
                      tool.id === 'canva' ? 'bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8]' : ''
                    }`}
                    style={{
                      backgroundColor:
                        tool.id === 'illustrator'
                          ? '#260000'
                          : tool.id === 'photoshop'
                          ? '#001E36'
                          : tool.id === 'figma'
                          ? '#1E1E1E'
                          : tool.id === 'canva'
                          ? 'transparent'
                          : '#8B5CF6',
                      color:
                        tool.id === 'illustrator'
                          ? '#FF9A00'
                          : tool.id === 'photoshop'
                          ? '#31A8FF'
                          : '#FFFFFF',
                    }}
                  >
                    {tool.id === 'figma' ? (
                      <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                      </svg>
                    ) : tool.id === 'canva' ? (
                      <span
                        className="text-white font-bold select-none tracking-tight leading-none text-center px-1"
                        style={{
                          fontFamily: "'Dancing Script', 'Caveat', 'Brush Script MT', cursive",
                          fontSize: '18px',
                          fontStyle: 'italic',
                        }}
                      >
                        Canva
                      </span>
                    ) : tool.id === 'ai-tools' ? (
                      <Sparkles className="w-6 h-6 text-white" />
                    ) : (
                      tool.shortCode
                    )}
                  </div>

                  {/* Proficiency Badge */}
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${tool.badgeBg}`}>
                    {tool.proficiency}
                  </span>
                </div>

                {/* Tool Name & Usage */}
                <h3 className="font-display font-bold text-lg text-[#20284F] mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7A78] leading-relaxed font-body">
                  {tool.description}
                </p>
              </div>

              {/* Decorative mini progress indicator */}
              <div className="mt-6 pt-4 border-t border-[#FFE9E0]">
                <div className="w-full h-1.5 rounded-full bg-[#FFE9E0] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: tool.proficiency === 'Daily Use' ? '95%' : tool.proficiency === 'Advanced' ? '88%' : '80%',
                      backgroundColor: tool.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
