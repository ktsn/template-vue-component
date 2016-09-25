const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')

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
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    new DashboardPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../example')
  }
}
