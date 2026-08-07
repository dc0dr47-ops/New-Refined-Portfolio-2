import React, { useEffect } from 'react';
import { X, CheckCircle, Wrench, User, Calendar, Award } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-[#20284F]/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FFF9F6] rounded-3xl sm:rounded-[36px] border border-[#FFE9E0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#FFF9F6]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-[#FFE9E0] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#FF745A] uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#20284F]">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-2xl bg-white border border-[#FFE9E0] text-[#20284F] hover:bg-[#FFE9E0] hover:text-[#FF745A] transition-colors shadow-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
          
          {/* Main Hero Image */}
          <div
            className={`rounded-2xl sm:rounded-3xl overflow-hidden border border-[#FFE9E0] shadow-sm ${
              project.detailImage
                ? `${
                    project.detailAspect === '4/3'
                      ? 'aspect-[4/3]'
                      : project.detailAspect === '3/2'
                        ? 'aspect-[3/2]'
                      : project.detailAspect === 'wide'
                        ? 'aspect-[919/448]'
                        : 'aspect-video'
                  } bg-white`
                : 'max-h-[450px]'
            }`}
          >
            <img
              src={project.detailImage ?? project.image}
              srcSet={project.detailImageSrcSet}
              sizes="(min-width: 1024px) 832px, (min-width: 640px) calc(100vw - 112px), calc(100vw - 56px)"
              alt={project.title}
              referrerPolicy="no-referrer"
              decoding="async"
              fetchPriority="high"
              className={`w-full h-full ${project.detailImage ? 'object-contain' : 'object-cover'}`}
            />
          </div>

          {/* Key Quick Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-5 rounded-2xl border border-[#FFE9E0]">
            <div>
              <div className="text-xs font-medium text-[#7E7A78] flex items-center gap-1.5 mb-1">
                <User className="w-3.5 h-3.5 text-[#FF745A]" />
                <span>Client</span>
              </div>
              <div className="text-sm font-bold text-[#20284F]">{project.client}</div>
            </div>

            <div>
              <div className="text-xs font-medium text-[#7E7A78] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#FF745A]" />
                <span>Year</span>
              </div>
              <div className="text-sm font-bold text-[#20284F]">{project.year}</div>
            </div>

            <div>
              <div className="text-xs font-medium text-[#7E7A78] flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-[#FF745A]" />
                <span>Role</span>
              </div>
              <div className="text-sm font-bold text-[#20284F]">{project.role}</div>
            </div>

            <div>
              <div className="text-xs font-medium text-[#7E7A78] flex items-center gap-1.5 mb-1">
                <Wrench className="w-3.5 h-3.5 text-[#FF745A]" />
                <span>Tools</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.toolsUsed.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FFE9E0] text-[#FF745A]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-xl text-[#20284F]">
              Project Overview
            </h3>
            <p className="text-base text-[#7E7A78] leading-relaxed font-body">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#FFE9E0]">
              <h4 className="font-display font-bold text-lg text-[#20284F] mb-2 text-[#FF745A]">
                The Challenge
              </h4>
              <p className="text-sm text-[#7E7A78] leading-relaxed font-body">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#FFE9E0]">
              <h4 className="font-display font-bold text-lg text-[#20284F] mb-2 text-[#20284F]">
                The Creative Approach
              </h4>
              <p className="text-sm text-[#7E7A78] leading-relaxed font-body">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="bg-[#FFE9E0]/60 p-6 rounded-2xl border border-[#FFE9E0] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF745A] text-white flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#20284F] mb-1">
                Key Deliverables & Results
              </h4>
              <p className="text-sm text-[#20284F] font-semibold leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Gallery Mockups */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4 pt-4">
              <h3 className="font-display font-bold text-xl text-[#20284F]">
                Visual Showcase Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-[#FFE9E0] aspect-[4/3]">
                    <img
                      src={imgUrl}
                      alt={`Gallery mockup ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#FFE9E0] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#20284F] hover:bg-[#161B36] text-white font-display font-bold text-sm shadow-md transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
