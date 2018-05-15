//class .class 
//id #id

$(document).ready(() => {
  // click on description of picture will show picture
  // so if picture is not showing, clicking it will show
  $('#faithful_heading').on('click', () => {
    $('#faithful').show();
  });
  
  // click on picture for picture to not show    
  $('#faithful').on('click', () => { 
    $('#faithful').toggle();
  });
  
  // click on picture for picture to not show    
  $('#legends_heading').on('click', () => { 
    $('#legends_heading').hide();
  });
  
});