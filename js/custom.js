$(function() {
	setTimeout(function() {
		$('body').css('overflow-y', 'scroll');
	}, 2000)

	var W_height = $(window).height();
	var W_width = $(window).width();
	var header_h = $('header').outerHeight();
	$(".banner").css('height', W_height);
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'swing');
		event.preventDefault();
	});
	/*===== lightgallery call=====*/
	$('.lightgallery').lightGallery({
		download: false,
		closable: true,
		speed: 1000
	});
	/*===== slick call=====*/
	$('.social_slider').slick({
		dots: false,
		arrow: true,
		infinite: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	// after scroll

	$(document).scroll(function(event) {
		var getScroll = $(window).scrollTop();
		if (getScroll > W_height) {
			$('header').addClass('after_scroll');
			// $('.dummy_header').css('height', header_h);
		} else {
			$('header').removeClass('after_scroll');
			// $('.dummy_header').css('height', 0);
		}
	});
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	/*Smooth Scrolling start js*/
	$(window).scroll(function() {
		var Scroll_posY = $(this).scrollTop();
		$('.page-scroll').each(function(event) {
			if (Scroll_posY >= $($(this).attr('href')).offset().top - 80) {
				$('.page-scroll').not(this).removeClass('active');
				$(this).addClass('active');
			}
		});
	});
});



$(window).load(function() {
	$('.loader').fadeOut(2000);

});