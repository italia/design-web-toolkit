import $ from 'jquery'

let Masonry = null

$(() => {
  if ($('.js-Masonry-container').length > 0) {
    try {
      Masonry = require('salvattore')
    } catch (e) {
      /* HEY, I'm IE8 */
    }
  }
})

export default {
  Masonry
}
