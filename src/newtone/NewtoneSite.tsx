import { SiteHeader } from './SiteHeader';
import { HeroScene } from './HeroScene';
import { ManifestoScene, TickerBand } from './ManifestoScene';
import { ExperienceScene } from './ExperienceScene';
import { CategoriesScene } from './CategoriesScene';
import { BrandsScene } from './BrandsScene';
import { ForYouScene } from './ForYouScene';
import { InfoScene } from './InfoScene';
import { EntryScene } from './EntryScene';
import { useScrollSync } from './motion';
import './newtone.css';
import './scenes.css';

/** NEWTONE 2027 特設サイト。ARQO サイトの /projects/newtone（Re-Palette/-ARQO-HP の src/components/newtone）と同じ内容 */
export function NewtoneSite() {
  useScrollSync();
  return (
    <div className="nt">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        本文へスキップ
      </a>
      <SiteHeader />
      <main id="main">
        <HeroScene />
        <ManifestoScene />
        <TickerBand />
        <ExperienceScene />
        <CategoriesScene />
        <BrandsScene />
        <ForYouScene />
        <InfoScene />
        <EntryScene />
      </main>
    </div>
  );
}
