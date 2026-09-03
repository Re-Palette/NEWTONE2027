import React from 'react';
import { X, Sparkles, MapPin, Award, CheckCircle2, ShoppingBag, Instagram, ExternalLink } from 'lucide-react';
import { BrandItem } from '../types';

interface BrandDetailModalProps {
  brand: BrandItem | null;
  onClose: () => void;
  onReserveSample: (brandName: string) => void;
}

export const BrandDetailModal: React.FC<BrandDetailModalProps> = ({
  brand,
  onClose,
  onReserveSample,
}) => {
  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#080808] rounded-3xl border border-white/20 shadow-2xl text-[#F0F0F0]">
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest bg-white/10 text-pink-400 border border-pink-500/30 uppercase">
              {brand.category}
            </span>
            <span className="text-xs text-white/60 font-mono">BOOTH: {brand.boothNumber}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Top Brand Banner */}
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-pink-400 font-bold tracking-widest uppercase mb-1">
                <Award className="w-3.5 h-3.5" />
                {brand.highlightTag}
              </div>
              <h3 className="font-bebas text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter-extra uppercase text-[#F0F0F0]">
                {brand.name}
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-medium mt-1 font-zen">
                {brand.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <a
                href={`https://instagram.com`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/90 transition-colors font-mono"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{brand.socialHandle}</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </a>
            </div>
          </div>

          {/* Founder & Concept Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Founder Card */}
            <div className="md:col-span-5 bg-white/[0.02] rounded-2xl p-5 border border-white/10">
              <div className="text-[10px] text-pink-400 font-mono tracking-widest uppercase mb-3 font-bold">
                FOUNDER & CREATOR
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={brand.founder.avatar}
                  alt={brand.founder.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#F0F0F0] font-zen">{brand.founder.name}</h4>
                  <p className="text-xs text-pink-300 font-medium">{brand.founder.role}</p>
                  <p className="text-[11px] text-white/60 mt-0.5">{brand.founder.university}</p>
                </div>
              </div>
              <blockquote className="text-xs italic text-white/80 bg-black/50 p-3 rounded-xl border-l-2 border-pink-500 font-zen">
                {brand.concept}
              </blockquote>
            </div>

            {/* Description */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-pink-400 uppercase mb-2">
                  BRAND STORY & INNOVATION
                </h4>
                <p className="text-sm text-white/80 leading-relaxed font-zen font-light">
                  {brand.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
                  <span>ブース位置: <strong className="text-white font-mono">{brand.boothNumber}</strong></span>
                </div>
                <span className="text-[11px] text-pink-300 font-bold uppercase tracking-wider">先着サンプル配布あり</span>
              </div>
            </div>

          </div>

          {/* Hero Product Highlight */}
          <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-pink-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                POPUP EXCLUSIVE PRODUCT
              </span>
              <span className="text-xs text-white/70 font-mono">{brand.heroProduct.volume}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 rounded-2xl overflow-hidden bg-black/60 border border-white/10 aspect-square">
                <img
                  src={brand.heroProduct.image}
                  alt={brand.heroProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#F0F0F0] leading-snug font-zen">
                    {brand.heroProduct.name}
                  </h4>
                  <p className="text-xl sm:text-2xl font-bebas font-black text-[#F0F0F0] tracking-wider mt-1">
                    {brand.heroProduct.price}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {brand.heroProduct.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-white/80 font-zen">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      onReserveSample(brand.name);
                      onClose();
                    }}
                    className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#F0F0F0] text-[#080808] hover:bg-pink-500 hover:text-white shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    無料サンプル引換券を予約
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
