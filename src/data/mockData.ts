import { BrandItem, ProgramItem, NewsItem, FaqItem, ToneFinderResult } from '../types';

export const BRANDS_DATA: BrandItem[] = [
  {
    id: 'lumina-bio',
    name: 'LÚMINA BIO',
    tagline: '発酵バイオテクノロジーが生み出す、水光肌のエッセンス',
    category: 'SKINCARE',
    founder: {
      name: '神崎 玲奈 / Reina Kanzaki',
      university: '東京大学大学院 薬学系研究科 2年',
      role: 'Founder & Biomolecular Chemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
    },
    description: '海洋性微細藻類と植物発酵エキスを独自のマイクロカプセルに封入。敏感肌でも角層深くまで浸透する高機能セラムを提案。',
    concept: '「肌本来の自己再生力を、科学と自然の調和で目覚めさせる」',
    heroProduct: {
      name: 'Bio-Luminous Multi Cellular Serum (50ml)',
      price: '¥6,800 (tax incl.)',
      volume: '50ml',
      features: ['99.2% 天然由来成分', 'ナノリポソーム浸透技術', '無香料・アルコールフリー'],
      image: '/src/assets/images/brand_serum_orb_1788244703411.jpg'
    },
    boothNumber: 'A-01 [Main Area]',
    highlightTag: 'GEN-Z AWARD 2026 WINNER',
    socialHandle: '@lumina.bio.official',
    colorAccent: 'from-pink-500 to-rose-400'
  },
  {
    id: 'prism-tone',
    name: 'PRISM TONE',
    tagline: '光の屈折で自由な肌色を表現する、ジェンダーレスマルチパレット',
    category: 'COSMETICS',
    founder: {
      name: '日高 悠真 / Yuma Hidaka',
      university: '武蔵野美術大学 造形学部 4年',
      role: 'Creative Director & Co-Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
    },
    description: 'パーソナルカラーにとらわれず、角度によって色彩がシームレスに変化するオーロラ偏光ピグメントを採用したハイライター＆マルチカラー。',
    concept: '「自分の美しさは、自分で決める。光を纏う自由をすべての人へ。」',
    heroProduct: {
      name: 'Chroma Shift Holographic Multi Palette',
      price: '¥4,950 (tax incl.)',
      volume: '4 Shades / 12g',
      features: ['高密着メルティング処方', 'ヴィーガン認証取得', '鏡面マグネットコンパクト'],
      image: '/src/assets/images/brand_palette_neon_1788244725829.jpg'
    },
    boothNumber: 'B-04 [Next Stage]',
    highlightTag: 'INNOVATION DESIGN 2026',
    socialHandle: '@prismtone_lab',
    colorAccent: 'from-violet-500 to-cyan-400'
  },
  {
    id: 'aura-01',
    name: 'AURA 01',
    tagline: '脳波と連動して香りが変化する、次世代ムードチューニングフレグランス',
    category: 'FRAGRANCE',
    founder: {
      name: '橘 エマ / Emma Tachibana',
      university: '慶應義塾大学 環境情報学部 3年',
      role: 'Neuro-Perfumer & Founder',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80'
    },
    description: '感情やストレスレベルに合わせて嗅覚受容体にアプローチ。集中とリラックスを即座に切り替えるアダプトゲン・オーガニックフレグランス。',
    concept: '「まとう香りは、あなたの意識の拡張。」',
    heroProduct: {
      name: 'AURA Mind Fluid No.07 [Metanoia] (30ml)',
      price: '¥8,200 (tax incl.)',
      volume: '30ml',
      features: ['パロサント＆ホワイトムスクベース', '100%植物性アルコール', 'スマートディフューズボトル'],
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80'
    },
    boothNumber: 'C-02 [Scent Lounge]',
    highlightTag: 'WELLBEING TECH CHOICE',
    socialHandle: '@aura01_fragrance',
    colorAccent: 'from-indigo-400 to-fuchsia-500'
  },
  {
    id: 'kura-cell',
    name: 'KURA CELL',
    tagline: '伝統の酒粕発酵と現代皮膚科学の融合。生セラミドバリアオイル',
    category: 'SKINCARE',
    founder: {
      name: '三木 翔平 / Shohei Miki',
      university: '京都大学 農学部 4年',
      role: 'Biotech Entrepreneur & 5th Gen Brewer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
    },
    description: '京都の老舗酒蔵の杜氏と共同開発。純米大吟醸の酒粕から抽出した天然ヒト型セラミドを贅沢に配合し、肌のバリア機能を根本からサポート。',
    concept: '「100年の醸造知恵を、次の100年のスキンケアへ。」',
    heroProduct: {
      name: 'Fermented Bio Barrier Glow Essence (45ml)',
      price: '¥5,500 (tax incl.)',
      volume: '45ml',
      features: ['無農薬米エキス', '常温熟成抽出法', 'リサイクルガラス容器'],
      image: 'https://images.unsplash.com/photo-1608248597359-07e3db4a6d17?w=800&auto=format&fit=crop&q=80'
    },
    boothNumber: 'A-03 [Main Area]',
    highlightTag: 'SUSTAINABLE AWARD',
    socialHandle: '@kura_cell_kyoto',
    colorAccent: 'from-amber-400 to-orange-500'
  },
  {
    id: 'meta-glow',
    name: 'META GLOW',
    tagline: '微弱電流EMSとLED光美顔を手のひらサイズにした、スマートビューティーツール',
    category: 'BEAUTY TOOL',
    founder: {
      name: '城之内 凛 / Rin Jonouchi',
      university: '早稲田大学 先進理工学部 3年',
      role: 'Hardware Engineer & CEO',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80'
    },
    description: 'スマートフォンのAIアプリと連動し、日々の肌コンディションに合わせてEMSパルスと近赤外線波長を自動最適化する超小型フェイスケアデバイス。',
    concept: '「日々のケアを、AIとサイエンスで最短・最高峰に。」',
    heroProduct: {
      name: 'Meta Sonic Pocket Sculptor (Titanium Edition)',
      price: '¥19,800 (tax incl.)',
      volume: '85g / USB-C充電',
      features: ['3段階EMSパルス', 'デュアルLEDセラピー', '防水IPX7仕様'],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80'
    },
    boothNumber: 'D-01 [Tech Pavilion]',
    highlightTag: 'TECH CRUNCH FEATURED',
    socialHandle: '@metaglow.tech',
    colorAccent: 'from-cyan-400 to-blue-600'
  },
  {
    id: 'ethereal-hair',
    name: 'ETHEREAL LAB',
    tagline: 'シルクペプチドと海洋ミネラルが髪の芯を再構築する、ウォーターレスヘアトリートメント',
    category: 'HAIRCARE',
    founder: {
      name: '佐伯 麻衣 / Mai Saeki',
      university: '東京藝術大学 デザイン科 卒',
      role: 'Founder & Brand Architect',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80'
    },
    description: '熱に反応して毛髪内部のケラチン結合を強化するヒートアクティブ成分配合。サロン帰りのツヤとしなやかさを瞬時に再現。',
    concept: '「髪の一筋一筋に、光の記憶を。」',
    heroProduct: {
      name: 'Silk Matrix Thermal Repair Mist (120ml)',
      price: '¥3,850 (tax incl.)',
      volume: '120ml',
      features: ['ドライヤー熱を味方に', 'ノンシリコン処方', 'ホワイトティー＆ペアの香り'],
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80'
    },
    boothNumber: 'B-02 [Next Stage]',
    highlightTag: 'POPULAR VOTE #1',
    socialHandle: '@ethereal_hairlab',
    colorAccent: 'from-teal-400 to-emerald-500'
  },
  {
    id: 'bio-glow-tea',
    name: 'FLORA INGEST',
    tagline: '腸内フローラと美肌菌を育てる、飲むプレバイオティクス・ボタニカルリキッド',
    category: 'INNERCARE',
    founder: {
      name: '松田 健斗 / Kento Matsuda',
      university: '北海道大学 水産学部 4年',
      role: 'Nutritional Scientist & CEO',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80'
    },
    description: '北海道産のハマナスと白樺樹液、20種類の乳酸菌生産物質をブレンドしたインナービューティードリンク。肌の透明感を内側から底上げ。',
    concept: '「巡りを整え、内なる輝きを呼び覚ます。」',
    heroProduct: {
      name: 'Microbiome Nectar Drops (7 Days Ampoule Pack)',
      price: '¥4,200 (tax incl.)',
      volume: '10ml × 7本',
      features: ['無加水・無濃縮還元', '砂糖・保存料不使用', '炭酸水や紅茶に数滴'],
      image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&auto=format&fit=crop&q=80'
    },
    boothNumber: 'C-05 [Wellness Zone]',
    highlightTag: 'DOCTOR RECOMMENDED',
    socialHandle: '@flora_ingest',
    colorAccent: 'from-rose-400 to-amber-300'
  },
  {
    id: 'neo-tint',
    name: 'NEO TINT STUDIO',
    tagline: '唇の水分量とpHに溶け込む、落ちない生ツヤ・カスタムリップオイル',
    category: 'COSMETICS',
    founder: {
      name: 'アンジェリカ 水野 / Angelica Mizuno',
      university: '上智大学 国際教養学部 3年',
      role: 'Colorist & Product Lead',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80'
    },
    description: 'つけた瞬間に自分だけの血色感へ変化。プランピング成分とアルガンオイルを贅沢に配合し、ガラス玉のような立体感を24時間キープ。',
    concept: '「生まれたての血色感を、最高の透明感で。」',
    heroProduct: {
      name: 'pH Transform Crystal Plumping Lip Oil',
      price: '¥3,200 (tax incl.)',
      volume: '6.5ml',
      features: ['ベタつかないメルティ処方', 'ヒアルロン酸注入設計', 'リフィル交換可能ボトル'],
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80'
    },
    boothNumber: 'B-01 [Next Stage]',
    highlightTag: 'TIKTOK TREND AWARD',
    socialHandle: '@neotint_official',
    colorAccent: 'from-pink-500 to-purple-600'
  }
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'p1',
    day: 1,
    time: '11:00 - 12:00',
    stage: 'MAIN STAGE',
    title: 'OPENING KEYNOTE:「美の常識をアップデートする」若き起業家たちの挑戦',
    description: 'Z世代のビューティートレンドはどこへ向かうのか？学生起業家4名によるオープニングセッション。持続可能性、AI、ジェンダーレスの最前線を語る。',
    speakers: [
      { name: '神崎 玲奈', title: 'LÚMINA BIO Founder', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' },
      { name: '日高 悠真', title: 'PRISM TONE Founder', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80' },
      { name: '特別ゲスト: 美容ジャーナリスト', title: 'Beauty Industry Critic', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80' }
    ],
    tag: 'KEYNOTE'
  },
  {
    id: 'p2',
    day: 1,
    time: '13:30 - 14:45',
    stage: 'INNOVATION LAB',
    title: 'LIVE MAKEUP DEMO: 光を操るホログラフィック・メイクアップの技術',
    description: '偏光パールとスキンケアを一体化させた最新メイクトレンドの実演。プロヘアメイクアップアーティストによるステージモデルへの生デモ。',
    speakers: [
      { name: 'アンジェリカ 水野', title: 'NEO TINT STUDIO', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80' },
      { name: 'YUKI SATO', title: 'Top Runway Hair & Makeup Artist', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80' }
    ],
    tag: 'LIVE DEMO'
  },
  {
    id: 'p3',
    day: 1,
    time: '16:00 - 17:30',
    stage: 'CREATOR LOUNGE',
    title: 'PITCH STAGE: 次世代美容スタートアップ ピッチコンテスト Day 1',
    description: '全国から選抜抜粋された学生ビューティーテックチームによる公開ピッチ。来場者投票とVC審査員による即日出資審査。',
    speakers: [
      { name: '城之内 凛', title: 'META GLOW CEO', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80' },
      { name: '三木 翔平', title: 'KURA CELL CEO', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80' }
    ],
    tag: 'PITCH BATTLE'
  },
  {
    id: 'p4',
    day: 2,
    time: '11:30 - 12:45',
    stage: 'MAIN STAGE',
    title: 'TALK: バイオテクノロジー×クリーンビューティーの未来像',
    description: '石油由来成分ゼロ・動物実験フリーを可能にする次世代発酵技術の真髄。大学研究機関とブランドのオープンイノベーション。',
    speakers: [
      { name: '神崎 玲奈', title: 'LÚMINA BIO Founder', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' },
      { name: '松田 健斗', title: 'FLORA INGEST CEO', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80' }
    ],
    tag: 'SCIENCE'
  },
  {
    id: 'p5',
    day: 2,
    time: '14:00 - 15:30',
    stage: 'INNOVATION LAB',
    title: 'WORKSHOP: 自分だけのオリジナルブレンドパフューム制作体験',
    description: '脳波センサーでリラックス度を測定しながら、12種の天然香料を組み合わせてオリジナル30mlフレグランスを調香。',
    speakers: [
      { name: '橘 エマ', title: 'AURA 01 Neuro-Perfumer', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80' }
    ],
    tag: 'WORKSHOP'
  },
  {
    id: 'p6',
    day: 3,
    time: '15:00 - 17:00',
    stage: 'MAIN STAGE',
    title: 'GRAND FINALE & NEWTONE BEAUTY AWARDS 2027',
    description: '来場者投票で決まる「Most Innovative Brand」の表彰式。DJライブパフォーマンスと記念ギフト配布。',
    speakers: [
      { name: 'All Founders', title: 'NEWTONE 2027 Collective', avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=80' }
    ],
    tag: 'FINALE'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    date: '2027.03.15',
    category: 'PRESS RELEASE',
    title: '次世代美容ブランドPOPUP『NEWTONE 2027』原宿・WITH HARAJUKUにて開催決定！',
    summary: '全国の大学・大学院から選ばれた8組の学生起業家が集結。来場者先着1,000名に限定ホログラムポーチをプレゼント。',
    readTime: '2 min'
  },
  {
    id: 'news-2',
    date: '2027.03.01',
    category: 'COLLABORATION',
    title: 'メインビジュアル公開＆事前入場VIPチケット（無料）の受付を開始',
    summary: 'キービジュアルには気鋭のCGアーティストと連携したネオン×サイバービューティーを採用。公式Webサイトにて限定パスを発行中。',
    readTime: '1 min'
  },
  {
    id: 'news-3',
    date: '2027.02.18',
    category: 'ANNOUNCEMENT',
    title: '全8ブランドの出展ブース詳細および限定先行発売アイテムを公開',
    summary: '会場限定コフレセットや、AI肌診断体験、オリジナル調香ワークショップなど体験型コンテンツを多数用意。',
    readTime: '3 min'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: '入場・チケット',
    question: '入場料はかかりますか？予約は必要ですか？',
    answer: '入場は完全無料です。混雑緩和のため、当サイトの「ENTRY / JOIN」より事前デジタルパスの取得をお願いしております。当日入場も可能ですが、事前登録者が優先入場となります。'
  },
  {
    category: '商品・購入',
    question: '会場で製品を直接試したり購入することはできますか？',
    answer: 'はい、すべてのブースにテスターと専門カウンセラーが常駐しています。会場限定の先行発売アイテムやポップアップ特別割引（10〜20% OFF）にてご購入いただけます。決済は各種クレジットカード、電子マネー、QRコード決済に対応しています。'
  },
  {
    category: '体験・ワークショップ',
    question: '調香ワークショップやAI肌診断は事前予約が必要ですか？',
    answer: 'AI肌診断やクイックタッチアップは予約不要で随時体験いただけます。調香ワークショップは各回定員15名のため、当日朝10:30より会場受付にて整理券を配布いたします。'
  },
  {
    category: '会場・アクセス',
    question: '会場へのアクセス方法を教えてください。',
    answer: 'JR原宿駅（東口）より徒歩1分、東京メトロ明治神宮前〈原宿〉駅（2番出口）より徒歩1分の「WITH HARAJUKU HALL (3F)」にて開催いたします。'
  }
];

export const TONE_RESULTS: ToneFinderResult[] = [
  {
    toneName: 'CYBER LUMINOUS',
    subTitle: '透き通るような発光感と知的なクールオーラ',
    colorHex: '#38bdf8',
    gradient: 'from-cyan-500 via-purple-500 to-pink-500',
    palette: ['#E0F2FE', '#38BDF8', '#818CF8', '#C084FC'],
    description: '内側からみずみずしく光を放つ透明感と、未来的な洗練を併せ持つあなた。バイオ発酵スキンケアと寒色系ハイライトで究極の濡れツヤ肌を。',
    recommendedBrands: ['LÚMINA BIO', 'PRISM TONE'],
    luckyItem: 'Bio-Luminous Multi Cellular Serum'
  },
  {
    toneName: 'ROSE METANOIA',
    subTitle: '温かみと情熱を秘めた、センシュアル・ネオクラシック',
    colorHex: '#f43f5e',
    gradient: 'from-rose-500 via-fuchsia-500 to-amber-400',
    palette: ['#FFE4E6', '#FB7185', '#F43F5E', '#E11D48'],
    description: '凛とした強さと包容力のある華やかさ。水分量で変化するpHリップと、アダプトゲン配合のフレグランスで周囲を魅了します。',
    recommendedBrands: ['NEO TINT STUDIO', 'AURA 01'],
    luckyItem: 'pH Transform Crystal Plumping Lip Oil'
  },
  {
    toneName: 'AURORA PRISM',
    subTitle: '既存の枠にとらわれない、多面的なジェンダーレス・グリッター',
    colorHex: '#a855f7',
    gradient: 'from-purple-500 via-pink-400 to-teal-300',
    palette: ['#F3E8FF', '#C084FC', '#A855F7', '#6EE7B7'],
    description: '見る角度や光によって表情を変えるクリエイティブな個性。偏光マルチパレットとスマートビューティーツールで自分だけの表現を。',
    recommendedBrands: ['PRISM TONE', 'META GLOW'],
    luckyItem: 'Chroma Shift Holographic Multi Palette'
  },
  {
    toneName: 'ORGANIC ZEN GLOW',
    subTitle: '自然の恵みと発酵が生み出す、本質的な健やか美肌',
    colorHex: '#34d399',
    gradient: 'from-emerald-400 via-teal-500 to-amber-300',
    palette: ['#ECFDF5', '#6EE7B7', '#10B981', '#F59E0B'],
    description: '肌の常在菌バランスを整え、芯から揺らがない素肌へ。天然セラミドオイルとインナーケアドロップで素肌力を最大限に。',
    recommendedBrands: ['KURA CELL', 'FLORA INGEST'],
    luckyItem: 'Fermented Bio Barrier Glow Essence'
  }
];
