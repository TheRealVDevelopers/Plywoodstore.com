/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        'dark-navy': '#081F44',
        'dark-navy-hover': '#0A2A5C',
        'dark-red': '#A4161A',
        'dark-red-hover': '#C41E3A',
        'primary-blue': '#081F44',
        'dark-blue': '#081F44',
        'red-accent': '#A4161A',
        'light-grey': '#F1F5F9',
      },
    },
  },
  plugins: [],
};
