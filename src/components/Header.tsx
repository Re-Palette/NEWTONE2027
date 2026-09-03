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

  // Exact 6 links as shown in reference image
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAM', href: '#program' },
    { label: 'BRANDS', href: '#brands' },
    { label: 'ACCESS', href: '#access' },
    { label: 'NEWS', href: '#news' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/15 ${
        scrolled
          ? 'bg-[#080808]/85 backdrop-blur-md py-3 sm:py-3.5 shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Left: Classic Serif NEWTONE Logo */}
        <a href="#" className="group flex items-center select-none" id="header-logo-link">
          <span className="font-cinzel text-xl sm:text-2xl font-semibold tracking-[0.05em] text-[#F0F0F0] group-hover:text-white transition-colors leading-none">
            NEWTONE
          </span>
        </a>

        {/* Center: Desktop Navigation - Exact 6 items matching reference */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-14" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-normal tracking-[0.2em] uppercase text-white/85 hover:text-white transition-colors duration-200 py-1 font-sans"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Exact ENTRY / JOIN Gradient Pill Button */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            id="header-entry-btn"
            onClick={onOpenEntry}
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-white bg-gradient-to-r from-[#ff5ea8] via-[#bd62f9] to-[#7d78ff] border border-white shadow-[0_3px_15px_rgba(189,98,249,0.35)] hover:shadow-[0_4px_22px_rgba(255,94,168,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <span>ENTRY / JOIN</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium uppercase tracking-[0.25em] text-white/80 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3 h-3 opacity-40" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEntry();
              }}
              className="mt-4 w-full py-3 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-white bg-gradient-to-r from-[#ff5ea8] via-[#bd62f9] to-[#7d78ff] border border-white shadow-[0_3px_15px_rgba(189,98,249,0.35)] flex items-center justify-center gap-3"
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
