import React from 'react';
import heroPortrait from '../assets/images/regenerated_image_1786090421458.png';
import aboutPortrait from '../assets/images/regenerated_image_1786090461342.png';
import contactPortrait from '../assets/images/contact_portrait.png';

interface CharacterProps {
  pose: 'hero' | 'about' | 'contact';
  className?: string;
  imageSrc?: string;
}

export const CharacterIllustration: React.FC<CharacterProps> = ({ pose, className = '', imageSrc }) => {
  if (pose === 'hero') {
    return (
      <div className={`relative w-full h-full max-h-[32vh] sm:max-h-[48vh] lg:max-h-[58vh] xl:max-h-[64vh] aspect-square mx-auto flex items-center justify-center ${className}`}>
        {/* Soft Radial Ambient Backdrop Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF745A]/25 via-[#FFE9E0]/40 to-transparent blur-3xl transform scale-110 pointer-events-none" />

        {/* Hero Designer Portrait Image: prioritized because it is above the fold. */}
        <img
          src={imageSrc || heroPortrait}
          alt="Aftab Nadeem - Graphic Designer & Creative Technologist"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full max-h-full object-contain relative z-10 select-none drop-shadow-xl"
        />
      </div>
    );
  }

  if (pose === 'about') {
    return (
      <div className={`relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center ${className}`}>
        {/* Soft Radial Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF947E]/20 via-[#FFE9E0]/40 to-transparent blur-2xl transform scale-110 pointer-events-none" />

        {/* About Designer Portrait Image */}
        <img
          src={imageSrc || aboutPortrait}
          alt="Aftab Nadeem - About Portrait"
          loading="lazy"
          decoding="async"
          className="w-full h-full max-h-full object-contain relative z-10 select-none drop-shadow-lg"
        />
      </div>
    );
  }

  // Contact pose
  return (
    <div className={`relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF745A]/20 via-[#FFE9E0]/30 to-transparent blur-xl pointer-events-none" />

      {/* Contact Designer Portrait Image */}
      <img
        src={imageSrc || contactPortrait}
        alt="Aftab Nadeem - Contact Portrait"
        loading="lazy"
        decoding="async"
        className="w-full h-full max-h-full object-contain relative z-10 select-none drop-shadow-lg"
      />
    </div>
  );
};


