jQuery(function($) {		
		$('.gallery_demo_unstyled').addClass('gallery_demo'); // adds new class name to maintain degradability		
		$('ul.gallery_demo').galleria({
			history   : false, // activates the history object for bookmarking, back-button etc.
			clickNext : true, // helper for making the image clickable
			insert    : '#main_image', // the containing selector for our main image
			onImage   : function(image,caption,thumb) { // let's add some image effects for demonstration purposes
				
				// fade in the image & caption
				if(! ($.browser.mozilla && navigator.appVersion.indexOf("Win")!=-1) ) { // FF/Win fades large images terribly slow
					image.css('display','none').fadeIn(1000);
				}
				caption.css('display','none').fadeIn(1000);
				
				// fetch the thumbnail container
				var _li = thumb.parents('li');
				
				// fade out inactive thumbnail
				_li.siblings().children('img.selected').fadeTo(500,0.3);
				
				// fade in active thumbnail
				thumb.fadeTo('fast',1).addClass('selected');
				var mytitle=thumb.attr('title');
				
				
				var myalt=thumb.attr('alt');
				
				var mytitle=(mytitle.substring(11));
				//var myalt=(myalt.substring(11));
				//document.getElementById("my_title").innerHTML=myalt;


				
				// add a title for the clickable image
				 image.attr('title', mytitle);
				 image.attr('alt', myalt); 
			},
			onThumb : function(thumb) { // thumbnail effects goes here
				
				// fetch the thumbnail container
				var _li = thumb.parents('li');
				
				// if thumbnail is active, fade all the way.
				var _fadeTo = _li.is('.active') ? '1' : '0.3';
				
				// fade in the thumbnail when finnished loading
				thumb.css({display:'none',opacity:_fadeTo}).fadeIn(1500);
				
				// hover effects
				thumb.hover(
					function() { thumb.fadeTo('fast',1); },
					function() { _li.not('.active').children('img').fadeTo('fast',0.3); } // don't fade out if the parent is active
				)
			}
		});
});

/*
$(document).ready(function(){	
	$(".galleria_next").click(function(){
		//alert("next");
		$.galleria.next(); 	
		return false;
	})
});  

$(document).ready(function(){	
	//$("#slider").easySlider();
	if($("#slider1")){
		$("#slider1").easySlider({
			prevId: 'prevBtn1',
			nextId: 'nextBtn1'
		});	
	}
	
	
});  
*/
	
	
	
	

