/* Promise polyfill for IE10 */
import Promise from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = Promise
}

require('./console')
require('./ehnance')
require('./scrollto')
require('./focus')
