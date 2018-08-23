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
	 
	
	// swiper slider for carousel page
	// var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     spaceBetween: 10,
    //     effect: 'fade',
	// 	speed: 500
    // });
	 


// section video


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




// var videoPlayButton,
// 	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
//     video = document.getElementsByTagName('video')[0],
//     videoMethods = {
//         renderVideoPlayButton: function() {
//             if (videoWrapper.contains(video)) {
// 				this.formatVideoPlayButton()
//                 video.classList.add('has-media-controls-hidden')
//                 videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
//                 videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
//             }
//         },

//         formatVideoPlayButton: function() {
//             videoWrapper.insertAdjacentHTML('beforeend', '\
//                 <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
//                     <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
//                     <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
//                 </svg>\
//             ')
//         },

//         hideVideoPlayButton: function() {
//             video.play()
//             videoPlayButton.classList.add('is-hidden')
//             video.classList.remove('has-media-controls-hidden')
//             video.setAttribute('controls', 'controls')
//         }
// 	}

// videoMethods.renderVideoPlayButton()
    
});



$(window).on("load",function (){
     
        $('.load-wrapp ').fadeOut(100);  

});


