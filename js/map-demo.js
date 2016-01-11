/**
 *
 * Map Tile Demos
 *
 */
var map = null,
    layers = [];

// When the slide changes, this callback is fired. This callback determines what
// the current slide ID is and shows the appropriate map tile layer for that slide.
Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    // Don't want reveal.js keyboard mapping conflicting with leaflet
    var apiKey = localStorage.getItem('apiKey'),
        apiSecret = localStorage.getItem('apiSecret');

    if (event.currentSlide.id === "map-demo-a-1") {
        initMap();
        // Show RGB map w/ scene ID yJ8PbSrkQ2CD6shFxOzitA
        createLayer("https://tile-a.urthecast.com/v1/rgb/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret  + "&cloud_coverage_lte=10");
    } else if (event.currentSlide.id === "map-demo-a-2") {
        initMap();
        // Show NDVI map w/ scene ID yJ8PbSrkQ2CD6shFxOzitA
        createLayer("https://tile-a.urthecast.com/v1/ndvi/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&cloud_coverage_lte=10");
    } else if (event.currentSlide.id === "map-demo-a-3") {
        initMap();
        // Show False Color NIR map w/ scene ID yJ8PbSrkQ2CD6shFxOzitA
        createLayer("https://tile-a.urthecast.com/v1/false-color-nir/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&cloud_coverage_lte=10");
    } else if (event.currentSlide.id === "map-demo-a-4") {
        initMap();
        // Show NDWI map w/ scene ID yJ8PbSrkQ2CD6shFxOzitA
        createLayer("https://tile-a.urthecast.com/v1/ndwi/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&cloud_coverage_lte=10");
    } else if (event.currentSlide.id === "map-demo-a-5") {
        initMap();
        createLayer("https://tile-a.urthecast.com/v1/evi/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&cloud_coverage_lte=10");
    } else if (event.currentSlide.classList.contains('map-demo-b')) {
        initMap();
        var style = event.currentSlide.getAttribute('data-style');
        var acquiredLTE = event.currentSlide.getAttribute('data-acquired-lte');
        var acquiredGTE = event.currentSlide.getAttribute('data-acquired-gte');
        createLayer("https://tile-a.urthecast.com/v1/" + style + "/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&acquired_lte=" + acquiredLTE + "&acquired_gte=" + acquiredGTE + "&cloud_coverage_lte=20");
    } else if (event.currentSlide.classList.contains('map-demo-b-2')) {
        initMap();
        var style = event.currentSlide.getAttribute('data-style');
        var acquiredLTE = event.currentSlide.getAttribute('data-acquired-lte');
        var acquiredGTE = event.currentSlide.getAttribute('data-acquired-gte');
        createLayer("https://tile-a.urthecast.com/v1/" + style + "/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&acquired_lte=" + acquiredLTE + "&acquired_gte=" + acquiredGTE + "&cloud_coverage_lte=20");
    } else if (event.currentSlide.classList.contains('map-demo-c')) {
        initMap(30.431075, -97.980109, 12);
        var style = event.currentSlide.getAttribute('data-style');
        var acquiredLTE = event.currentSlide.getAttribute('data-acquired-lte');
        var acquiredGTE = event.currentSlide.getAttribute('data-acquired-gte');
        createLayer("https://tile-a.urthecast.com/v1/" + style + "/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&acquired_lte=" + acquiredLTE + "&acquired_gte=" + acquiredGTE + "&cloud_coverage_lte=20");
    } else if (event.currentSlide.classList.contains('map-demo-d')) {
        initMap(30.098061, -97.178831, 13);
        var style = event.currentSlide.getAttribute('data-style');
        var acquiredLTE = event.currentSlide.getAttribute('data-acquired-lte');
        var acquiredGTE = event.currentSlide.getAttribute('data-acquired-gte');
        createLayer("https://tile-a.urthecast.com/v1/" + style + "/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&acquired_lte=" + acquiredLTE + "&acquired_gte=" + acquiredGTE + "&cloud_coverage_lte=20");
    } else if (event.currentSlide.classList.contains('map-demo-e')) {
        initMap();
        var style = event.currentSlide.getAttribute('data-style');
        var acquiredLTE = event.currentSlide.getAttribute('data-acquired-lte');
        var acquiredGTE = event.currentSlide.getAttribute('data-acquired-gte');
        createLayer("https://tile-a.urthecast.com/v1/" + style + "/{z}/{x}/{y}?api_key=" + apiKey + "&api_secret=" + apiSecret + "&acquired_lte=" + acquiredLTE + "&acquired_gte=" + acquiredGTE + "&cloud_coverage_lte=20");
    } else {
        cleanupMap();
    }

});

function initMap(lat, lng, zoom) {

    if (!lat) lat = 30.299489;
    if (!lng) lng = -97.733062;
    if (!zoom) zoom = 10;

    document.getElementById('map').classList.remove('hidden');

    if (!map) {
        map = L.map('map', {
            keyboard: false,
            attributionControl: false
        }).setView([lat, lng], zoom);
    } else {
      map.setView([lat, lng], zoom);
    }

    return true;
}

function createLayer(url) {
    // Create tile layer, given url
    var layer = L.tileLayer(url).addTo(map);
    layers.push(layer);

    return true;
}

function cleanupMap() {
    document.getElementById('map').classList.add('hidden');

    // Remove all layers;
    layers.forEach(function (element) {
        map.removeLayer(element);
    });
}
