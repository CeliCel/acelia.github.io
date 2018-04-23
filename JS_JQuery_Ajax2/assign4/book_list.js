/*
Acelia Castaneda
acasta25@my.smccd.edu
CIS 114 OL
booklist
Assignment 4
3/23/18
 */


$(document).ready(function() {
    $("#categories h2").click(
       	function() {
            $(this).toggleClass("minus");
            if ($(this).attr("class") !== "minus") {
                $(this).next().hide();
            }
            else {
                $(this).next().show();
            }

            $("#image").attr("src", "");   	
        }
    ); 

    $("#web_images a, #java_images a, #net_images a, #database_images a").each(function() {
       //old and new urls's like the image swap
        var imageURL = $(this).attr("href");

        //loads the images		
        var bookImage = new Image();
        bookImage.src = imageURL;

        			
        $(this).click(function(evt) {
            $("#image").attr("src", imageURL);

        
        evt.preventDefault();
        }); 
    }); 
}); 