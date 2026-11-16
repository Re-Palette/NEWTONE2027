import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { ScrollTrigger, scrollToTop, useScrollSync } from './motion';
import { NAV_LINKS } from './site';
import { AboutPage, AccessPage, BrandsPage, ContactPage, HomePage, NewsPage, NotFoundPage, ProgramPage } from './pages';
import './newtone.css';
import './scenes.css';
import './pages.css';

const BASE_TITLE = 'NEWTONE 2027 — 次世代の美容ブランドPOPUP';

/** ページを移ったら先頭へ戻し、タイトルを変え、スクロール位置の計算をやり直す */
function useRouteChange() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const first = useRef(true);
  useEffect(() => {
    const page = NAV_LINKS.find((l) => l.href === pathname);
    document.title = page
      ? `${page.label}（${page.ja}）| NEWTONE 2027`
      : pathname === '/'
        ? BASE_TITLE
        : 'ページが見つかりません | NEWTONE 2027';
    if (first.current) {
      first.current = false;
      return;
    }
    // 戻る・進む（POP）はブラウザが復元する位置のまま。リンクでの移動だけ先頭（または #id）へ
    if (navType !== 'POP') {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else scrollToTop();
    }
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, navType]);
}

/**
 * NEWTONE 2027 特設サイト。トップは ARQO サイトの /projects/newtone（Re-Palette/-ARQO-HP の src/components/newtone）と同じ内容。
 * 上部ナビの各項目は下層ページ（/about など）。
 */
export function NewtoneSite() {
  useScrollSync();
  useRouteChange();
  return (
    <div className="nt">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        本文へスキップ
      </a>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
