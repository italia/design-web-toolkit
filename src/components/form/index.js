import $ from 'jquery'

$(document).ready(function() {
  $(':radio, :checkbox').on('change', function() {
    if ($(this).is(':radio')) {
      $(this).closest('.Form-field').find('.Form-label.is-checked').removeClass('is-checked')
    }
    if ($(this).is(':checked')) {
      $(this).closest('.Form-label').addClass('is-checked')
    } else {
      $(this).closest('.Form-label').removeClass('is-checked')
    }
  })

  // Gestione elemento INPUT FILE
  var fileInput = document.querySelector('.Form-input-file')
  var fileName = document.querySelector('.Form-file-name')
  fileInput.addEventListener('change', function() {  
    fileName.innerHTML = this.value
  })

})
