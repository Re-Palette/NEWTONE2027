import React from 'react';
import { Link } from 'react-router-dom';
import { HeroScene } from './HeroScene';
import { ManifestoScene, TickerBand } from './ManifestoScene';
import { ExperienceScene } from './ExperienceScene';
import { CategoriesScene } from './CategoriesScene';
import { BrandsScene } from './BrandsScene';
import { PartnersScene } from './PartnersScene';
import { ForYouScene } from './ForYouScene';
import { InfoScene } from './InfoScene';
import { EntryScene } from './EntryScene';
import { PageHero } from './PageHero';
import { PageNext } from './PageNext';
import { SiteFooter } from './SiteFooter';
import { CONTACT_HREF, NAV_LINKS, SITE } from './site';
import { ArrowRight } from './parts';

/** 各ページの見出し（英字・日本語は site.ts の NAV_LINKS と共通） */
const nav = (href: string) => NAV_LINKS.find((l) => l.href === href)!;

/** 下層ページの共通の枠：見出し → 本文 → 次のページ → フッター */
const SubPage: React.FC<{ href: string; lead?: React.ReactNode; children: React.ReactNode; footer?: boolean }> = ({
  href,
  lead,
  children,
  footer = true,
}) => {
  const n = nav(href);
  return (
    <>
      <PageHero en={n.label} ja={n.ja} lead={lead} />
      {children}
      {footer && (
        <div className="pg-end">
          <PageNext current={href} />
          <SiteFooter />
        </div>
      )}
    </>
  );
};

export const HomePage: React.FC = () => (
  <>
    <HeroScene />
    <ManifestoScene />
    <TickerBand />
    <ExperienceScene />
    <CategoriesScene />
    <BrandsScene />
    <PartnersScene />
    <ForYouScene />
    <InfoScene />
    <EntryScene />
  </>
);

export const AboutPage: React.FC = () => (
  <SubPage href="/about" lead="次世代の美容ブランドPOPUP。学生起業家や若きクリエイターが生み出したブランドに、直接出会える場所です。">
    <ManifestoScene />
    <TickerBand />
    <ForYouScene />
    <PartnersScene />
  </SubPage>
);

export const ProgramPage: React.FC = () => (
  <SubPage href="/program" lead="会場で出会える美容のカテゴリーと、体験のかたち。">
    <ExperienceScene />
    <CategoriesScene />
    <section className="pg-block" aria-labelledby="events-title">
      <p className="eyebrow">Special Events</p>
      <h2 id="events-title" className="pg-block__title">
        企画中のイベント
      </h2>
      <p className="pg-block__text">
        インフルエンサーとのイベントなども企画中です。
        <br />
        内容・日程は決定次第、
        <Link to="/news" className="pg-inline-link">
          NEWS
        </Link>
        でお知らせします。
      </p>
    </section>
  </SubPage>
);

export const BrandsPage: React.FC = () => (
  <SubPage href="/brands" lead="学生起業家や若いクリエイターが生み出す、次世代の美容ブランドが集まります。">
    <BrandsScene />
  </SubPage>
);

export const AccessPage: React.FC = () => {
  const { schedule, venue } = SITE.access;
  const lead = [schedule ?? '開催日時は決定次第お知らせします。', venue ? `会場：${venue}` : '会場は決定次第お知らせします。'].join(' ／ ');
  return (
    <SubPage href="/access" lead={lead}>
      <InfoScene part="access" />
    </SubPage>
  );
};

export const NewsPage: React.FC = () => (
  <SubPage href="/news" lead="NEWTONE 2027 の最新情報をお届けします。">
    <InfoScene part="news" />
  </SubPage>
);

/** CONTACT は ENTRY 場面（フッター込み）をそのまま使う */
export const ContactPage: React.FC = () => (
  <SubPage
    href="/contact"
    lead={
      CONTACT_HREF
        ? 'ご参加や協賛・パートナーについてのお問い合わせはこちらから。'
        : 'ご参加や協賛・パートナーについてのお問い合わせ窓口は、準備が整い次第こちらでご案内します。'
    }
    footer={false}
  >
    <EntryScene />
  </SubPage>
);

export const NotFoundPage: React.FC = () => (
  <>
    <section id="top" className="pg-hero pg-hero--404" aria-labelledby="pg-title">
      <div className="pg-hero__inner">
        <h1 id="pg-title" className="pg-hero__title">
          <span className="pg-hero__en">404</span>
          <span className="pg-hero__ja">ページが見つかりません</span>
        </h1>
        <p className="pg-hero__lead">
          <Link to="/" className="pg-inline-link">
            トップへ戻る
            <ArrowRight className="cta__arrow" />
          </Link>
        </p>
      </div>
    </section>
    <SiteFooter />
  </>
);
