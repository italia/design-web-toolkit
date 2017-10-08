window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	});

    $.getJSON("twilio/states.geojson", function(data) {

    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Area_Name);
      }
    });


    var map = L.map('my-map')
    .fitBounds(geojson.getBounds());

    basemap.addTo(map);
    geojson.addTo(map);
  });

};


//var map = L.map('map', {scrollWheelZoom:false}).setView([42.3674, 12.8975], 6);
//
//function addDataToMap(data, map) {
//    var dataLayer = L.geoJson(data, {
//        onEachFeature: function(feature, layer) {
//            var popupText = feature.properties.audio
//            + "<b>Spiegazione:</b> " + feature.properties.translation
//            + "<br>Registrata da " + feature.properties.person
//            + " il " + feature.properties.date;
//            layer.bindPopup(popupText); }
//        });
//    dataLayer.addTo(map);
//}
//
////var MapUrl = "https://dl.dropboxusercontent.com/u/12016006/tmp/dynamicaudiomapdata.geojson"
//var MapUrl = "http://dialectbot.appspot.com/dynamicaudiomapdata.geojson"
//
//$.getJSON(MapUrl, function(data) { addDataToMap(data, map); });
//
//
//L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a> contributors'
//}).addTo(map);
//
//
//
