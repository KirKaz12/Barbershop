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
	nav = document.querySelector(".top-nav");

window.addEventListener("load", function(){
	console.log("ready");
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
	if(document.body.clientWidth >= 751) {
		console.log("sm");
		$(".advantages__list").slick("unslick");
	} 
	$(window).resize(function() {
		if(document.body.clientWidth >= 751) {
			console.log("resized");
			$(".advantages__list").slick("unslick");
			nav.classList.remove("top-nav_closed");
		} else {
			$(".advantages__list").slick(slickProps);
			nav.classList.add("top-nav_closed");
		}
	});
});