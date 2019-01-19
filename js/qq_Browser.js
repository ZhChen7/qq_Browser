$(function() {
	$.stellar({
		horizontalScrolling: false,
		responsive: true
	});

	$('.nav_left>ul>li').eq(0).addClass('on');
	$('.nav_left>ul>li').mouseenter(function() {
		$(this).addClass('on').siblings().removeClass('on');
	})
	
//	$('#Firstscreen>.main>.nav').hide();
	  $('.nav_show').hide();
      $(window).scroll(function(){
 	        if($(this).scrollTop()>=300){
	        	$('.nav_show').show();
 	        }else{
	        	$('.nav_show').hide();
 	        	
 	        }
   	        
// 	        console.log($(this).scrollTop());
   })
   
})