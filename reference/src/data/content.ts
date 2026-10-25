export type Country = {
  code: string;
  name: string;
  flag: string;
  operators: { name: string; color: string }[];
  region: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  accentColor: string;
  audience: string;
  screenshot: string;
  status: 'live' | 'coming-soon';
  features: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: string;
};

export const countries: Country[] = [
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    operators: [{ name: 'Etisalat', color: '#00A19A' }],
    region: 'Middle East',
  },
  {
    code: 'IQ',
    name: 'Iraq',
    flag: '🇮🇶',
    operators: [{ name: 'Zain', color: '#7B2D8E' }],
    region: 'Middle East',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    operators: [{ name: 'Viettel', color: '#0066B3' }],
    region: 'Southeast Asia',
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    operators: [{ name: 'Smart', color: '#F47B20' }],
    region: 'Southeast Asia',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    operators: [{ name: 'Mobily', color: '#00A0E0' }],
    region: 'Middle East',
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    operators: [
      { name: 'Orange', color: '#FF7900' },
      { name: 'SFR', color: '#E60000' },
      { name: 'Bouygues', color: '#1B2C7A' },
    ],
    region: 'Europe',
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    operators: [{ name: 'O2', color: '#007CB0' }],
    region: 'Europe',
  },
];

export const products: Product[] = [
  {
    id: 'pixora',
    name: 'Pixora',
    category: 'AI / EdTech',
    tagline: 'AI Explorer Academy',
    description:
      'An AI-powered learning platform that delivers interactive educational content for kids and young learners. Personalized learning paths, gamified lessons, and adaptive curriculums designed to engage and educate through mobile-first experiences.',
    icon: 'Sparkles',
    gradient: 'from-primary-400/20 to-primary-600/20',
    accentColor: '#1f4a97',
    audience: 'Kids & Young Learners',
    screenshot: '/pixora-screenshot.webp',
    status: 'live',
    features: ['AI-adaptive learning paths', 'Gamified lesson modules', 'Multi-subject curriculum', 'Progress tracking for parents'],
  },
  {
    id: 'playcade',
    name: 'Playcade',
    category: 'AI / Gaming',
    tagline: 'Mobile Gaming Arcade',
    description:
      'A subscription-based mobile gaming arcade offering hundreds of premium HTML5 games. No downloads required — instant play directly in the browser. Casual, arcade, puzzle, and action genres with regular content updates and leaderboards.',
    icon: 'Gamepad2',
    gradient: 'from-accent-400/20 to-gold-400/20',
    accentColor: '#ff682b',
    audience: 'All Ages',
    screenshot: '/playcade-screenshot.webp',
    status: 'live',
    features: ['Hundreds of HTML5 games', 'No download — instant play', 'Multiple game genres', 'Leaderboards & achievements'],
  },
  {
    id: 'kid-console',
    name: 'Kid-Console',
    category: 'AI / Kids Content',
    tagline: 'Safe Kids Entertainment',
    description:
      'A curated, child-safe entertainment platform featuring nursery rhymes, cartoons, educational videos, and interactive stories. Parental controls, age-appropriate content filtering, and a walled-garden approach trusted by telecom operators.',
    icon: 'Baby',
    gradient: 'from-gold-400/20 to-accent-400/20',
    accentColor: '#fec15c',
    audience: 'Children 2–8',
    screenshot: '/kid-console-screenshot.webp',
    status: 'live',
    features: ['Curated child-safe content', 'Parental controls & timers', 'Age-appropriate filtering', 'Nursery rhymes & cartoons'],
  },
  {
    id: 'ninidreamland',
    name: 'Ninidreamland',
    category: 'AI / Bedtime Stories',
    tagline: 'AI Bedtime Story Generator',
    description:
      'An AI-powered bedtime story platform that generates personalized, calming stories for children. Each story is uniquely crafted with the child\'s name, favorite characters, and preferred themes. Features text-to-speech narration, soothing background sounds, and a dreamy, sleep-friendly interface designed for nighttime use.',
    icon: 'Moon',
    gradient: 'from-navy-400/20 to-primary-400/20',
    accentColor: '#1f4a97',
    audience: 'Children 3–10',
    screenshot: '/ninidreamland-screenshot.webp',
    status: 'coming-soon',
    features: ['AI-generated personalized stories', 'Text-to-speech narration', 'Soothing background sounds', 'Custom characters & themes'],
  },
];

export const services: Service[] = [
  {
    id: 'content-aggregation',
    title: 'Content Aggregation & Licensing',
    description:
      'We source, license, and curate premium digital content across gaming, education, kids entertainment, and lifestyle verticals — delivering ready-to-deploy content catalogs for telecom partners.',
    icon: 'Library',
    features: ['Multi-genre content libraries', 'Full licensing & compliance', 'Regular content refresh cycles', 'Regional & localized content'],
  },
  {
    id: 'subscription-platform',
    title: 'Subscription & Billing Platform',
    description:
      'Carrier-billing integrated subscription management with DCB, PIN/OTP flows, retry logic, and churn prevention. Full lifecycle management from opt-in to renewal to cancellation.',
    icon: 'CreditCard',
    features: ['Direct Carrier Billing (DCB)', 'PIN/OTP & MO/MT flows', 'Smart retry & dunning', 'Multi-tier pricing models'],
  },
  {
    id: 'delivery-infrastructure',
    title: 'Content Delivery Infrastructure',
    description:
      'Cloud-native, low-latency delivery infrastructure with CDN integration, adaptive streaming, and edge caching — ensuring seamless user experiences across all network conditions.',
    icon: 'Server',
    features: ['Global CDN integration', 'Adaptive streaming & caching', '99.9% uptime SLA', 'Auto-scaling infrastructure'],
  },
  {
    id: 'analytics',
    title: 'Analytics & Revenue Optimization',
    description:
      'Real-time dashboards for telecom partners with subscriber insights, revenue tracking, conversion funnels, and AI-driven recommendations to maximize ARPU and minimize churn.',
    icon: 'BarChart3',
    features: ['Real-time revenue dashboards', 'Cohort & funnel analysis', 'AI-driven churn prediction', 'ARPU optimization insights'],
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulatory Affairs',
    description:
      'Full compliance with telecom regulations across all operating markets. GDPR, COPPA, and local data protection standards. Transparent opt-in/opt-out flows and audit-ready reporting.',
    icon: 'ShieldCheck',
    features: ['GDPR & COPPA compliant', 'Local regulatory compliance', 'Transparent opt-in flows', 'Audit-ready reporting'],
  },
  {
    id: 'creative',
    title: 'Creative & User Acquisition',
    description:
      'In-house creative studio producing landing pages, promotional creatives, and conversion-optimized funnels. Data-driven user acquisition campaigns across digital channels.',
    icon: 'Palette',
    features: ['Landing page design & hosting', 'Promotional creative production', 'A/B testing framework', 'Multi-channel UA campaigns'],
  },
];

export const stats: Stat[] = [
  { value: 7, suffix: '', label: 'Countries Live', icon: 'Globe' },
  { value: 9, suffix: '', label: 'Telco Partners', icon: 'Radio' },
  { value: 50, suffix: 'M+', label: 'Subscribers Reached', icon: 'Users' },
  { value: 4, suffix: '', label: 'Products in Portfolio', icon: 'Rocket' },
];

export const architectureLayers = [
  {
    id: 'telco',
    name: 'Connected Distribution',
    description: 'The reach that brings intelligent products to people',
    icon: 'Radio',
    color: '#1f4a97',
    components: ['DCB Gateway', 'SMS Gateway', 'USSD Gateway', 'Telco APIs', 'Subscriber DB'],
  },
  {
    id: 'platform',
    name: 'Adcuesta AI Core',
    description: 'Models, workflows, memory, and product logic',
    icon: 'Boxes',
    color: '#ff682b',
    components: ['Subscription Engine', 'Billing Manager', 'Content CMS', 'User Profiling', 'Campaign Manager', 'Notification Service'],
  },
  {
    id: 'content',
    name: 'Intelligent Experiences',
    description: 'Products that learn, create, and respond',
    icon: 'LayoutGrid',
    color: '#00A19A',
    components: ['Pixora — AI Learning', 'Playcade — Gaming', 'Kid-Console — Kids Content', 'Ninidreamland — Bedtime Stories', 'Content CDN'],
  },
  {
    id: 'analytics',
    name: 'Learning Loop',
    description: 'Signals that make every experience smarter',
    icon: 'BarChart3',
    color: '#fec15c',
    components: ['Real-time Dashboards', 'Revenue Reports', 'Churn Analytics', 'AI Recommendations'],
  },
];
