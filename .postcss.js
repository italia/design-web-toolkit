'use strict'

const readCache = require("read-cache")
const Config = require('./config')
const util = require('util')
const debuglog = util.debuglog('postcss')
const path = require('path')
const _ = require('lodash')

module.exports = {
  use: [
    // 'postcss-devtools',

    'postcss-easy-import',
    'postcss-custom-properties',
    'postcss-custom-media',

    'postcss-each',
    'postcss-nesting',

    'postcss-extend',
    'postcss-color-function',
    'postcss-inline-svg',
    'postcss-assets',
    'postcss-url',
    'postcss-calc',
    'autoprefixer',

    // @FIXME: get rid of the following
    // when dropping support for ie8
    'postcss-pseudoelements',

    'postcss-flexbugs-fixes',
    // 'postcss-reporter'
  ],
  'autoprefixer': {
    browsers: ['last 10 versions', 'ie 8', 'ie 9']
  },
  'postcss-url': {
    url: 'copy',
    assetsPath: 'assets',
    useHash: true,
  },
  'postcss-inline-svg': {
    path: 'src/'
  },
  'postcss-assets': {
    loadPaths: ['src/'],
    cachebuster: true
  },
  'postcss-easy-import': {
    // glob: true,
    skipDuplicates: true,
    /*
     *  Run `NODE_DEBUG=postcss npm run build:css`
     *  too watch for excluded modules
     *
     *  @see config.js
     */
    load: function(filename, opts) {
      const dirname = path.dirname(path.relative(path.resolve('.'), filename))

      const exclude = -1 !== _.findIndex(Config.excludes, function(v) {
        return dirname.match(new RegExp(v)) !== null
      })

      const include = !exclude &&
        (_.isEmpty(Config.includes) ||
          (-1 !== _.findIndex(Config.includes, function(v) {
            return dirname.match(new RegExp(v)) !== null
          })))

      if (include) {
        debuglog('including: %s', dirname)
        return readCache(filename, "utf-8")
      }

      debuglog('excluding: %s', dirname)
      return Promise.resolve(`/* -- skipped: ${dirname} -- */`)
    }
  },
  postcss: {
    from: 'index.css',
    to: 'build/build.css',
    map: false,
  },
  stylelint: require('./.stylelintrc')
};
