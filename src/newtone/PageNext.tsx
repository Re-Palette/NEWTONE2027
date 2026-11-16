import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from './site';
import { ArrowRight } from './parts';

/** ページ末尾の「次のページへ」。ナビの並び順で次へ、最後はトップへ */
export const PageNext: React.FC<{ current: string }> = ({ current }) => {
  const i = NAV_LINKS.findIndex((l) => l.href === current);
  const next = NAV_LINKS[i + 1];
  const to = next ? next.href : '/';
  const label = next ? next.label : 'HOME';
  const ja = next ? next.ja : 'トップへ戻る';
  return (
    <nav className="pg-next" aria-label="次のページ">
      <Link to={to} className="pg-next__link">
        <span className="pg-next__eyebrow">NEXT</span>
        <span className="pg-next__en">{label}</span>
        <span className="pg-next__ja">{ja}</span>
        <ArrowRight className="pg-next__arrow" />
      </Link>
    </nav>
  );
};
