
/* Fork from https://html5boilerplate.com/ */
// Avoid `console` errors in browsers that lack a console.

let method = null
let noop = function() {}
let methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn'
]
let length = methods.length
let console = (window.console = window.console || {})

while (length--) {
  method = methods[length]
  if (!console[method]) {
    console[method] = noop
  }
}
