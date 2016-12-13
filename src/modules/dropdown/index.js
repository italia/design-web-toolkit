import $ from 'jquery'
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

$(document).bind('enhance', function(e) {
  $('[data-menu]', e.target)['menu']()
})

$.fn['menu-trigger'] = function() {
  return this.each(function() {
    new Menutrigger(this).init()
  })
}

$(document).bind('enhance', function(e) {
  $('[data-menu-trigger]', e.target)['menu-trigger']()
})

export default {
  Menu,
  Menutrigger
}
