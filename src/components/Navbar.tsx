import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Tools', href: '#tools' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[54px] sm:h-[60px] lg:h-[64px] flex items-center ${
        isScrolled
          ? 'bg-[#FFF9F6]/95 backdrop-blur-md shadow-2xs border-b border-[#FFE9E0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#FF745A] to-[#FF947E] flex items-center justify-center text-white font-display font-bold text-base sm:text-lg shadow-xs group-hover:scale-105 transition-transform">
            AN
          </div>
          <div className="flex items-center">
            <span className="font-display font-bold text-lg sm:text-xl text-[#20284F] tracking-tight group-hover:text-[#FF745A] transition-colors">
              {DESIGNER_INFO.name}
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFE9E0] text-[#FF745A]">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFE9E0] shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#FF745A] bg-[#FFE9E0]'
                    : 'text-[#7E7A78] hover:text-[#20284F] hover:bg-[#FFF0EB]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#20284F] hover:bg-[#161B36] text-white text-xs sm:text-xs md:text-sm font-semibold shadow-xs hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF947E]" />
            <span className="inline md:hidden">Resume</span>
            <span className="hidden md:inline">Download Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-xl bg-white border border-[#FFE9E0] text-[#20284F] hover:bg-[#FFE9E0] transition-colors shadow-2xs"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF745A]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[54px] sm:top-[60px] bg-[#FFF9F6]/98 backdrop-blur-xl border-b border-[#FFE9E0] shadow-xl py-4 px-5 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-300 z-50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#FFE9E0] text-[#FF745A] font-bold'
                    : 'text-[#20284F] hover:bg-[#FFF0EB]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <Sparkles className="w-4 h-4 text-[#FF745A]" />}
              </a>
            );
          })}

          <div className="pt-4 border-t border-[#FFE9E0] mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#FF745A] text-white text-base font-bold shadow-md hover:bg-[#FF947E] transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
