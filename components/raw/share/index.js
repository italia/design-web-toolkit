import $ from 'jquery'

const hideClass = 'u-jsHiddenVisually'

$('.js-Share').click((e) => {
  const $el = $(e.currentTarget)
  const $share = $el.closest('.Share')
  const $buttons = $share.find('ul')

  $buttons
    .toggleClass(hideClass)

  $share
    .find('.Share-revealText')
    .toggleClass(hideClass)

  $share
    .find('.Share-revealIcon')
    .toggleClass('is-open')
})
