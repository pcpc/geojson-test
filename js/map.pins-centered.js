// *
// * MapBox.js Setup
// *


// Set Map ID+View+Provide Retina Alternate Map
var map = L.mapbox.map('map', 'pcpc.map-qr8fr1li').setView([32.81942355912533,-96.8020337820053], 11)
.addLayer(L.mapbox.tileLayer('pcpc.map-qr8fr1li', {
    detectRetina: true
}));

// Path to GeoJSON Pins
var jsonPinsURL = 'test.geojson';

// Load Path
var markerLayer = L.mapbox.markerLayer()
	.loadURL(jsonPinsURL)
	.addTo(map);


// Center Pins on Click
markerLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});



