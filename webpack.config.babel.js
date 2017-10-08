var webpack = require('webpack')
var path = require('path')
var libraryName = 'IWT'

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
// var env = process.env.WEBPACK_ENV

var plugins = []
var loaders = []

if ('dev' !== process.env.WEBPACK_ENV) {
  plugins.push(new UglifyJsPlugin({
    minimize: true,
    sourceMap: true
  }))
}

plugins.push(
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it/)
)

loaders.push({
  test: /\.png/,
  loader: 'url-loader?limit=100000&minetype=image/png'
})

loaders.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
  ]
})

// var ExtractTextPlugin = require('extract-text-webpack-plugin')
//
// loaders.push({
//   test: /\.css$/,
//   use: ExtractTextPlugin.extract({
//     fallback: 'style-loader',
//     use: 'css-loader'
//   })
// })
//
// plugins.push(new ExtractTextPlugin({
//   filename: 'vendor.css'
// }))

plugins.push(new webpack.LoaderOptionsPlugin({
  debug: true
}))

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
    umdNamedDefine: true,
    publicPath: process.env.PUBLIC_PATH || '',
    chunkFilename: '[name].chunk.js'
  },
  externals: {
    'jquery': 'jQuery',
    '$': 'jQuery',
  },
  module: {
    rules: [...loaders, {
      test: /(\.jsx|\.js)$/,
      loader: 'babel-loader',
      exclude: /(pikaday)/,
      // exclude: /(node_modules|bower_components)/
    }, {
      test: /(\.jsx|\.js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./theme'),
      'node_modules'
    ]
  },
  plugins: plugins,
}

module.exports = config
