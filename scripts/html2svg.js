const async = require('async')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

const BASE_URL = 'http://localhost:1310'
const CONCURRENCY = 4
const OUTPUT_DIR = '/tmp/svg/'

const phantomjs = require('phantomjs-prebuilt')

fetch(BASE_URL)
  .then((res) => res.text())
  .then((body) => {
    const $ = cheerio.load(body)
    return $('[href]')
      .filter((i, el) => $(el).attr('href').match(/^\/components\/detail\//))
      .map((i, el) => $(el).attr('href'))
  })
  .then((links) => {
    async.eachLimit(links, CONCURRENCY, (l, done) => {
      const link = l.replace('detail', 'preview')
      const basename = link.split('/')[3]

      console.log(link, basename)

      const program = phantomjs.exec('rasterize.js', `${BASE_URL}${link}`, `${OUTPUT_DIR}${basename}.pdf`, '1440', '2000')

      program.stdout.pipe(process.stdout)
      program.stderr.pipe(process.stderr)

      program.on('exit', done)
    })
  })
  .catch((err) => {
    console.error('errore di connessione. hai eseguito npm run watch ?')
    throw err
  })
