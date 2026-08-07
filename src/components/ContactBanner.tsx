import React from 'react';
import { Mail, ArrowDownRight, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { CharacterIllustration } from './CharacterIllustration';

interface ContactBannerProps {
  onScrollToForm: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onScrollToForm }) => {
  return (
    <section id="contact-banner" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Rounded Banner Container */}
        <div className="bg-peach-gradient rounded-3xl sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#FFE9E0] shadow-md relative overflow-hidden">
          
          {/* Subtle Glow backdrop */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF745A]/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF745A] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Have a project in mind?</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#20284F] tracking-tight leading-tight">
                Let’s Create Something Meaningful Together
              </h2>

              <p className="text-base sm:text-lg text-[#7E7A78] leading-relaxed font-body">
                Whether you need a new brand identity, polished visual content, illustration work or a responsive website, I’d love to hear about your project.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={onScrollToForm}
                  className="px-8 py-4 rounded-full bg-[#FF745A] hover:bg-[#FF947E] text-white font-display font-bold text-base shadow-lg shadow-coral-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowDownRight className="w-5 h-5" />
                </button>

                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="flex items-center gap-2 text-sm font-bold text-[#20284F] hover:text-[#FF745A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[#FFE9E0] flex items-center justify-center text-[#FF745A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{DESIGNER_INFO.email}</span>
                </a>
              </div>

            </div>

            {/* Right Character Mascot */}
            <div className="lg:col-span-5 relative flex justify-center">
              <CharacterIllustration pose="contact" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
