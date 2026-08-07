import React from 'react';
import { Search, Compass, Palette, CheckCircle, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-[#FF745A]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#FF745A]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#FF745A]" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-[#FF745A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF745A]" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 relative bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE9E0] text-[#FF745A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design Workflow</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#20284F] tracking-tight">
            How I Bring Ideas to Life
          </h2>
          <p className="mt-3 text-base text-[#7E7A78] font-body">
            A proven 4-step structured creative framework ensuring clarity, efficiency, and exceptional visual results.
          </p>
        </div>

        {/* 4 Steps Timeline Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#FF745A]/20 via-[#FF745A] to-[#FF745A]/20 -translate-y-12 z-0" />

          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative z-10 bg-white p-7 rounded-3xl border border-[#FFE9E0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header with Icon & Numbered Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFE9E0] flex items-center justify-center shadow-2xs">
                    {getStepIcon(stepItem.icon)}
                  </div>

                  {/* Coral Numbered Badge */}
                  <div className="w-10 h-10 rounded-full bg-[#FF745A] text-white font-display font-bold text-sm flex items-center justify-center shadow-md shadow-coral-500/20">
                    {stepItem.step}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-xl text-[#20284F] mb-3">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-[#7E7A78] leading-relaxed font-body mb-6">
                  {stepItem.description}
                </p>
              </div>

              {/* Detail bullet points */}
              <div className="pt-4 border-t border-[#FFE9E0] space-y-2">
                {stepItem.details.map((detail, dIdx) => (
                  <div key={dIdx} className="text-xs font-semibold text-[#20284F] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF745A]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
