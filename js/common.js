$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	/*---------------     navbar     ---------------*/
	$('.navbar').click(function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.top-menu').slideDown(300);
		}
		else{
			$(this).removeClass('active');
			$('.top-menu').slideUp(300);
		}
	});

	/*---------------     top-menu     ---------------*/
	$('.top-menu nav>ul>li>a').click(function() {
		var $parent = $(this).parent('li');
		if ($parent.find('ul').length > 0) {
			if ($(window).width() < 1024) {
				if (!$parent.hasClass('active')) {
					$('.top-menu nav>ul>li').removeClass('active');
					$('.top-menu nav ul ul').slideUp(200);
					$parent.addClass('active');
					$parent.find('ul').slideDown(200);
				} 
				else {
					$parent.removeClass('active');
					$parent.find('ul').slideUp(200);
				}
			}
			return false;
		}
	});
	$(window).resize(function() {
		if ($(window).width() < 1024) {
			navHeight();
		} 
		else {
			$('.navbar').removeClass('active');
			$('.top-menu nav>ul>li').removeClass('active');
			$('.top-menu').css('display','');
			$('.top-menu nav ul ul').css('display','');
		}
	});

	function navHeight(){
		if ($(window).width() < 1024) {
			$('.top-menu nav').css({
				'max-height': $(window).height() - $('header').innerHeight() - 10
			});
		}
	}
	navHeight();

	
	/*---------------     slider     ---------------*/
	$('.content img.fll').each(function() {
		if ($(this).attr('title') !=  undefined) {
			$(this).after('<span class="img-title">' + $(this).attr('title') + '</span>');
		}
	});
	function imgTitle(){
		$('img').load(function() {
			$('.img-title').each(function() {
				$(this).css({
					'width': $(this).prev('img').width(),
					'margin-top': $(this).prev('img').height()
				});
			});
		});
	}
	$(window).resize(function() {
		imgTitle();
	});
	imgTitle();
	

	$('.scroll-table').each(function(){
		$(this).jScrollPane(
			{
				showArrows: $(this).is('.arrow')
			}
		);
		var api = $(this).data('jsp');
		var throttleTimeout;
		$(window).bind(
			'resize',
			function()
			{
				if (!throttleTimeout) {
					throttleTimeout = setTimeout(
						function()
						{
							api.reinitialise();
							throttleTimeout = null;
						},
						50
					);
				}
			}
		);
	});

	/*---------------     slider     ---------------*/
	$('.head-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.slider-prev',
		nextArrow: '.slider-next'
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true,
		adaptiveHeight: true,
		asNavFor: '.slider-nav',
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: false,
				}
			}
		]
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});

	//------------------    menu scroll    -------------------------------

	/*$('.top_menu li a.subNavBtn').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-30},800);
		return false;
	});

    function setNavCurrentSection(){
		var s_top=$(document).scrollTop();
		var w_hgh=window.innerHeight;
		var b_hgh=$('body').outerHeight();
		var cur_sect=$('.top_menu li a.subNavBtn').eq(0);
		$('.top_menu li a.subNavBtn').each(function(){if((w_hgh/3+s_top)>$($(this).attr('href')).offset().top){cur_sect=$(this);}});
		if((s_top+w_hgh+500)>b_hgh){cur_sect=$('.top_menu li a.subNavBtn').last();}
		if(!cur_sect.hasClass('active')){$('.top_menu li a.subNavBtn.active').removeClass('active');cur_sect.addClass('active');}
		if(s_top>$('header').innerHeight()) {$('.top_menu').addClass('fixed');$('body').css('padding-top', '40px');}
		else{$('.top_menu').removeClass('fixed');$('body').css('padding-top', 0);}
	}

	setNavCurrentSection();
	$(window).on('load',function(){
		setNavCurrentSection();
	});
	$(window).resize(function(){
		setNavCurrentSection();
	});
	$(document).on('scroll',function(){
		setNavCurrentSection();
	});*/


});