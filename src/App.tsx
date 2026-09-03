/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BrandsSection } from './components/BrandsSection';
import { BrandDetailModal } from './components/BrandDetailModal';
import { ToneFinder } from './components/ToneFinder';
import { ProgramSection } from './components/ProgramSection';
import { AccessSection } from './components/AccessSection';
import { NewsSection } from './components/NewsSection';
import { EntryModal } from './components/EntryModal';
import { Footer } from './components/Footer';
import { BrandItem, Category } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [entryModalOpen, setEntryModalOpen] = useState(false);
  const [selectedToneForPass, setSelectedToneForPass] = useState<string | undefined>(undefined);
  const [selectedBrand, setSelectedBrand] = useState<BrandItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenEntry = () => {
    setSelectedToneForPass(undefined);
    setEntryModalOpen(true);
  };

  const handleOpenEntryWithTone = (toneName: string) => {
    setSelectedToneForPass(toneName);
    setEntryModalOpen(true);
  };

  const handleSelectCategoryFromHero = (category: string) => {
    setActiveCategory(category as Category);
  };

  const handleReserveSample = (brandName: string) => {
    showToast(`「${brandName}」の限定無料サンプル引換券を事前確保しました！`);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F0F0F0] flex flex-col selection:bg-pink-500 selection:text-white font-zen antialiased relative overflow-x-hidden">
      {/* Background Architectural Grid & Geometric Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] border-[0.5px] border-white/5 rounded-full" />
        <div className="absolute top-1/3 -right-48 w-[700px] h-[700px] border-[0.5px] border-white/5 rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 border-[0.5px] border-white/5 rotate-45" />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#141414] text-[#F0F0F0] shadow-2xl border border-pink-500/50 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Transparent Sticky/Fixed Top Bar */}
      <Header onOpenEntry={handleOpenEntry} />

      {/* Hero Section */}
      <main className="flex-1 relative z-10">
        <Hero
          onOpenEntry={handleOpenEntry}
          onSelectCategory={handleSelectCategoryFromHero}
        />

        <AboutSection />

        <BrandsSection
          onSelectBrand={(brand) => setSelectedBrand(brand)}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ToneFinder onOpenEntryWithTone={handleOpenEntryWithTone} />

        <ProgramSection />

        <AccessSection />

        <NewsSection />
      </main>

      {/* Footer */}
      <Footer onOpenEntry={handleOpenEntry} />

      {/* Brand Details Modal */}
      <BrandDetailModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
        onReserveSample={handleReserveSample}
      />

      {/* Event Ticket & VIP Pass Modal */}
      <EntryModal
        isOpen={entryModalOpen}
        onClose={() => setEntryModalOpen(false)}
        initialTone={selectedToneForPass}
      />
    </div>
  );
}

