import React from 'react';
import { motion } from 'motion/react';
import heroImg from '../assets/images/newtone_hero_bg_1788244682783.png';
import { Calendar, MapPin, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenEntry?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEntry, onSelectCategory }) => {
  const categories = [
    'ALL',
    'COSMETICS',
    'SKINCARE',
    'HAIRCARE',
    'INNERCARE',
    'BEAUTY TOOL',
    'FRAGRANCE',
  ];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#070709] pt-0"
    >
      {/* Hero Visual Container - Full width edge-to-edge view */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full"
      >
        <img
          src={heroImg}
          alt="NEWTONE 2027 Main Visual"
          referrerPolicy="no-referrer"
          className="w-full h-auto block select-none"
        />
      </motion.div>

      {/* Exhibition Information & Quick Navigation Ribbon (Shifted cleanly below photo) */}
      <div className="relative w-full bg-[#FAF9F8] border-t border-zinc-200/60 pt-6 sm:pt-8 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-5 sm:p-7 border border-zinc-200/90 shadow-[0_10px_40px_rgba(236,72,153,0.08),0_2px_15px_rgba(0,0,0,0.04)] hover:border-pink-200 transition-colors"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Event Key Highlights with Beauty Prismatic Accents */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-zinc-700 font-mono">
              <div className="flex items-center gap-2 font-bold text-zinc-950">
                <span className="w-7 h-7 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200/60 shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                </span>
                <span>2027.04.24 (FRI) 11:00 - 20:00</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold tracking-wider shadow-sm animate-pulse">
                  1 DAY ONLY
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200/60 shadow-sm">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span className="font-sans font-medium text-zinc-800">WITH HARAJUKU HALL 3F (原宿駅徒歩1分)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="font-sans font-medium">入場無料 / 事前優先入場予約制</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#brands"
                className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-zinc-700 hover:text-pink-600 border border-zinc-200 hover:border-pink-300 hover:bg-pink-50/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>ブランドを見る</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>
              {onOpenEntry && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenEntry}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#FA5092] via-[#C852EA] to-[#845CF8] border border-white/80 shadow-[0_4px_18px_rgba(250,80,146,0.35)] hover:shadow-[0_6px_22px_rgba(200,82,234,0.45)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>無料事前登録</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              )}
            </div>

          </div>

          {/* Quick Category Anchor Filter */}
          {onSelectCategory && (
            <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex-shrink-0 mr-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping"></span>
                CATEGORIES:
              </span>
              {categories.map((cat) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    const brandsSection = document.getElementById('brands');
                    if (brandsSection) {
                      brandsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-zinc-600 hover:text-pink-600 hover:bg-pink-50/60 border border-transparent hover:border-pink-200/80 transition-all flex-shrink-0 cursor-pointer"
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          )}

        </motion.div>
      </div>
    </div>
  </section>
  );
};

