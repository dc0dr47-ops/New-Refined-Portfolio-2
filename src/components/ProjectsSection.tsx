import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Illustration');

  const filterTabs = [
    'Illustration',
    'Photo Editing',
    'Social Media',
    'Branding',
    'Web Design',
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => p.filterTag === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Large Rounded Peach Background Box */}
        <div className="bg-peach-gradient rounded-3xl sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#FFE9E0] shadow-sm">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF745A] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Projects</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#20284F] tracking-tight">
              Some of My Best Work
            </h2>
            <p className="mt-3 text-base text-[#7E7A78] font-body">
              Explore case studies across vector illustration, photo retouching, social campaigns, branding, and web design.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF745A] text-white shadow-md shadow-coral-500/20'
                      : 'bg-white text-[#7E7A78] hover:text-[#20284F] hover:bg-[#FFF0EB] border border-[#FFE9E0]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-3xl border border-[#FFE9E0] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      srcSet={project.imageSrcSet}
                      sizes="(min-width: 1024px) 26vw, (min-width: 768px) 42vw, calc(100vw - 80px)"
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-[#20284F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="px-5 py-2.5 rounded-full bg-white text-[#20284F] font-display font-bold text-xs sm:text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#FF745A]" />
                        <span>View Case Study</span>
                      </div>
                    </div>

                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-[#20284F] mb-2 group-hover:text-[#FF745A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#7E7A78] leading-relaxed font-body line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-3 flex items-center justify-between gap-3 border-t border-[#FFE9E0]/60">
                  <span className="inline-flex shrink-0 items-center rounded-full border border-[#FFE9E0] bg-[#FFF7F3] px-3 py-1 text-[11px] font-bold text-[#20284F] sm:text-xs">
                    {project.category}
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-[#FF745A] group-hover:translate-x-1 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
