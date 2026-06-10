import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#080D1A',
        surface:  '#0F172A',
        card:     '#1E293B',
        border:   'rgba(255,255,255,0.07)',
        primary:  '#6366F1',
        accent:   '#A78BFA',
        free:     '#10B981',
        paid:     '#F59E0B',
        muted:    '#94A3B8',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;
