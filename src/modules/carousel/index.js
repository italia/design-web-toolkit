import $ from 'jquery'

/* eslint-disable no-unused-vars */

import owlCarousel from 'owl.carousel'
import a11y from './a11y'

/* eslint-enable no-unused-vars */

const opts = {
  owlPrev: '.owl-prev',
  owlNext: '.owl-next',
  owlItem: '.owl-item',
  jsSelector: '.owl-carousel',
  owlOpts: {
    nav: false,
    // navText: ['precedente', 'successivo'],
    items: 3,
    dots: false,
    loop: false,
    margin: 16,
    mouseDrag: true,
    URLhashListener: true,
    startPosition: 'URLHash',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }
}

const init = function() {
  const $owl = $(opts.jsSelector)

  $(opts.owlPrev).click(() => $owl.trigger('prev.owl.carousel'))
  $(opts.owlNext).click(() => $owl.trigger('next.owl.carousel'))

  $owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', (event) => {
    if (!event.namespace) return

    var carousel = event.relatedTarget,
      element = event.target,
      current = carousel.current()

    $(`${opts.owlNext}[aria-controls='${element.id}']`)
      .toggleClass('u-visibilityHidden', current === carousel.maximum())

    $(`${opts.owlPrev}[aria-controls='${element.id}']`)
      .toggleClass('u-visibilityHidden', current === carousel.minimum())
  })

  // must be called after events initialization
  $owl.owlCarousel(opts.owlOpts)
}

$(document).ready(init)

export default {
  opts,
  init
}
