/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      'full': '50px',
      'lg': '8px',
    },
    extend: {
      dropShadow: {
        'lg': [
          '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
          '0px 25px 50px -12px rgba(255, 255, 255, 0.25)'
        ],
        '2xl': [
          '0px 0px 15px 0px rgba(0, 0, 0, 0.07)',
          '0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
        ]
      },
      colors: {
        black: '#000',
        white: '#fff',
        nav: '#fffbeb',
        secondary: '#fef3c7',
        tertiary: '#0f172a',
        orange: '#fbbf24',
        yellow: '#fde68a',
        brown: '#78350f'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        '3xl': ['2rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      }
    },
  },
  plugins: [],
}

