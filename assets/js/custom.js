// JavaScript Document
"use strict";
// Window Load
$(window).on('load', function(){
	headerHeight(); //Sticky Header
});

// Window Ready
$(function($) {
	
	$('.banner-img-slider').slick({
		//slidesToShow: 1,
	  	//slidesToScroll: 1,
		//autoplay: true,
		//autoplaySpeed: 2000,
		//autoplay: true,
		infinite: true,
		/*onAfterChange : function() {
			player.stopVideo();
		}*/
	});
	/*$('.banner-img-slider').on('afterChange', function(event, slick, currentSlide){
	  if (currentSlide == 0) {
		$('.banner-img-slider').slick('slickPause');
		myVideo.play();
	  }
	})
	document.getElementById('myVideo').addEventListener('ended',myHandler,false);
	function myHandler(e) {
		$('.banner-img-slider').slick('slickPlay'); 
	}*/
	
	$('.service-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  dots:true,
	  arrows:false,
	  responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow:3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 640,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint:480,
		  settings: {
			  nav:false,
			slidesToShow:1,
			slidesToScroll: 1,
			
		  }
		}]
	});
	$('.service-intro-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots:true,
		arrows:false
	});
	
	
	bannerImage();
	
	$('.label_check, .label_radio').click(function(){
		setupLabel();
	});
	setupLabel(); 
	
	
	// Counter JS
	if ($(".counter").length) {
		$('.counter').counterUp({
			delay: 10,
			time:1000
		});
	}
	if($('.form_date').length){
		$('.form_date').datetimepicker({
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
		});
	}
	if($('.form_time').length){
		$('.form_time').datetimepicker({
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 1,
			minView: 0,
			maxView: 1,
			forceParse: 0
		});
	}
	
	
	headerHeight(); //Sticky Header
	mobileMenu();
	subMenu();
	
	//date Counter
	if($("#countdown").length){
		$("#countdown").countdown({ // Counter timer
			date: "01 May 2017 12:00:00", // Enter new date here
			format: "on"
		},
		function() {
		});
	}
	// comming soon page height
	if ($(".comming-soon").length == 1)
	{
		$(".comming-soon").css("min-height", $(window).height() +"px");
		$(window).resize(function(){
			$(".comming-soon").css("min-height", $(window).height() +"px");
		});
	}
	
	// style chagnes start
	$(".style-box .box-icon").on("click", function(){
		var style_box = $(".style-box");
		if(style_box.hasClass("open"))
		{
			style_box.removeClass("open").animate({"left":"-200px"},700);
		}
		else
		{
			style_box.addClass("open").animate({"left":"0px"},700);
		}
	});
	
	$(".color-box ul li a").on("click",function(){
		//alert();
		var css_name = $(this).parent("li").attr("class");
		$("#switch_style").attr("href", "assets/css/theme/"+ css_name + ".css");
		
		if(typeof map != 'undefined')
		{
			map.setMapTypeId(css_name);
		}
	});
	
	
	// box layout js start
	/*$(".layout-style .box-layout").on("click",function(){
		window.dispatchEvent(new Event('resize'));
		$("#wapper").addClass("box-style");
	});
	$(".layout-style .full-layout").on("click",function(){
		window.dispatchEvent(new Event('resize'));
		$("#wapper").removeClass("box-style");
	});*/
	
	getServices(); 
	// form validate
	$.validate({
		'validateHiddenInputs': true,
		'scrollToTopOnError' : false
	}); 
	
	
	});

// Window Resize
$(window).on('resize', function(){
	headerHeight(); //Sticky Header
	
	if($(window).width() < 768 )
	{
		if($(".navigation").hasClass("open"))
		{
			
		}
		$(".navigation").css("left","-100%"); 
	}
	else
	{
		$("body").removeClass("bodyfixed");
		$(".navigation").css("left",0); 
	}
});

//Fixed nav bar on top
$(window).on('scroll', function(){
	var header = $("#header");
	
	if ($("#header").offset().top > 40) {
		header.addClass("sticky-header")
	} else {
		header.removeClass("sticky-header")
	}
	
});

// To show mobile menu
function mobileMenu(){
	$(".navbar-toggle").click(function(e) {
		$(".navigation").animate({"left":"0"},500);
		$(".navigation").addClass("open");
		$("body").addClass("bodyfixed");
	});
	$(".navigation .close-menu").click(function(e) {
		$(".navigation").delay(300).animate({"left": "-100%"},500);
		$("body").removeClass("bodyfixed");
		$(".navigation").removeClass("open");
	});
}
function getServices(){
	var sname= $(".search-wrapper .services li a");
	$(".search-wrapper .services li a").each(function(index, element) {
        $(this).click(function(e) {
            //$(this).text();
			$("#service-open").text($(this).text());
        });
    });
}
// To Show submenu
function subMenu() 
{
	$(".navbar-nav li .dropdown-menu").before('<span class="mobile-arrow">+</span>');
	$(".navbar-nav li .mobile-arrow").click(function(){
		if($(this).next(".dropdown-menu").is(":visible"))
		{
			$(this).text("+");
			$(this).next(".dropdown-menu").slideUp();
		}
		else
		{
			$(".navbar-nav li .mobile-arrow").text("+");
			$(".navbar-nav .dropdown-menu").slideUp();
			$(this).text("-");
			$(this).next(".dropdown-menu").slideDown();
		}
	});
	
	$("#service-open").click(function() {
		if($(".search-wrapper .services").is(":visible"))
		{
			$(this).removeClass("open");
			$(".search-wrapper .services").slideUp();
		}
		else
		{
			$(this).addClass("open");
			$(".search-wrapper .services").slideDown();
		}
    });
	
	
} 


// Set Sticky Header
function headerHeight(){
	var header_height = $("#header").outerHeight();
	var wrapper =  $("#wrapper");
	wrapper.css("padding-top","0px");
	
	if($("#banner").length == 0 ){
		wrapper.css("padding-top", header_height + "px");
	}
}


function bannerImage(){
	$(".banner-img-slider .banner-thumb").each(function() {
        var img_src = $(this).children("img").attr("src");
		$(this).css({"background-image":"url("+img_src+")"});
    });
} 

function setupLabel() {
	if ($('.label_check input').length) {
		$('.label_check').each(function(){ 
			$(this).removeClass('c_on');
		});
		$('.label_check input:checked').each(function(){ 
			$(this).parent('label').addClass('c_on');
		});                
	};
	if ($('.label_radio input').length) {
		$('.label_radio').each(function(){ 
			$(this).removeClass('r_on');
		});
		$('.label_radio input:checked').each(function(){ 
			$(this).parent('label').addClass('r_on');
		});
	};
};