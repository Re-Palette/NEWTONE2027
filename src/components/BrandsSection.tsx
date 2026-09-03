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

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'COSMETICS':
        return 'bg-pink-50 text-pink-700 border-pink-200 group-hover:border-pink-300';
      case 'SKINCARE':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:border-emerald-300';
      case 'HAIRCARE':
        return 'bg-purple-50 text-purple-700 border-purple-200 group-hover:border-purple-300';
      case 'INNERCARE':
        return 'bg-amber-50 text-amber-700 border-amber-200 group-hover:border-amber-300';
      case 'BEAUTY TOOL':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:border-cyan-300';
      case 'FRAGRANCE':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 group-hover:border-indigo-300';
      default:
        return 'bg-zinc-100 text-zinc-800 border-zinc-200';
    }
  };

  return (
    <section id="brands" className="relative py-24 sm:py-32 bg-[#FAF9F8] text-zinc-900 overflow-hidden border-t border-zinc-200/80">
      {/* Background colorful ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-200/25 via-purple-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-200/20 via-indigo-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography & Color Gradient */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-pink-600 mb-3 font-mono">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></span>
              CURATED BRANDS SHOWCASE
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter-extra uppercase text-zinc-950">
              FEATURED <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                ENTREPRENEURS
              </span>
            </h2>
            <p className="font-zen text-sm sm:text-base text-zinc-600 mt-3 max-w-xl font-light leading-relaxed">
              全国の大学・研究機関から選ばれた8つの気鋭ビューティーブランド。最先端のサイエンスとZ世代の感性が共鳴。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full border border-pink-200/70 bg-white/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-800 font-bold shadow-sm flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>08 BRANDS / 2027 ROSTER</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills - Prismatic Styling */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-pink-500 flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white shadow-md scale-105 border border-pink-500'
                  : 'bg-white hover:bg-pink-50/50 text-zinc-700 border border-zinc-200 hover:border-pink-200 hover:text-pink-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Cards Grid - Colorful Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand)}
              className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-zinc-200/80 hover:border-pink-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(236,72,153,0.14)] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[9px] font-bold tracking-[0.25em] px-3 py-1 rounded-full border uppercase font-mono transition-colors ${getCategoryBadgeClass(brand.category)}`}>
                    {brand.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-700 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Product/Visual Preview */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 mb-4 border border-zinc-200/80 group-hover:border-pink-200 transition-colors">
                  <img
                    src={brand.heroProduct.image}
                    alt={brand.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[9px] text-zinc-900 font-mono bg-white/95 backdrop-blur-md px-2 py-0.5 rounded border border-zinc-200 uppercase tracking-wider font-semibold shadow-sm">
                      {brand.boothNumber}
                    </span>
                    <span className="text-[9px] text-pink-700 font-mono bg-white/95 backdrop-blur-md px-2 py-0.5 rounded border border-pink-200 font-bold shadow-sm">
                      ¥{brand.heroProduct.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Brand Name & Tagline */}
                <h3 className="font-syne text-xl sm:text-2xl font-bold tracking-wide uppercase text-zinc-950 group-hover:text-pink-600 transition-colors leading-tight mb-2">
                  {brand.name}
                </h3>
                <p className="text-xs text-zinc-600 font-normal line-clamp-2 leading-relaxed font-zen">
                  {brand.tagline}
                </p>
              </div>

              {/* Card Footer / Founder Meta */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={brand.founder.avatar}
                    alt={brand.founder.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-pink-200/80 shadow-sm"
                  />
                  <div className="text-[11px] leading-tight">
                    <p className="text-zinc-900 font-medium">{brand.founder.name.split('/')[0]}</p>
                    <p className="text-[9px] text-zinc-500">{brand.founder.university.split(' ')[0]}</p>
                  </div>
                </div>

                <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-1 group-hover:text-pink-600 transition-colors">
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
