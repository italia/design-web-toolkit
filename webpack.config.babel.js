var webpack = require('webpack')
var path = require('path')
var libraryName = 'IWT'
var outputFile = libraryName + '.min.js'

var ExtractTextPlugin = require('extract-text-webpack-plugin')
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

loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
})
plugins.push(new ExtractTextPlugin('vendor.css'))

var config = {
  entry: __dirname + '/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: outputFile,
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
      //      exclude: /(node_modules|bower_components)/
    }, {
      test: /(\.jsx|\.js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins,
  debug: true
}

module.exports = config
