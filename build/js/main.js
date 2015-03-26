$(function() {

	var winH = $(window).height(); 

	// init header slider
	$('#headerSlider').bxSlider({
		slideSelector: '.slider__item',
		controls: false
	});

	// init content slider
	$('#aboutSlider').bxSlider({
		slideSelector: '.slider__item',
		pagerCustom: '.about__slider-nav'
	});

	$('#catalogSliderOne').bxSlider({
		controls: false,
		mode: 'fade',
		slideSelector: '.slider__item',
		pagerCustom: '#sliderNavOne'
	});
	$('#catalogSliderTwo').bxSlider({
		controls: false,
		mode: 'fade',
		slideSelector: '.slider__item',
		pagerCustom: '#sliderNavTwo'
	});

	// fixed menu
	var navFixed = $(".header__nav.not-fixed"),
		navHeight = $('.header__nav').height();

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
			if (scroll > navHeight){
				navFixed.addClass("hidden");
			};
			if (scroll > 120){
				navFixed.addClass("fixed");
				navFixed.removeClass("header__nav--index not-fixed hidden");
			};
		});
	};

	// google map open/closed full height
	var mapIndex = $('.map--index'),
		viewMap = $('.map__open').text(),
		mapIndexHeightDef = $('.map--index').height();

	mapIndex.find('#map-canvas').height(winH - $('.footer').height());
	mapIndex.find('.map__open').on('click', function(){
		if (!mapIndex.hasClass('open')) {
			mapIndex.height(winH - $('.footer').height()).addClass('open');
			$(this).text('Свернуть карту');
		} else {
			mapIndex.height(mapIndexHeightDef);
			mapIndex.removeClass('open');
			$(this).text(viewMap);
		};
	});

	// google map full screen
	$('.map--full').height(winH - ($('.header').height() + $('.footer').height()));

	// smooth scroll anchor
	$('.anchor').on('click', function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
		}
		return false;
	});

}); // end jquery