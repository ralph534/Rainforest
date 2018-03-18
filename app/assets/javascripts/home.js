// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
 
document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('Doc loaded.');
  $('#log-in').click(function(event) {
    event.preventDefault();
    $.ajax({
      url: 'login',  //Pass URL here 
      type: 'GET', //Also use GET method
      success: function(data) {
          var login = $(data).find('.log-in').html();
          console.log(login);
          $('.login-field').append(login);
          $('.login-wrap').fadeIn().css('display', 'block');
          $('#x').click (function(event) {
            $('.login-wrap').fadeOut().css('display', 'none');
            $('.login-field').empty();
            // $('.login-form-wrap > div').empty('');
          })
        }
      });
  });
});