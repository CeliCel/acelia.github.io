$(document).ready(function() {

$('button').click(function() {

$('h1').animate({
	'font-size': '+50px'}, 500);
$('h1').animate({
	'font-size': '30px'}, 500);
$('h1').css('color', '#476b6b');

$('img').css({
	'border-color': 'white', 
	'border-weight': '20px', 
	'border-style': 'solid'});
});
});