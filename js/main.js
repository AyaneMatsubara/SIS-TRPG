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
	
	$('.modal-a').modaal();
	
	$(function() {
		let leftlogo = $(".left-logo");
		leftlogo.click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    		return false;
  	});
	});
});