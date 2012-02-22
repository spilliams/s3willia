// Regular theme JavaScript goes here
$(document).ready(function(){
  
  $(".preview").click(function(){
    $($(this).attr('rel')).click();
  });
  $(".article .header").click(function(){
    body = $(this).parent().find(".body")
    if (body.css('display') == "none") {
      closeAll()
      body.slideDown('fast')
      if ("#"+$(this)[0].id != jQuery(location).attr('hash'))
        jQuery(location).attr('hash',$(this)[0].id)
      scrolly($(this).offset().top);
    } else
      body.slideUp('fast')
  })
  
  $("#nav a").click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      c = $(this).attr('class');
      $("."+c+".article").slideUp();
    } else {
      c = $(this).attr('class');
      $("."+c+".article").slideDown();
      $(this).addClass('active');
    }
  })
  
  h = jQuery(location).attr('hash');
  if (h) $(h).click()
  
});

// scroll the window to a spot
function scrolly(i) {
  $("html, body").animate({scrollTop:i+"px"})
}
// close all articles
function closeAll() {
  $(".article .body").slideUp();
}
