// Leaflet, coordinates are represented by an array of 2 elements
// [ <lat>, <lng> ]
let singapore = [1.29, 103.85];
// L is defined by Leaflet's JavaScript file
let map = L.map('map'); // create a map and render it to the #map
map.setView(singapore, 13);

L.tileLayer('https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=Unified&key=1gZJIZjnHLYnK35Cyxiyw9PkzlZC5CeP', {
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

