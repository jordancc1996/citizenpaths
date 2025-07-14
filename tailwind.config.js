/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-gray': '#2a2a2a',
        'brand-medium-gray': '#4a4a4a',
        'brand-light-gray': '#666666',
        'brand-very-light-gray': '#f5f5f5',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

