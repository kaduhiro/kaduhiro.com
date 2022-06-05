module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        code: ['Consolas'],
        nes: ["'Press Start 2P'"],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
