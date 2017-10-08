/*
 *  Requires `inkscape` and `phantomjs` installed globally
 */

/* global phantom */
/* global jQuery */

const TIMEOUT_MS = 1000

const page = require('webpage').create()
const system = require('system')

const address = system.args[1]
const output = system.args[2]

const pageWidth = parseInt(system.args[3], 10)
const pageHeight = parseInt(system.args[4], 10)

const spawn = require('child_process').spawn

function convertToSvg(path, cb) {
  const dst = path.replace(/pdf$/, 'svg')
  const cmd = spawn('inkscape', ['--without-gui', '--export-plain-svg=' + dst, path])
  cmd.on('close', cb)
  cmd.on('exit', cb)
}

page.viewportSize = {
  width: pageWidth,
  height: pageHeight
}

page.open(address, function(status) {
  if (status !== 'success') {
    console.error('err', address)
    phantom.exit(1)
  } else {
    page.evaluate(function() {
      jQuery('[media]').attr('media', 'all')
      setTimeout(function() {
        for (var k in document.styleSheets) {
          const styleSheet = document.styleSheets[k]
          if (typeof styleSheet === 'object' && 'rules' in styleSheet && styleSheet.rules !== null) {
            const rules = styleSheet.rules
            for (var kr in rules) {
              if (typeof rules[kr].media !== 'undefined') {
                rules[kr].media.mediaText = rules[kr].media.mediaText.replace('screen', 'all')
              }
            }
          }
        }
      }, 200)
    })
    window.setTimeout(function() {
      page.render(output)

      convertToSvg(output, phantom.exit)

    }, TIMEOUT_MS)
  }
})
