import React from 'react';
import { CheckCircle2, MapPin, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { CharacterIllustration } from './CharacterIllustration';

export const AboutSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative bg-[#FFF4EE]/60 border-y border-[#FFE9E0]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Right Column on mobile, Left on desktop: Illustration */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <CharacterIllustration pose="about" />

            {/* Floating Decorative Swatches Card */}
            <div className="hidden sm:flex absolute -bottom-4 -right-2 bg-white p-4 rounded-2xl shadow-lg border border-[#FFE9E0] items-center gap-3 z-20">
              <div className="flex gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#FF745A]" />
                <span className="w-5 h-5 rounded-full bg-[#FF9A00]" />
                <span className="w-5 h-5 rounded-full bg-[#31A8FF]" />
                <span className="w-5 h-5 rounded-full bg-[#20284F]" />
              </div>
              <div className="text-xs font-bold text-[#20284F]">Color Palette Ready</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Coral Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE9E0] text-[#FF745A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#20284F] leading-tight">
              Designing Ideas Into Memorable Visual Experiences
            </h2>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#7E7A78] leading-relaxed font-body">
              {DESIGNER_INFO.bio}
            </p>

            {/* Personal Qualities List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {DESIGNER_INFO.qualities.map((quality, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/80 p-3.5 rounded-2xl border border-[#FFE9E0]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF745A] shrink-0" />
                  <span className="text-sm font-semibold text-[#20284F]">{quality}</span>
                </div>
              ))}
            </div>

            {/* Compact Details & CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#FFE9E0]">
              
              <div className="space-y-2 text-xs sm:text-sm text-[#7E7A78]">
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="w-4 h-4 text-[#FF745A]" />
                  <span>{DESIGNER_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Mail className="w-4 h-4 text-[#FF745A]" />
                  <span>{DESIGNER_INFO.email}</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('process')}
                className="px-6 py-3.5 rounded-full bg-[#20284F] hover:bg-[#161B36] text-white font-display font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
