/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0b',
        panel: '#111111',
        line: '#292929',
        warm: '#f1eee8',
        muted: '#9a9893',
        accent: '#d6ff52',
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans SC"', '"Microsoft YaHei"', 'sans-serif'],
        display: ['"Arial Narrow"', 'Inter', '"Noto Sans SC"', 'sans-serif'],
      },
      maxWidth: {
        site: '1680px',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}
