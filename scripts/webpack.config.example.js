const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../example'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, '../example'),
    filename: '__build__.js'
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
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../example')
  }
}
