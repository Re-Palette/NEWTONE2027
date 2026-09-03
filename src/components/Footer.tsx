import React, { useState } from 'react';
import { ArrowRight, Send, CheckCircle2, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenEntry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEntry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const sponsors = [
    'TOKYO BEAUTY ACCELERATOR',
    'NEXT GEN VENTURES',
    'BIO SYNTHESIS LAB',
    'SHIBUYA INNOVATION HUB',
    'CLEAN COSMETIC FOUNDATION',
  ];

  return (
    <footer id="contact" className="relative bg-[#080808] text-[#F0F0F0] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background architectural line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-white/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call to Action Banner with Bold Typography */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden bg-white/[0.02] border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-[10px] text-pink-400 font-mono tracking-[0.3em] uppercase font-bold justify-center sm:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              RESERVATION & ENTRY
            </div>
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter-extra uppercase text-[#F0F0F0]">
              BE THE FIRST TO <br />
              <span className="text-outline">WITNESS 2027</span>
            </h3>
            <p className="font-zen text-xs sm:text-sm text-white/70 font-light">
              学生起業家たちが切り拓く、新しい美の地平。事前入場無料登録受付中。
            </p>
          </div>

          <button
            onClick={onOpenEntry}
            className="flex-shrink-0 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#F0F0F0] text-[#080808] hover:bg-pink-500 hover:text-white shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 hover:scale-105 transition-all"
          >
            無料事前登録はこちら
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Sponsor Partners */}
        <div className="mb-16 pb-12 border-b border-white/10 text-center">
          <p className="text-[10px] font-mono text-white/50 tracking-[0.3em] uppercase mb-6 font-bold">
            SUPPORTED BY & PARTNERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-60">
            {sponsors.map((sp) => (
              <span key={sp} className="font-cinzel text-xs sm:text-sm tracking-widest text-[#F0F0F0] font-bold hover:opacity-100 transition-opacity">
                {sp}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Navigation & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-bebas text-3xl sm:text-4xl font-black tracking-tighter-extra uppercase text-[#F0F0F0]">
                NEWTONE
              </span>
              <p className="font-mono text-[10px] text-pink-400 tracking-[0.3em] uppercase mt-0.5 font-bold">
                NEXT BEAUTY POPUP 2027
              </p>
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-light">
              学生起業家が生み出す、新しい美容のカタチ。美の常識をアップデートし、すべての人の自由な輝きを祝福するイベント。
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[10px] font-bold text-pink-400 tracking-[0.3em] uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-zen">
              <li><a href="#about" className="hover:text-white transition-colors">ABOUT (コンセプト)</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">PROGRAM (タイムテーブル)</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">BRANDS (出展ブランド)</a></li>
              <li><a href="#tone-test" className="hover:text-white transition-colors">TONE TEST (AI診断)</a></li>
              <li><a href="#access" className="hover:text-white transition-colors">ACCESS & FAQ (会場・FAQ)</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">NEWS (お知らせ)</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-[10px] font-bold text-pink-400 tracking-[0.3em] uppercase">
              NEWSLETTER
            </h4>
            <p className="text-xs text-white/70 font-light">
              最新の追加出展ブランド情報や限定優先チケット案内をお届けします。
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-white/10 text-white border border-white/20 text-xs flex items-center gap-2 font-zen">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                登録完了！最新情報をお送りします。
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="メールアドレスを入力"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#F0F0F0] text-[#080808] hover:bg-pink-500 hover:text-white text-xs font-bold transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-[10px] text-white/40 font-light">
              ※ スパムメールは一切送信いたしません。いつでも解除可能です。
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/50 font-mono tracking-wider uppercase">
          <p>© 2027 NEWTONE EXECUTIVE COMMITTEE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">PRESS INQUIRY</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
