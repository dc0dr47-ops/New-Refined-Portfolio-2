import React from 'react';
import { Sparkles } from 'lucide-react';

interface FloatingIconProps {
  type: 'illustrator' | 'photoshop' | 'figma' | 'canva' | 'ai';
  label?: string;
  className?: string;
  delay?: string;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({
  type,
  label,
  className = '',
  delay = '0s',
}) => {
  const getIconContent = () => {
    switch (type) {
      case 'illustrator':
        return (
          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 bg-[#260000] border-2 border-[#FF9A00] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FF9A00] font-black text-sm sm:text-lg lg:text-xl shadow-md shadow-amber-500/20 transform hover:scale-110 transition-transform">
            Ai
          </div>
        );
      case 'photoshop':
        return (
          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 bg-[#001E36] border-2 border-[#31A8FF] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#31A8FF] font-black text-sm sm:text-lg lg:text-xl shadow-md shadow-sky-500/20 transform hover:scale-110 transition-transform">
            Ps
          </div>
        );
      case 'figma':
        return (
          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 bg-[#1E1E1E] border-2 border-[#F24E1E] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md shadow-orange-500/20 transform hover:scale-110 transition-transform">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
            </svg>
          </div>
        );
      case 'canva':
        return (
          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 bg-gradient-to-tr from-[#00C4CC] via-[#0075FF] to-[#7D2AE8] border-2 border-white rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-md shadow-teal-500/20 transform hover:scale-110 transition-transform p-1 overflow-hidden">
            <span
              className="text-white font-bold select-none tracking-tight leading-none text-center"
              style={{
                fontFamily: "'Dancing Script', 'Caveat', 'Brush Script MT', cursive",
                fontSize: '15px',
                fontStyle: 'italic',
              }}
            >
              Canva
            </span>
          </div>
        );
      case 'ai':
        return (
          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13 bg-gradient-to-tr from-[#8B5CF6] via-[#EC4899] to-[#FF745A] border-2 border-white rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-md shadow-purple-500/25 transform hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute z-20 transition-all duration-300 animate-float-slow ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative group">
        {getIconContent()}
        {label && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 px-2.5 py-0.5 bg-[#20284F] text-white text-[11px] font-semibold rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            {label}
          </div>
        )}
      </div>
    </div>
  );
};
