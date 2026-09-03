import React, { useState } from 'react';
import { Sparkles, Play, ShieldCheck, HeartHandshake, Zap, Compass, X, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const pillars = [
    {
      num: '01',
      icon: Zap,
      title: 'GEN-Z INNOVATION',
      subtitle: '現役学生起業家が拓く',
      desc: '従来の業界構造にとらわれない、バイオテック、AI、先端デザインを融合させた次世代のプロダクト開発。',
    },
    {
      num: '02',
      icon: Compass,
      title: 'DIVERSITY & FREEDOM',
      subtitle: 'ジェンダーレス・ボーダレス',
      desc: '誰かの「似合う」ではなく、自分の「好き」を貫く。多様な肌色と自己表現を祝福するフリーダムビューティー。',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'CLEAN & SUSTAINABILITY',
      subtitle: '透明性と環境への誠実さ',
      desc: '100%ヴィーガン処方、アップサイクル原料、リサイクル可能容器など、地球と共生するサステナブル設計。',
    },
    {
      num: '04',
      icon: HeartHandshake,
      title: 'OPEN COMMUNITY',
      subtitle: '共創型ポップアップ',
      desc: '来場者の声が次の製品開発に直結。創業者と直に対話し、未来の美容カルチャーを共に育てる実験場。',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080808] text-[#F0F0F0] overflow-hidden border-t border-white/10">
      {/* Background architectural circle */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 border-[0.5px] border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            ABOUT THE PROJECT
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-[#F0F0F0]">
                THE NEXT BEAUTY <br />
                <span className="text-outline">MANIFESTO</span>
              </h2>
            </div>
            <p className="font-zen text-sm sm:text-base text-white/70 max-w-md font-light leading-relaxed">
              美の常識をアップデートする、3日間の体験型フェスティバル。Z世代の情熱が切り拓く新しいビューティー・スタンダード。
            </p>
          </div>
        </div>

        {/* Story & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          
          {/* Left Column: Visual Video Preview Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
              <img
                src="/src/assets/images/newtone_hero_bg_1788244682783.jpg"
                alt="NEWTONE Concept Video Teaser"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent" />
              
              {/* Play Button Overlay */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                aria-label="Play concept movie"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-current" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-[0.3em] text-white/80 font-mono">
                <span className="font-bold text-pink-300">CONCEPT FILM 2027</span>
                <span>01:45 / 4K SOUND</span>
              </div>
            </div>
          </div>

          {/* Right Column: Concept Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-l-2 border-pink-500 pl-6 space-y-2">
              <span className="text-[10px] text-pink-400 font-bold uppercase tracking-[0.4em]">
                VISION & PHILOSOPHY
              </span>
              <h3 className="font-zen text-2xl sm:text-4xl font-bold leading-snug text-[#F0F0F0]">
                「誰かの基準」から、<br />
                「自分だけの光」へ。
              </h3>
            </div>

            <p className="text-white/75 leading-relaxed text-sm sm:text-base">
              コスメやスキンケアは、単なる身だしなみを超えて、自己の感性やアイデンティティを拡張するクリエイティブなメディアへと進化しました。
            </p>
            <p className="text-white/75 leading-relaxed text-sm sm:text-base">
              『NEWTONE 2027』は、全国の大学・大学院・デザインアカデミーから集まったZ世代の若き起業家たちが立ち上げた8つの新鋭ブランドが一堂に会する大型POPUPです。
            </p>
            <p className="text-white/75 leading-relaxed text-sm sm:text-base">
              最先端のバイオ発酵技術、光を操る偏光パレット、脳波連動のムードフレグランスまで。従来の枠組みに縛られない自由な情熱が、原宿の地で新しい美容の歴史を開きます。
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/90 font-mono tracking-wider">
                📅 2027.04.24 (FRI) - 04.26 (SUN)
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/90 font-mono tracking-wider">
                📍 WITH HARAJUKU HALL 3F
              </div>
              <div className="px-4 py-2 rounded-xl bg-pink-500/20 border border-pink-500/40 text-xs text-pink-300 font-bold tracking-wider">
                ✨ 入場無料 (事前優先予約制)
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid with Bold Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative rounded-3xl p-6 sm:p-7 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 hover:bg-white/[0.05] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black font-bebas tracking-tighter-extra text-outline">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-bebas text-2xl sm:text-3xl tracking-tighter-extra font-black text-[#F0F0F0] mb-1 group-hover:text-pink-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-bold text-pink-400 mb-3 tracking-wider">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity text-pink-300">
                  <span>PILLAR {pillar.num}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Video Modal Simulation */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#121212] rounded-3xl border border-white/20 p-6 sm:p-8 text-center space-y-6">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-semibold tracking-wider text-white">NEWTONE 2027 CONCEPT FILM</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center text-center p-6">
              <img
                src="/src/assets/images/newtone_hero_bg_1788244682783.jpg"
                alt="Video poster"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center mx-auto animate-pulse">
                  <Play className="w-8 h-8 ml-1 text-white fill-white" />
                </div>
                <h3 className="font-bebas text-3xl tracking-wider text-white">
                  美しさは、わたしたちがつくる未来。
                </h3>
                <p className="text-xs text-white/80">
                  Concept Movie Teaser • Directed by NEWTONE Creative Lab 2027. Full 4K Interactive Experience will be unveiled at the Opening Keynote.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
