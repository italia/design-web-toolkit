const Config = require('./config-styleguide')

function _findIndex(ar, predicate) {
  for (let index = 0; index < ar.length; index++) {
    if (predicate(ar[index])) {
      return index
    }
  }
  return -1
}
/*
 *	Every index.js found in src/** directory will be required.
 *
 * 	Too exclude components or modules
 * 	@see config.js
 */
function requireAll(requireContext) {
  let keys = []

  requireContext.keys().forEach((filename) => {
    const dirname = filename.replace(/\\/g, '/').replace(/\/[^\/]*$/, '')

    const exclude = -1 !== _findIndex(Config.excludes, function(v) {
      return dirname.match(new RegExp(v)) !== null
    })

    const include = !exclude &&
      (Config.includes.length === 0 ||
        (-1 !== _findIndex(Config.includes, function(v) {
          return dirname.match(new RegExp(v)) !== null
        })))

    if (include) {
      // console.log('including: %s', dirname)
      keys.push(filename)
    } else {
      // console.log('excluding: %s', dirname)
    }
  })
  return keys.map(requireContext)
}

export default requireAll(require.context('../src', true, /(.*)index\.js$/))
