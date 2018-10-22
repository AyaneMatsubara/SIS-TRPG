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
	
	/*$('.form__submit').click(function() {
		$(".form").submit();
		return false; 
	}*/
	
	$(function() {
		let leftlogo = $(".left-logo");
		leftlogo.click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    		return false;
  	});
	});
	
	var appear = true;
  var scroll_ = $('#scroll_');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 4500) {
      if (appear) {
        appear = false;
        scroll_.stop().animate({
          'left': '-40px'
        }, 300);
      }
    } else {
      if (appear == false) {
        appear = true;
        scroll_.stop().animate({
         	'left': '40px'
        }, 300);
      }
    }
  });
});