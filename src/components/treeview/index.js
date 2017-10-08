import $ from 'jquery'

/*
 *	TODO:
 *		- repack as a frend _component and CSS
 *		- refactor without jQuery
 */

/*
 * Porting of http://www.oaa-accessibility.org/examplep/treeview1/
 */
const Treeview = function({
  selector: selector = '.js-Treeview',
  classFocused: classFocused = 'hasFocus',
  classParent: classParent = 'Treeview-parent',
  classMenuHandler: classMenuHandler = 'js-Treeview-handler',
  styleMenuHandler: styleMenuHandler = 'Treeview-handler--default',
  styleMenuHandlerStandalone: styleMenuHandlerStandalone = 'Treeview-handler--standalone',
  ariaLabelHandler: ariaLabelHandler = 'expand',
  multiselectable: multiselectable = true,
  animationMs: animationMs = 100,
} = {}) {

  const keys = {
    tab: 9,
    enter: 13,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    asterisk: 106
  }

  function _collapseAll(treeview) {
    treeview.$parents.each(function() {
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).children('ul').attr('aria-hidden', 'true')
      }
    })
    treeview.$visibleItems = treeview.$el.find('li:visible')
  }

  function _expandGroup(treeview, $item) {
    let $group = $item.children('ul')
    $group.slideDown(animationMs, () => {
      $group.attr('aria-hidden', 'false')
      $item.attr('aria-expanded', 'true')
      treeview.$visibleItems = treeview.$el.find('li:visible')
    })
  }

  function _collapseGroup(treeview, $item) {
    let $group = $item.children('ul')
    $group.slideUp(animationMs, () => {
      $group.attr('aria-hidden', 'true')
      $item.attr('aria-expanded', 'false')
      treeview.$visibleItems = treeview.$el.find('li:visible')
    })
  }

  function _collapseSiblings(treeview, $item) {
    $item.closest('ul')
      .find('> .' + classParent)
      .not($item)
      .each((i, el) => {
        _collapseGroup(treeview, $(el))
      })
  }

  function _toggleGroup(treeview, $item) {
    if (!multiselectable) {
      _collapseSiblings(treeview, $item)
    }
    if ($item.attr('aria-expanded') == 'true') {
      _collapseGroup(treeview, $item)
    } else {
      _expandGroup(treeview, $item)
    }
  }

  function _updateStyling(treeview, $item) {
    treeview.$items.removeClass(classFocused)
    $item.addClass(classFocused)
  }

  function _handleKeyDown(treeview, $item, e) {
    let curNdx = treeview.$visibleItems.index($item)

    if ((e.altKey || e.ctrlKey) ||
      (e.shiftKey && e.keyCode != keys.tab)) {
      return true
    }

    // if (!$(e.currentTarget).is('.' + classMenuHandler)) {
    //   return true
    // }

    switch (e.keyCode) {
      case keys.tab:
        {
          treeview.$activeItem = null
          $item.removeClass(classFocused)
          return true
        }

      case keys.home:
        {
          treeview.$activeItem = treeview.$parents.first()
          treeview.$activeItem.find(':focusable:first').focus()
          e.stopPropagation()
          return false
        }

      case keys.end:
        {
          treeview.$activeItem = treeview.$visibleItems.last()
          treeview.$activeItem.find(':focusable:first').focus()
          e.stopPropagation()
          return false
        }

      case keys.enter:
      case keys.space:
        {
          if ($(e.currentTarget).is('.' + classMenuHandler)) {
            _toggleGroup(treeview, $item)
            e.stopPropagation()
            return false
          }
          return true
        }

      case keys.left:
        {
          if ($item.is('.' + classParent) && $item.attr('aria-expanded') == 'true') {
            _collapseGroup(treeview, $item)
          } else {
            let $itemUL = $item.parent()
            let $itemParent = $itemUL.parent()
            treeview.$activeItem = $itemParent
            treeview.$activeItem.find(':focusable:first').focus()
          }
          e.stopPropagation()
          return false
        }

      case keys.right:
        {
          if (!$item.is('.' + classParent)) {
            // do nothing
          } else if ($item.attr('aria-expanded') == 'false') {
            _expandGroup(treeview, $item)
          } else {
            treeview.$activeItem = $item.children('ul').children('li').first()
            treeview.$activeItem.find(':focusable:first').focus()
          }
          e.stopPropagation()
          return false
        }

      case keys.up:
        {
          if (curNdx > 0) {
            let $prev = treeview.$visibleItems.eq(curNdx - 1)
            treeview.$activeItem = $prev
            $prev.find(':focusable:first').focus()
          }
          e.stopPropagation()
          return false
        }

      case keys.down:
        {
          if (curNdx < treeview.$visibleItems.length - 1) {
            let $next = treeview.$visibleItems.eq(curNdx + 1)
            treeview.$activeItem = $next
            $next.find(':focusable:first').focus()
          }
          e.stopPropagation()
          return false
        }

      case keys.asterisk:
        {
          treeview.$parents.each(function() {
            _expandGroup(treeview, $(this))
          })
          e.stopPropagation()
          return false
        }

    }
    return true
  }

  function _handleKeyPress(treeview, $item, e) {
    if (e.altKey || e.ctrlKey || e.shiftKey) {
      // do nothing
      return true
    }

    switch (e.keyCode) {
      case keys.tab:
        {
          return true
        }
      case keys.enter:
      case keys.home:
      case keys.end:
      case keys.left:
      case keys.right:
      case keys.up:
      case keys.down:
        {
          e.stopPropagation()
          return false
        }
      default:
        {
          let chr = String.fromCharCode(e.which)
          let bMatch = false
          let itemNdx = treeview.$visibleItems.index($item)
          let itemCnt = treeview.$visibleItems.length
          let curNdx = itemNdx + 1

          // check if the active item was the last one on the list
          if (curNdx == itemCnt) {
            curNdx = 0
          }

          // Iterate through the menu items (starting from the current item and wrapping) until a match is found
          // or the loop returns to the current menu item
          while (curNdx != itemNdx) {

            let $curItem = treeview.$visibleItems.eq(curNdx)
            let titleChr = $curItem.text().charAt(0)

            if ($curItem.is('.' + classParent)) {
              titleChr = $curItem.find('span').text().charAt(0)
            }

            if (titleChr.toLowerCase() == chr) {
              bMatch = true
              break
            }

            curNdx = curNdx + 1

            if (curNdx == itemCnt) {
              // reached the end of the list, start again at the beginning
              curNdx = 0
            }
          }

          if (bMatch == true) {
            treeview.$activeItem = treeview.$visibleItems.eq(curNdx)
            treeview.$activeItem.find(':focusable:first').focus()
          }

          e.stopPropagation()
          return false
        }
    }

    return true
  }

  function _handleClick(treeview, $item, e) {
    if (e.altKey || e.ctrlKey || e.shiftKey) {
      // do nothing
      return true
    }

    // closest('li')
    const $parent = $item.closest('li')

    treeview.$activeItem = $parent
    _updateStyling(treeview, $parent)
    _toggleGroup(treeview, $parent)

    e.stopPropagation()
    return false
  }

  function _bindEvents(treeview) {
    treeview.$handlers.click(function(e) {
      return _handleClick(treeview, $(this), e)
    })

    treeview.$items.keydown(function(e) {
      return _handleKeyDown(treeview, $(this), e)
    })

    treeview.$items.keypress(function(e) {
      return _handleKeyPress(treeview, $(this), e)
    })

    treeview.$handlers.keydown(function(e) {
      return _handleKeyDown(treeview, $(this).closest('li'), e)
    })

    treeview.$handlers.keypress(function(e) {
      return _handleKeyPress(treeview, $(this).closest('li'), e)
    })

    $(document).click(function() {
      if (treeview.$activeItem != null) {
        treeview.$activeItem.removeClass(classFocused)
        treeview.$activeItem = null
      }
      return true
    })
  }

  function destroy() {
    /* TODO */
  }

  function _addA11y($el) {
    $el.attr('role', 'tree')

    // Put role="treeitem" on every LI
    // Put aria-expanded="false" on every LI (if it has no aria-expanded attr)
    // Put tabindex="-1" on every LI (if it's not the first one)
    // Put class=<classParent> on every LI that contains an UL
    $el.find('li').each(function(i, li) {
      const $li = $(li)
      $li
        .attr('role', 'treeitem')
      // .attr('tabindex', (0 === i) ? '0' : '-1')
      //  .find('a[href]').not('[href^=#]').attr('tabindex', 0)
      //  .parent().attr('aria-label', function() { return $(this).text() })
      if ($li.find('ul').length !== 0) {

        $li.children('a').not("[href='#']")
          .append(`<span class="${classMenuHandler} ${styleMenuHandlerStandalone}"
              aria-label="${ariaLabelHandler}" role="button" tabindex="0"></span>`)

        $li.children("a[href='#']")
          .addClass(classMenuHandler)
          .addClass(styleMenuHandler)
          .attr('aria-label', ariaLabelHandler)
          .attr('role', 'button')

        const containsExpandedLink =
          $li.find('[aria-expanded=true]').length > 0
          || $li.find('.is-current').length > 0

        if (!li.hasAttribute('aria-expanded') && !containsExpandedLink) {
          $li.attr('aria-expanded', 'false')
        }
        else if (containsExpandedLink) {
          $li.attr('aria-expanded', 'true')
        }
        $li.addClass(classParent)
      }
    })
    // Put role="group" on every contained UL
    $el.find('ul').attr('role', 'group')
  }

  function init() {
    $(selector).each((_, treeviewContainer) => {
      const $el = $(treeviewContainer)
      _addA11y($el)
      let treeview = {
        $el: $el,
        $items: $el.find('li'),
        $parents: $el.find('.' + classParent),
        $handlers: $el.find('.' + classMenuHandler),
        $visibleItems: null,
        $activeItem: null
      }
      _collapseAll(treeview)
      _bindEvents(treeview)
    })
  }

  init()

  // REVEAL API
  return {
    init,
    destroy
  }

}

new Treeview()

export default {
  Treeview
}
