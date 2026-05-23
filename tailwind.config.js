
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          bg: '#0E0B14',
          card: 'rgba(255,255,255,0.04)',
          glass: 'rgba(255,255,255,0.08)',
          purple: '#9B5CFF',
          blue: '#5B7CFF',
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
