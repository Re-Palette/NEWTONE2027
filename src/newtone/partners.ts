/**
 * パートナー（協賛企業・学生団体・協力／後援）のデータ。
 * 決定したパートナーだけを追加してください。グループが空の間は「決定次第掲載します」と表示されます。
 *
 * ロゴは public/newtone/partners/ に置き、パスで指定してください:
 *   { id: 'foo', name: '株式会社FOO', group: 'sponsor', logo: '/newtone/partners/foo.svg', url: 'https://example.com' }
 * ロゴがない場合は名前がそのまま表示されます。
 */

export type PartnerGroupKey = 'sponsor' | 'student' | 'support';

export interface Partner {
  id: string;
  /** 表記はパートナー指定どおりに */
  name: string;
  group: PartnerGroupKey;
  /** ロゴ画像（任意。横長の透過PNG / SVG 推奨） */
  logo?: string;
  /** 公式サイト / SNS（任意） */
  url?: string;
}

/** 表示順と見出し。グループを増やすときはここに追加 */
export const PARTNER_GROUPS: { key: PartnerGroupKey; en: string; ja: string }[] = [
  { key: 'sponsor', en: 'SPONSORS', ja: '協賛企業' },
  { key: 'student', en: 'STUDENT ORGANIZATIONS', ja: '学生団体' },
  { key: 'support', en: 'SUPPORTERS', ja: '協力・後援' },
];

export const PARTNERS: Partner[] = [];
