/* global jQuery, define */

/*
 *	Fork of
 *
 *	https://github.com/carlwoodhouse/jquery.cookieBar
 *	The MIT License (MIT)
 *	Copyright (c) 2016 Carl Woodhouse
 *
 *
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'))
  } else {
    // Browser globals
    factory(jQuery)
  }
}(function($) {

  $.fn.cookieBar = function(options) {
    var settings = $.extend({
      'acceptButton': '.js-cookieBarAccept',
      'secure': false,
      'path': '/',
      'domain': '',
      'threshold': 500
    }, options)

    var _accept = function() {
      $.cookie('cookiebar', 'hide', {
        path: settings.path,
        secure: settings.secure,
        domain: settings.domain,
        expires: 30
      })
      $(document).trigger('accept.cookiebar')
    }

    $.cookieBar = $.cookieBar || {}

    $.cookieBar.isAccepted = function() {
      return $.cookie('cookiebar') === 'hide'
    }

    return this.each(function() {
      var $cookiebar = $(this)

      if (!$.cookieBar.isAccepted()) {
        if (settings.threshold > 0) {
          $(window).on('scroll.cookiebar', (function() {
            if ($(window).scrollTop() > settings.threshold) {
              $(window).unbind('scroll.cookiebar')
              _accept()
              $cookiebar.hide()
            }
          }))
        }
        $cookiebar.show()
      }

      $cookiebar.find(settings.acceptButton).click(function() {
        $cookiebar.hide()
        _accept()
        return false
      })
    })

  }

}))
