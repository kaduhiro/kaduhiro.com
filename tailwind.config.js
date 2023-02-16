module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      animation: {
        'fade-in-top': 'fade-in-top 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'fade-out-bottom': 'fade-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        heartbeat: 'heartbeat 1.5s ease  infinite both',
      },
      keyframes: {
        'fade-in-top': {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-out-bottom': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateY(50px)',
            opacity: '0',
          },
        },
        heartbeat: {
          '0%': {
            transform: 'scale(1)',
            'transform-origin': 'center center',
            'animation-timing-function': 'ease-out',
          },
          '10%': {
            transform: 'scale(.81)',
            'animation-timing-function': 'ease-in',
          },
          '17%': {
            transform: 'scale(.88)',
            'animation-timing-function': 'ease-out',
          },
          '33%': {
            transform: 'scale(.77)',
            'animation-timing-function': 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out',
          },
        },
      },
    },
  },
  plugins: [],
};
