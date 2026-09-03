import React from 'react';
import heroImg from '../assets/images/newtone_hero_bg_1788244682783.png';

interface HeroProps {
  onOpenEntry?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#080808] flex items-center justify-center"
    >
      {/* User Provided Design Image (No filters, 100% pure visual) */}
      <div className="w-full flex items-center justify-center">
        <img
          src={heroImg}
          alt="NEWTONE 2027 Main Visual"
          referrerPolicy="no-referrer"
          className="w-full h-auto block select-none"
        />
      </div>
    </section>
  );
};

