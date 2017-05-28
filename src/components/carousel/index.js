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

const init = function() {
  const $owl = $(opts.jsSelector)

  if ($owl.length <= 0) {
    return
  }

  require(['owl.carousel', './a11y', 'owl.carousel/dist/assets/owl.carousel.css'], () => {
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

    const settings = $.extend({}, opts.owlOpts || {}, $owl.data('carouselOptions'))

    // must be called after events initialization
    $owl.owlCarousel(settings)
  })
}

$(document).ready(init)

export default {
  opts,
  init
}
