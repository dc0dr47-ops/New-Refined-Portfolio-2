import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = '923414345693';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 flex items-center group">
      {/* Tooltip Label on Hover */}
      <span
        className={`absolute left-14 sm:left-16 whitespace-nowrap bg-[#20284F] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg transition-all duration-200 pointer-events-none select-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-2'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* WhatsApp Link Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Aftab Nadeem on WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:animate-none pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-xs"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.176-2.926-7.062A9.92 9.92 0 0012.012 2zm5.836 14.165c-.242.682-1.201 1.25-1.97 1.415-.528.113-1.217.204-3.532-.756-2.962-1.228-4.868-4.242-5.016-4.439-.147-.198-1.201-1.6-1.201-3.053 0-1.453.76-2.167 1.03-2.46.242-.264.646-.385.91-.385.127 0 .242.006.345.011.254.012.383.028.551.431.211.505.727 1.776.79 1.905.064.129.106.28.021.448-.085.168-.127.273-.253.421-.127.148-.266.331-.38.444-.127.127-.26.265-.112.518.148.253.658 1.087 1.411 1.758.969.863 1.786 1.13 2.039 1.257.253.127.401.106.549-.064.148-.169.633-.738.802-.991.168-.253.337-.211.569-.127.232.085 1.476.696 1.729.822.253.127.421.19.484.295.063.106.063.612-.179 1.294z" />
        </svg>
      </a>
    </div>
  );
};
