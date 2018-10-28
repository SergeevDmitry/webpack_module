// npx webpack --config webpack.config.js
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  mode: 'development',
  watch: true,
  devtool: 'source-map'
}
