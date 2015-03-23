$(function() {

	$('.header__slider').find('.slider').bxSlider({
		slideSelector: '.slider__item',
		controls: false
	});

	// init header slider
	// var slides = $('.slider__img');
	// $('.slider').glide({
	// 	autoplay: false,
	// 	arrows: false,
	// 	navigationCenter: false,
	// 	transitionType: 'fade'
	// });

	// init content slider
    $('.about__slider').find('.slider').bxSlider({
    	pagerCustom: '.about__slider-nav'
    });

    // fixed menu
    $(window).scroll(function(){
    	var scroll = $(window).scrollTop();
  		if (scroll > 150){
            $(".header__nav").addClass("hide");
            $(".header__nav").removeClass("header__nav--notbg");
        };
  		if (scroll > 160){
            $(".header__nav").addClass("fixed");
        };
        if (scroll < $(".header__nav").height()) {
        	$(".header__nav").removeClass("hide fixed");
        	$(".header__nav").addClass("header__nav--notbg");
        };
    });


    // google map hide/show full height
    $('#map-canvas').height($(window).height());
	var viewMap = $('.map__open').text();
    $('.map__open').on('click', function(){
    	if ($('.map').hasClass('open')) {
    		$('.map').removeClass('open');
    		$(this).text(viewMap);
    		// $('#map-canvas')
    	} else {
	    	$('.map').addClass('open');
	    	$(this).text('Свернуть карту');
    	};
    });	

    // smooth scroll anchor
	$('.anchor').on('click', function(){
	    var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
        }
	    return false;
    });

		// var glide = $('.slider').glide({
		// 	arrowRightText: '',
		// 	arrowLeftText: '',
		// 	autoplay: false,
		// 	circular: false,
		// 	beforeTransition: function() {
		// 		$(slides).eq(-this.currentSlide).removeClass('fadeInUpBig').addClass('fadeOutDownBig');

		// 	},
		// 	afterTransition: function() {
		// 		$(slides).eq(-this.currentSlide).removeClass('fadeOutDownBig').addClass('fadeInUpBig');
		// 	}
		// });
	
if ($('.bx-loading').length === true) {
	console.log(1);
};
}); // end jquery