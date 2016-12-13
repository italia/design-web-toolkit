import $ from 'jquery'

$(document).ready(() => {
  const $header = $('header')
  $('.js-scrollTo').on('click', function() {
    const offset = $($.attr(this, 'href')).offset()
    $('html, body').animate({
      scrollTop: (offset ? offset.top : 0) -
        (($header.length && $header.css('position') === 'fixed') ? $header.height() : 0)
    }, 250)
  })
})
