/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a5490',
          50: '#e6f0f9',
          100: '#cce1f3',
          200: '#99c3e7',
          300: '#66a5db',
          400: '#3387cf',
          500: '#1a5490',
          600: '#164577',
          700: '#103256',
          800: '#0c263f',
          900: '#081928',
        },
        accent: {
          DEFAULT: '#ff8c42',
          50: '#fff4ed',
          100: '#ffe9db',
          200: '#ffd3b7',
          300: '#ffbd93',
          400: '#ffa76f',
          500: '#ff8c42',
          600: '#ff7519',
          700: '#e55a00',
          800: '#b84700',
          900: '#8b3500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1', fontWeight: '800' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-large': ['1.25rem', { lineHeight: '1.75' }],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 140, 66, 0.4)',
        'glow-lg': '0 0 30px rgba(255, 140, 66, 0.6)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 140, 66, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 140, 66, 0.8)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(26, 84, 144, 0.95) 0%, rgba(16, 50, 86, 0.85) 100%)',
        'gradient-accent': 'linear-gradient(135deg, rgba(255, 140, 66, 0.95) 0%, rgba(229, 90, 0, 0.85) 100%)',
        'gradient-primary': 'linear-gradient(180deg, #1a5490 0%, #103256 100%)',
      },
    },
  },
  plugins: [],
}
