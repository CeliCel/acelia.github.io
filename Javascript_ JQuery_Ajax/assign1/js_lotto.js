/*
 Acelia Castaneda
 acasta25@my.smcdd.edu
 CIS 114 OL
 js_lotto.js
 Assignment 1
 1/31/18
 */
var numOfTickets;
do {
    numOfTickets = prompt("Enter number of lotto tickets (1-10)");
    numOfTickets = parseInt(numOfTickets);
    var lottoNum = new Array(5);

    function jsLotto(){
	    for (var i = 0; i < lottoNum.length; i++) {
	        var num;
	
	        do {
	            num = Math.floor(Math.random() * 47);
	        } while (lottoNum.indexOf(num) > -1);
	
	        lottoNum[i] = num;
	    }
	    lottoNum.sort(function(a,b){
			return a-b;
		});
	    megaNum = Math.floor(Math.random() * 47);
	    document.write(lottoNum + " |  "+ megaNum);
	    document.write("<br>");
    }
	document.write("<h1> Here are your JS SuperLotto Numbers </h1>");
    for(var n =0; n < numOfTickets; n++){
    	document.writeln("******************<br>");
    	jsLotto();
    		
    }
    
}
while (numOfTickets < 1 || numOfTickets > 10); //repeat prompt until valid.