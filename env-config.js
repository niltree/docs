// this file exports a bunch of replacements
// that are made across the source-code

module.exports = {
  VERSION: require('./package').version,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  IMAGE_ASSETS_URL: 'https://raw.githubusercontent.com/niltree/docs/master',
  VIDEO_ASSETS_URL: 'https://raw.githubusercontent.com/niltree/docs/master',
  RAW_ASSETS_URL: 'https://raw.githubusercontent.com/niltree/docs/master'
}
