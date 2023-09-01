import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.5rem',
          xl: '2rem',
        },
      },
      colors: {
        main_dark: '#003A74',
        main_card: '#1976D2',
        main_theme: '#14988B',
        green_back: '#C9E1FA',
        black: '#1E1E1E',
        white: '#FFFFFF',
        red_error: '#9C1414',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
