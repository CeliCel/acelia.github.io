"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var income;
var taxOwed;
var calculateTax = function(income){
	/*if (income > 0 && income < 9275){
		//incomeTax = taxableIncome - 0;
		//percentIT = incomeTax * (10/100);
		taxOwed = (income - 0) * (10/100) + 0;
		taxOwed = parseFloat(taxOwed);
		taxOwed = taxOwed.toFixed(2); //the tax should be rounded two decimal places
		return taxOwed;
	}*/
	
	if (income < 9275){
		taxOwed = ((income - 0 )* .10) + 0;
	}else if(income >= 9275){
		taxOwed = ((income - 9275) * .15) + 927.50;
	}else if(income >= 37650){
		taxOwed = ((income - 37650) * .25) + 5183.75;
	}else if(income >= 91150){
		taxOwed = ((income - 91150) * .28) + 18558.75;
	}else if(income >= 413350){
		taxOwed = ((income - 413350) * .33) + 46278.75;
	}else if(income >= 415050){
		taxOwed = ((income - 415050) * .35) + 119934.75;
	}else{
		taxOwed = ((income - 415050) * .40) + 120529.75;
	} 
	return taxOwed;

};

var processEntry = function(){
	income = parseInt($("income").value); //users entry should be converted to an integer
	if(isNaN(income)){
		alert("Entry must be a number");
	}else if (income <= 0){
		alert("income must be greater than 0");
	}else{
		$("taxOwed").value = calculateTax(income);
	}
};	

window.onload = function () {
    $("calculate").onclick = processEntry;
    // $("calculate").click(function() {
		// income = parseInt($("income").value); //users entry should be converted to an integer
		// // if(isNaN(income)){
			// // alert("Entry must be a number");
		// // }else if (income <= 0){
			// // alert("income must be greater than 0");
		// // }else{
			// // $("taxOwed").value = calculateTax(income);
		// // }
		// $("taxOwed").value = calculateTax(income);
	// });
    $("income").focus();
};


