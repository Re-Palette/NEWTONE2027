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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-zinc-200 shadow-2xl text-zinc-900">
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest bg-zinc-100 text-zinc-800 border border-zinc-200 uppercase font-mono">
              {brand.category}
            </span>
            <span className="text-xs text-zinc-500 font-mono font-semibold">BOOTH: {brand.boothNumber}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Top Brand Banner */}
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between border-b border-zinc-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-bold tracking-widest uppercase mb-1 font-mono">
                <Award className="w-3.5 h-3.5 text-zinc-800" />
                {brand.highlightTag}
              </div>
              <h3 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-zinc-950">
                {brand.name}
              </h3>
              <p className="text-base sm:text-lg text-zinc-600 font-medium mt-1 font-zen">
                {brand.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <a
                href={`https://instagram.com`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-xs text-zinc-800 transition-colors font-mono"
              >
                <Instagram className="w-4 h-4 text-zinc-600" />
                <span>{brand.socialHandle}</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Founder & Concept Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Founder Card */}
            <div className="md:col-span-5 bg-zinc-50 rounded-2xl p-5 border border-zinc-200/80">
              <div className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase mb-3 font-bold">
                FOUNDER & CREATOR
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={brand.founder.avatar}
                  alt={brand.founder.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-zinc-200 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-sm text-zinc-950 font-zen">{brand.founder.name}</h4>
                  <p className="text-xs text-zinc-600 font-medium">{brand.founder.role}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{brand.founder.university}</p>
                </div>
              </div>
              <blockquote className="text-xs italic text-zinc-700 bg-white p-3.5 rounded-xl border-l-2 border-zinc-950 font-zen shadow-sm">
                {brand.concept}
              </blockquote>
            </div>

            {/* Description */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2 font-mono">
                  BRAND STORY & INNOVATION
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed font-zen font-light">
                  {brand.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-700">
                  <MapPin className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                  <span>ブース位置: <strong className="text-zinc-950 font-mono">{brand.boothNumber}</strong></span>
                </div>
                <span className="text-[11px] text-zinc-950 font-bold uppercase tracking-wider font-zen">先着サンプル配布あり</span>
              </div>
            </div>

          </div>

          {/* Hero Product Highlight */}
          <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-200/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase flex items-center gap-1.5 font-mono">
                <Sparkles className="w-4 h-4 text-zinc-800" />
                POPUP EXCLUSIVE PRODUCT
              </span>
              <span className="text-xs text-zinc-500 font-mono font-medium">{brand.heroProduct.volume}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 aspect-square">
                <img
                  src={brand.heroProduct.image}
                  alt={brand.heroProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-950 leading-snug font-zen">
                    {brand.heroProduct.name}
                  </h4>
                  <p className="text-xl sm:text-2xl font-bebas font-black text-zinc-950 tracking-wider mt-1">
                    ¥{brand.heroProduct.price.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {brand.heroProduct.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-zinc-600 font-zen">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />
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
                    className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-zinc-950 text-white hover:bg-black shadow-[0_2px_15px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 transition-all hover:scale-105"
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
