import $ from 'jquery'

/* @see index.css */
const NOFOCUS_CLASSNAME = 'c-hideFocus'

$(document).on('keydown', (e) => {
  if (e.keyCode === 9) {
    $('body').removeClass(NOFOCUS_CLASSNAME)
  }
})

$(document).on('click', () => $('body').addClass(NOFOCUS_CLASSNAME))
$('body').addClass(NOFOCUS_CLASSNAME)
