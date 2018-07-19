"use strict"



/*PROMO-SLIDER*/

function proceed($element){
  var $items = $('.promo-slider-item');
  var $dots = $('.promo-slider-dot');
  var i;
  
  if($element){
    i = $dots.index($($element));
    console.log(i)
  }else{
    i = $items.index($('.active-item'));
    if (i < $items.length - 1) i ++ 
      else i = 0 
  }

  $items.each(function(){
    $(this).removeClass('active-item')
  });

  $dots.each(function(){
    $(this).removeClass('active-dot')
  });

  $($items[i]).addClass('active-item');
  $($dots[i]).addClass('active-dot');
}


$('.promo-slider-dot').click(function(){//change by click
  proceed($(this));
});

setInterval(function(){//autoplay
  proceed(false);
}, 6000);


/* SLIDER */

$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1
  });
});


/* CAROUSEL SECTION FEATURES "PRODUTOS EM DESTAQUE" */

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	navContainer: '.carousel',
    responsiveBaseElement: '.carousel-wrapper',
    responsiveRefreshRate: 200,
    responsiveClass: true,
    responsive:{
      0: {
        items: 1,
      },
      320: {
        items: 6,
       // margin: 7,
      },
      768: {
        items: 6,
      }
    },

  	
  	loop: true,
  	autoplay: true,
  	autoplayHoverPause: true,
    autoplayTimeout: 10000,
    
  });
});