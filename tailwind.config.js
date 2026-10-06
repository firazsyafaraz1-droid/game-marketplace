/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(96,165,250,.2),0 20px 45px rgba(15,23,42,.45)',
      },
      colors: {
        primary: '#7c3aed',
        secondary: '#0ea5e9',
        accent: '#fbbf24',
      },
    },
  },
  plugins: [],
};
