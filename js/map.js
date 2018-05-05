// ======Ready Function======
$(function() {
	mapinit();
});
// map
function mapinit() {
	var mapCanvas = document.getElementById("g_map");
	var myCenter = new google.maps.LatLng(19.0551109, 72.827133);
	var mapOptions = {
		center: myCenter,
		zoom: 15
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: myCenter,
		title: "Mumbai",
		icon: "images/marker.png"
	});
	marker.setMap(map);
}