const path = require('path')
const DistAnalysisWebpackPlugin = require('./plugins/DistAnalysisWebpackPlugin')

module.exports = {
  mode: 'development',
  entry: {
    entry1: './src/index.js',
    entry2: './src/index2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new DistAnalysisWebpackPlugin({
      fileName: 'analysis.md'
    })
  ]
}