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
    <section id="tone-test" className="relative py-24 sm:py-32 bg-[#FAF9F8] text-zinc-900 overflow-hidden border-t border-zinc-200/80">
      {/* Prismatic glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200/30 via-purple-200/20 to-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography & Prismatic Accent */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-600 mb-3 font-mono">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></span>
            INTERACTIVE DIAGNOSIS
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter-extra uppercase text-zinc-950">
            FIND YOUR <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              NEXT TONE
            </span>
          </h2>
          <p className="font-zen text-sm sm:text-base text-zinc-600 mt-3 max-w-xl mx-auto font-light leading-relaxed">
            3つの直感的な質問から、あなたの魅力を最大化する「トーン＆おすすめブランド」を診断します。
          </p>
        </div>

        {/* Diagnosis Box */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-[0_10px_40px_rgba(236,72,153,0.08),0_2px_15px_rgba(0,0,0,0.03)]">
          
          {step <= 3 ? (
            <div className="space-y-8 animate-in fade-in">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-3">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                        s === step
                          ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-[0_2px_10px_rgba(236,72,153,0.4)] scale-105'
                          : s < step
                          ? 'bg-pink-100 text-pink-700'
                          : 'bg-zinc-100 text-zinc-400'
                      }`}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-pink-600 uppercase tracking-[0.3em] font-bold">
                  STEP 0{step} / 03
                </span>
              </div>

              {/* Question Text */}
              <div>
                <h3 className="font-zen text-lg sm:text-xl font-bold text-zinc-950 leading-relaxed">
                  {questions[step - 1].title}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3.5">
                {questions[step - 1].options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleSelectOption(step, option.index)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-zinc-50/70 hover:bg-pink-50/50 border border-zinc-200/80 hover:border-pink-300 transition-all duration-300 group flex items-center justify-between shadow-sm hover:shadow-md"
                  >
                    <span className="text-xs sm:text-sm text-zinc-800 group-hover:text-zinc-950 font-medium font-zen">
                      {option.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            // Results Card
            result && (
              <div className="space-y-8 animate-in zoom-in-95 duration-500">
                
                <div className="text-center pb-6 border-b border-zinc-100">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-pink-600 font-bold uppercase">
                    DIAGNOSIS COMPLETE • YOUR PERSONAL VIBE
                  </span>
                  
                  {/* Holographic Glowing Tone Title */}
                  <h3 className="font-bebas text-5xl sm:text-7xl font-black tracking-tighter-extra uppercase bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                    {result.toneName}
                  </h3>
                  <p className="font-zen text-base sm:text-lg text-zinc-700 font-medium">
                    {result.subTitle}
                  </p>
                </div>

                {/* Color Palette Preview */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="text-xs font-mono text-zinc-700 uppercase tracking-widest font-semibold">
                    SIGNATURE HARMONY PALETTE:
                  </div>
                  <div className="flex items-center gap-3">
                    {result.palette.map((color, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 h-8 rounded-full border border-zinc-300 shadow-sm transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[9px] font-mono text-zinc-500 font-semibold">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-700 leading-relaxed font-zen bg-zinc-50/70 p-5 rounded-2xl border border-zinc-200">
                  {result.description}
                </p>

                {/* Recommendation and Pass perks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-pink-50/40 border border-pink-100">
                    <span className="text-[10px] font-mono text-pink-600 font-bold uppercase block mb-1 tracking-widest">
                      MATCHED BRANDS
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {result.recommendedBrands.map((b) => (
                        <span key={b} className="px-2.5 py-1 rounded-md bg-white border border-pink-200 text-xs font-semibold text-zinc-800 shadow-sm">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
                    <span className="text-[10px] font-mono text-purple-600 font-bold uppercase block mb-1 tracking-widest">
                      EVENT LUCKY ITEM
                    </span>
                    <p className="text-xs font-semibold text-zinc-900 mt-1">
                      {result.luckyItem}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onOpenEntryWithTone(result.toneName)}
                    className="flex-1 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white hover:opacity-95 shadow-[0_4px_20px_rgba(236,72,153,0.35)] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-pink-200" />
                    このトーンで限定VIPパスを発行する
                  </button>

                  <button
                    onClick={handleReset}
                    className="py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-200 flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <RefreshCw className="w-4 h-4 text-zinc-400" />
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
