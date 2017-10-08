import $ from 'jquery'

/* eslint-disable no-unused-vars */

import cookie from 'jquery.cookie'
import cookieBar from './cookiebar'

/* eslint-enable no-unused-vars */

const opts = {
  'acceptButton': '.js-cookieBarAccept',
  'secure': false,
  'path': '/',
  'domain': ''
}

$(document).ready(function() {
  $('.js-CookieBar').cookieBar(opts)
})

export default {
  opts
}
