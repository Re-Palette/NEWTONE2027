import React, { useRef } from 'react';
import { EXPERIENCE_CATEGORIES } from '../config/site';
import { gsap, useSceneMotion } from './motion';

const pad = (n: number) => String(n).padStart(2, '0');
const TOTAL = EXPERIENCE_CATEGORIES.length;

/** SCENE 05 — POPUP EXPERIENCE：HERO右側のカテゴリー表記を発展させ、スクロールで切り替える */
export const ExperienceScene: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useSceneMotion(ref, ({ desktop }) => {
    if (!desktop) {
      gsap.utils.toArray<HTMLElement>('.exp__item').forEach((item) => {
        gsap.fromTo(
          item.querySelector('.exp__item-word'),
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', ease: 'none', scrollTrigger: { trigger: item, start: 'top 88%', end: 'top 55%', scrub: true } },
        );
      });
      return;
    }

    const words = gsap.utils.toArray<HTMLElement>('.exp__word');
    const copies = gsap.utils.toArray<HTMLElement>('.exp__copy');
    const nums = gsap.utils.toArray<HTMLElement>('.exp__counter b');
    const items = gsap.utils.toArray<HTMLElement>('.exp__list li');
    const orbs = gsap.utils.toArray<HTMLElement>('.exp__orb');

    gsap.set([...words.slice(1), ...copies.slice(1), ...nums.slice(1)], { autoAlpha: 0 });
    gsap.set(items[0], { opacity: 1, color: '#ff4fa3', x: -10 });

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: true },
    });
    tl.fromTo('.exp__head', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3 }, 0);

    EXPERIENCE_CATEGORIES.forEach((cat, i) => {
      if (i === 0) return;
      const at = i;
      // 前のカテゴリーは上へ抜け、次のカテゴリーが下からマスクで立ち上がる
      tl.to(words[i - 1], { clipPath: 'inset(0 0 100% 0)', yPercent: -60, duration: 0.5 }, at)
        .fromTo(words[i], { autoAlpha: 1, clipPath: 'inset(100% 0 0 0)', yPercent: 20 }, { clipPath: 'inset(0% 0 0 0)', yPercent: 0, duration: 0.5, immediateRender: false }, at + 0.1)
        .to(copies[i - 1], { autoAlpha: 0, y: -20, duration: 0.25 }, at)
        .fromTo(copies[i], { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.3, immediateRender: false }, at + 0.25)
        .to(nums[i - 1], { autoAlpha: 0, duration: 0.1 }, at + 0.2)
        .fromTo(nums[i], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1, immediateRender: false }, at + 0.2)
        .to(items[i - 1], { opacity: 0.5, color: '#ffffff', x: 0, duration: 0.3 }, at)
        .to(items[i], { opacity: 1, color: '#ff4fa3', x: -10, duration: 0.3 }, at)
        .to(orbs[i - 1], { opacity: 0, duration: 0.6 }, at)
        .fromTo(orbs[i], { opacity: 0 }, { opacity: 1, duration: 0.6, immediateRender: false }, at);
    });
    tl.to({}, { duration: 0.6 });
  });

  return (
    <section id="program" ref={ref} className="scene scene--pin experience" aria-labelledby="exp-title">
      <div className="scene__sticky">
        <div className="scene__bg" aria-hidden="true">
          {EXPERIENCE_CATEGORIES.map((c) => (
            <div key={c.key} className="exp__orb" style={{ ['--orb' as string]: c.hue }} />
          ))}
        </div>

        {/* Desktop：ピン留めして1カテゴリーずつ切り替え */}
        <div className="exp__desk" aria-hidden="true">
          <div className="exp__head">
            <p className="eyebrow">03 — Popup Experience</p>
            <p className="exp__title">
              POPUP
              <br />
              EXPERIENCE
            </p>
          </div>
          <div className="exp__words">
            {EXPERIENCE_CATEGORIES.map((c) => (
              <span key={c.key} className="exp__word">
                {c.key}
              </span>
            ))}
          </div>
          {EXPERIENCE_CATEGORIES.map((c) => (
            <p key={c.key} className="exp__copy">
              {c.copy}
            </p>
          ))}
          <p className="exp__counter">
            <span style={{ position: 'relative', display: 'inline-block', minWidth: '2ch' }}>
              {EXPERIENCE_CATEGORIES.map((c, i) => (
                <b key={c.key} style={i ? { position: 'absolute', left: 0, top: 0 } : undefined}>
                  {pad(i + 1)}
                </b>
              ))}
            </span>{' '}
            / {pad(TOTAL)}
          </p>
          <ul className="exp__list">
            {EXPERIENCE_CATEGORIES.map((c) => (
              <li key={c.key}>{c.key}</li>
            ))}
          </ul>
        </div>

        {/* スマートフォン / 静的表示：読みやすいリスト */}
        <div className="exp__mobile">
          <p className="eyebrow">03 — Popup Experience</p>
          <h2 id="exp-title" className="exp__title">
            POPUP
            <br />
            EXPERIENCE
          </h2>
          {EXPERIENCE_CATEGORIES.map((c, i) => (
            <div key={c.key} className="exp__item" style={{ ['--hue' as string]: c.hue }}>
              <span className="exp__item-no">
                {pad(i + 1)} / {pad(TOTAL)}
              </span>
              <span className="exp__item-word">{c.key}</span>
              <p className="exp__item-copy">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
