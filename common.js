$(function(){
  (function(d) { //font
    var config = {
      kitId: 'mxe2lbl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  //ファーストビュースマホ時調節
  var windowW = parseInt($(window).innerWidth());
  if (windowW < 767) {
      var windowH = parseInt($(window).height());
      $('.mainVisual-sp').css('height', windowH);
  }

  //hamburger
  $('#hamburger,.hamburger-close').on('click', function() {
    $('.nav_list,.hamburger-close').toggleClass('clicked');
  });

  //page top
  $(window).scroll(function(){
    var topH = parseInt($('#fadeIn').offset().top);
    var scroll = parseInt($(window).scrollTop());
    if (scroll > (topH - windowH)) {
      $('.pageUp').fadeIn(500);
    } else if (scroll < (topH - windowH)) {
      $('.pageUp').fadeOut(500);
    }
  });

  //slow scroll
  $('a[href*="#"]').on('click', function(){
    var getLink = $(this).attr('href');
    var topH = parseInt($(getLink).offset().top);
    $('body, html').animate({scrollTop:topH}, 700);
    return false;
  });

});