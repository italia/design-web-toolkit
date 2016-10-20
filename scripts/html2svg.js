'use strict'

const BASE_URL = 'http://localhost:1310'

const cheerio = require('cheerio')
const fetch = require('node-fetch')
const wkhtmltoimage = require('wkhtmltoimage')

// const wkhtmltoimage = require('wkhtmltoimage').setCommand(__dirname + '/bin/wkhtmltoimage');

fetch(BASE_URL)
  .then((res) => res.text())
  .then((body) => {
    let links = []
    let $ = cheerio.load(body)
    $('[href]').each((i, el) => {
      console.log($(el).attr('href'))
      if ($(el).attr('href').match(/^\/components\/detail\//))
        links.push($(el).attr('href'))
    })
    return links
  })
  .then((links) => {
    links.forEach((l) => {
      const link = l.replace('detail', 'preview')
      const basename = link.split('/')[3]

      console.log('fetch', `${BASE_URL}${link}`, basename)

      wkhtmltoimage.generate(`${BASE_URL}${link}`, { 'disableSmartWidth': 1, 'width': '768', 'format': 'svg', 'output': `/tmp/svg/${basename}.svg` })
    })
  })
