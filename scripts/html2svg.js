const async = require('async')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const path = require('path')
const os = require('os')

const BASE_URL = 'http://localhost:1310'
const OUTPUT_DIR = path.join(os.tmpdir(), 'svg-' + new Date().getTime())

const BREAKPOINTS = [320, 768, 1366]
const CONCURRENCY = BREAKPOINTS.length

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
      const src = `${BASE_URL}${link}`

      async.eachLimit(BREAKPOINTS, CONCURRENCY, (size, done_) => {
        const dst = path.join(OUTPUT_DIR, `${basename}-${size}.pdf`)

        console.log(link, basename)

        const program = phantomjs.exec(path.join(__dirname, 'rasterize.js'), src, dst, size, '2000')

        program.stdout.pipe(process.stdout)
        program.stderr.pipe(process.stderr)

        program.on('exit', done_)
      }, done)
    })
  })
  .catch((err) => {
    console.error('errore di connessione. hai eseguito npm run watch ?')
    throw err
  })
