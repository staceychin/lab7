'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(function(){
		// console.log("HI");
		gtag('event', 'click', {
  		'event_category': 'like'
	});
	});
}


