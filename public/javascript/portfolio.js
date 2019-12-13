// $(".navbar a").on("click", function(e) {
// 	if(this.hash !== '') {
// 		e.preventDefault();

// 		const hash = this.hash;

// 		$('html, body').animate({
// 			scrollTop: $(hash).offset().top
// 		}, 300
// 		)
// 	}
// })

var pages = ["home", "brief", "stacks", "projects"];
var page = 0

// Write a function for this below

$("#down-arrow").on("click", function(e){
	e.preventDefault();
	nextPage()
	}
)

$(document).keydown(function(e) {
	if(e.which == 38 || e.which == 8) {
  		e.preventDefault();
    	previousPage()
    } else if (e.which == 40 || e.which == 13 || e.which == 32 || e.which == 9 ) {
	  	e.preventDefault();
	    nextPage()
    }
});


$("#up-arrow", ).on("click", function(e){
		e.preventDefault();
		previousPage()
	}
)

$(document).ready(function(){
    $(this).scrollTop(0);
})

disableScroll()





	
// https://codepen.io/lehollandaisvolant/pen/ryrrGx

function nextPage(){
	if(page < pages.length - 1){	
		page++
		const hash = '#' + pages[page]

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 700
		)

		if(page === 3) {
 			$( ".arrows.down" ).addClass( "invisible" )
 			// $( ".arrows.down" ).fadeIn()
 			enableScroll()
		}

		if(page === 1) {
		  $( ".arrows.up" ).removeClass( "invisible" )
		  // $( ".arrows.up" ).fadeOut()
		}
	}
}

function previousPage(){
	if(page > 0) {	
		page--
		const hash = '#' + pages[page]

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 700
		)

		if(page === 0) {
		  $( ".arrows.up" ).addClass( "invisible" )
		  // $( ".arrows.up" ).fadeIn()

		}

		if(page === 2) {
		  $( ".arrows.down" ).removeClass( "invisible" )
		  // $( ".arrows.down" ).fadeOut()
		  disableScroll()
		}
	}
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault() {
  e = window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  // window.onwheel = preventDefault; // modern standard
  // window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


// Add scroll
	// add click listener to buttons, so that scroll, and up button select the up arrow


// document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
// if(document.addEventListener){ /* Chrome, Safari, Firefox */
//     document.addEventListener('DOMMouseScroll', stopWheel, false);
// }
 
// function stopWheel(e){
//     if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
//     if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
//     e.returnValue = false; /* IE7, IE8 */
// }