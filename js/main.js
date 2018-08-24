$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#main-header").addClass("header-colored");
        } else {
            $("#main-header").removeClass("header-colored");
        }
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{ 
                items:3
            }
        }
    });
    
    var selector = $('.owl-carousel');
    
    $('.my-next-button').click(function() {
      selector.trigger('next.owl.carousel');
    });
    
    $('.my-prev-button').click(function() {
      selector.trigger('prev.owl.carousel');
    });
    

   /* projects section */
   var  scrollButton = $('#scroll-top');
    
    
    /* Caching The Scroll Top Button  */
    
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
	
    
    /* Click On Button To Scroll Top */
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
	 
	


// section video youtube

// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest('.js-videoWrapper');
    videoPlay($wrapper);
  });
  
  // play the targeted video (and hide the poster frame)
  function videoPlay($wrapper) {
    var $iframe = $wrapper.find('.js-videoIframe');
    var src = $iframe.data('src');
    // hide poster
    $wrapper.addClass('videoWrapperActive');
    // add iframe src in, starting the video
    $iframe.attr('src',src);
  }
  
  // stop the targeted/all videos (and re-instate the poster frames)
  function videoStop($wrapper) {
    // if we're stopping all videos on page
    if (!$wrapper) {
      var $wrapper = $('.js-videoWrapper');
      var $iframe = $('.js-videoIframe');
    // if we're stopping a particular video
    } else {
      var $iframe = $wrapper.find('.js-videoIframe');
    }
    // reveal poster
    $wrapper.removeClass('videoWrapperActive');
    // remove youtube link, stopping the video from playing in the background
    $iframe.attr('src','');
  }

});



$(window).on("load",function (){
     
        $('.load-wrapp ').fadeOut(100);  

});


$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1100);
      return false;
    });
  });


