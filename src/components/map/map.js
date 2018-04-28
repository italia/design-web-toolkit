import L from 'leaflet'
import $ from 'jquery'

require('./leaflet-geoip.js')

export default class Map {
  constructor(mapId, options={}) {
    const defaultOptions = {
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

    this.mapObject.on('contextmenu', (event) => {
      this.contextMenu(event)
    })

    $('#map-form').submit((event) => {
      this.searchFunction(event)
    })

    $('#map-search-js').click((event) => {
      this.searchFunction(event)
    })

    $('#map-search-reset-js').click((event) => {
      this.restoreDefaultCoordinates(event)
    })

    $('#map-search-result').on('click', '.map-result-js', (event) => {
      this.resultAction(event)
    })

  }

  resultAction(event) {
    let searchId = $(event.target).data('mapSearchId')
    let search = this.mapResult[searchId]
    this.mapObject.setView([search.lat, search.lon], this.options.defaultZoom)
    this.mapObject.removeLayer(this.marker)
    this.marker = L.marker([search.lat, search.lon], {icon: this.icon}).addTo(this.mapObject)
  }

  contextMenu(event) {
    if (event) {
      $('#map-search-selected-coordinate-js').text(`Coordinate: lat ${event.latlng.lat} log ${event.latlng.lng}`)
    }
  }

  restoreDefaultCoordinates(event) {
    $('#map-search-result tbody').empty()
    $('#map-search-input-js').val('')
    $('#map-search-selected-coordinate-js').text('')
    this.mapResult = {}
    this.mapObject.setView([this.options.defaultCoordinates.lat, this.options.defaultCoordinates.lng], this.options.defaultZoom)
    this.mapObject.removeLayer(this.marker)
    this.marker = L.marker([this.options.defaultCoordinates.lat, this.options.defaultCoordinates.lng], {icon: this.icon}).addTo(this.mapObject)

  }
  searchFunction(event) {
    event.preventDefault()

    const searchValue = $('#map-search-input-js').val()
    const nominatim = `http://nominatim.openstreetmap.org/search?format=json&limit=5&q=${searchValue}`
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