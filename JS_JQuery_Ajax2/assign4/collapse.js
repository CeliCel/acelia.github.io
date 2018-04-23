/*
Acelia Castaneda
acasta25@my.smccd.edu
CIS 114 OL
collapse
Assignment 4
 3/23/18

 */

$(document).ready(function(){
	$("#jdom a").click(function(){
		$(this).toggleClass("showMore");
		if($(this).attr("class") != "showMore"){
			$(this).text("Show more");
			$(this).prev().hide();
		}else{
			$(this).text("Show Less");
			$(this).prev().show();
		}
	});
});
