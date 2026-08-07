import React from 'react';
import { PenTool, Image as ImageIcon, Share2, Compass, Layout, ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, Service } from '../data/portfolioData';

export const ExpertiseSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return <PenTool className="w-7 h-7 text-[#FF745A]" />;
      case 'Image':
        return <ImageIcon className="w-7 h-7 text-[#FF745A]" />;
      case 'Share2':
        return <Share2 className="w-7 h-7 text-[#FF745A]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#FF745A]" />;
      case 'Layout':
        return <Layout className="w-7 h-7 text-[#FF745A]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#FF745A]" />;
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Splitting into first row (3 items) and second row (2 items) for desktop centering
  const firstRow = SERVICES_DATA.slice(0, 3);
  const secondRow = SERVICES_DATA.slice(3, 5);

  const renderCard = (service: Service) => (
    <div
      key={service.id}
      className="group relative bg-white p-7 sm:p-8 rounded-3xl border border-[#FFE9E0] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top bar with Icon & Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#FFE9E0] group-hover:bg-[#FF745A] flex items-center justify-center transition-colors duration-300">
            {React.cloneElement(getIcon(service.iconName), {
              className: 'w-7 h-7 text-[#FF745A] group-hover:text-white transition-colors duration-300'
            })}
          </div>
          <span className="font-display font-bold text-2xl text-[#FFE9E0] group-hover:text-[#FF745A] transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#20284F] mb-3 group-hover:text-[#FF745A] transition-colors">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-[#7E7A78] leading-relaxed font-body mb-6">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full bg-[#FFF4EE] text-[#20284F] text-xs font-medium border border-[#FFE9E0]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Explore Link */}
      <button
        onClick={scrollToProjects}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF745A] group-hover:text-[#20284F] transition-colors pt-4 border-t border-[#FFE9E0]/60 cursor-pointer"
      >
        <span>Explore Work</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Rounded Peach Container Box */}
        <div className="bg-peach-gradient rounded-3xl sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#FFE9E0] shadow-sm relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/40 rounded-full blur-2xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF745A] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What I Do</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#20284F] tracking-tight">
              My Creative Expertise
            </h2>
            <p className="mt-3 text-base text-[#7E7A78] font-body">
              Specialized visual design services tailored for modern brands, agency projects, and digital campaigns.
            </p>
          </div>

          {/* Desktop First Row (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {firstRow.map(renderCard)}
          </div>

          {/* Desktop Second Row (2 centered cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {secondRow.map(renderCard)}
          </div>

        </div>

      </div>
    </section>
  );
};
