let Masonry = null

try {
  Masonry = require('salvattore')
} catch (e) {
  /* HEY, I'm IE8 */
}

export default {
  Masonry
}
