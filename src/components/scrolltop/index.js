import $ from 'jquery'
import debounce from 'throttle-debounce/throttle'

const threshold = 100

const _toggleScrolltop = () => {
  ($(window).scrollTop() > threshold) ?
  $('.js-scrollTop').show() :
  $('.js-scrollTop').hide()
}

$(window).scroll(debounce(500, _toggleScrolltop))
$(document).ready(_toggleScrolltop)

export default {
  threshold
}
