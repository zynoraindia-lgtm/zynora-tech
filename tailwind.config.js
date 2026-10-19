/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', xl: '2.5rem' },
      screens: { '2xl': '1360px' },
    },
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0A0A0B',
          850: '#0F0F11',
          800: '#111113',
          700: '#171719',
          600: '#1E1E21',
          500: '#2A2A2E',
        },
        line: 'rgba(255,255,255,0.08)',
        muted: '#A1A1AA',
        cyan: {
          DEFAULT: '#22D3EE',
          soft: '#67E8F9',
          deep: '#0891B2',
        },
        azure: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Sora', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(34,211,238,0.45)',
        'glow-violet': '0 0 60px -12px rgba(139,92,246,0.45)',
        lift: '0 24px 70px -30px rgba(0,0,0,0.9)',
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.14) 0%, rgba(5,5,5,0) 70%)',
      },
      backgroundSize: {
        'grid-fine': '56px 56px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 40s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
