import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Award, Filter, ArrowRight } from 'lucide-react';
import { BRANDS_DATA } from '../data/mockData';
import { BrandItem, Category } from '../types';

interface BrandsSectionProps {
  onSelectBrand: (brand: BrandItem) => void;
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({
  onSelectBrand,
  activeCategory,
  setActiveCategory,
}) => {
  const categories: Category[] = [
    'ALL',
    'COSMETICS',
    'SKINCARE',
    'HAIRCARE',
    'INNERCARE',
    'BEAUTY TOOL',
    'FRAGRANCE',
  ];

  const filteredBrands = activeCategory === 'ALL'
    ? BRANDS_DATA
    : BRANDS_DATA.filter((b) => b.category === activeCategory);

  return (
    <section id="brands" className="relative py-24 sm:py-32 bg-[#080808] text-[#F0F0F0] overflow-hidden border-t border-white/10">
      {/* Background architectural geometric accent */}
      <div className="absolute -top-20 right-10 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              CURATED BRANDS SHOWCASE
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-[#F0F0F0]">
              FEATURED <br />
              <span className="text-outline">ENTREPRENEURS</span>
            </h2>
            <p className="font-zen text-sm sm:text-base text-white/70 mt-3 max-w-xl font-light leading-relaxed">
              全国の大学・研究機関から選ばれた8つの気鋭ビューティーブランド。最先端のサイエンスとZ世代の感性が共鳴。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] text-[10px] font-mono uppercase tracking-[0.3em] text-pink-300 font-bold">
              08 BRANDS / 2027 ROSTER
            </div>
          </div>
        </div>

        {/* Category Filter Pills - Bold Architectural Spacing */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-white/40 flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#F0F0F0] text-[#080808] shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-white/60 border border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Cards Grid - High Contrast Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand)}
              className="group relative bg-white/[0.02] hover:bg-white/[0.06] rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-bold tracking-[0.3em] px-3 py-1 rounded-full bg-white/[0.05] text-pink-300 border border-pink-500/20 uppercase font-mono">
                    {brand.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Product/Visual Preview */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-black mb-4 border border-white/10 group-hover:border-pink-400/40 transition-colors">
                  <img
                    src={brand.heroProduct.image}
                    alt={brand.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[9px] text-white/90 font-mono bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/15 uppercase tracking-wider">
                      {brand.boothNumber}
                    </span>
                    <span className="text-[9px] text-pink-300 font-mono bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-pink-500/30">
                      ¥{brand.heroProduct.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Brand Name & Tagline */}
                <h3 className="font-bebas text-3xl sm:text-4xl font-black tracking-tighter-extra uppercase text-[#F0F0F0] group-hover:text-pink-300 transition-colors leading-none mb-2">
                  {brand.name}
                </h3>
                <p className="text-xs text-white/70 font-normal line-clamp-2 leading-relaxed font-zen">
                  {brand.tagline}
                </p>
              </div>

              {/* Card Footer / Founder Meta */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={brand.founder.avatar}
                    alt={brand.founder.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-white/20"
                  />
                  <div className="text-[11px] leading-tight">
                    <p className="text-[#F0F0F0] font-medium">{brand.founder.name.split('/')[0]}</p>
                    <p className="text-[9px] text-white/50">{brand.founder.university.split(' ')[0]}</p>
                  </div>
                </div>

                <div className="text-[9px] text-white/60 font-mono uppercase tracking-widest flex items-center gap-1 group-hover:text-pink-400 transition-colors">
                  <span>DISCOVER</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
