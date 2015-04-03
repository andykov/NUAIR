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
	$('#catalogSliderThree').bxSlider({
		controls: false,
		mode: 'fade',
		slideSelector: '.slider__item',
		pagerCustom: '#sliderNavThree'
	});
	$('#catalogSliderFour').bxSlider({
		mode: 'fade',
		slideSelector: '.slider__item',
		pagerCustom: '#sliderNavFour'
	});

	// fixed menu
	var navFixed = $(".header__nav"),
		navFixedIndex = $('.header__nav--index'),
		navHeight = $('.header__nav').height();

	if ($(window).scrollTop()) {
		navFixed.addClass("fixed").removeClass("header__nav--index not-fixed");
	};

	if (navFixed.length) {
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll < 120) {
				navFixed.addClass("not-fixed");
				navFixed.removeClass("fixed hidden");
				navFixedIndex.addClass("header__nav--index");
			};
			if (scroll > navHeight){
				navFixed.addClass("hidden");
			};
			if (scroll > 120){
				navFixed.addClass("fixed");
				navFixed.removeClass("not-fixed hidden");
				navFixedIndex.removeClass("header__nav--index");
			};
		});
	};
	if (navFixed.length) {
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll < 120) {
				console.log('1');
				// navFixed.addClass("not-fixed");
				// navFixed.removeClass("fixed hidden");
				// navFixedIndex.addClass("header__nav--index");
			};
		});
	};
	// google map open/closed full height
	var mapIndex = $('.map--index'),
		viewMap = $('.map__open').text(),
		mapIndexHeightDef = $('.map--index').height();

	mapIndex.find('#map-canvas').height(winH - $('.footer').height());
	mapIndex.find('.map__open').on('click', function(e){
		e.preventDefault();
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
		var $this = $(this),
			scroll_el = $this.attr('href');
		if ($(scroll_el).length != 0) {
			// $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
			var anchorCenter = (winH - $(scroll_el).height()) / 2;
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - anchorCenter }, 800);
		}
		return false;
	});
}); // end jquery