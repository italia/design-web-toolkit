/* global jQuery */

/*
 *	Fork of
 *
 *	https://github.com/carlwoodhouse/jquery.cookieBar
 *	The MIT License (MIT)
 *	Copyright (c) 2016 Carl Woodhouse
 *
 */
(function($) {

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
    }

    return this.each(function() {
      var $cookiebar = $(this)

      if ($.cookie('cookiebar') !== 'hide') {
        if (settings.threshold > 0) {
          $(window).on('scroll.cookiebar', (function() {
            if ($(window).scrollTop() > settings.threshold) {
              $(window).unbind('.cookiebar')
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

})(jQuery)
