/***
 * Add custom behaviour for the styleguide skiplinks component in order to open menu
 */
(function($) {
  $(document).ready(function() {
    var frame = $('.Frame');
    var frameBody = frame.find('.Frame-body');
    $('.Skiplinks-to-menu').on('click', function() {
      if(frame.hasClass('is-closed')) {
        frameBody.css({
          marginRight: 0,
          marginLeft: 0,
          transition: '.3s ease all',
          transform: 'translate3d(0, 0, 0)'
        });
        frame.removeClass('is-closed');
      }
    });
  })
})(jQuery);
