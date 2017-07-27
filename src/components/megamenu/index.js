import $ from 'jquery'
import Popper from 'popper.js'
import Megamenu from './megamenu'

// ASAP hide megamenu panels
$('.js-megamenu').addClass('is-ready')

const opts = {
  /* add a close button to every subnav */
  addCloseButton: false,

  closeButtonClass: 'js-Megamenu-close',

  closeButtonTemplate: `<button title="chiudi il menu" class="Megamenu-close js-Megamenu-close">
    <span class="Icon Icon-close"></span><span class="u-hiddenVisually">chiudi</span></button>`,

  /* if false open menu on hover */
  openOnClick: true,

  /* prefix for generated unique id attributes, which are required
     to indicate aria-owns, aria-controls and aria-labelledby */
  uuidPrefix: 'megamenu',

  /* css class used to define the megamenu styling */
  menuClass: 'Megamenu',

  menuListClass: 'Megamenu-list',

  /* css class for a top-level navigation item in the megamenu */
  topNavItemClass: 'Megamenu-item',

  /* css class for a megamenu panel */
  panelClass: 'Megamenu-subnav',

  /* css class for a group of items within a megamenu panel */
  panelGroupClass: 'Megamenu-subnavGroup',

  /* css class for the hover state */
  hoverClass: 'is-hover',

  /* css class for the focus state */
  focusClass: 'is-focus',

  /* css class for the open state */
  openClass: 'is-open'
}

/*
 *	Takes a Treeview and makes it work with Megamenu
 */
const listToMegaMenu = ($ul, _opts) => {
  const attrs = 'class aria-expanded aria-hidden role tabindex'
  return $ul
    .clone()
    .removeAttr(attrs)
    .addClass(_opts.menuListClass)
    .find('*')
    .removeAttr(attrs)
    .end()
    .find('> li')
    .each(function(i, li) {
      $(li)
        .addClass(function() {
          let className = $(this).data('megamenu-class')
          return className ? className : _opts.topNavItemClass
        })
        .find('[data-megamenu-class]')
        .addClass(function() {
          return $(this).data('megamenu-class')
        })
        .end()
        .find('a')
        // make item tabbable, this is required !
        // .attr('href', '#')
        .end()
        .find('> ul > li')
        .unwrap()
        .wrap(`<ul class="${_opts.panelGroupClass}" />`)
        .end()
        .find('> ul')
        .wrapAll(`<div class="${_opts.panelClass}" />`)
    })
    .end()
}

$(document).ready(function() {
  $('.js-megamenu').each((i, el) => {
    const $el = $(el)
    const rel = $(el).data('rel')

    if ($el.find('ul').length === 0 && rel && $(rel).length > 0) {
      let $menu = listToMegaMenu($(rel), opts)
      $el.append($menu)
      // @FIXME: make space for javascript rendered megamenu
      if ($('header').css('position') === 'fixed') {
        $('body').css({
          paddingTop: '+=' + $el.height() + 'px'
        })
      }
    }

    $el
      .find('.' + opts.panelClass)
      .append(
        '<span class="Icon-drop-down Dropdown-arrow u-color-white"></span>'
      )

    $el.accessibleMegaMenu(opts)

    if (opts.addCloseButton) {
      $(opts.closeButtonTemplate).appendTo($('.' + opts.panelClass))
    }

    $('.' + opts.closeButtonClass).on('click', function() {
      const e = $.Event('keydown')
      e.which = 27
      $('.' + opts.menuClass).trigger(e)
      return false
    })
  })

  $('.' + opts.topNavItemClass + ' > a').each((i, el) => {
    const $target = $(el).parent().find('.' + opts.panelClass).not(el)

    if (el && $target.length > 0) {
      new Popper(el, $target, {
        placement: 'bottom',
        modifiers: {
          arrow: {
            element: '.Dropdown-arrow'
          },
          flip: {
            enabled: false
          },
          preventOverflow: {
            padding: 8,
            priority: ['right', 'left'],
            boundariesElement: 'scrollParent'
          }
        }
      })
    }
  })
})

export default {
  opts,
  listToMegaMenu,
  Megamenu
}
