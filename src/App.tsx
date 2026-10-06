/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { SiteHeader } from './story/SiteHeader';
import { HeroScene } from './story/HeroScene';
import { ConceptScene } from './story/ConceptScene';
import { NextBeautyScene } from './story/NextBeautyScene';
import { BrandsScene } from './story/BrandsScene';
import { ExperienceScene } from './story/ExperienceScene';
import { EntryScene } from './story/EntryScene';
import { ScrollTrigger } from './story/motion';

export default function App() {
  // フォント・画像の読み込みでレイアウトが変わったら、スクロール位置の計算をやり直す
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    // bfcache から戻ったとき（戻る・進む）にも位置を再計算
    const onShow = (e: PageTransitionEvent) => e.persisted && refresh();
    window.addEventListener('pageshow', onShow);
    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('pageshow', onShow);
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <HeroScene />
        <ConceptScene />
        <NextBeautyScene />
        <BrandsScene />
        <ExperienceScene />
        <EntryScene />
      </main>
    </>
  );
}
