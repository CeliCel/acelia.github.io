/*
Acelia Castaneda
acasta25@my.smccd.edu
CIS 114 OL
imageSwap
Assignment 4
3/23/18
 */


$(document).ready(function() {
	//loads the images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	    
	$("#image_list a").click(function(evt) {
		
		//this needs to refer to image list not the #image
		var imageURL = $(this).attr("href");
		$("#image").fadeOut(1000, function(){
			$("#image").attr("src", imageURL).fadeIn(1000);
		});	
		
		var caption = $(this).attr("title");
		$("#caption").fadeOut(1000, function(){
			$("#caption").text(caption).fadeIn(1000);
		});	
		
			
		// cancel the default action of the link
	    evt.preventDefault();
	}); 
	
	
	$("li:first-child a").focus();
}); 