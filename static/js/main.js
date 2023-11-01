$(document).ready(function(){

	/*
	var counter = 0;
	$("body").keydown(function(event){
		if(event.which === 37 || event.which === 65){
			counter = (counter-1)%5;
			if (counter < 0) {counter += 5;}
		}
		if(event.which === 39 || event.which === 68){
			counter = (counter+1)%5;
		}
		console.log(counter)
	});
	*/
	
	$(".owl-carousel").owlCarousel({
		nav:true,
		loop:true,
		items:1,
		navText: ['❮',
              '❯'],
		
	});
})