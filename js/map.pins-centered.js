// *
// * MapBox.js Setup
// *


// Set Map ID+View
var map = L.mapbox.map('map', 'pcpc.map-qr8fr1li').setView([32.81942355912533,-96.8020337820053], 9);

// Path to GeoJSON Pins
var jsonPinsURL = 'test.geojson';

// Load Path
map.markerLayer.loadURL(jsonPinsURL);

// Show Popups on hover (optional)
map.markerLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
map.markerLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});

// Center Pins on Click
map.markerLayer.on('click', function(e) {
    map.panTo(e.layer.getLatLng());
});



