import React, { useState } from 'react';
import { Sparkles, RefreshCw, CheckCircle2, ArrowRight, Share2 } from 'lucide-react';
import { TONE_RESULTS } from '../data/mockData';
import { ToneFinderResult } from '../types';

interface ToneFinderProps {
  onOpenEntryWithTone: (toneName: string) => void;
}

export const ToneFinder: React.FC<ToneFinderProps> = ({ onOpenEntryWithTone }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [result, setResult] = useState<ToneFinderResult | null>(null);

  const questions = [
    {
      id: 1,
      title: 'Q1. あなたが今、最も惹かれる「肌の質感」は？',
      options: [
        { label: '内側から光を放つような、透明感あふれる水光ツヤ肌', index: 0 },
        { label: '温かみと上気したような血色感を宿す、ネオクラシック肌', index: 1 },
        { label: '角度によって光が移ろう、プレイフルな偏光オーロラ肌', index: 2 },
        { label: '素肌そのものが息づく、ナチュラルな発酵オーガニック肌', index: 3 },
      ],
    },
    {
      id: 2,
      title: 'Q2. 日常のメイクやコスメに求める一番の価値は？',
      options: [
        { label: '最先端のバイオサイエンス＆成分への高い信頼性', index: 0 },
        { label: '気分やムードを高め、自信を与えてくれるセンシュアリティ', index: 1 },
        { label: 'ジェンダーや枠にとらわれない、自由な自己表現', index: 2 },
        { label: '心身のバランスを整え、地球環境にも配慮したサステナビリティ', index: 3 },
      ],
    },
    {
      id: 3,
      title: 'Q3. NEWTONE 2027 で一番体験してみたいコンテンツは？',
      options: [
        { label: '最新リポソーム美容液の肌浸透デモ＆成分解析', index: 0 },
        { label: '水分量で変化する生ツヤリップのカスタムカラー調合', index: 1 },
        { label: '偏光ピグメントのホログラフィック・ライブメイク', index: 2 },
        { label: '脳波連動のムードパフューム調香ワークショップ', index: 3 },
      ],
    },
  ];

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    const updated = { ...selectedAnswers, [questionId]: optionIndex };
    setSelectedAnswers(updated);

    if (questionId < 3) {
      setStep(questionId + 1);
    } else {
      // Calculate final tone result
      const mostFrequentIndex = optionIndex % TONE_RESULTS.length;
      setResult(TONE_RESULTS[mostFrequentIndex]);
      setStep(4);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setResult(null);
    setStep(1);
  };

  return (
    <section id="tone-test" className="relative py-24 sm:py-32 bg-[#080808] text-[#F0F0F0] overflow-hidden border-t border-white/10">
      {/* Dynamic background light accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            INTERACTIVE DIAGNOSIS
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter-extra uppercase text-[#F0F0F0]">
            FIND YOUR <br className="sm:hidden" />
            <span className="text-outline">NEXT TONE</span>
          </h2>
          <p className="font-zen text-sm sm:text-base text-white/70 mt-3 max-w-xl mx-auto font-light leading-relaxed">
            3つの直感的な質問から、あなたの魅力を最大化する「トーン＆おすすめブランド」を診断します。
          </p>
        </div>

        {/* Diagnosis Box */}
        <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {step <= 3 ? (
            <div className="space-y-8 animate-in fade-in">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                        s === step
                          ? 'bg-[#F0F0F0] text-[#080808] shadow-[0_0_12px_rgba(255,255,255,0.4)] scale-105'
                          : s < step
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-pink-400 uppercase tracking-[0.3em] font-bold">
                  STEP 0{step} / 03
                </span>
              </div>

              {/* Question Text */}
              <div>
                <h3 className="font-zen text-lg sm:text-xl font-bold text-[#F0F0F0] leading-relaxed">
                  {questions[step - 1].title}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3.5">
                {questions[step - 1].options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleSelectOption(step, option.index)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-pink-400/60 transition-all duration-300 group flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-white font-medium font-zen">
                      {option.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-pink-300 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            // Results Card
            result && (
              <div className="space-y-8 animate-in zoom-in-95 duration-500">
                
                <div className="text-center pb-6 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-pink-400 font-bold uppercase">
                    DIAGNOSIS COMPLETE • YOUR PERSONAL VIBE
                  </span>
                  
                  {/* Holographic Glowing Tone Title */}
                  <h3 className="font-bebas text-5xl sm:text-7xl font-black tracking-tighter-extra uppercase text-[#F0F0F0] mt-2">
                    {result.toneName}
                  </h3>
                  <p className="font-zen text-base sm:text-lg text-pink-300 font-medium">
                    {result.subTitle}
                  </p>
                </div>

                {/* Color Palette Preview */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-black/60 border border-white/10">
                  <div className="text-xs font-mono text-white/70 uppercase tracking-widest">
                    SIGNATURE HARMONY PALETTE:
                  </div>
                  <div className="flex items-center gap-2">
                    {result.palette.map((color, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 h-8 rounded-full border border-white/30 shadow-md"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[9px] font-mono text-white/50">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed font-zen bg-white/[0.03] p-5 rounded-2xl border border-white/10">
                  {result.description}
                </p>

                {/* Recommendation and Pass perks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-pink-300 font-bold uppercase block mb-1 tracking-widest">
                      MATCHED BRANDS
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {result.recommendedBrands.map((b) => (
                        <span key={b} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold text-white">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <span className="text-[10px] font-mono text-pink-300 font-bold uppercase block mb-1 tracking-widest">
                      EVENT LUCKY ITEM
                    </span>
                    <p className="text-xs font-semibold text-white mt-1">
                      {result.luckyItem}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onOpenEntryWithTone(result.toneName)}
                    className="flex-1 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#F0F0F0] text-[#080808] hover:bg-pink-500 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 hover:scale-105 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    このトーンで限定VIPパスを発行する
                  </button>

                  <button
                    onClick={handleReset}
                    className="py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center gap-2 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    再診断する
                  </button>
                </div>

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};
