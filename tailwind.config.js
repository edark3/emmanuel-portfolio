/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /*
         * `white` is remapped to the theme foreground. Existing markup uses
         * text-white/70, bg-white/10 and border-white/10 to mean "foreground
         * at N% opacity", which was only ever true on a dark background. This
         * keeps that meaning in both themes instead of leaving pale grey text
         * on a pale background.
         */
        white: 'rgb(var(--fg-rgb) / <alpha-value>)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
        aura: {
          bg: 'var(--paper)',
          card: 'var(--surface)',
          glass: 'var(--accent-soft)',
          purple: 'var(--accent)',
          blue: 'var(--accent)',
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,24,31,0.04), 0 8px 24px rgba(20,24,31,0.05)',
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
