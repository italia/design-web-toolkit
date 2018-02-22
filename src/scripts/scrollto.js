import $ from 'jquery'

$(document).ready(() => {
  const $header = $('header')
  $('.js-scrollTo').on('click', function () {
    const target = $.attr(this, 'href')
    const offset = ('#' === target) ? 0 : $(target).offset()
    $('html, body').animate({
      scrollTop: (offset ? offset.top : 0) -
        (($header.length && $header.css('position') === 'fixed') ? $header.height() : 0)
    }, 250)
  })
})
