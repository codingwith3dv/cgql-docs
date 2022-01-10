// tailwind.config.cjs

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  theme: {
    extend: {
      fontFamily: {
        hd: ["Source Code Pro"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
