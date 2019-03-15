const request = require("request");

//Lecture 36 Callback abstraction

const geoCode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic3NheGVuYTI2MDkiLCJhIjoiY2p0N2Rya3E4MGpoeTQ5cGh5endkajY2ayJ9.UMw7ZgZU6ID_hKcyAKeWWg&limit=1'
  request({url, json:true}, (error,{body}) => {
    if(error) {
      callback('Unable to connect to geolocation service',undefined);
    } else if(body.features.length === 0) {
      callback('Unable to find location',undefined);
    } else {
      callback(undefined,{
        Lattitde: body.features[0].center[0],
        Longitude: body.features[0].center[1],
        Location: body.features[0].place_name
      });
    }

  })
}

module.exports = geoCode
