$(document).ready(function() {
  $('.file-upload-input').on('change', function() {
    var input = this;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  });

  $('.remove-image').on('click', function() {
    $('.file-upload-input').val(null);
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  });

  $('.image-upload-wrap').on('dragover', function() {
    $(this).addClass('image-dropping');
  });

  $('.image-upload-wrap').on('dragleave', function() {
    $(this).removeClass('image-dropping');
  });
});