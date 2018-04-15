$(document).ready(function(){
    $("Mouse Enter example").mouseenter(function(){
        alert("You entered p1!");
    });
});

//class .class 
//id #id

$(document).ready(() => {
  $("#hide-button").on('click', () => {
    $('.hide_show_toggle').hide();
  });
  
  $('#show-button').on('click', () => {
    $('.hide_show_toggle').show();
  });
  
  $('#toggle-button').on('click', () => { 
    $('.hide_show_toggle').toggle();
  });
  
  $('#fade-out-button').on('click', () => {
    $('.fadeOut_fadeIn_fadeToggle').fadeOut(500);
  });
  
  $('#fade-in-button').on('click', () => {
    $('.fadeOut_fadeIn_fadeToggle').fadeIn(4000);
  });
  
  $('#fade-toggle-button').on('click', () => {
    $('.fadeOut_fadeIn_fadeToggle').fadeToggle();
  });
  
  $('#up-button').on('click', () => {
    $('.slideUp_slideDown_toggleSlide').slideUp(100);
  });
  
  $('#down-button').on('click', () => {
    $('.slideUp_slideDown_toggleSlide').slideDown('slow');
  });
  
  $('#slide-toggle-button').on('click', () => {
    $('.slideUp_slideDown_toggleSlide').slideToggle(400);
  });
  
});