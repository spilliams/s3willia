// Regular theme JavaScript goes here
$(document).ready(function(){
  
  function fixStickyFooter () {
    var footerRowHeight = $(".footer")[0].offsetHeight;
    $(".footer, .push").height(footerRowHeight);
    $(".wrapper").css({'margin-bottom':(-1 * footerRowHeight) +"px"});
  };
  fixStickyFooter();
  $(window).bind('resize', fixStickyFooter);
  
  // load articles
  images = {
    "dev":[],
    "eng":[],
    "exp":[]
  }
  $.each(articles,function(i,e){
    // assume articles are sorted by date
    article = articles[i];
    if (!article.published)
      return;
    if (article.imageSrc && images[article.discipline].length < 3) {
      images[article.discipline].push({"identifier":article.identifier,"imageSrc":article.imageSrc});
    }
    links = "";
    $.each(article.hyperlinks,function(i,e){
      if (links)
        links += ", ";
      links += "<a href='"+e+"' target='_blank'>"+i+"</a>";
    });
    if (links)
      links = "<p>"+links+"</p>";
    paragraphs = "";
    $.each(article.paragraphs,function(i,e){
      paragraphs += "<p>"+e+"</p>";
    });
    div = "<div class='"+article.discipline+" article'><div id='"+article.identifier+"' class='header'><div class='container'><div class='title'>"+article.headerTitle+"</div><div class='meta'>"+article.date+"</div></div></div><div class='body'><div class='container'><div class='content'>"+links+paragraphs+"</div></div></div></div>";
    $("#articles").append($(div));
  });
  $.each(images,function(discipline,arr){
    $.each(arr,function(i,e){
      img = "<div class='preview two columns end' rel='#"+e.identifier+"'><img src='images/previews/"+e.imageSrc+"'></div>";
      $("."+discipline+".feature .header").append(img);
    })
  });
  
  // set up click functions
  $(".preview").click(function(){
    $($(this).attr('rel')).click();
  });
  
  // click on my name, scroll to footer
  $(".banner").click(function(){
    scrolly($("#footer").offset().top);
  })
  
  // click on article header, slide open or closed
  $(".article .header").click(function(event){
    event.preventDefault();
    if (typeof body != 'undefined')
      oldbody = body;
    body = $(this).parent().find(".body");
    if (body.css('display') == "none") {
      if (typeof oldbody != 'undefined')
        oldbody.slideUp(0);
      body.slideDown('fast');
      if ("#"+$(this)[0].id != jQuery(location).attr('hash'))
        window.location.hash = $(this)[0].id;
      scrolly($(this).parent().offset().top);
      openArticle = $(this).parent();
    } else {
      body.slideUp('fast');
      openArticle = false;
    }
  })
  
  // click on filters, filter content
  $("#nav a").click(function(){
    $(".article .body").slideUp();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      c = $(this).attr('class');
      
      $("."+c+".article, ."+c+".feature").slideUp();
    } else {
      c = $(this).attr('class');
      $("."+c+".article, ."+c+".feature").slideDown();
      $(this).addClass('active');
    }
  })
  
  // capture j and k
  $(document).keydown(function(event){
    if (event.which == 74) {
      // j
      event.preventDefault();
      next();
    } else if (event.which == 75) {
      // k
      event.preventDefault();
      previous();
    }
  })
  
  // use url-hashing
  h = $(location).attr('hash');
  if (h) {
    $(h).click();
  }
});

var openArticle = false;

// scroll the window to a spot
function scrolly(i) {
  $("html, body").animate({scrollTop:i+"px"})
}

// click the previous article
function previous() {
  if (openArticle && openArticle.prev().length) {
    openArticle.prev().find(".header").click();
  }
}
// click the next article
function next() {
  if (openArticle && openArticle.next().length) {
    openArticle.next().find(".header").click();
  }
}
