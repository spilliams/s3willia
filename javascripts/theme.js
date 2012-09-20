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
    var html = Templater.renderTemplate('article',{article:article,links:links});
    $("#articles").append(html);
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
    body = $(this).closest(".article").find(".body");
    if (body.css('display') == "none") {
      if (typeof oldbody != 'undefined')
        oldbody.slideUp(0);
      body.slideDown('fast');
      if ("#"+$(this)[0].id != jQuery(location).attr('hash'))
        window.location.hash = $(this)[0].id;
      scrolly($(this).closest(".article").offset().top);
      openArticle = $(this).closest(".article");
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

// Templater
/*global document */
(function (ctx) {
  // Simple JavaScript Templating
  // John Resig - http://ejohn.org/ - MIT Licensed
  (function(){
    var cache = {};

    function tmpl(str, data){
      // Figure out if we're getting a template, or if we need to
      // load the template - and be sure to cache the result.
      var fn = !/\W/.test(str) ?
        cache[str] = cache[str] ||
          tmpl(document.getElementById(str).innerHTML) :

        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj",
          "var p=[],print=function(){p.push.apply(p,arguments);};" +

          // Introduce the data as local variables using with(){}
          "with(obj){p.push('" +

          // Convert the template into pure JavaScript
          str.replace(/[\r\t\n]/g, " ")
            .replace(/'(?=[^%]*%>)/g,"\t")
            .split("'").join("\\'")
            .split("\t").join("'")
            .replace(/<%=(.+?)%>/g, "',$1,'")
            .split("<%").join("');")
            .split("%>").join("p.push('")
          + "');}return p.join('');");

      // Provide some basic currying to the user
      return data ? fn( data ) : fn;
    }

    function renderCollection (str, collection) {
      var rendered = '';
      for (var i = 0; i < collection.length; i++)
        rendered += tmpl(str, collection[i]);
      return rendered;
    }

    /**
        Render a template that is fetched from a DOM ID
        @param {string} id - DOM Id of the template
     */
    function renderTemplate (id, data) {
      return tmpl(fromId(id), data || {});
    }

    function fromId (id) {
      var templateId = (id || '').replace(/_template$/, '') + '_template';
      return document.getElementById(templateId).innerHTML;
    }

    ctx.Templater = {
      render: tmpl,
      renderCollection: renderCollection,
      renderTemplate: renderTemplate,
      fromId: fromId
    };

  })();
  
}(this));
