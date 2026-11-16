import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, type RefObject } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

ScrollTrigger.config({ ignoreMobileResize: true });

/** newtone.css の「長いピン留め演出」と同じ条件。ここが true のときだけピン留めする */
export const MQ_DESKTOP = '(min-width: 768px) and (min-aspect-ratio: 6/5)';
export const MQ_REDUCE = '(prefers-reduced-motion: reduce)';

type Setup = (ctx: { desktop: boolean; scope: HTMLElement }) => void | (() => void);

/**
 * シーンごとのスクロール同期アニメーション。
 * - DOMの初期状態＝完成形。GSAPは「そこへ至る途中の状態」だけを scrub で与える
 * - prefers-reduced-motion: reduce のときは何もしない（完成形のまま表示）
 * - ブレークポイントを跨ぐと matchMedia が自動で revert / 再構築する
 */
export function useSceneMotion(scope: RefObject<HTMLElement | null>, setup: Setup) {
  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;
      const mm = gsap.matchMedia(el);
      mm.add({ desktop: MQ_DESKTOP, reduce: MQ_REDUCE }, (c) => {
        const { desktop, reduce } = c.conditions as { desktop: boolean; reduce: boolean };
        if (reduce) return;
        return setup({ desktop, scope: el });
      });
      return () => mm.revert();
    },
    { scope },
  );
}

export { gsap, ScrollTrigger };

/** 低電力端末（コア数・メモリが少ない、データセーバー）。ARQO と同じ判定で軽量表示に切り替える */
function isLiteDevice() {
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  return (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4 || nav.connection?.saveData === true;
}

/**
 * 慣性スクロール（Lenis。設定は ARQO サイトと同じ）を GSAP の ticker で駆動し、ScrollTrigger と同期させる。
 * フォント・画像の読み込みや bfcache 復帰時に位置を再計算する。
 */
export function useScrollSync() {
  useEffect(() => {
    if (isLiteDevice()) document.documentElement.dataset.perf = 'lite';
    if (window.matchMedia(MQ_REDUCE).matches) return;
    const lenis = new Lenis({ autoRaf: false, lerp: 0.1, anchors: { duration: 1.6 } });
    const off = lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      off();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    const onShow = (e: PageTransitionEvent) => e.persisted && refresh();
    window.addEventListener('pageshow', onShow);
    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('pageshow', onShow);
    };
  }, []);
}

/**
 * ピン留めしない場面用：画面に入ったときに一度だけ、ふわりと現れる軽い演出（transform / opacity のみ）。
 * useSceneMotion の setup 内で呼ぶこと（matchMedia の revert でまとめて片付く）。
 */
export function revealOnce(targets: gsap.DOMTarget, trigger?: gsap.DOMTarget, vars: gsap.TweenVars = {}) {
  return gsap.from(targets, {
    opacity: 0,
    y: 34,
    duration: 0.95,
    ease: 'power3.out',
    stagger: 0.09,
    ...vars,
    scrollTrigger: { trigger: trigger ?? targets, start: 'top 86%', once: true },
  });
}
