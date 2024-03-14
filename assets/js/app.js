$(function() {

	var pageW = $(window).innerWidth(),
		header = $("#header"),
		headH = document.getElementById("header").clientHeight;

	checkWidth(pageW);

	window.addEventListener('resize',function(){
		checkWidth(pageW);
	});

	function checkWidth(pageW) {
		if (window.innerWidth <= 768 ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	$('.models__inner').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 2,
				}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
			}
		}
	]
	});

	/* Smooth Scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data("scroll"),
			blockOffset = $(blockId).offset().top;   /* получение верхней координаты - blockOffset искомого блока */

		console.log('b', blockOffset);
		console.log('headH', headH);

		$("html, body").animate({		/* плавный переход к блоку */
			scrollTop: blockOffset - headH
		}, 500)							/* продолжительность анимации в милисекундах */

		$("#nav").removeClass("active");
		$("#nav_toggle").removeClass("active");
	});

	/* Menu Nav Toggle*/
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();			/* убираем стандартное поведение кнопки*/

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


});