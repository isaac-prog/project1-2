const API_KEY = '1gZJIZjnHLYnK35Cyxiyw9PkzlZC5CeP';
const APPLICATION_NAME = 'My Application';
const APPLICATION_VERSION = '1.0';
 
tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);

const GOLDEN_GATE_BRIDGE = {lng: -122.47483, lat: 37.80776};
 
var map = tt.map({
  key: API_KEY,
  container: 'map-div',
  center: GOLDEN_GATE_BRIDGE,
  zoom: 12
});

