import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sofia': ['Arial', 'Ubuntu' ]
      },
      keyframes: {
        slideinTop: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(200px)',
          },
        },
      },
      animation: {
        'slide-in-top': 'slideinTop 500ms ease-in-out both',
      },
    },
  },
  plugins: [require('autoprefixer')],
}
export default config
