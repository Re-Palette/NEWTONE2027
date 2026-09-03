import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, HeartHandshake, Zap, Compass, ArrowRight } from 'lucide-react';
import manifestoRightWave from '../assets/images/manifesto_right_wave_1788405032147.jpg';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: Zap,
      title: 'GEN-Z INNOVATION',
      subtitle: '現役学生起業家が拓く',
      desc: '従来の業界構造にとらわれない、バイオテック、AI、先端デザインを融合させた次世代のプロダクト開発。',
      bgColor: 'bg-pink-50 text-pink-600 border-pink-200',
      hoverBorder: 'hover:border-pink-300',
    },
    {
      num: '02',
      icon: Compass,
      title: 'DIVERSITY & FREEDOM',
      subtitle: 'ジェンダーレス・ボーダレス',
      desc: '誰かの「似合う」ではなく、自分の「好き」を貫く。多様な肌色と自己表現を祝福するフリーダムビューティー。',
      bgColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      hoverBorder: 'hover:border-indigo-300',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'CLEAN & SUSTAINABILITY',
      subtitle: '透明性と環境への誠実さ',
      desc: '100%ヴィーガン処方、アップサイクル原料、リサイクル可能容器など、地球と共生するサステナブル設計。',
      bgColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      hoverBorder: 'hover:border-emerald-300',
    },
    {
      num: '04',
      icon: HeartHandshake,
      title: 'OPEN COMMUNITY',
      subtitle: '共創型ポップアップ',
      desc: '来場者の声が次の製品開発に直結。創業者と直に対話し、未来の美容カルチャーを共に育てる実験場。',
      bgColor: 'bg-purple-50 text-purple-600 border-purple-200',
      hoverBorder: 'hover:border-purple-300',
    },
  ];

  return (
    <section id="about" className="relative pt-12 sm:pt-16 pb-24 sm:pb-32 bg-[#FAF9F8] text-zinc-900 overflow-hidden border-t border-zinc-200/60">
      {/* Prismatic ambient background orbs with subtle float */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-pink-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography & Radiant Light Wave on Right */}
        <div className="relative mb-20 sm:mb-28">
          
          {/* Luminous Light Wave illuminating the right side of the header */}
          <div className="absolute -top-16 -bottom-16 -right-4 sm:-right-8 md:-right-12 lg:-right-20 w-full md:w-4/5 lg:w-3/4 pointer-events-none z-0 overflow-hidden flex items-center justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.85, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={manifestoRightWave}
              alt="Luminous Spectrum Wave"
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[600px] object-cover object-right select-none"
            />
            {/* Smooth edge feathering for light canvas */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F8] via-[#FAF9F8]/60 to-transparent w-2/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F8] via-transparent to-[#FAF9F8]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F8] via-transparent to-[#FAF9F8]" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.35em] font-bold text-pink-600 mb-4 font-mono">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_8px_rgba(236,72,153,0.6)] animate-ping"></span>
              ABOUT THE PROJECT
            </div>
            
            <div className="max-w-2xl">
              <h2 className="text-6xl sm:text-8xl lg:text-[110px] xl:text-[130px] font-black leading-[0.82] tracking-tighter-extra uppercase text-zinc-950">
                THE NEXT <br />
                BEAUTY <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                  MANIFESTO
                </span>
              </h2>

              <p className="font-zen text-sm sm:text-base text-zinc-700 max-w-lg font-light leading-relaxed mt-6 sm:mt-8">
                美の常識をアップデートする、1日限りの体験型フェスティバル。<br />
                Z世代の情熱が切り拓く新しいビューティー・スタンダード。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Story & Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-200/80 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.04)] mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Core Message & Event Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-l-2 border-zinc-950 pl-4 sm:pl-6 space-y-2">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.4em] font-mono">
                  VISION & PHILOSOPHY
                </span>
                <h3 className="font-zen text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-zinc-950">
                  <span className="inline-block whitespace-nowrap">「誰かの基準」から、</span>
                  <br />
                  <span className="inline-block whitespace-nowrap">「自分だけの光」へ。</span>
                </h3>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-row flex-wrap gap-3">
                <div className="px-5 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 font-mono tracking-wider flex items-center gap-2">
                  <span className="text-zinc-400">📅</span> 2027.04.24 (FRI) 11:00 - 20:00 [1 DAY ONLY]
                </div>
                <div className="px-5 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 font-mono tracking-wider flex items-center gap-2">
                  <span className="text-zinc-400">📍</span> WITH HARAJUKU HALL 3F
                </div>
                <div className="px-5 py-3 rounded-2xl bg-zinc-950 border border-zinc-900 text-xs text-white font-bold tracking-wider flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" /> 入場無料 (事前優先予約制)
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Manifesto Story */}
            <div className="lg:col-span-6 space-y-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
              <p>
                コスメやスキンケアは、単なる身だしなみを超えて、自己の感性やアイデンティティを拡張するクリエイティブなメディアへと進化しました。
              </p>
              <p>
                『NEWTONE 2027』は、全国の大学・大学院・デザインアカデミーから集まったZ世代の若き起業家たちが立ち上げた8つの新鋭ブランドが一堂に会する大型POPUPです。
              </p>
              <p>
                最先端のバイオ発酵技術、光を操る偏光パレット、脳波連動のムードフレグランスまで。従来の枠組みに縛られない自由な情熱が、原宿の地で新しい美容の歴史を開きます。
              </p>
            </div>

          </div>
        </motion.div>

        {/* 4 Core Pillars Grid with Prismatic Color Accents & Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-3xl p-6 sm:p-7 bg-white border border-zinc-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(236,72,153,0.12)] ${pillar.hoverBorder} transition-colors duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-syne bg-gradient-to-br from-zinc-900 via-zinc-700 to-pink-600 bg-clip-text text-transparent">
                      {pillar.num}
                    </span>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${pillar.bgColor} group-hover:scale-110 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-syne text-lg sm:text-xl font-bold tracking-wide text-zinc-950 mb-1.5 leading-snug group-hover:text-pink-600 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-semibold text-zinc-700 mb-3 tracking-wider font-zen">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light font-zen">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 group-hover:text-pink-600 transition-colors">
                  <span>PILLAR {pillar.num}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
