/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-bg': '#FAFAFE',
        'heading': '#999999',
      },
      boxShadow: {
        'lite': '0px 1px 3px rgba(0, 0, 0, 0.04)',
      },
      fontSize: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '21': '21px',
        '24': '24px',
      }
    },
  },
  plugins: [],
}