/*
 * currentTarget polyfill by Jonathan Neal
 * https://gist.github.com/jonathantneal/3748027#file-eventlistener-polyfill-js
 */
!window.addEventListener && (function(WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
  WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function(type, listener) {
    var target = this

    registry.unshift([target, type, listener, function(event) {
      event.currentTarget = target
      event.preventDefault = function() {
        event.returnValue = false
      }
      event.stopPropagation = function() {
        event.cancelBubble = true
      }
      event.target = event.srcElement || target

      listener.call(target, event)
    }])

    this.attachEvent('on' + type, registry[0][3])
  }

  WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function(type, listener) {
    for (var index = 0; registry[index]; ++index) {
      var register = registry[index]
      if (register[0] == this && register[1] == type && register[2] == listener) {
        return this.detachEvent('on' + type, registry.splice(index, 1)[0][3])
      }
    }
    return null
  }

  WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function(eventObject) {
    return this.fireEvent('on' + eventObject.type, eventObject)
  }
})(Window.prototype, HTMLDocument.prototype, Element.prototype, 'addEventListener', 'removeEventListener', 'dispatchEvent', [])
