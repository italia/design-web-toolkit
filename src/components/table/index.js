import $ from 'jquery'
import debounce from 'throttle-debounce/throttle'

const defaultOpts = {
  responsiveTableSelector: '.js-tableFlip',
  responsiveTableClass: 'Table--flip',
  responsiveTableBreakpoint: 768,
}

const initResponsiveTables = function(opts) {
  $(document).ready(function() {
    if ($(opts.responsiveTableSelector).length > 0) {
      $(window).resize(debounce(250, function() {
        if ($(window).width() < opts.responsiveTableBreakpoint) {
          $(opts.responsiveTableSelector).addClass(opts.responsiveTableClass)
        } else {
          $(opts.responsiveTableSelector).removeClass(opts.responsiveTableClass)
        }
      }))
    }
  })
}

initResponsiveTables(defaultOpts)

export default { defaultOpts, initResponsiveTables }
