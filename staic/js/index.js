
/*document.addEventListener('touchmove',function(event) {
	event.preventDefault();
});*/

/*var startPosition, endPosition, moveLength;  
$(document).on('touchstart', function(e){
	e.preventDefault();  
	var touch = e.touches[0];
	startPosition = {  
		x: touch.pageX
	}
}).on('touchmove', function(e){
	e.preventDefault();
	var touch = e.touches[0];
	endPosition = {  
		x: touch.pageX
	};  
	moveLength = endPosition.x - startPosition.x;
});*/

/*$(document).swipeLeft(function(){
	$('#search').val('左');
});
$(document).swipeRight(function(){
	$('#search').val('右');
});*/


$('#search_btn').on('click', function(){
	alert('搜索');
});

$('.menus').click(function(){
	$('.user_manage').animate({right: '0'});
});

$('.close a').click(function(){
	$(this).parents('.user_manage').animate({right: '-5.76rem'});
});

var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	// paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 30
});

