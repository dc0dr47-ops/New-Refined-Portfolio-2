import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Sparkles, MessageSquare, ChevronDown } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { CharacterIllustration } from './CharacterIllustration';
import { FloatingIcon } from './FloatingIcon';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollOpacity = Math.max(0, 1 - scrollY / 100);

  return (
    <section
      id="hero"
      className="flex-1 min-h-0 w-full flex flex-col justify-between pt-[54px] sm:pt-[60px] lg:pt-[64px] pb-3 sm:pb-5 px-4 sm:px-6 lg:px-10 relative overflow-hidden"
    >
      {/* Background Soft Radial Glows */}
      <div className="absolute top-4 left-4 w-72 h-72 sm:w-96 sm:h-96 bg-peach-glow rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#FFE9E0]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex-1 min-h-0 flex flex-col justify-between relative z-10">
        
        {/* Upper Main Split Grid (Text + Character) */}
        <div className="hero-upper-grid grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 items-center flex-1 min-h-0 my-auto">
          
          {/* Left Column: Text & CTAs */}
          <div className="hero-left-col lg:col-span-7 flex flex-col items-start text-left space-y-2 sm:space-y-3 lg:space-y-3.5 my-auto">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FFE9E0] shadow-2xs">
              <span className="text-xs sm:text-sm animate-bounce">👋</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#20284F]">
                {DESIGNER_INFO.availability}
              </span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="hero-title font-display font-extrabold text-[#20284F] tracking-tight">
              Hi, I’m{' '}
              <span className="relative inline-block text-[#FF745A]">
                {DESIGNER_INFO.name}
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2.5 sm:h-3 text-[#FF947E]/40"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 8 C 50 2, 150 12, 198 4"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            {/* Supporting Tagline */}
            <h2 className="hero-subtitle font-display font-semibold text-[#FF745A]">
              {DESIGNER_INFO.title}
            </h2>

            {/* Paragraph Description */}
            <p className="hero-desc text-[#7E7A78] max-w-xl font-body">
              {DESIGNER_INFO.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="pt-0.5 sm:pt-1 flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex-1 sm:flex-initial px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#FF745A] hover:bg-[#FF947E] text-white font-display font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-1.5 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white hover:bg-[#FFE9E0] text-[#20284F] hover:text-[#FF745A] font-display font-bold text-xs sm:text-sm border border-[#FFE9E0] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF745A]" />
                <span>Let’s Work Together</span>
              </button>
            </div>

          </div>

          {/* Right Column: Character Illustration & Floating Creative Tools */}
          <div className="hero-right-col lg:col-span-5 relative flex items-center justify-center h-full min-h-0 py-1 lg:py-0">
            
            {/* Main 3D Character Illustration */}
            <CharacterIllustration pose="hero" />

            {/* Floating Software Icons around character */}
            <FloatingIcon
              type="illustrator"
              label="Adobe Illustrator"
              className="-top-1 left-1 sm:top-1 sm:left-4 lg:top-2 lg:left-6"
              delay="0s"
            />
            <FloatingIcon
              type="photoshop"
              label="Adobe Photoshop"
              className="top-2 right-1 sm:top-4 sm:right-3 lg:top-6 lg:right-4"
              delay="1s"
            />
            <FloatingIcon
              type="figma"
              label="Figma"
              className="bottom-8 left-1 sm:bottom-12 sm:left-3 lg:bottom-14 lg:left-4"
              delay="2s"
            />
            <FloatingIcon
              type="canva"
              label="Canva"
              className="bottom-1 right-2 sm:bottom-3 sm:right-4 lg:bottom-4 lg:right-6"
              delay="1.5s"
            />
            <FloatingIcon
              type="ai"
              label="AI Tools"
              className="top-1/2 -right-2 sm:-right-3 lg:-right-4 transform -translate-y-1/2"
              delay="2.5s"
            />

            {/* Sparkle Decorative Accent */}
            <div className="absolute top-0 right-1/4 text-[#FF947E] animate-pulse hidden sm:block">
              <Sparkles className="w-6 h-6 lg:w-8 lg:h-8" />
            </div>
          </div>

        </div>

        {/* Lower Row: All Four Statistics Cards & Scroll Indicator */}
        <div className="hero-stats-wrapper pt-2 sm:pt-3 border-t border-[#FFE9E0]/80 flex-none w-full relative">
          
          {/* Animated Scroll Indicator */}
          <div
            style={{
              opacity: scrollOpacity,
              transform: `translateY(${scrollY * 0.1}px)`,
              pointerEvents: scrollOpacity < 0.05 ? 'none' : 'auto',
            }}
            className="transition-all duration-300 ease-out flex flex-col items-center justify-center -mt-7 sm:-mt-8 mb-1.5 cursor-pointer group w-fit mx-auto select-none"
            onClick={() => scrollToSection('about')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToSection('about');
              }
            }}
            aria-label="Scroll to About section"
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#FFE9E0] shadow-xs hover:border-[#FF745A] hover:shadow-sm transition-all duration-200">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#7E7A78] group-hover:text-[#FF745A] transition-colors">
                Scroll
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#FF745A] animate-bounce" />
            </div>
          </div>

          <div className="hero-stats-grid grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 w-full">
            {DESIGNER_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card bg-white/80 backdrop-blur-xs p-2 sm:p-2.5 lg:p-3 rounded-2xl border border-[#FFE9E0] text-center shadow-2xs flex flex-col justify-center"
              >
                <div className="font-display font-bold text-base sm:text-lg lg:text-2xl text-[#20284F] leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-[#7E7A78] font-medium mt-0.5 line-clamp-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
