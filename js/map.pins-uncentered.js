var map = L.mapbox.map('map')
    .setView([32.81942355912533,-96.8020337820053], 11);

map.markerLayer.on('click', function(e) {
        map.panTo(e.layer.getLatLng());
    });

// if this map supports auto-scaling, `detectRetina` will automatically
// use scaled tiles when retina is detected.
var layer = L.mapbox.tileLayer('pcpc.map-qr8fr1li', {
    detectRetina: true,
})
.addTo(map);


// As with any other AJAX request, this technique is subject to the Same Origin Policy:
// http://en.wikipedia.org/wiki/Same_origin_policy
// So the CSV file must be on the same domain as the Javascript, or the server
// delivering it should support CORS.
var markerLayer = L.mapbox.markerLayer()
    .loadURL('test.geojson')
    .addTo(map);


//markerLayer.loadURL('test.geojson');
