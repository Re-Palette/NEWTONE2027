export type Category = 
  | 'ALL'
  | 'COSMETICS'
  | 'SKINCARE'
  | 'HAIRCARE'
  | 'INNERCARE'
  | 'BEAUTY TOOL'
  | 'FRAGRANCE';

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  category: Category;
  founder: {
    name: string;
    university: string;
    role: string;
    avatar: string;
  };
  description: string;
  concept: string;
  heroProduct: {
    name: string;
    price: string;
    volume: string;
    features: string[];
    image: string;
  };
  boothNumber: string;
  highlightTag: string;
  socialHandle: string;
  colorAccent: string;
}

export interface ProgramItem {
  id: string;
  day: number;
  time: string;
  stage: 'MAIN STAGE' | 'INNOVATION LAB' | 'CREATOR LOUNGE';
  title: string;
  description: string;
  speakers: {
    name: string;
    title: string;
    avatar: string;
  }[];
  tag: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ToneFinderResult {
  toneName: string;
  subTitle: string;
  colorHex: string;
  gradient: string;
  palette: string[];
  description: string;
  recommendedBrands: string[];
  luckyItem: string;
}
