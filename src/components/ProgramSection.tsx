import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Bookmark, BookmarkCheck } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/mockData';

export const ProgramSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter((item) => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  const days = [
    { day: 1, date: '2027.04.24 (FRI)', theme: 'DAY 1: UNVEIL & VISION' },
    { day: 2, date: '2027.04.25 (SAT)', theme: 'DAY 2: CREATION & SCIENCE' },
    { day: 3, date: '2027.04.26 (SUN)', theme: 'DAY 3: FUTURE CONNECT' },
  ];

  const filteredPrograms = PROGRAMS_DATA.filter((p) => p.day === activeDay);

  return (
    <section id="program" className="relative py-24 sm:py-32 bg-[#080808] text-[#F0F0F0] overflow-hidden border-t border-white/10">
      {/* Background ambient architectural accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              KEYNOTES & STAGES
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-[#F0F0F0]">
              EVENT <br />
              <span className="text-outline">PROGRAM</span>
            </h2>
            <p className="font-zen text-sm sm:text-base text-white/70 mt-3 max-w-xl font-light leading-relaxed">
              最前線を走る若き起業家、化学者、トップアーティストによる3日間の特別ステージプログラム。
            </p>
          </div>

          {/* Bookmarked Count Indicator */}
          {bookmarked.length > 0 && (
            <div className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-xs text-pink-300 font-bold tracking-wider flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-pink-400" />
              <span>{bookmarked.length} SESSIONS SAVED</span>
            </div>
          )}
        </div>

        {/* Day Selector Tabs - Bold Architectural Framing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {days.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                activeDay === item.day
                  ? 'bg-white/[0.08] border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
                  : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[10px] font-mono tracking-[0.3em] block text-pink-400 uppercase font-bold">
                {item.date}
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl font-black tracking-tighter-extra uppercase text-[#F0F0F0] mt-1">
                {item.theme}
              </h3>
            </button>
          ))}
        </div>

        {/* Program Schedule Timeline Cards */}
        <div className="space-y-6">
          {filteredPrograms.map((prog) => {
            const isSaved = bookmarked.includes(prog.id);
            return (
              <div
                key={prog.id}
                className="bg-white/[0.02] hover:bg-white/[0.06] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Time & Stage Badges */}
                  <div className="flex flex-wrap lg:flex-col items-start gap-2.5 lg:w-48 flex-shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] text-pink-300 font-mono text-xs font-bold border border-pink-500/30">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.time}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-white/80 font-mono text-[11px] font-medium border border-white/10">
                      <MapPin className="w-3 h-3 text-pink-400" />
                      {prog.stage}
                    </div>
                    <span className="text-[10px] font-mono text-white/50 tracking-widest font-bold">
                      [{prog.tag}]
                    </span>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="flex-1 space-y-3">
                    <h3 className="font-zen text-lg sm:text-2xl font-bold text-[#F0F0F0] leading-snug group-hover:text-pink-300 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl font-light">
                      {prog.description}
                    </p>

                    {/* Speakers avatars */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      {prog.speakers.map((sp) => (
                        <div key={sp.name} className="flex items-center gap-2.5 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                          <img
                            src={sp.avatar}
                            alt={sp.name}
                            referrerPolicy="no-referrer"
                            className="w-6 h-6 rounded-full object-cover border border-white/20"
                          />
                          <div className="text-xs">
                            <span className="text-[#F0F0F0] font-medium">{sp.name}</span>
                            <span className="text-[10px] text-white/50 ml-1.5 hidden sm:inline">
                              {sp.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Save / Reminder Button */}
                  <div className="flex lg:flex-col items-center justify-end">
                    <button
                      onClick={() => toggleBookmark(prog.id)}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isSaved
                          ? 'bg-[#F0F0F0] text-[#080808] border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                          : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border-white/15'
                      }`}
                      title={isSaved ? 'ブックマークを解除' : 'セッションを保存'}
                      aria-label="Bookmark session"
                    >
                      {isSaved ? <BookmarkCheck className="w-5 h-5 text-[#080808]" /> : <Bookmark className="w-5 h-5" />}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
