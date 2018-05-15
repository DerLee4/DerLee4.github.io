//class .class 
//id #id

$(document).ready(() => {
    var figure = $(".video").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }

    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }
    
  // click on description of picture will show picture
  // so if picture is not showing, clicking it will show
  $('#upper-button').on('click', () => {
    $('#upper').show();
  });
  
  // click on picture for picture to not show    
  $('#faithful').on('click', () => { 
    $('#lower').toggle();
  });
  
  // click on picture for picture to not show    
  $('#legends_heading').on('click', () => { 
    $('#field').hide();
  });

  $('#submit_button').click(function(
    $('#upper').show();
));
    
    $(function() {
    $("#btnShow").click(function() {
        $("#img2").show();
    });
    $("#btnHide").click(function() {
        $("#img2").hide();
    });
    
});