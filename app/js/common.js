var closeBtn = document.querySelector(".top-nav__toggle"),
	slickProps  = {
		arrows: false,
		dots: true,
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1
	},
	slickFeed  = {
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
	    slidesToScroll: 1,
	    prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
	    nextArrow: "<button type=\"button\" class=\"slick-next\"></button>",

	    responsive: [
	    	{
	    		breakpoint: 768,
	    		settings: {
	    			arrows: false
	    		}
	    	}
	    ]
	},
	nav = document.querySelector(".top-nav"),
	formClose = $(".login-form__close-btn"),
	userLogin = $(".top-nav__user-login"),
	loginForm = $(".login-form__total-wrapper");

window.addEventListener("load", function(){
	nav.classList.add("top-nav_closed");
	if(document.body.clientWidth >= 751) nav.classList.remove("top-nav_closed")
	nav.classList.remove("top-nav_no-js");
	function clickToggle(elem, class1) {
		elem.addEventListener("click", function(){
			this.parentElement.classList.toggle(class1);
		});
	}
	clickToggle(closeBtn, "top-nav_opened");
	clickToggle(closeBtn, "top-nav_closed");
});
$(document).ready(function(){

	$(".advantages__list").slick(slickProps);
	$(".feedback__list").slick(slickFeed);
	
	// Delete slider on tablet and desktop
	if(document.body.clientWidth >= 751) {
		$(".advantages__list").slick("unslick");
	} 
	
	// Open form on click Login button
	userLogin.on("click", function() {
		if(document.body.clientWidth < 751) {
			nav.classList.remove("top-nav_opened");
			nav.classList.add("top-nav_closed");
		}
		loginForm.show("slow");
	});

	// Close form on click Close button
	formClose.on("click", function() {
		loginForm.hide("slow");
	});

	// Preventing submit form on click Enter button
	$(".login-form__submit-btn").on("submit click", function(e) {
		e.preventDefault();
	});

	// Making navigation fixed on scroll
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			nav.classList.add("top-nav_fixed");
		} else {
			nav.classList.remove("top-nav_fixed");
		}
	});

	// Setting active state to link on click
	$(".top-nav__link").on("click", function() {
		nav.classList.remove("top-nav_opened");
		if(document.body.clientWidth < 751) nav.classList.add("top-nav_closed");
		$(".top-nav__item").each(function(){
			this.classList.remove("top-nav__item_active");
		});
		$(".top-nav__link").each(function(){
			this.classList.remove("top-nav__link_active");
		});
		this.classList.add("top-nav__link_active");
		$(this).parent(".top-nav__item")[0].classList.add("top-nav__item_active");
	});
	var aa = $(".top-nav__link_active")[0];
	// Preventing click on active-state link
	$(aa).on("click", function(e) {
		console.log("clicked");
		e.preventDefault();
	});
	console.log();
	// Delete navigation modificators on tablet & desktop
	$(window).resize(function() {
		if(document.body.clientWidth >= 751) {
			$(".advantages__list").slick("unslick");
			nav.classList.remove("top-nav_closed");
			nav.classList.remove("top-nav_opened");
		} else { // add it on mobile
			$(".advantages__list").slick(slickProps);
			nav.classList.add("top-nav_closed");
		}
	});
	// Nice scroll
	/*$(".top-nav").on("click", $( "a.top-nav__link[href^='#']" ), function (e) {
		e.preventDefault();
		var id  = $(this).attr('href');
		console.log($( "a.top-nav__link[href^='#']" ));
			//top = $(id).offset().top;

		$(window).animate({scrollTop: top}, 1500);
	});*/
});