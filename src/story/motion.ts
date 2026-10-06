import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { RefObject } from 'react';

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
