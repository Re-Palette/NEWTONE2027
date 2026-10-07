import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, type RefObject } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

ScrollTrigger.config({ ignoreMobileResize: true });

/** index.html のインラインスクリプトと同じ条件。ここが true のときだけ長いピン留め演出を行う */
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

/**
 * 慣性スクロール（Lenis）。GSAP の ticker で1フレームに1回だけ更新し、ScrollTrigger と同期させる。
 * - タッチ操作はネイティブの慣性スクロールのまま（Lenis の既定）
 * - prefers-reduced-motion: reduce のときは使わない
 * - ページ内リンク（#about など）も Lenis で滑らかに移動
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia(MQ_REDUCE).matches) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, anchors: true, autoRaf: false });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}
