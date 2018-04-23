/*Acelia Castaneda
	acasta25@my.smccd.edu
	CIS 114 OL 
	sales_tax.js
	Assignment 2
	2/7/18*/
var $ = function (id) {
    return document.getElementById(id); 
};

/*i made the sales_tax variable global and then my total kept ouputting as 50040.0 instead of 540.0
 so i then changed, my parseFloat to parseInt and still just 50040. I think that would mean both values are being regsistered as strings and total is 
 simply concatening sales_tax and subtotal but i'm not sure how if i'm using parseFloat*/
var calcSalesTax = function(subtotal, tax_rate){
	sales_tax = ((subtotal * tax_rate)/100);
	sales_tax = parseFloat(sales_tax);
	sales_tax = sales_tax.toFixed(1);
	return sales_tax;
	
};

var totalCalc = function(subtotal, sales_tax){
	total = subtotal + sales_tax;
	total = parseFloat(total);
	total = total.toFixed(1);
	return total;
	
};

var processEntries = function(){
	var subtotal = parseFloat($("subtotal").value);
	var tax_rate = parseFloat($("tax_rate").value);
	if(isNaN(subtotal) || isNaN(tax_rate)){
		alert("Both entries must numbers");
	}else if (subtotal <= 0 || subtotal >= 10000){
		alert("subtotal must be greater than 0 and less than 10,000");
	}else if (tax_rate <= 0 || tax_rate >= 12){
		alert("tax rate must be greater than 0 and less than 12");
	}else{
		$("sales_tax").value = calcSalesTax(subtotal,tax_rate);
		$("total").value = totalCalc(subtotal, sales_tax);
	}
};

var clearEntries = function() {
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("sales_tax").value = "";
	$("total").value = "";
	$("subtotal").focus();
};


window.onload = function(){
	$("subtotal").focus();
	$("calculate").onclick = processEntries;
	$("calculate").onclick = processEntries;
	$("clear").onclick = clearEntries;
		
};
