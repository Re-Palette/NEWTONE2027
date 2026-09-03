import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Clock, Train, ChevronDown, ChevronUp, ExternalLink, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const AccessSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeZone, setActiveZone] = useState<'A' | 'B' | 'C' | 'D'>('A');

  const zones = [
    {
      id: 'A',
      name: 'ZONE A: BIO & CELLULAR SKINCARE',
      brands: ['LÚMINA BIO', 'KURA CELL'],
      desc: '最先端バイオテクノロジーと伝統発酵を融合した高機能スキンケアエリア。生セラミド抽出ラボ併設。',
      color: 'border-emerald-200 bg-emerald-50/70 text-emerald-800',
      activeClass: 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'B',
      name: 'ZONE B: COLOR & CHROMATIC BEAUTY',
      brands: ['PRISM TONE', 'NEO TINT STUDIO', 'ETHEREAL LAB'],
      desc: '光の屈折とpH変化を楽しむジェンダーレスコスメ＆ヘアケア。大型ミラーとライティング完備のタッチアップゾーン。',
      color: 'border-pink-200 bg-pink-50/70 text-pink-800',
      activeClass: 'border-pink-500 bg-pink-50 text-pink-900 shadow-md',
      tagColor: 'bg-pink-100 text-pink-800 border-pink-200',
    },
    {
      id: 'C',
      name: 'ZONE C: NEURO-SCENT & WELLNESS',
      brands: ['AURA 01', 'FLORA INGEST'],
      desc: '脳波測定アロマ調香体験とインナービューティードリンクバー。心身の波動を整えるリラックスラウンジ。',
      color: 'border-purple-200 bg-purple-50/70 text-purple-800',
      activeClass: 'border-purple-500 bg-purple-50 text-purple-900 shadow-md',
      tagColor: 'bg-purple-100 text-purple-800 border-purple-200',
    },
    {
      id: 'D',
      name: 'ZONE D: BEAUTY TECH & MAIN STAGE',
      brands: ['META GLOW', 'NEWTONE AUDITORIUM'],
      desc: 'AI肌解析＆次世代EMSデバイスの体験パビリオン。キーノートスピーチとアワード授賞式が開催されるメインシアター。',
      color: 'border-cyan-200 bg-cyan-50/70 text-cyan-800',
      activeClass: 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-md',
      tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    },
  ];

  return (
    <section id="access" className="relative py-24 sm:py-32 bg-[#FAF9F8] text-zinc-900 overflow-hidden border-t border-zinc-200/80">
      {/* Ambient background orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-pink-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography & Prismatic Gradient */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-600 mb-3 font-mono">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></span>
            VENUE & LOCATION GUIDE
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-zinc-950">
            JOIN US IN <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              HARAJUKU
            </span>
          </h2>
          <p className="font-zen text-sm sm:text-base text-zinc-600 mt-3 font-light leading-relaxed">
            ファッションとビューティーの最先端・原宿 WITH HARAJUKU HALLにて開催。
          </p>
        </div>

        {/* Venue Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)] space-y-6">
              <h3 className="font-bebas text-3xl sm:text-4xl font-black tracking-tighter-extra uppercase text-zinc-950 border-b border-zinc-100 pb-4">
                EVENT SPECIFICATIONS
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center flex-shrink-0 text-zinc-800">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">開催日程</h4>
                    <p className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5 font-zen">
                      2027年 4月24日 (金) [1日限定開催]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center flex-shrink-0 text-zinc-800">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">開催時間</h4>
                    <p className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5 font-zen">
                      11:00 - 20:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center flex-shrink-0 text-zinc-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">会場所在地</h4>
                    <p className="text-base sm:text-lg font-bold text-zinc-950 mt-0.5 font-zen">
                      WITH HARAJUKU HALL (3F)
                    </p>
                    <p className="text-xs text-zinc-600 mt-0.5 font-zen">
                      〒150-0001 東京都渋谷区神宮前1-14-30
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center flex-shrink-0 text-zinc-800">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">最寄り駅アクセス</h4>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed font-zen">
                      • JR山手線「原宿駅」東口より徒歩1分<br />
                      • 東京メトロ千代田線・副都心線「明治神宮前〈原宿〉駅」2番出口より徒歩1分
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs text-zinc-950 font-bold tracking-wider">入場料金: 完全無料 (事前優先予約制)</span>
                <a
                  href="https://maps.google.com/?q=WITH+HARAJUKU"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-950 underline font-mono uppercase tracking-wider font-semibold"
                >
                  GOOGLE MAPS
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Interactive Floor Plan Explorer */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bebas text-3xl sm:text-4xl font-black tracking-tighter-extra uppercase text-zinc-950">
                  INTERACTIVE FLOOR MAP
                </h3>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">HALL 3F FLOOR PLAN</span>
              </div>

              {/* Map Zones Navigation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {zones.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id as 'A' | 'B' | 'C' | 'D')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all uppercase tracking-wider ${
                      activeZone === z.id
                        ? z.activeClass
                        : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-600 border border-zinc-200'
                    }`}
                  >
                    ZONE {z.id}
                  </button>
                ))}
              </div>

              {/* Floor Plan Visual Diagram */}
              <div className="relative rounded-2xl bg-zinc-100/80 border border-zinc-200 p-4 mb-6 overflow-hidden aspect-[16/9] flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-4">
                  {zones.map((zone) => (
                    <div
                      key={zone.id}
                      onClick={() => setActiveZone(zone.id as 'A' | 'B' | 'C' | 'D')}
                      className={`rounded-xl p-3 border cursor-pointer transition-all flex flex-col justify-between ${
                        activeZone === zone.id
                          ? `${zone.activeClass} scale-[1.02]`
                          : 'border-zinc-200 bg-white/80 hover:bg-white'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold">
                        {zone.id}
                      </span>
                      <span className="text-[10px] font-mono line-clamp-1 uppercase tracking-wider font-semibold">
                        {zone.name.split(':')[1] || zone.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Zone Detail Card */}
              {(() => {
                const current = zones.find((z) => z.id === activeZone)!;
                return (
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs sm:text-sm text-zinc-950">
                        {current.name}
                      </h4>
                      <span className="text-[10px] font-mono text-pink-600 font-bold uppercase tracking-widest">ACTIVE ZONE</span>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed font-zen">
                      {current.desc}
                    </p>
                    <div className="pt-1 flex items-center gap-2">
                      <span className="text-[10px] text-zinc-500 font-mono">EXHIBITING BRANDS:</span>
                      {current.brands.map((b) => (
                        <span key={b} className={`text-[11px] px-2.5 py-0.5 rounded border font-semibold font-mono shadow-sm ${current.tagColor}`}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions (FAQ) with Bold Typography */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-bebas text-3xl sm:text-5xl font-black tracking-tighter-extra uppercase text-zinc-950">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-xs uppercase tracking-widest font-mono text-zinc-400 mt-1">FAQ & SUPPORT</p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-zinc-200/80 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-zinc-950 flex items-center gap-2 font-zen">
                      <HelpCircle className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-zinc-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3 font-zen">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
