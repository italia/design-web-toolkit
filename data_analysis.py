import requests
import json

# http://www.statweb.provincia.tn.it/indicatoristrutturalisubpro/exp.aspx?ntab=Sub_Numero_Incidenti&info=d&fmt=json
# http://www.dati.gov.it/dataset/trasporti-pubblici-sgm-servizio-realtime/resource/6a3e4d4e-65b3-425c-8c1d-9e3e05054898

#http://servicemap.disit.org/WebAppGrafo/api/v1/?selection=43.7756;11.2490&categories=SensorSite;Car_park&maxResults=10&maxDists=0.2&lang=it&format=json

payload = {
    'selection': ';'.join([str(43.7756), str(11.2490)]),
    'categories': ';'.join(['SensorSite','Car_park']),
    'maxResults': 10,
    'maxDists': 0.2,
    'lang': 'it',
    'format': 'json',
    #text: 'description',

}

r = requests.get('http://servicemap.disit.org/WebAppGrafo/api/v1/', params=payload)
data = r.json()

#text = json.dumps(data, indent=4, sort_keys=True)
text = json.dumps(data)

print(text)