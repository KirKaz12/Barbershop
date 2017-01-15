window.addEventListener("load", function(){
	console.log("ready");
	 var closeBtn = document.querySelector(".top-nav__toggle"),
	 	 nav = document.querySelector(".top-nav")
	 	 /*slider = document.querySelector(".advantages__list"),
	 	 slide1 = document.querySelector(".advantages__item:first-child")*/;
	nav.classList.add("top-nav_closed");
	nav.classList.remove("top-nav_no-js");
	/*slider.classList.add("advantages__slider");
	slide1.classList.add("advantages__item_is-active");*/
	function clickToggle(elem, class1) {
		elem.addEventListener("click", function(){
			this.parentElement.classList.toggle(class1);
		});
	}
	clickToggle(closeBtn, "top-nav_opened");
	clickToggle(closeBtn, "top-nav_closed");
});
$(document).ready(function(){
	$(".advantages__list").slick({
		arrows: false,
		dots: true,
		infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1
	});
	if(document.body.clientWidth > 768) {
		console.log("sm");
		$(".advantages__list").slick("unslick");
	} 
	$(window).resize(function() {
		if(document.body.clientWidth > 768) {
			console.log("resized");
			$(".advantages__list").slick("unslick");
		} else {
			$(".advantages__list").slick({
				arrows: false,
				dots: true,
				infinite: true,
			    slidesToShow: 1,
			    slidesToScroll: 1
			});
		}
	});
});