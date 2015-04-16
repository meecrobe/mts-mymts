$(document).ready(function(){
  var timer;

  $('.anchor').on('click', function(){
    $('.slider-wrapper').fadeIn(function(){
      $('.popup-circle').show().addClass('animated zoomIn');
    });
    timer = setTimeout(function(){
      $('.slider-wrapper').hide();
      resetAll();
    }, 120000);
  });

  $('.slider-wrapper').on('click', function(){
    $(this).hide();
    resetAll();
  });

  $('.popup-circle').on('click', function(event){
    event.stopPropagation();
  });

  $('.a-1').on('click', function(){
    showSlide1();
  });

  $('.a-2').on('click', function(){
    showSlide2();
  });

  $('.a-3').on('click', function(){
    showSlide3();
  });

  $('.a-4').on('click', function(){
    showSlide4();
  });

  $('.a-5').on('click', function(){
    showSlide5();
  });

  $('.a-6').on('click', function(){
    showSlide6();
  });


  function resetAll() {
    clearTimeout(timer);
    $('.slide').hide();
    $('.slide').finish();
    $('.slide, .slide *').finish(true, true).removeClass('animated');
  }

  function showSlide1() {

    var slide = $('#slide-1');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(2500).show(0).addClass('animated fadeIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated slideInRight');
    slide.children('.side').delay(4000).show(0).addClass('animated slideInLeft');
  }

  function showSlide2() {

    var slide = $('#slide-2');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(2500).show(0).addClass('animated fadeIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated slideInLeft');
    slide.children('.side').delay(4000).show(0).addClass('animated slideInRight');
  }

  function showSlide3() {

    var slide = $('#slide-3');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(2500).show(0).addClass('animated fadeIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated slideInRight');
    slide.children('.side').delay(4000).show(0).addClass('animated slideInLeft');
  }

  function showSlide4() {

    var slide = $('#slide-4');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(2500).show(0).addClass('animated fadeIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated slideInLeft');
    slide.children('.side').delay(4000).show(0).addClass('animated slideInRight');
  }

  function showSlide5() {

    var slide = $('#slide-5');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(2500).show(0).addClass('animated fadeIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated slideInLeft');
    slide.children('.side').delay(4000).show(0).addClass('animated slideInRight');
  }

  function showSlide6() {

    var slide = $('#slide-6');

    slide.show().children().hide().delay(1000);
    slide.children('h1.center').delay(400).show(0).addClass('animated zoomIn');
    slide.children('.img-2').delay(2500).show(0).addClass('animated fadeIn');
    slide.children('.img-1').delay(3000).show(0).addClass('animated slideInRight');
    slide.children('.side').delay(4000).show(0).addClass('animated slideInLeft');
  }
});