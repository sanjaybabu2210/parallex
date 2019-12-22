window.onscroll = function() {myFunction()};
var scrolled;
	function myFunction() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  scrolled = (winScroll / height) * 100;
	  
	  document.getElementById("filler").style.height = scrolled + "%";
	}
	
$(document).ready(function(){
	$(window).scroll(function(){
		//var scroll = $(window).scrollTop();
		
		if(scrolled>20){
			$("#c1").css("background", "white");
		}
		else{
			$("#c1").css("background", "transparent");
		}
		
		if(scrolled>35){
			$("#c2").css("background", "white");
		}
		else{
			$("#c2").css("background", "transparent");
		}
		
		if(scrolled>45){
			$("#c3").css("background", "white");
		}
		else{
			$("#c3").css("background", "transparent");
		}
		
		if(scrolled>60){
			$("#c4").css("background", "white");
		}
		else{
			$("#c4").css("background", "transparent");
		}
		
		if(scrolled>75){
			$("#c5").css("background", "white");
		}
		else{
			$("#c5").css("background", "transparent");
		}
	})
})