// Regular theme JavaScript goes here
$(document).ready(function(){
  
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
      img = "<div class='preview large-2 columns text-center hide-for-small end' rel='#"+e.identifier+"'><img data-src='images/previews/"+e.imageSrc+"'></div>";
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
  
  var $scrollNav = $("#scroll-nav");
  var scrollNavIsOpen = false;
  function scrollNavOn() {
    var offsetLeft = $(".feature .header .icon").offset().left;
    var imgSize = $(".feature .header .icon img").width();
    var iconSize = $(".feature .header .icon").height();
    $("#scroll-nav img").width(imgSize);
    $("#scroll-nav img").height(imgSize);
    $("#scroll-nav .icon").width(iconSize);
    $("#scroll-nav .icon").height(iconSize);
    $scrollNav.css({"left":offsetLeft});
    
    $scrollNav.show();
    scrollNavIsOpen = true;
  };
  function scrollNavOff() {
    $scrollNav.hide();
    scrollNavIsOpen = false;
  };
  // determines if scrollNav needs to open or close
  function scrollNav() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var threshold = $("#content").offset().top;//$("#articles").offset().top;
    if (scrollTop > threshold) {
      if (!scrollNavIsOpen) {
        scrollNavOn();
      }
    } else {
      if (scrollNavIsOpen) {
        scrollNavOff();
      }
    }
  };
  scrollNav();
  $(window).bind('resize', scrollNav);
  $(window).bind('scroll', scrollNav);
  
  // click on scrollnav item, filter content, scroll to top of content
  $("#scroll-nav .icon").click(function(e){
    e.preventDefault();
    
    filter($(this).attr("class").split(" ")[0]);
    // scrolly($("#articles").offset().top);
  });
  
  // click on article header, slide open or closed
  $(".article .header").click(function(event){
    event.preventDefault();
    if (typeof body != 'undefined')
      oldbody = body;
    body = $(this).closest(".article").find(".body");
    if (body.css('display') == "none") {
      
      // slide open
      if (typeof oldbody != 'undefined')
        oldbody.slideUp(0);
      body.slideDown('fast');
      if ("#"+$(this).find(".row")[0].id != jQuery(location).attr('hash'))
        window.location.hash = $(this).find(".row")[0].id;
      // scroll to article
      scrolly($(this).closest(".article").offset().top);
      openArticle = $(this).closest(".article");
      // ajax load images
      $.each($(this).closest(".article").find("img"),function(i,img){
        if ($(img).data('src')) {
          $(img).attr('src',$(img).data('src'));
          $(img).removeAttr('data-src');
        }
      });
      
    } else {
      
      // slide closed
      body.slideUp('fast');
      openArticle = false;
      
    }
  })
  
  // click on filters, filter content
  $("#nav a").click(function(){
    $(".article .body").slideUp();
    
    var c = $(this).attr('class').split(" ")[0];
    
    filter(c);
    
  });
  
  // capture j and k
  // $(document).keydown(function(event){
  //   if (event.which == 74) {
  //     // j
  //     event.preventDefault();
  //     next();
  //   } else if (event.which == 75) {
  //     // k
  //     event.preventDefault();
  //     previous();
  //   }
  // })
  
  // load ajax images
  $.each($(".preview img, #footer img, .icon img"), function(i,img){
    if ($(img).data('src')) {
      $(img).attr('src',$(img).data('src'));
      $(img).removeAttr('data-src');
    }
  });
  
  // use url-hashing
  h = $(location).attr('hash');
  if (h) {
    $(h).click();
  }
});

var openArticle = false;
var activeFilter = "";
function filter(c) {
  console.log("filtering to '"+c+"'. active filter '"+activeFilter+"'");

  var allSel = ".dev.article, .dev.feature, .eng.article, .eng.feature, .exp.article, .exp.feature";
  var articleSel = function(c){
    return "."+c+".article, ."+c+".feature";
  }
  
  if (activeFilter == c || (typeof c == "undefined" || c === "")) {
    
    // disable filter, show all articles
    $("#nav span a").addClass("active");
    $(allSel).slideDown(function(){
      $(allSel).attr("style");
    });
    activeFilter = "";
    
    return;
    
  } else if (activeFilter != "") {
    
    $("#nav span."+activeFilter+" a").removeClass("active");
    $(articleSel(activeFilter)).slideUp();
    
  }
  // we also happen to know that c has a value, so we want to show those articles
  // whether or not there was an active filter
  $("#nav span a").removeClass("active");
  $("#nav span."+c+" a").addClass("active");
  $(allSel).slideUp();
  $(articleSel(c)).slideDown(function(){
    $(articleSel(c)).attr("style","");
  });
  activeFilter = c;
}

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
