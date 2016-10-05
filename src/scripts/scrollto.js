import $ from 'jquery'

$(document).ready(() => {
  const $header = $('header')
  $('.js-scrollTo').on('click', function(event) {
    const offset = $($.attr(this, 'href')).offset()
    $('html, body').animate({
      scrollTop: (offset ? offset.top : 0) -
        ($header.length ? $header.height() : 0)
    }, 250)
    event.preventDefault()
  })
})
