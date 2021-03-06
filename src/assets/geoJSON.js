//Генерация geoJSON'a - http://geojson.io/

export const points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "1",
        "icon": 'music',  //'bicycle', 'music', 'bar', 'art-gallery', 'rocket'  //"star"- NO working,
        "marker-color": "#f22121",   //NO working,
        "marker-size": "medium",     //переопраделяется в map.addLayer({}).
        "title": "Прив!",     //подпись под иконкой
        'description': '<strong>music</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade</p>',
        'age': 15
        },
      "geometry": {
        "type": "Point",
        "coordinates": [37.618423, 55.751244]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "2",
        "icon": 'bicycle',
        "marker-color": "#f22121",
        "marker-size": "medium",
        "title": "Привет!",
        "description": '<strong>bicycle</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make Pleasant</a> is a handmade and </p>',
        'age': 15
        },
      "geometry": {
        "type": "Point",
        "coordinates": [37.59, 55.751244]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "3",
        "icon": 'bar',
        "marker-color": "#f22121",
        "marker-size": "medium",
        "title": "Привет, Ola!",
        "description": '<strong>bar</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade</p>',
        'age': 33
        },
      "geometry": {
        "type": "Point",
        "coordinates": [37.618423, 55.74]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "4",
        "icon": 'rocket',
        "marker-color": "#f22121",
        "marker-size": "medium",
        "title": "Hi!",
        "description": '<strong>rocket</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade</p>',
        'age': 22
        },
      "geometry": {
        "type": "Point",
        "coordinates": [37.66, 55.75]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        "id": "5",
        'icon': 'theatre',
        "marker-color": "#ecd53e",
        "marker-size": "medium",
        "title": "Привет, Kola!",
        "description": '<strong>theatre</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade</p>',
        },
      'geometry': {
        'type': 'Point',
        'coordinates': [37.63, 55.76]
      }
    },
  ]
}

export const polygons = {   //polygon may be several(!), а отдельный полигон может состоять из нескольких изолированных многоугольников.
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Привет, Kola!",     //это выведем в всплывающем попапе.
        "description": `
<strong>Make it Mount Pleasant</strong>
<a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Go ahead!</a>
        `
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [   //полигон может состоять из нескольких изолированных многоугольников.
          [
            [37.65, 55.75], [37.66, 55.75], [37.65, 55.77], [37.65, 55.75]
          ],
        ]
      },
      id: 1
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Привет, Ola!",
        "description": `<div>Привет!</div>`
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [37.66, 55.75], [37.66, 55.8], [37.65, 55.6], [37.66, 55.75]
          ]
        ]
      },
      id: 2
    },
  ]
}


export const lines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "color": "#d91c1c"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [    //only for one item(!)
          [37.61, 55.75], [37.7, 55.79], [37.618423, 55.9]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "color": "#1980ee"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [37.61, 55.7], [37.7, 55.73], [37.618423, 55.9]
        ]
      }
    }
  ]
}

export const line = {   //ТОЖЕ будет работать(!)
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [37.61, 55.75], [37.7, 55.79], [37.618423, 55.9]
    ]
  }
}


let ff = {
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  }
}