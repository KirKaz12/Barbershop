window.addEventListener("load", function(){
	console.log("ready");
	 var closeBtn = document.querySelector(".top-nav__toggle"),
	 	 nav = document.querySelector(".top-nav");

	nav.classList.remove("top-nav_no-js");
	nav.classList.remove("top-nav_opened");
	function clickToggle(elem, class1) {
		elem.addEventListener("click", function(){
			this.parentElement.classList.toggle(class1);
		});
	}
	clickToggle(closeBtn, "top-nav_opened");
	clickToggle(closeBtn, "top-nav_closed");
	if(document.body.clientWidth > 768) {
		console.log("op");
		nav.classList.remove("top-nav_opened");
		nav.classList.add("top-nav_closed");
	}
	window.addEventListener('resize', function(){
		if(document.body.clientWidth > 768) {
			console.log("op");
			nav.classList.remove("top-nav_opened");
			nav.classList.add("top-nav_closed");
	}
	});
})