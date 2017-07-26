console.log("funciona 2");
$( document ).ready(function(){	
  	$('.carousel.carousel-slider').carousel({fullWidth: true});
  	/*nav*/ 
  	$(window).scroll(function(){
  		var scroll = $(window).scrollTop();
	  	if (scroll > 300) {
	    	$(".navbar-fixed").css("background" , "white");
	    	$(".navbar-fixed").css("box-shadow" , "1px 5px 10px #888888");
	    	$(".logo").css("color" , "#494949");
	    	$(".menu").css("color", "#494949");
	  	}

	  	else{
			$(".navbar-fixed").css("background" , "transparent");
			$(".navbar-fixed").css("box-shadow" , "none");
			$(".logo").css("color" , "white");
	    	$(".menu").css("color", "white");
	  	}
  	});  	
});