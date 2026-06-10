export type Category = 'ai' | 'innovation' | 'strategy';

export interface QuizQuestion {
  q: string;
  opts: string[];
  ans: number;
}

export interface Concept {
  title: string;
  body: string;
}

export interface CaseStudy {
  company: string;
  title: string;
  body: string;
  result: string;
  discussion: string[];
}

export interface Exercise {
  title: string;
  intro: string;
  steps: string[];
}

export interface Module {
  id: number;
  free: boolean;
  cat: Category;
  icon: string;
  duration: string;
  lessons: number;
  title: string;
  tagline: string;
  overview: string;
  objectives: string[];
  concepts: Concept[];
  caseStudy: CaseStudy;
  exercise: Exercise;
  quiz: QuizQuestion[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  featured?: boolean;
  paymentKey: keyof PaymentConfig['bundles'];
}

export interface PaymentConfig {
  bundles: {
    full: string;
    ai: string;
    strategy: string;
  };
  modules: Record<number, string>;
}
