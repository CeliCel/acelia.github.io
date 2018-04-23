/*
Acelia Castaneda
acasta25@my.smccd.edu
CIS 114 OL
email list
assign3
2/23/18
*/


"use strict";

var $ = function(id) {return document.getElementById(id);};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";

    if (emailAddress1 == "") {
    	errorMessage = "First email address entry required";
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    }

    if (errorMessage == "") {
        $("email_form").submit(); 
    } else {
    	alert(errorMessage);
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
