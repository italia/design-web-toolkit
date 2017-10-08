import $ from 'jquery'

const opts = {
  responsiveTableSelector: '.js-TableResponsive'
}

$(document).ready(() => {
  if ($(opts.responsiveTableSelector).length > 0) {
    require(['tablesaw/dist/tablesaw.jquery.js', 'tablesaw/dist/tablesaw.css'], () => {
      $(document).trigger('enhance.tablesaw')
    })
  }
})
