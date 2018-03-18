// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
 
document.addEventListener("DOMContentLoaded", function(event) { 
    $('#item > p').click(function() {
      let item = $(this).siblings('.id').html();
      console.log(item);
    });
});