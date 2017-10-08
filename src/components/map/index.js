import L from 'leaflet'
require('./leaflet-geoip.js')

import $ from 'jquery'

var icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.2.0/dist/images/marker-icon.png',
    shadowUrl:  'https://unpkg.com/leaflet@1.2.0/dist/images/marker-shadow.png'
})

let pos = L.GeoIP.getPosition()
let mymap = L.map('map').setView([pos.lat, pos.lng], 13)
let marker = L.marker([pos.lat, pos.lng], {icon: icon}).addTo(mymap)
let mapResult = {}



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap)



$('#map-search-result').on('click', '.map-result-js', function () {
  let searchId = $(this).data('mapSearchId')
  let search = mapResult[searchId]
  mymap.setView([search.lat, search.lon], 13)
  mymap.removeLayer(marker)
  marker = L.marker([search.lat, search.lon], {icon: icon}).addTo(mymap)

})

function searchFunction(event) {
  event.preventDefault()

  const searchValue = $('#map-search-input').val()
  let nominatim = `http://nominatim.openstreetmap.org/search?format=json&limit=5&q=${searchValue}`
  $.getJSON(nominatim, function (data) {
    mapResult = {}
    $('#map-search-result').empty()

    $.each(data, function (key, val) {
      mapResult[val.place_id] = {
        lat: val.lat,
        lon: val.lon
      }
      $('#map-search-result').append(`<li data-map-search-id="${val.place_id}" class="map-result-js">${val.display_name}</li>`)
    })

  })
}

$('#map-form').submit(function (event) {
  searchFunction(event)
})

$('#map-search-js').click(function (event) {
  searchFunction(event)
})