$(document).ready(function(){


	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 200){
			$(".navbar").css("background" , "#0a2b58");
		}
		else{
			$(".navbar").css("background" , "none");
		}
	})


   /* var typed = new Typed(".typing", {
        strings: ["Phograph", "YouTuber", "Designer"],
        typeSpeed: 200,
        backSpeed: 60,
        loop: true
    }); */



});


function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
