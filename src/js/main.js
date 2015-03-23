$(function() {
	var winH = $(window).height(); 


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
	var navFixed = $(".header__nav.not-fixed");

	if ($(window).scrollTop()) {
		navFixed.addClass("fixed").removeClass("header__nav--index not-fixed");
	};

	if (navFixed.length) {
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll < 120) {
				navFixed.addClass("not-fixed header__nav--index");
				navFixed.removeClass("fixed hidden");
			};
			if (scroll > 110){
				navFixed.addClass("hidden");
			};
			if (scroll > 120){
				navFixed.addClass("fixed");
				navFixed.removeClass("header__nav--index not-fixed hidden");
			};
		});
	};


	// fixed menu
	// if ($('.header__nav--index').length) {
	// 	$(window).scroll(function(){
	// 		var scroll = $(window).scrollTop();
	// 		if (scroll > 150){
	// 			$(".header__nav").addClass("hide");
	// 		};
	// 		if (scroll > 160){
	// 			$(".header__nav").addClass("fixed");
	// 			$(".header__nav").removeClass("header__nav--index");
	// 		};
	// 		if (scroll < $(".header__nav").height()) {
	// 			$(".header__nav").removeClass("hide fixed");
	// 			$(".header__nav").addClass("header__nav--index");
	// 		};
	// 	});
	// };




	// google map hide/show full height
	var mapIndexPage = $('.map--index'),
		viewMap = $('.map__open').text();

	mapIndexPage.find('#map-canvas').height(winH);
	$('.map__open').on('click', function(){
		if (mapIndexPage.hasClass('open')) {
			mapIndexPage.removeClass('open');
			$(this).text(viewMap);
			// $('#map-canvas')
		} else {
			mapIndexPage.addClass('open');
			$(this).text('Свернуть карту');
		};
	});

	$('.map--full').height(winH - ($('.header').height() + $('.footer').height()))

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