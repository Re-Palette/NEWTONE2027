import React from 'react';
import { Sparkles, ArrowRight, Calendar, Tag } from 'lucide-react';
import { NEWS_DATA } from '../data/mockData';

export const NewsSection: React.FC = () => {
  return (
    <section id="news" className="relative py-24 sm:py-32 bg-[#F8F9FA] text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 mb-3 font-mono">
              <span className="w-2 h-2 rounded-full bg-zinc-900 shadow-[0_0_8px_rgba(0,0,0,0.2)]"></span>
              PRESS & ANNOUNCEMENTS
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-zinc-950">
              NEWS & <br />
              <span className="text-outline">RELEASES</span>
            </h2>
            <p className="font-zen text-sm sm:text-base text-zinc-600 mt-3 max-w-xl font-light leading-relaxed">
              NEWTONE 2027 に関する最新プレスリリースおよびイベント開催告知。
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_DATA.map((item) => (
            <article
              key={item.id}
              className="bg-white hover:bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/80 hover:border-zinc-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{item.date}</span>
                </div>

                <h3 className="font-zen text-base sm:text-lg font-bold text-zinc-950 leading-snug group-hover:text-zinc-700 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-light font-zen">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>READ TIME: {item.readTime}</span>
                <span className="text-zinc-950 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase tracking-widest text-[11px]">
                  MORE <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
