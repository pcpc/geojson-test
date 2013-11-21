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
map.markerLayer.loadURL(jsonPinsURL);

// Center Pins on Click
map.markerLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});



