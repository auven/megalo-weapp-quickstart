// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'advanced',
      zindex: false,
      autoprefixer: false
    }
  }
}
