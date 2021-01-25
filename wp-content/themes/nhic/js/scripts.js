$(document).ready(function() {
    

	
	//$('.fbutton').fancybox();
	
	var aoi = $('.area-of-interest-field').text();
	//alert(aoi);
	$('.aoi-field').val(aoi); 
	
	//var cSlide = $("#banner-nav").index('a.activeSlide');
	//$('#logo').html(cSlide);
	var transition = 'scrollHorz';
	
	
	
	
	
	$('#banner').cycle({ 
		fx:      transition,  
		speed:    200, 
		timeout:  7000, 
		pager:  '#banner-nav', 
		after: function(){
			//$('#banner-nav').hasClass('activeSlide')
			$('#banner-nav a').html('<img src="wp-content/themes/nhic/images/circle.gif" alt="" />'); 
			$('#banner-nav a.activeSlide').html('<img src="wp-content/themes/nhic/images/circle-active.gif" alt="" />'); 
		}
		
	});
	
	//$('#banner-nav a').html('<span></span>');
	
	$('#banner-nav a').html('<img src="wp-content/themes/nhic/images/circle.gif" alt="" />');
	$('#banner-nav a.activeSlide').html('<img src="wp-content/themes/nhic/images/circle-active.gif" alt="" />'); 

    $('#s').click(function() {
		var name = $("#s").val()
		if(name == "Search") { $("#s").val(''); }
	});
	
	$('#s').mouseover(function() {
		var name = $("#s").val()
		if(name == "") { $("#s").val('Search'); }
	});
	
	/* name */
	
	$('#name').click(function() {
		var name = $("#name").val()
		if(name == "Name") { $("#name").val(''); }
	});
	
	$('#name').mouseover(function() {
		var name = $("#name").val()
		if(name == "") { $("#name").val('Name'); }
	});
	
	/* cp-phone */
	
	$('#cp-phone').click(function() {
		var name = $("#cp-phone").val()
		if(name == "Phone") { $("#cp-phone").val(''); }
	});
	
	$('#cp-phone').mouseover(function() {
		var name = $("#cp-phone").val()
		if(name == "") { $("#cp-phone").val('Phone'); }
	});

		/* email */
	
	$('#email').click(function() {
		var name = $("#email").val()
		if(name == "E-mail") { $("#email").val(''); }
	});
	
	$('#email').mouseover(function() {
		var name = $("#email").val()
		if(name == "") { $("#email").val('E-mail'); }
	});
	
	/* message */
	
	$('#message').click(function() {
		var name = $("#message").val()
		if(name == "Further information") { $("#message").val(''); }
	});
	
	$('#message').mouseover(function() {
		var name = $("#message").val()
		if(name == "") { $("#message").val('Further information'); }
	});
	
	
	var aoi = $('div#aoi').html();
	//alert(aoi);
	$('input#areaofinterest').val(aoi);




});