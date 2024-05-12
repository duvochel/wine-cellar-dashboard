import type { Config } from 'tailwindcss';
import { purple, saturatedPurple } from './app/ui/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        grey: {
          0: '#FFFFFF',
          50: '#FAF9FB',
          100: '#F4F3F6',
          200: '#E7E5EB',
          300: '#DDDBE3',
          400: '#D4D1DB',
          500: '#A19CAF',
          600: '#747180',
          700: '#575363',
          800: '#2B2837',
          900: '#1E1B27',
          main: '#A19CAF', // 500
        },
        purple,
        saturatedPurple,
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
