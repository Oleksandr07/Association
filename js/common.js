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
		$('.top-menu').slideToggle(200);
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
			$('.top-menu').slideUp(200);
			$('.top-menu nav>ul>li').removeClass('active');
			$('.top-menu nav ul ul').slideUp(200);
		} 
		else {
			$('.top-menu nav>ul>li').removeClass('active');
			$('.top-menu').css('display','');
			$('.top-menu nav ul ul').css('display','');
		}
	});

	
	/*---------------     slider     ---------------*/
	$('.content img.fll').each(function() {
		$(this).after('<span class="img-title">' + $(this).attr('title') + '</span>');
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
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
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