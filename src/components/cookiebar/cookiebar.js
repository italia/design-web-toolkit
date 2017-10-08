import $ from 'jquery'

$.fn.cookieBar = function(options) {
  const settings = $.extend({
    'acceptButton': '.js-cookieBarAccept',
    'secure': false,
    'path': '/',
    'domain': '',
    'threshold': 500
  }, options)

  const _hide = ($cookiebar) => {
    $cookiebar
      .attr('aria-hidden', 'true')
      .attr('aria-live', 'off')
      .hide()
  }

  const _show = ($cookiebar) => {
    $cookiebar
      .attr('aria-hidden', 'false')
      .attr('aria-live', 'polite')
      .show()
  }

  const _accept = function($cookiebar) {
    $.cookie('cookiebar', 'hide', {
      path: settings.path,
      secure: settings.secure,
      domain: settings.domain,
      expires: 30
    })
    $(document).trigger('accept.cookiebar', [$cookiebar])
  }

  $(document).on('accept.cookiebar', (e, $cookiebar) => {
    _hide($cookiebar)
  })

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
            _accept($cookiebar)
          }
        }))
      }
      _show($cookiebar)
    }

    $cookiebar
      .find(settings.acceptButton)
      .click(function() {
        _accept($cookiebar)
        return false
      })

  })

}
