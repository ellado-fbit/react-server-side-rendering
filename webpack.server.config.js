const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: [webpackNodeExternals()]
}