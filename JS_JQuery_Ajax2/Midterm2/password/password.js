/*
 Acelia Castaneda
acasta25@my.smccd.edu
CIS 114 OL 
password
Midterm2
4/19/18
 */
"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };
    
    $("#generate").click(function() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        var isValid = true;
        var r="";
    	var num = $("#num").val().trim();
        //HELP
        if(num < 6 || num > 25){
        	$("#p").text("Please enter a valid number 6 - 25");
        	isValid = false;
        	$("#num").val("");
        	$("#num").focus();
        }
       
        if(isValid == true){
        	for(var i = 1; i <= num; i ++){
        		r += chars.charAt(getRandomNumber(chars.length));
        	}
        	$("#password").val(r);	
        }
        //$("#password").val( "" ); // clear previous entry
        
        
    }); // end click()
    
    $("#clear").click(function() {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()