$(document).ready(function() {


	$(".popub").magnificPopup({type:"image"});
	$(".popub_c").magnificPopup();


		$.stellar ({
		responsive: true,
		horizontalOffset: 60
	});

	$(".owl-carousel").owlCarousel({
		loop : true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
		});

	function wResize () {
		$("header").css("min-height", $(window).height());
		 };
	wResize();
	$(window).resize(function() {
		wResize()
	});


	$(".fancybox").fancybox();

	// Для переключения между вкладками скидки owl carousel
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	/*$("#hidden_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#hidden_form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});*/

	
	//E-mail Ajax Send
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// Документ для работы анимации с animatet.css

$(window).load(function() {

	$(".top_header h2").animated("fadeinDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".s_rewview h2").animated("fadeInUp", "fadeOut");
	$(".profi_item").animated("fadeInUp", "fadeOut");
	$(".s_profi form").animated("fadeInUp", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$(".footer").animated("fadeInUp", "fadeOut");
	$(".s_contacts h2").animated("fadeInUp", "fadeOut");
	$("footer h2").animated("fadeInUp", "fadeOut");
	


})