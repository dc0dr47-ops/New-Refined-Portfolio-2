import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer" className="bg-[#FFF4EE] border-t border-[#FFE9E0] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main 3 Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#FFE9E0]">
          
          {/* Column 1: Logo & Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF745A] to-[#FF947E] flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
                AV
              </div>
              <span className="font-display font-bold text-2xl text-[#20284F]">
                {DESIGNER_INFO.name}
              </span>
            </div>

            <p className="text-sm text-[#7E7A78] leading-relaxed font-body max-w-sm">
              Multidisciplinary graphic designer specializing in vector illustration, photo editing, social media content, brand identities, and modern web interfaces.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#20284F] mb-2">
                Stay Updated With Creative Work
              </span>

              {subscribed ? (
                <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Subscribed! Thank you for joining.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#FFE9E0] text-sm text-[#20284F] placeholder-[#AAA4A1] focus:outline-none focus:border-[#FF745A]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#FF745A] hover:bg-[#FF947E] text-white font-display font-bold text-xs shadow-md transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Contact Info & Availability (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-lg text-[#20284F]">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm text-[#7E7A78]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF745A] shrink-0" />
                <a href={`mailto:${DESIGNER_INFO.email}`} className="hover:text-[#FF745A] transition-colors">
                  {DESIGNER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF745A] shrink-0" />
                <span>{DESIGNER_INFO.location}</span>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#20284F]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{DESIGNER_INFO.availability}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-lg text-[#20284F]">
              Navigation & Socials
            </h4>
            
            <div className="grid grid-cols-2 gap-2 text-sm text-[#7E7A78]">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#FF745A] transition-colors">About</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#FF745A] transition-colors">Expertise</a>
              <a href="#tools" onClick={(e) => scrollToSection(e, 'tools')} className="hover:text-[#FF745A] transition-colors font-medium">Creative Tools</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-[#FF745A] transition-colors">Selected Projects</a>
              <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-[#FF745A] transition-colors">Design Process</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#FF745A] transition-colors">Contact</a>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={DESIGNER_INFO.socials.behance}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#FFE9E0] text-xs font-bold text-[#20284F] hover:bg-[#FF745A] hover:text-white transition-colors shadow-2xs"
              >
                Behance
              </a>
              <a
                href={DESIGNER_INFO.socials.dribbble}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#FFE9E0] text-xs font-bold text-[#20284F] hover:bg-[#FF745A] hover:text-white transition-colors shadow-2xs"
              >
                Dribbble
              </a>
              <a
                href={DESIGNER_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#FFE9E0] text-xs font-bold text-[#20284F] hover:bg-[#FF745A] hover:text-white transition-colors shadow-2xs"
              >
                LinkedIn
              </a>
              <a
                href={DESIGNER_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#FFE9E0] text-xs font-bold text-[#20284F] hover:bg-[#FF745A] hover:text-white transition-colors shadow-2xs"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#7E7A78]">
          <div className="text-center sm:text-left">
            <p>
              Designed and developed with creativity by <span className="font-bold text-[#20284F]">{DESIGNER_INFO.name}</span>.
            </p>
            <p className="illustration-credit">
              Illustration by{" "}
              <a
                href="https://storyset.com/work"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storyset
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFE9E0] text-[#20284F] hover:bg-[#FF745A] hover:text-white transition-colors shadow-2xs cursor-pointer font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
