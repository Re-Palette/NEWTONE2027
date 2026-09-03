import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenEntry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEntry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'BRANDS', href: '#brands' },
    { label: 'ACCESS', href: '#access' },
    { label: 'NEWS', href: '#news' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-3 sm:py-3.5 shadow-sm text-zinc-900'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6 text-white'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Left: Classic Serif NEWTONE Logo */}
        <a href="#" className="group flex items-center select-none" id="header-logo-link">
          <span
            className={`font-cinzel text-xl sm:text-2xl font-bold tracking-[0.08em] transition-colors leading-none ${
              scrolled
                ? 'text-zinc-950 group-hover:text-pink-600'
                : 'text-white group-hover:text-pink-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]'
            }`}
          >
            NEWTONE
          </span>
          <span
            className={`ml-2.5 hidden sm:inline-block text-[9px] font-mono tracking-[0.25em] uppercase px-2 py-0.5 rounded-full border transition-colors ${
              scrolled
                ? 'border-pink-200 bg-pink-50 text-pink-600 font-semibold'
                : 'border-white/30 bg-white/10 text-white/90 backdrop-blur-sm'
            }`}
          >
            POPUP 2027
          </span>
        </a>

        {/* Center: Desktop Navigation - Exact 5 items matching reference */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-14" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 py-1 font-sans ${
                scrolled
                  ? 'text-zinc-600 hover:text-pink-600'
                  : 'text-white/85 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: High Contrast ENTRY / JOIN Pill Button */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            id="header-entry-btn"
            onClick={onOpenEntry}
            className={`group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase hover:scale-105 active:scale-95 transition-all duration-300 ${
              scrolled
                ? 'text-white bg-gradient-to-r from-zinc-900 via-zinc-950 to-black hover:from-pink-600 hover:to-purple-600 shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.3)]'
                : 'text-zinc-950 bg-white hover:bg-white/95 shadow-[0_0_25px_rgba(255,255,255,0.4)] border border-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <span>ENTRY / JOIN</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              scrolled
                ? 'border-zinc-300 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100'
                : 'border-white/40 text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-700 hover:text-zinc-950 py-2 border-b border-zinc-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEntry();
              }}
              className="mt-4 w-full py-3 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-white bg-zinc-950 hover:bg-black shadow-[0_2px_12px_rgba(0,0,0,0.15)] flex items-center justify-center gap-3 transition-all"
            >
              <span>ENTRY / JOIN (無料事前登録)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
