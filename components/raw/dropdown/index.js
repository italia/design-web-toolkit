import $ from 'jquery'
import Popper from 'popper.js'
import {
  Menu,
  Menutrigger
} from './dropdown'

// auto-init on enhance (which is called on domready)

$.fn['menu'] = function() {
  return this.each(function() {
    new Menu(this).init()
  })
}

$.fn['menu-trigger'] = function() {
  return this.each(function() {
    new Menutrigger(this).init()
  })
}

$(document).bind('enhance', function(e) {
  $('[data-menu]', e.target)['menu']()
  $('[data-menu-trigger]', e.target)['menu-trigger']()
})

////////////////////////////////////

$('[data-menu-trigger]').not('[data-menu-inline]').each((i, el) => {
  const $target = $('#' + $(el).attr('data-menu-trigger'))

  if (el && $target.length > 0) {
    new Popper(el, $target, {
          placement: 'bottom',
          modifiers: {
              arrow: {
                element: '.Dropdown-arrow'
              },
              flip: {
                  behavior: ['left', 'right'],
                  boundariesElement: 'scrollParent'
              },
              // preventOverflow: {
              //     boundariesElement: 'viewport'
              // },
          },
    })
  }
})

export default {
  Menu,
  Menutrigger
}
