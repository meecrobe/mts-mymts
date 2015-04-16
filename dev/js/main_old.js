$(document).ready(function(){
  $('.slide').hide();
  var timer;
  $('.anchor').on('click', function(){
    $('.slider-wrapper').fadeIn(function(){
      $('.popup-circle').show().addClass('animated zoomIn');
    });
    timer = setTimeout(function(){
      $('.slider-wrapper').hide();
      $('.slide').children().removeClass('animated');
      $('.slide').hide();
    }, 30000);
  });

  $('video').on('play', function(){
    clearTimeout(timer);
  });

  $('.slider-wrapper').on('click', function(){
    $(this).hide();
    $('video')[0].pause();
    clearTimeout(timer);
    $('.slide').hide();
    $('.slide').children().stop(true, false).removeClass('animated');
  });

  $('.popup-circle').on('click', function(event){
    event.stopPropagation();
  });

  $('.a-1').on('click', function(){

    setTimeout(function() {
      var slide = $('#slide-1');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('h1 + p, img.large-img').css({'visibility':'visible'}).addClass('animated zoomIn');
       setTimeout(function(){
        slide.find('h2').css({'visibility':'visible'}).addClass('animated zoomInUp');
        $('.minsk, .lib').css({'visibility':'visible'}).addClass('animated zoomInUp');
        }, 5000);
      }, 3000);
    }, 1600);
  });

  $('.a-2').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-2');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('h1, img').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide.find('.side').css({'visibility':'visible'}).addClass('animated slideInRight');
        }, 2000);
      }, 3000);
    }, 1600);
  });

  $('.a-3').on('click', function(){
    setTimeout(function() {
      var slide1 = $('#slide-3');
      var slide2 = $('#slide-4');

      slide1.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide2.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide1.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide1.find('h1, img').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide1.find('.side').css({'visibility':'visible'}).addClass('animated slideInLeft');
          setTimeout(function(){
            slide1.show().children().css({'visibility':'hidden'}).removeClass('animated');
            slide2.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
            setTimeout(function(){
              slide2.find('img').css({'visibility':'visible'}).addClass('animated zoomIn');
              setTimeout(function(){
                slide2.find('.side').css({'visibility':'visible'}).addClass('animated slideInRight');
                slide2.find('p.center').css({'visibility':'visible'}).addClass('animated zoomInUp');
              }, 2000);
            }, 2000);
          }, 3000);
        }, 2000);
      }, 3000);
    }, 1600);
  });

  $('.a-4').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-5');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('h1, img').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide.find('.side').css({'visibility':'visible'}).addClass('animated slideInLeft');
          slide.find('p.center').css({'visibility':'visible'}).addClass('animated zoomInUp');
        }, 2000);
      }, 3000);
    }, 1600);
  });

   $('.a-5').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-6');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('h2').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide.find('video').css({'visibility':'visible'}).addClass('animated zoomInUp');
        }, 1000);
      }, 1000);
    }, 1600);
  });

   $('.b-1').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-7');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1.red').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('h2, img').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide.find('img + h1').css({'visibility':'visible'}).addClass('animated zoomIn');
          slide.find('.side').css({'visibility':'visible'}).addClass('animated fadeIn');
        }, 2000);
      }, 2000);
    }, 1600);
  });

   $('.b-2').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-8');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('img').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide.find('.side').css({'visibility':'visible'}).addClass('animated fadeIn');
        }, 2000);
      }, 2000);
    }, 1600);
  });

   $('.b-3').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-9');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('img').css({'visibility':'visible'}).addClass('animated zoomIn');
        setTimeout(function(){
          slide.find('.side').css({'visibility':'visible'}).addClass('animated slideInUp');
        }, 2000);
      }, 2000);
    }, 1600);
  });

   $('.b-4').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-10');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('h2').css({'visibility':'visible'}).addClass('animated zoomIn');
        slide.find('hr').css({'visibility':'visible'}).addClass('animated fadeIn');
        setTimeout(function(){
          slide.find('.side').css({'visibility':'visible'}).addClass('animated slideInUp');
        }, 2000);
      }, 2000);
    }, 1600);
  });

   $('.b-5').on('click', function(){
    setTimeout(function() {
      var slide = $('#slide-11');
      slide.show().children().css({'visibility':'hidden'}).removeClass('animated');
      slide.find('h1').css({'visibility':'visible'}).addClass('animated zoomIn');
      setTimeout(function(){
        slide.find('img').css({'visibility':'visible'}).addClass('animated zoomIn');
      }, 2000);
    }, 1600);
  });

});