import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from './site';
import { ArrowRight } from './parts';
import { ScrollTrigger } from './motion';

export const SiteHeader: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // HEROを抜けたらヘッダーに薄いガラス背景を敷く（Reactの再レンダリングなし）
  useEffect(() => {
    const header = ref.current;
    // ページごとの先頭（トップは HERO、下層はページ見出し）を抜けたら背景を敷く
    const hero = document.getElementById('top');
    if (!header || !hero) return;
    header.classList.remove('is-solid');
    const st = ScrollTrigger.create({
      trigger: hero,
      start: 'bottom top+=120',
      end: 'max',
      // ページ最下部（end と同位置）でも背景が消えないよう、入退場で切り替える
      onEnter: () => header.classList.add('is-solid'),
      onLeaveBack: () => header.classList.remove('is-solid'),
    });
    return () => st.kill();
  }, [pathname]);

  // ページを移ったらメニューは閉じる
  useEffect(() => setOpen(false), [pathname]);


  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header ref={ref} className="site-header">
        <Link to="/" className="site-logo" aria-label="NEWTONE 2027 トップへ">
          <span className="site-logo__name">NEWTONE</span>
          <span className="site-logo__year">2027</span>
        </Link>
        <nav className="site-nav" aria-label="メインナビゲーション">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.label} to={l.href} style={{ ['--x' as string]: l.x }}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="cta cta--header">
          <span>ENTRY / JOIN</span>
          <ArrowRight className="cta__arrow" />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </header>
      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="モバイルナビゲーション">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.label} to={l.href} tabIndex={open ? 0 : -1}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};
