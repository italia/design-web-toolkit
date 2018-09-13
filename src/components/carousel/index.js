import $ from 'jquery'

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

const owlInit = function(owlInstance) {
  const $owl = $(owlInstance)

  require(['owl.carousel', './a11y', 'owl.carousel/dist/assets/owl.carousel.css'], () => {
    $owl.on('changed.owl.carousel refreshed.owl.carousel', (event) => {
      if (!event.namespace) return

      var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current()

      $(`${opts.owlNext}[aria-controls='${element.id}']`)
        .toggleClass('u-visibilityHidden', current === carousel.maximum())
        .click(() => carousel.trigger('next.owl.carousel'))

      $(`${opts.owlPrev}[aria-controls='${element.id}']`)
        .toggleClass('u-visibilityHidden', current === carousel.minimum())
    })

    $owl.on('initialized.owl.carousel', (event) => {
      if (!event.namespace) return
      var element = event.target

      $(`${opts.owlNext}[aria-controls='${element.id}']`)
        .click(() => $(`#${element.id}`).trigger('next.owl.carousel'))

      $(`${opts.owlPrev}[aria-controls='${element.id}']`)
        .click(() => $(`#${element.id}`).trigger('prev.owl.carousel'))
    })

    const settings = $.extend({}, opts.owlOpts || {}, $owl.data('carouselOptions') )

    // must be called after events initialization
    $owl.owlCarousel(settings)
  })
}

const init = function() {
    const $owl = $(opts.jsSelector)

    if ($owl.length <= 0) {
      return
    }

    $owl.each(function( index, element ) {
      owlInit(element)
    })
}


$(document).ready(init)

export default {
  opts,
  init
}
