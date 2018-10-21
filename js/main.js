// JavaScript Document
$(function(){
	$(".main__ttl").textillate({
		in: {
			effect: "fadeInDown",
			delay: 100,
			shuffle: true,
		}
	});
	$(".main__txt").textillate({
		in: {
			effect: "flash",
			shuffle: true,
		}
	});
	
	$('.modal-a').modaal({
		background_scroll: 'true'
	});
});