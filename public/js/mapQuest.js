function initMap() {
	// add your code here
	L.mapquest.key = 'ktzGW2ZKDm03DOOZTfHHhld4D6qixN9I';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 15,
		zoomControl: false
	});

	//add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}