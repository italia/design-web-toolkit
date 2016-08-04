import $ from 'jquery'

import Froffcanvas from 'fr-offcanvas'

/* eslint-disable no-unused-vars */

import stylesheet from 'fr-offcanvas/offcanvas.css'

/* eslint-enable */

const opts = {
  // String - panel
  panelSelector: '.Offcanvas',

  // String - content
  contentSelector: '.Offcanvas-content',

  // String - content
  modalSelector: '.Offcanvas--modal',

  // String - trigger
  jsSelector: '.js-fr-offcanvas-open',

  // String - Selector for the open button(s)
  openSelector: '.js-fr-offcanvas-open',

  // String - Selector for the close button
  closeSelector: '.js-fr-offcanvas-close',

  // String - Class name that will be added to the selector when the component has been initialised
  readyClass: 'is-ready',

  // String - Class name that will be added to the selector when the panel is visible
  activeClass: 'is-active'
}

const offcanvas = Froffcanvas(opts)

/*
 *	FIXME: hack to show / hide the background panel
 */
const _handleModal = function(e) {
  if (e && $(opts.panelSelector).hasClass('is-active') &&
    !$(e.target).is(opts.contentSelector)) {
    $(opts.closeSelector).click()
  }
  $(opts.modalSelector).one('click', _handleModal)
}

/*
 *	Prevent scroll on body when offcanvas is visible
 */
const _handleOverflow = () => {
  if ('false' === $(opts.panelSelector).attr('aria-hidden')) {
    $('body').css('overflow-y', 'hidden')
  } else {
    $('body').css('overflow-y', 'visible')
  }
}

$(document).ready(() => {
  _handleModal()

  $(opts.openSelector).click(() => false)

  $(opts.jsSelector)
    .focus(_handleOverflow)
    .blur(_handleOverflow)
})

export default {
  Froffcanvas,
  offcanvas,
  opts
}
