$(".navbar a").on("click", function(e) {
	if(this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 300
		)
	}
})

// Add scroll
	// add click listener to buttons, so that scroll, and up button select the up arrow
