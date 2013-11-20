// *
// * MapBox.js Setup
// *


// Initiate Map and GeoCode Centering
var geocoder = L.mapbox.geocoder('pcpc.map-qr8fr1li'),
  map = L.mapbox.map('map', 'pcpc.map-qr8fr1li')
  geocoder.query('Dallas, TX', showMap);

// Center Map Bounds
function showMap(err, data) {
     map.fitBounds(data.lbounds);
}

// Pan Map with Clicks
map.markerLayer.on('click', function(e) {
        map.panTo(e.layer.getLatLng());
});

// if this map supports auto-scaling, `detectRetina` will automatically
// use scaled tiles when retina is detected.
var layer = L.mapbox.tileLayer('pcpc.map-qr8fr1li', {
    detectRetina: true,
})

// Add Data - As with any other AJAX request, this technique is subject to the Same Origin Policy:
// http://en.wikipedia.org/wiki/Same_origin_policy
// So the CSV file must be on the same domain as the Javascript, or the server
// delivering it should support CORS.
var markerLayer = L.mapbox.markerLayer()
  .loadURL('test.geojson')
  .addTo(map);

