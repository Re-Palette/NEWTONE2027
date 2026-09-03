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
    <section id="program" className="relative py-24 sm:py-32 bg-[#FAF9F8] text-zinc-900 overflow-hidden border-t border-zinc-200/80">
      {/* Background ambient orbs */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography & Prismatic Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-600 mb-3 font-mono">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></span>
              KEYNOTES & STAGES
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-zinc-950">
              EVENT <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                PROGRAM
              </span>
            </h2>
            <p className="font-zen text-sm sm:text-base text-zinc-600 mt-3 max-w-xl font-light leading-relaxed">
              最前線を走る若き起業家、化学者、トップアーティストによる3日間の特別ステージプログラム。
            </p>
          </div>

          {/* Bookmarked Count Indicator */}
          {bookmarked.length > 0 && (
            <div className="mt-4 md:mt-0 px-5 py-2.5 rounded-full bg-pink-50 border border-pink-200 text-xs text-pink-700 font-bold tracking-wider flex items-center gap-2 shadow-sm animate-in fade-in">
              <BookmarkCheck className="w-4 h-4 text-pink-600" />
              <span>{bookmarked.length} SESSIONS SAVED</span>
            </div>
          )}
        </div>

        {/* Day Selector Tabs - Architectural Prismatic Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {days.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                activeDay === item.day
                  ? 'bg-white border-pink-300 shadow-[0_8px_30px_rgba(236,72,153,0.14)] scale-[1.02]'
                  : 'bg-white/70 hover:bg-white border-zinc-200/80 text-zinc-600 hover:text-zinc-950 shadow-sm'
              }`}
            >
              <span className={`text-[10px] font-mono tracking-[0.3em] block uppercase font-bold ${
                activeDay === item.day ? 'text-pink-600' : 'text-zinc-400'
              }`}>
                {item.date}
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl font-black tracking-tighter-extra uppercase text-zinc-950 mt-1">
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
                className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 hover:border-pink-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(236,72,153,0.1)] transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Time & Stage Badges */}
                  <div className="flex flex-wrap lg:flex-col items-start gap-2.5 lg:w-48 flex-shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 font-mono text-xs font-bold border border-pink-200 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-pink-600" />
                      {prog.time}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-mono text-[11px] font-medium border border-indigo-200 shadow-sm">
                      <MapPin className="w-3 h-3 text-indigo-600" />
                      {prog.stage}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 tracking-widest font-bold">
                      [{prog.tag}]
                    </span>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="flex-1 space-y-3">
                    <h3 className="font-zen text-lg sm:text-2xl font-bold text-zinc-950 leading-snug group-hover:text-pink-600 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl font-light font-zen">
                      {prog.description}
                    </p>

                    {/* Speakers avatars */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      {prog.speakers.map((sp) => (
                        <div key={sp.name} className="flex items-center gap-2.5 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-200 shadow-sm">
                          <img
                            src={sp.avatar}
                            alt={sp.name}
                            referrerPolicy="no-referrer"
                            className="w-6 h-6 rounded-full object-cover border border-pink-200"
                          />
                          <div className="text-xs">
                            <span className="text-zinc-900 font-medium">{sp.name}</span>
                            <span className="text-[10px] text-zinc-500 ml-1.5 hidden sm:inline">
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
                          ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white border-pink-500 shadow-[0_4px_15px_rgba(236,72,153,0.35)] scale-105'
                          : 'bg-zinc-50 hover:bg-pink-50 text-zinc-600 hover:text-pink-600 border-zinc-200 hover:border-pink-200'
                      }`}
                      title={isSaved ? 'ブックマークを解除' : 'セッションを保存'}
                      aria-label="Bookmark session"
                    >
                      {isSaved ? <BookmarkCheck className="w-5 h-5 text-white" /> : <Bookmark className="w-5 h-5" />}
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
