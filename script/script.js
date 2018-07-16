"use strict"

/*PROMO-SLIDER*/

function promoSliderProceed(element){

	var $sliderDots = $('.promo-slider-dot');
	var $indexDot = $sliderDots.index($(element));;
	
	$sliderDots.each(function(){
		if($sliderDots.index(this) == $indexDot) $(this).addClass('active-dot')
			else $(this).removeClass('active-dot')
	});

	var $elements = $('.promo-slider-item');

	$elements.each(function(){
		if($elements.index(this) == $indexDot) $(this).addClass('active-item')
			else $(this).removeClass('active-item')
	});

};

$('.promo-slider-dot').click(function(){
	promoSliderProceed(this)
})

/*setInterval(function(){
	promoSliderProceed(null, true)
	console.log('run')
}, 3000);*/


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
  	items: 6,
  	loop: true,
  	autoplay: true,
  	autoplayHoverPause: true,
    autoplayTimeout: 10000,
    
  });
});