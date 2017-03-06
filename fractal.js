const fractal = module.exports = require('@frctl/fractal').create()

fractal.set('project.title', 'Web Toolkit Styleguide')

fractal.components.set('path', __dirname + '/src')

fractal.docs.set('path', __dirname + '/docs')

fractal.web.set('static.path', __dirname + '/build')

// prefix all resources url with '/build'

if (process.env.DEPLOY === 'true') {
  fractal.web.set('static.mount', '/ita-web-toolkit/build')
} else {
  fractal.web.set('static.mount', '/build')
}

fractal.web.set('builder.dest', __dirname + '/styleguide')

fractal.components.set('default.preview', '@preview')

fractal.components.set('default.status', 'wip')

const faker = require('faker')
const _ = require('lodash')

const nunj = require('@frctl/nunjucks')({
  paths: ['src', 'docs'],
  globals: {
    __WORD__: _.range(10).map(function() {
      return faker.lorem.word()
    }),
    __WORDS__: _.range(10).map(function() {
      return faker.lorem.words()
    }),
    __TEXTS__: _.range(10).map(function() {
      return faker.lorem.paragraph()
    }),
    __SHORT_TEXTS__: _.range(10).map(function() {
      return faker.lorem.sentence()
    }),
    __LONG_TEXTS__: _.range(10).map(function() {
      return faker.lorem.paragraphs()
    }),
    __IMAGES__: _.range(10).map(function() {
      return faker.image.image()
    })
  }
})

fractal.components.engine(nunj)
fractal.docs.engine(nunj)

fractal.components.set('ext', '.tmpl')
fractal.docs.set('ext', '.md')

/*
 *  Specify default theme
 */
const mandelbrot = require('@frctl/mandelbrot')

/*
 *  Specify custom theme
 */
const myCustomisedTheme = mandelbrot({
  skin: 'blue',
  'nav': [
    'docs',
    'components'
  ],
  //  ["html", "view", "context", "resources", "info", "notes"]
  'panels': [
    'html',
    'resources',
    'info',
    'notes'
  ],
  'lang': 'it',
  'styles': [
    'default',
    '/ita-web-toolkit/theme/styleguide.css',
    '/build/build-styleguide.css'
  ],
  'scripts': [
    'default',
    '/build/styleguide.min.js',
    '/ita-web-toolkit/theme/styleguide-menu-override.js'
  ]
})

myCustomisedTheme.addStatic(__dirname + '/theme', '/ita-web-toolkit/theme')

/*
 * Specify theme-overrides folder
 */
myCustomisedTheme.addLoadPath(__dirname + '/views')

fractal.components.set('title', 'Componenti')
fractal.docs.set('title', 'Documentazione')

fractal.web.theme(myCustomisedTheme)
