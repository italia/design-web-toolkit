import L from 'leaflet'

var latitude = 44.063333
var longitude = 12.580833
var mymap = L.map('mapid').setView([latitude, longitude], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap)

L.marker([latitude, longitude]).addTo(mymap).bindPopup('<b>Welcome to HackDevelopRimini</b>').openPopup()

L.circle([latitude, longitude], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(mymap).bindPopup('<b>Welcome to HackDevelopRimini</b>')
