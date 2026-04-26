import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#05080F',
          900: '#0B1020',
          800: '#0F1530',
          700: '#161D3F',
          600: '#1F2950',
        },
        cyan: {
          glow: '#22D3EE',
          DEFAULT: '#0EA5E9',
          deep: '#0284C7',
        },
        bio: {
          DEFAULT: '#10B981',
          glow: '#34D399',
          deep: '#059669',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,233,0.18), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(16,185,129,0.12), transparent 70%)',
        'medical-gradient':
          'linear-gradient(135deg, #0B1020 0%, #0F1530 50%, #0B1020 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(14,165,233,0.45)',
        'glow-bio': '0 0 40px -10px rgba(16,185,129,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
