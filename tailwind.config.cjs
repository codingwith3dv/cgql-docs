// tailwind.config.cjs

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ["Overpass"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
