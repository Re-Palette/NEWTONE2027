/**
 * サイト全体の設定。
 * 未確定の情報は null / 空配列のままにしておくと、画面上では「準備中」表示になります。
 * 確定した情報だけを入力してください（架空の日時・会場・受付先は入れないこと）。
 */

export interface NewsEntry {
  /** 例: '2027.01.15' */
  date: string;
  title: string;
  /** 詳細ページや外部記事へのリンク（任意） */
  url?: string;
}

export interface SiteConfig {
  contact: {
    /** 参加・お問い合わせフォームのURL（Googleフォーム等）。未設定なら null */
    entryUrl: string | null;
    /** 問い合わせ用メールアドレス。未設定なら null */
    email: string | null;
  };
  access: {
    /** 会場名。未確定なら null */
    venue: string | null;
    /** 住所・アクセス補足。未確定なら null */
    address: string | null;
    /** 開催日時の表記。未確定なら null */
    schedule: string | null;
  };
  news: NewsEntry[];
}

export const SITE: SiteConfig = {
  contact: {
    entryUrl: null,
    email: null,
  },
  access: {
    venue: null,
    address: null,
    schedule: '8月中旬 開催予定',
  },
  news: [
    { date: '2026.11.16', title: '8月中旬の開催を予定しています。会場は決定次第お知らせします。' },
    { date: '2026.11.16', title: 'インフルエンサーとのイベントなども企画中です。' },
  ],
};

/** 参加・お問い合わせの窓口（フォームURL、なければメール）。未設定なら null */
export const CONTACT_HREF = SITE.contact.entryUrl ?? (SITE.contact.email ? `mailto:${SITE.contact.email}` : null);

/**
 * 上部ナビ＝各ページ。x: 参考ビジュアル(1672px幅)上での各項目の中心座標。
 * ja / lead は各ページの見出しで使う（確定している内容だけを書くこと）。
 */
export const NAV_LINKS = [
  { label: 'ABOUT', x: 456, href: '/about', ja: 'NEWTONEについて' },
  { label: 'PROGRAM', x: 607, href: '/program', ja: 'プログラム' },
  { label: 'BRANDS', x: 766, href: '/brands', ja: '参加ブランド' },
  { label: 'ACCESS', x: 946, href: '/access', ja: '開催概要・アクセス' },
  { label: 'NEWS', x: 1088, href: '/news', ja: 'お知らせ' },
  { label: 'CONTACT', x: 1235, href: '/contact', ja: '参加・お問い合わせ' },
] as const;

/** 参考ビジュアル右側のカテゴリー表記と同一の並び */
export const EXPERIENCE_CATEGORIES = [
  { key: 'COSMETICS', copy: '色をまとって、気分をアップデート。', hue: '#ff4fa3' },
  { key: 'SKINCARE', copy: '素肌に、未来のスタンダードを。', hue: '#b98cff' },
  { key: 'HAIRCARE', copy: '髪から始まる、新しいわたし。', hue: '#7a6bff' },
  { key: 'INNERCARE', copy: '内側から、美しさをデザインする。', hue: '#e46bff' },
  { key: 'BEAUTY TOOL', copy: 'テクノロジーで、美容をもっと自由に。', hue: '#5f8bff' },
  { key: 'FRAGRANCE', copy: '香りで、わたしを表現する。', hue: '#ff7ac8' },
  { key: 'AND MORE...', copy: 'まだ名前のない、次の美容へ。', hue: '#9fb6ff' },
] as const;
