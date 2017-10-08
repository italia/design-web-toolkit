import $ from 'jquery'

$(function() {
  $(document).bind('enhance', function() {
    $('body').addClass('enhanced')
  })
  $(document).trigger('enhance')
})
