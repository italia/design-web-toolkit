import $ from 'jquery'
/*
 * Fork of
 *
 * ! Menu - v0.1.3 - 2016-02-17
 * https://github.com/filamentgroup/menu
 * Copyright (c) 2016 Scott Jehl Licensed MIT
 */
const at = {
  ariaHidden: 'aria-hidden'
}
const selectClass = 'is-selected'
const focusables = 'a,input,[tabindex]'

class Menu {

  constructor(element) {
    if (!element) {
      throw new Error('Element required to initialize object')
    }
    this.element = element
    this.$element = $(element)
    this.opened = true
    this.componentName = 'Menu'

    this.keycodes = {
      38: function(e) {
        this.moveSelected('prev')
        e.preventDefault()
      },

      40: function(e) {
        this.moveSelected('next')
        e.preventDefault()
      },

      // add right / left key navigation
      37: function(e) {
        this.moveSelected('prev')
        e.preventDefault()
      },

      39: function(e) {
        this.moveSelected('next')
        e.preventDefault()
      },

      13: function() {
        // return the selected value
        return this.selectActive()
      },

      9: function(e) {
        this.moveSelected(e.shiftKey ? 'prev' : 'next')
        e.preventDefault()
      },

      27: function() {
        this.close()
      }
    }
  }

  moveSelected(placement, focus) {
    var $items = this.$element.find('li'),
      $selected = $items.filter('.' + selectClass),
      $nextSelected

    if (!$selected.length || placement === 'start') {
      $nextSelected = $items.eq(0)
    } else if (placement === 'next') {
      $nextSelected = $selected.next()
      if (!$nextSelected.length) {
        $nextSelected = $items.eq(0)
      }
    } else {
      $nextSelected = $selected.prev()
      if (!$nextSelected.length) {
        $nextSelected = $items.eq($items.length - 1)
      }
    }
    $selected.removeClass(selectClass)
    $nextSelected.addClass(selectClass)

    if (focus || $(window.document.activeElement).closest($selected).length) {
      if ($nextSelected.is(focusables)) {
        $nextSelected[0].focus()
      } else {
        var $focusChild = $nextSelected.find(focusables)
        if ($focusChild.length) {
          $focusChild[0].focus()
        }
      }
    }
  }

  getSelectedElement() {
    return this.$element.find('li.' + selectClass)
  }

  selectActive() {
    var trigger = this.$element.data(this.componentName + '-trigger')
    var $selected = this.getSelectedElement()

    if (trigger && $(trigger).is('input')) {
      trigger.value = $selected.text()
    }
    $selected.trigger(this.componentName + ':select')
    this.close()
    return $selected.text()
  }

  keyDown(e) {
    var fn = this.keycodes[e.keyCode] || function() {}
    return fn.call(this, e)
  }

  _bindKeyHandling() {
    var self = this
    this.$element
      .bind('keydown', function(e) {
        self.keyDown(e)
      })
      .bind('mouseover', function(e) {
        self.$element.find('.' + selectClass).removeClass(selectClass)
        $(e.target).closest('li').addClass(selectClass)
      })
      .bind('mouseleave', function(e) {
        $(e.target).closest('li').removeClass(selectClass)
      })
      .bind('click', function() {
        self.selectActive()
      })
  }

  open(trigger, sendFocus) {
    if (this.opened) {
      return
    }
    this.$element.attr(at.ariaHidden, false)
    this.$element.data(this.componentName + '-trigger', trigger)
    this.opened = true
    this.moveSelected('start', sendFocus)
    this.$element.trigger(this.componentName + ':open')
  }

  close() {
    if (!this.opened) {
      return
    }
    this.$element.attr(at.ariaHidden, true)
    this.opened = false
    var $trigger = this.$element.data(this.componentName + '-trigger')
    if ($trigger) {
      $trigger.focus()
    }
    this.$element.trigger(this.componentName + ':close')
  }

  toggle(trigger, sendFocus) {
    this[this.opened ? 'close' : 'open'](trigger, sendFocus)
  }

  init() {
    // prevent re-init
    if (this.$element.data(this.componentName)) {
      return
    }
    this.$element.data(this.componentName, this)

    this.$element.attr('role', 'menu')
    // @FIXME
    // design-web-toolkit mod:
    // be careful with the following as menuitem(s)
    // get a special treatment by screen readers
      .find('li').attr('role', 'menuitem')

    this.close()
    var self = this

    // close on any click, even on the menu
    $(document).bind('mouseup', function() {
      self.close()
    })

    this._bindKeyHandling()

    this.$element.trigger(this.componentName + ':init')
  }

}


class Menutrigger {

  constructor(element) {
    if (!element) {
      throw new Error('Element required to initialize object')
    }
    this.element = element
    this.$element = $(element)
    this.$menu = $('#' + this.$element.attr('data-menu-trigger'))
    this.menu = this.$menu.data('Menu')
    this.componentName = 'Menutrigger'
  }

  _bindbehavior() {
    var self = this

    if (this.$element.is('a')) {
      this.$element
        .attr('role', 'button')
        .bind('click', function(e) {
          e.preventDefault()
          self.menu.toggle(this, true)
        })
    } else if (this.$element.is('button')) {
      this.$element
        .bind('click', function(e) {
          e.preventDefault()
          self.menu.toggle(this, true)
        })
    } else if (this.$element.is('input')) {
      this.$element
        .bind('input keyup', function() {
          if (this.value === '') {
            self.menu.close()
          } else {
            self.menu.open(this, false)
          }

        })
        .bind('input keydown', function(e) {
          self.menu.keyDown(e)
        })
        .bind('focus click', function() {
          if (this.value !== '') {
            self.menu.open()
          }
        })
        .bind('blur', function() {
          self.menu.close()
        })
    }
  }

  init() {
    // prevent re-init
    if (this.$element.data(this.componentName)) {
      return
    }
    this.$element.data(this.componentName, this)

    // add attrs
    this.$element.attr('aria-controls', this.$menu.attr('id'))
    this.$element.attr('aria-haspopup', 'true')

    this._bindbehavior()

    this.$element.trigger(this.componentName + ':init')
  }

}

export default {
  Menu,
  Menutrigger
}
