$('body').onscroll = function() {myFunction()};
var scrolled;
	function myFunction() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  scrolled = (winScroll / height) * 100;
	  
	  document.getElementById("filler").style.height = scrolled + "%";
	}
	
$(document).ready(function(){
	$(".sidenavi ul li a").on("click", function(){
		//var scroll = $(window).scrollTop();
		
		
			$("#c1").css("background", "white");
		
	})
})$(document).ready(function(){
	$(".sidenavi ul li a #a2").on("click", function(){
		//var scroll = $(window).scrollTop();
		
		
			$("#c2").css("background": "white","width": "36px","height":"36px");
		
	})
})$(document).ready(function(){
	$(".sidenavi ul li a #a3").on("click", function(){
		//var scroll = $(window).scrollTop();
		
		
			$("#c3").css("background": "white","width": "36px","height":"36px");
		
	})
})$(document).ready(function(){
	$(".sidenavi ul li a #a4").on("click", function(){
		//var scroll = $(window).scrollTop();
		
		
			$("#c4").css("background": "white","width": "36px","height":"36px");
		
	})
})$(document).ready(function(){
	$(".sidenavi ul li a #a5").on("click", function(){
		//var scroll = $(window).scrollTop();
		
		
			$("#c5").css("background": "white","width": "36px","height":"36px");
		
	})
})
		
		
// 		if(scrolled>12){
// 			$("#c2").css("background", "white");
// 		}
// 		else{
// 			$("#c2").css("background", "transparent");
// 		}
		
// 		if(scrolled>15){
// 			$("#c3").css("background", "white");
// 		}
// 		else{
// 			$("#c3").css("background", "transparent");
// 		}
		
// 		if(scrolled>60){
// 			$("#c4").css("background", "white");
// 		}
// 		else{
// 			$("#c4").css("background", "transparent");
// 		}
		
// 		if(scrolled>75){
// 			$("#c5").css("background", "white");
// 		}
// 		else{
// 			$("#c5").css("background", "transparent");
// 		}
// 	})
// })

// $('.sidenavi a').on('click',function(e){
// 	if(this.hast !== ''){
// 		e.preventDefault();
// 		const hash = this.hast;
// 		$('html, body').animate({
// 			scrollTop: $(hash).offset().top
// 		},800);
// 	}
// });
const scroll = new SmoothScroll('.sidenavi a[href*="#]',{
	speed: 800
});

$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				//$('#sidenav-l2 .mark4').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}
