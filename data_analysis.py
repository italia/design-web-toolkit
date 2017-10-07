import requests

# http://www.dati.gov.it/dataset/trasporti-pubblici-sgm-servizio-realtime/resource/6a3e4d4e-65b3-425c-8c1d-9e3e05054898

#http://servicemap.disit.org/WebAppGrafo/api/v1/?selection=43.7756;11.2490&categories=SensorSite;Car_park&maxResults=10&maxDists=0.2&lang=it&format=json

fields = {
    'selection':'43.7756;11.2490',
    'categories': 'SensorSite;Car_park',
    'maxResults': 10,
    'maxDists': 0.2,
    'lang': 'it',
    'format': 'json'
}