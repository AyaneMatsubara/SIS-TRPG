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
		$('.menu__cover').css('visibility','visible');
	})
	$('#close, .menu__item, .menu__cover').click(function() {
		$('.menu').removeClass('menu__active');
		$('.menu__cover').css('visibility','hidden');
	})
	
	$(function() {
		$(".fa-twitter").click(function() {
			window.location.href = "http://twitter.com/?status="+encodeURIComponent(document.title+" "+location.href);
		})
	});
	
	$(function() {
		$(".left-logo footer").click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500);
    		return false;
  	});
	});
	
	var appear = true;
  var scroll_ = $('#scroll_');
  $(window).scroll(function () {
    if($(this).scrollTop() > 4500) {
      if (appear) {
        appear = false;
        scroll_.stop().animate({'left': '-40px'}, 300);
      }
    }else{
      if (appear == false) {
        appear = true;
        scroll_.stop().animate({'left': '40px'}, 300);
      }
    }
  });
	
	$('a[href^="#"]').not('a[href^="#modal"]').click(function() {
		var speed = 750; 
		var href= $(this).attr("href");
		var target = $(href == "#" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		$('.menu').removeClass('menu__active');
		$('.menu__cover').css('visibility','hidden');
		return false;
  });
});