# parametri del costruttore

    - mapId: div#id della mappa
    - options: Object :
        {
          defaultCoordinates: false,  // coordinate di partenza della mappa (di default geoIP)
          defaultZoom: 13  // livello di zoom della mappa
        }

# Override della classe base

```

class MapPersonal extends Map {
  constructor(mapId, options={}) {
    super(mapId, options)
  }

  contextMenu(event) {  // override
    if (event) {
      alert(`Coordinate: lat ${event.latlng.lat} log ${event.latlng.lng}`)
    }
  }
}
new MapPersonal('map')
```

# Metodi estendibili:

    - contextMenu (interazione con pulsante destro del mouse sulla mappa)
    - restoreDefaultCoordinates (reset delle coordinate di default)
    - searchFunction (funzione di ricerca)
    - resultAction (azione sul elemento trovato)
