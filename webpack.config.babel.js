var webpack = require('webpack')
var path = require('path')
var libraryName = 'IWT'

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
// var env = process.env.WEBPACK_ENV

var plugins = []
var loaders = []

plugins.push(new UglifyJsPlugin({
  minimize: true
}))

loaders.push({
  test: /\.png/,
  loader: 'url-loader?limit=100000&minetype=image/png'
})

var config = {
  entry: {
    IWT: __dirname + '/index.js',
    styleguide: __dirname + '/theme/index-styleguide.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: '[name].min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'jquery': 'jQuery',
    '$': 'jQuery',
  },
  module: {
    loaders: [...loaders, {
      test: /(\.jsx|\.js)$/,
      loader: 'babel-loader',
      // exclude: /(node_modules|bower_components)/
    }, {
      test: /(\.jsx|\.js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./theme')
    ],
    extensions: ['', '.js']
  },
  plugins: plugins,
  debug: true
}

module.exports = config
