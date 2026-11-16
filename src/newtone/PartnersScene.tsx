import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PARTNERS, PARTNER_GROUPS, type Partner } from './partners';
import { ArrowRight, SplitChars } from './parts';
import { gsap, revealOnce, useSceneMotion } from './motion';

const PartnerTile: React.FC<{ partner: Partner }> = ({ partner }) => {
  const inner = partner.logo ? (
    <img className="pt__logo" src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
  ) : (
    <span className="pt__name">{partner.name}</span>
  );
  return partner.url ? (
    <a className="pt__tile" href={partner.url} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div className="pt__tile">{inner}</div>
  );
};

/**
 * PARTNERS — 協賛企業・学生団体・協力／後援
 * データは partners.ts。グループが空の間は「決定次第掲載します」の枠を出す（架空の名前は出さない）。
 */
export const PartnersScene: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useSceneMotion(ref, ({ desktop, scope }) => {
    if (!desktop) {
      revealOnce('.pt__head > *', '.pt__head');
      gsap.utils.toArray<HTMLElement>('.pt__group', scope).forEach((g) => revealOnce(g, g, { y: 28 }));
      revealOnce('.pt__cta', '.pt__cta');
      return;
    }
    gsap
      .timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: ref.current, start: 'top 82%', end: 'top 20%', scrub: true } })
      .fromTo('.pt__head > *', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.08 }, 0)
      .fromTo('.pt__group', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.12 }, 0.2)
      .fromTo('.pt__cta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.25 }, 0.6);
  });

  return (
    <section id="partners" ref={ref} className="pt" aria-labelledby="pt-title">
      <header className="pt__head">
        <p className="eyebrow">With Partners</p>
        <h2 id="pt-title" className="pt__title">
          <SplitChars className="pt__en" text="PARTNERS" />
          <span className="pt__ja">パートナー</span>
        </h2>
        <p className="pt__lead">NEWTONE 2027 を一緒につくる、協賛企業・学生団体のみなさま。</p>
      </header>

      <div className="pt__groups">
        {PARTNER_GROUPS.map((g) => {
          const members = PARTNERS.filter((p) => p.group === g.key);
          return (
            <div key={g.key} className="pt__group">
              <h3 className="pt__group-title">
                <span className="pt__group-en">{g.en}</span>
                <span className="pt__group-ja">{g.ja}</span>
              </h3>
              {members.length ? (
                <div className="pt__grid">
                  {members.map((p) => (
                    <PartnerTile key={p.id} partner={p} />
                  ))}
                </div>
              ) : (
                <div className="pt__grid">
                  <div className="pt__tile pt__tile--tba">
                    <span className="pt__tba">Coming soon</span>
                    <span className="pt__tba-ja">決定次第掲載します</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="pt__cta">
        <Link to="/contact" className="pt__cta-link">
          協賛・パートナーについてのご相談
          <ArrowRight className="cta__arrow" />
        </Link>
      </p>
    </section>
  );
};
