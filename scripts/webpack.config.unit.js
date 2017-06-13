const path = require('path')
const glob = require('glob')

module.exports = {
  entry: [path.resolve(__dirname, '../test/unit/setup.js')]
    .concat(glob.sync(path.resolve(__dirname, '../test/unit/**/*.spec.js'))),
  output: {
    path: path.resolve(__dirname, '../.tmp'),
    filename: 'test.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  devtool: 'source-map'
}
