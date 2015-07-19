
$(document).ready(function(){

	/*
	$('a').hover( 
		function() {$(this).css("text-shadow", "0px 0px 5px #f9e42e");},
		function() {$(this).css("text-shadow","none");}
	);
	*/


	$( ".readmore" ).click(function(e) {
	    e.preventDefault();
       	$('#show-this-on-click').slideDown();
        $('.readless').show();
        $('.readmore').hide();
    });



	$( ".readless" ).click(function(e) {
	    e.preventDefault();
	    $('#show-this-on-click').slideUp(function() {
	    	$('.readless').hide();
			$('.readmore').show();});

    });



		$( ".learnmore" ).click(function(e) {
		    e.preventDefault();
       		$(this).next('span').slideDown();
            $(this).hide();
    });





});








