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
	
	$('#navbar').click(function() {
		$('.menu').addClass('menu__active');
	})
	$('#close').click(function() {
		$('.menu').removeClass('menu__active');
	})
	$('.menu__item').click(function() {
		$('.menu').removeClass('menu__active');
	})
	
	$(function() {
		$(".fa-twitter").click(function() {
			window.location.href = "http://twitter.com/?status="+encodeURIComponent(document.title+" "+location.href);
		})
	});
	
	$(function() {
		let leftlogo = $(".left-logo");
		leftlogo.click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500);
    		return false;
  	});
		let footer = $("footer");
		footer.click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500);
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