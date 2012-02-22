// Regular theme JavaScript goes here
$(document).ready(function(){
  jQuery(document).ready(function(){
    h = jQuery(location).attr('hash');
    if (h) {
      $(h).click()
    }
  })
  
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
  
});
function scrolly(i) {
  $("html, body").animate({scrollTop:i+"px"})
}
function closeAll() {
  $(".article .body").slideUp();
}
