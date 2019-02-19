var tabs = document.querySelectorAll('.tab')
		var con = document.querySelectorAll('.c')
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', function(e) {
				for (var k = 0; k < tabs.length; k++) {
					if (this == tabs[k]) {
						con[k].classList.remove('none');
					} else {
						con[k].classList.add('none');
					}
				}
			})
		}
		var con2 = document.querySelectorAll('.m')
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', function(e) {
				for (var k = 0; k < tabs.length; k++) {
					if (this == tabs[k]) {
						con2[k].classList.remove('none');
					} else {
						con2[k].classList.add('none');
					}
				}
			})
        }
        
$('.nav-item a').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 100
    }, 1000);
    e.preventDefault();
  });

  $('.nav-link2').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 100
    }, 1000);
    e.preventDefault();
	});
  var limit     = $(window).height()/2,
    $backToTop = $('.back-to-top');
	$(window).scroll(function () {
	if ( $(this).scrollTop() > limit ) {
		$backToTop.fadeIn();
	} else {
		$backToTop.fadeOut();
	}
});
