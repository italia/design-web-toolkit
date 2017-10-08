import L from 'leaflet'
import $ from 'jquery'

require('./leaflet-geoip.js')

export default class Map {
  constructor(mapId, options={}) {
    const defaultOptions = {
      showSearch: true,
      defaultCoordinates: false,
      defaultZoom: 13
    }

    this.mapId = mapId
    this.options = Object.assign(defaultOptions, options)

    this.mapResult = {}

    if (!this.options.defaultCoordinates) {
      const geoIPPosition = L.GeoIP.getPosition()
      this.options.defaultCoordinates = geoIPPosition
    }


    this.icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.2.0/dist/images/marker-icon.png',
      shadowUrl:  'https://unpkg.com/leaflet@1.2.0/dist/images/marker-shadow.png'
    })

    this.mapObject = L.map(this.mapId).setView([this.options.defaultCoordinates.lat, this.options.defaultCoordinates.lng], this.options.defaultZoom)
    this.marker = L.marker([this.options.defaultCoordinates.lat, this.options.defaultCoordinates.lng], {icon: this.icon}).addTo(this.mapObject)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapObject)

    // contextMenu
    this.mapObject.on('contextmenu', (event) => {
      console.log('Coordinates: ' + event.latlng.toString())
      console.log('Coordinates: ' + event.latlng.lat)
    })

    $('#map-form').submit((event) => {
      this.searchFunction(event)
    })

    $('#map-search-js').click((event) => {
      this.searchFunction(event)
    })

    $('#map-search-result').on('click', '.map-result-js', (event) => {
      let searchId = $(event.target).data('mapSearchId')

      let search = this.mapResult[searchId]
      this.mapObject.setView([search.lat, search.lon], 13)
      this.mapObject.removeLayer(this.marker)
      this.marker = L.marker([search.lat, search.lon], {icon: this.icon}).addTo(this.mapObject)

    })

  }

  searchFunction(event) {
    event.preventDefault()

    const searchValue = $('#map-search-input').val()
    let nominatim = `http://nominatim.openstreetmap.org/search?format=json&limit=5&q=${searchValue}`
    $.getJSON(nominatim, (data) => {
      this.mapResult = {}
      $('#map-search-result tbody').empty()

      $.each(data, (key, val) => {
        this.mapResult[val.place_id] = {
          lat: val.lat,
          lon: val.lon
        }
        $('#map-search-result').append(`<tr><td data-map-search-id="${val.place_id}" class="map-result-js">${val.display_name}</td></tr>`)
      })

    })
  }

}