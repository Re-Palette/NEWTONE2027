import React, { useEffect, useRef } from 'react';
import heroImg from '../assets/story/hero.webp';
import heroBlur from '../assets/story/hero-blur.webp';
import titleMask from '../assets/story/hero-title-mask.png';
import sliceLeft from '../assets/story/hero-slice-left-copy.webp';
import sliceRight from '../assets/story/hero-slice-right-copy.webp';
import sliceCircle from '../assets/story/hero-slice-circle.webp';
import waveA from '../assets/story/wave-a.webp';
import { EXPERIENCE_CATEGORIES } from '../config/site';
import { Particles } from './parts';
import { gsap, useSceneMotion } from './motion';

const maskStyle: React.CSSProperties = {
  WebkitMaskImage: `url(${titleMask})`,
  maskImage: `url(${titleMask})`,
};

const ScrollMark: React.FC = () => (
  <svg viewBox="0 0 14 26" fill="none" aria-hidden="true">
    <path className="scroll-line" d="M7 0v16" stroke="currentColor" strokeWidth="1.2" />
    <path d="M1.5 18.5 7 24l5.5-5.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/**
 * SCENE 01 — HERO
 * 参考ビジュアル（ナビ・SCROLL表示を除いた同一画像）をそのままベースに使用。
 * HTMLで重ねるのは、画像に含まれないヘッダーとSCROLL表示、そして光の演出レイヤーのみ。
 */
export const HeroScene: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const deskRef = useRef<HTMLDivElement>(null);

  // 画面比が極端なときだけ、画像の端を背景へなじませる
  useEffect(() => {
    const desk = deskRef.current;
    if (!desk) return;
    const update = () => {
      const stage = desk.querySelector<HTMLElement>('.hero__stage');
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      const gap = r.width < desk.clientWidth - 2 ? 'x' : r.height < desk.clientHeight - 2 ? 'y' : '';
      if (gap) desk.dataset.gap = gap;
      else delete desk.dataset.gap;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(desk);
    return () => ro.disconnect();
  }, []);

  useSceneMotion(ref, ({ desktop }) => {
    if (desktop) {
      // 進行度0 = 参考画像そのもの。スクロールに合わせて光が動き出す
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
      });
      tl.to('.hero__desk .hero__media', { scale: 1.09, yPercent: -2.5, duration: 1 }, 0)
        .fromTo('.hero__desk .hero__lights', { opacity: 0, xPercent: -6, yPercent: 4 }, { opacity: 0.6, xPercent: 5, yPercent: -6, duration: 0.7 }, 0)
        .fromTo('.hero__desk .hero__sheen', { backgroundPosition: '0% 0' }, { backgroundPosition: '100% 0', duration: 0.55 }, 0.04)
        .fromTo('.hero__desk .hero__glow', { opacity: 0 }, { opacity: 0.35, duration: 0.25, yoyo: true, repeat: 1 }, 0.18)
        .fromTo('.hero__desk .particles--near', { opacity: 0, yPercent: 6 }, { opacity: 1, yPercent: -26, duration: 1 }, 0)
        .fromTo('.hero__desk .particles--far', { opacity: 0, yPercent: 2 }, { opacity: 0.8, yPercent: -10, duration: 1 }, 0)
        .to('.hero__desk .hero__scroll', { opacity: 0, y: 12, duration: 0.08 }, 0)
        .fromTo('.hero__desk .hero__veil:not(.hero__veil--solid)', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.55)
        // 最後は Scene 02 と同じネイビー一色になり、継ぎ目なく次へ
        .fromTo('.hero__desk .hero__veil--solid', { opacity: 0 }, { opacity: 1, duration: 0.18 }, 0.82);
      return;
    }
    // スマートフォン：ピン留めせず、画面外へ抜ける間だけ穏やかに動かす
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
    });
    tl.to('.poster__center-media', { scale: 1.1, yPercent: 6 }, 0)
      .fromTo('.hero__poster .hero__sheen', { backgroundPosition: '0% 0' }, { backgroundPosition: '100% 0' }, 0)
      .fromTo('.hero__poster .hero__lights', { opacity: 0 }, { opacity: 0.5 }, 0)
      .to('.poster__top', { yPercent: -18 }, 0)
      .to('.poster__bottom', { yPercent: -10 }, 0)
      .to('.poster__scroll', { opacity: 0 }, 0);
  });

  return (
    <section id="top" ref={ref} className="hero" aria-label="NEWTONE 2027 次世代の美容ブランドPOPUP">
      <h1 className="sr-only">NEWTONE 2027 — 次世代の美容ブランドPOPUP / The Next Beauty.</h1>
      <div className="hero__sticky">
        {/* ---------- Desktop / landscape ---------- */}
        <div className="hero__desk" ref={deskRef}>
          <div className="hero__fill" style={{ backgroundImage: `url(${heroBlur})` }} aria-hidden="true" />
          <div className="hero__stage">
            <div className="hero__media">
              <img
                className="hero__img"
                src={heroImg}
                width={1672}
                height={941}
                alt="光と髪がきらめく女性のビジュアルと、NEWTONE 2027 The Next Beauty. のタイトル。美しさは、わたしたちがつくる未来。美の常識を、アップデートしよう。"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />
              <div className="hero__glow" style={maskStyle} aria-hidden="true" />
              <div className="hero__sheen" style={maskStyle} aria-hidden="true" />
            </div>
            <div className="hero__lights" style={{ backgroundImage: `url(${waveA})` }} aria-hidden="true" />
            <Particles count={26} seed={7} className="particles particles--far" />
            <Particles count={14} seed={31} className="particles particles--near" />
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__veil hero__veil--solid" aria-hidden="true" />
          <a className="hero__scroll" href="#about">
            <span>SCROLL</span>
            <ScrollMark />
          </a>
        </div>

        {/* ---------- Smartphone / portrait ---------- */}
        <div className="hero__poster">
          <div className="poster__bg" style={{ backgroundImage: `url(${heroBlur})` }} aria-hidden="true" />
          <div className="poster__frame">
            <div className="poster__top" aria-hidden="true">
              <img className="poster__left poster__feather" src={sliceLeft} alt="" width={350} height={264} />
              <img className="poster__right poster__feather" src={sliceRight} alt="" width={410} height={352} />
            </div>
            <div className="poster__center">
              <div className="poster__center-media">
                <div className="poster__center-stage">
                  <img src={heroImg} alt="" width={1672} height={941} decoding="async" draggable={false} />
                  <div className="hero__sheen" style={maskStyle} aria-hidden="true" />
                  <div className="hero__lights" style={{ backgroundImage: `url(${waveA})` }} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="poster__bottom">
              <img className="poster__circle poster__feather--round" src={sliceCircle} alt="" width={287} height={284} aria-hidden="true" />
              <ul className="poster__cats" aria-label="カテゴリー">
                {EXPERIENCE_CATEGORIES.map((c) => (
                  <li key={c.key}>{c.key}</li>
                ))}
              </ul>
            </div>
            <p className="poster__by">by NEXT BEAUTY ENTREPRENEURS.</p>
            <a className="poster__scroll" href="#about">
              <span>SCROLL</span>
              <ScrollMark />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
