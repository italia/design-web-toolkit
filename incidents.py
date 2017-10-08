import logging
import requests
import json
import xml.etree.ElementTree as ET

incidenti_json_url = 'http://www.statweb.provincia.tn.it/indicatoristrutturalisubpro/exp.aspx?ntab=Sub_Numero_Incidenti&info=d&fmt=json'
r = requests.get(incidenti_json_url)
incidenti_data = r.json()
incidenti_dict = incidenti_data['Numero di incidenti']
icidenti_anni = [e['anno'] for e in incidenti_dict]
icidenti_codEnte = set([e['codEnte'] for e in incidenti_dict])


enti_json_url = 'http://www.statweb.provincia.tn.it/indicatoristrutturalisubpro/exp.aspx?cod=e'
r = requests.get(enti_json_url)
enti_data = r.json()
enti_dict = enti_data['Lista enti SP']
enti_codEnte = set([e['id'] for e in enti_dict])

'''
enti_geo_rdf = 'http://www.territorio.provincia.tn.it/geodati/712_Sedi_comunali_della_PAT__pup__12_12_2011.rdf'
r = requests.get(enti_geo_rdf)
enti_geo_rdf_lines = r.text.split()
id_lat_lon_fields = [x[x.index('>',1)+1 : x.index('<',1)] for x in enti_geo_rdf_lines if x.startswith(('xml:lang', '<geo:lat>', '<geo:long>'))]
id_lat_lon_fields_grouped = [id_lat_lon_fields[n:n+3] for n in range(0, len(id_lat_lon_fields), 3)]
enti_geo_ids = set([x[0] for x in id_lat_lon_fields_grouped])
'''

from geopy.geocoders import GoogleV3
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderServiceError

GOOGLE_API_KEY = 'AIzaSyCjmN2mmOviJXuJishwacbc-q4FQwYiFro'
GEOLOCATOR_1 = Nominatim()
GEOLOCATOR_2 = GoogleV3(GOOGLE_API_KEY)

def getLatLonFromName(locationName):
    try:
        for g in [GEOLOCATOR_1, GEOLOCATOR_2]:
            location = g.geocode(
            #locationName, timeout=10, exactly_one=True, language='it', region='it') #default one answer for Nominatim (not google)
            locationName, timeout=10, exactly_one=True, language='it')  # default one answer for Nominatim (not google)
            if location :
                return location.latitude, location.longitude
    except GeocoderServiceError:
        logging.error('GeocoderServiceError occurred')

def getLocationFromName(locationName):
    try:
        for g in [GEOLOCATOR_1, GEOLOCATOR_2]:
            location = g.geocode(
            #locationName, timeout=10, exactly_one=True, language='it', region='it') #default one answer for Nominatim (not google)
            locationName, timeout=10, exactly_one=True, language='it')
            if location :
                return location
    except GeocoderServiceError:
        logging.error('GeocoderServiceError occurred')


id_loc = {
    ente['id']: getLatLonFromName(ente['descrizione'] + ', Trento' ) for ente in enti_dict
}

final_dic = [{
    'codEnte': ente['id'],
    'descrizione': ente['descrizione'],
    'latlon': id_loc[ente['id']],
} for ente in enti_dict]

final_data = []
for incidenti_entry in incidenti_dict:
    incidenti = incidenti_entry['valore']
    codEnte = incidenti_entry['codEnte']
    ente = [x['descrizione'] for x in enti_dict if x['id'] == codEnte][0]
    anno = incidenti_entry['anno']
    latlon = id_loc[codEnte]
    final_data.append(
        {
            'incidenti': incidenti,
            'codEnte': codEnte,
            'ente': ente,
            'anno': anno,
            'latlon': latlon
        }
    )

with open('incidenti.json', 'w') as outfile:
    json.dump(final_data, outfile, indent=4)

ids = []
comuni_name = []
comuni_lat = []
comuni_lon = []
for entry in final_data:
    id = entry['codEnte']
    if id not in ids:
        ids.append(id)
        comuni_name.append(entry['ente'])
        comuni_lat.append(entry['latlon'][0])
        comuni_lon.append(entry['latlon'][1])

comuni_data = {
    "name": comuni_name,
    "latitude": comuni_lat,
    "longitude": comuni_lon,
}

import pandas as pd
df = pd.DataFrame.from_dict(comuni_data)
df.to_csv("comuni.csv", index=False)


import csv
with open('comuni.csv', 'wb') as csv_file:
    writer = csv.writer(csv_file)
    for key, value in comuni_data.items():
       writer.writerow([key, value])

#text = json.dumps(incidenti_data, indent=4, sort_keys=True)


#kml_xml = r.content
#root = ET.fromstring(kml_xml)
#document = root.find('rdf:RDF')


#print(enti_codEnte)



'''
# incidenti_data:
{
    "Numero di incidenti": [
        {
            "anno": "2003",
            "codEnte": "1",
            "valore": "34"
        },
        {
            "anno": "2003",
            "codEnte": "2",
            "valore": "6"
        }
}

# enti:
{
    'Lista enti SP': [
        {
            'descrizione': 'Ala', 
            'id': '1'
        }, 
        {
            'descrizione': 'Albiano', 
            'id': '2'
        }
    ]
}

'''