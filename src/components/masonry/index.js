import $ from 'jquery'

let Masonry = null

$(() => {
  if ($('.js-Masonry-container').length > 0) {
    try {
      Masonry = require('salvattore')
      if ($('.attore-filter').length > 0) {
        var lda = document.querySelector('.js-Masonry-container')
        $('.attore-filter').change(function() {
          var attore = this
          $('.Linea-Azione-Container').each(function() {
            var filter = $(this).data('filter')
            if ($(this).data('attori').indexOf(attore.id) != -1) {
              if (attore.checked) {
                filter.push(attore.id)
                if (attore.id == 'tutti') {
                  filter = $(this).data('attori').slice()
                }
              } else {
                filter.splice(filter.indexOf(attore.id), 1)
                if (attore.id == 'tutti') {
                  filter.splice(0, filter.length)
                }
              }
            }
            if ($(this).data('filter').length > 0) {
              Masonry.prependElements(lda, [$(this).detach()[0]])
              $(this).show()
            } else {
              $(this).hide()
              Masonry.appendElements(lda, [$(this).detach()[0]])
            }
          })
          //order a-z
          Masonry.recreateColumns(lda)
        })
      }
    } catch (e) {
      /* HEY, I'm IE8 */
    }
  }
})

export default {
  Masonry
}
