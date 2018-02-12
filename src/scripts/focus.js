import $ from 'jquery'

/* @see index.css */
const NOFOCUS_CLASSNAME = 'c-hideFocus'

$(document).on('keydown', (e) => {
  if (e.keyCode === 9) {
    $('html').removeClass(NOFOCUS_CLASSNAME)
  }
})

$(document).on('click', () => $('html').addClass(NOFOCUS_CLASSNAME))
$('html').addClass(NOFOCUS_CLASSNAME)
