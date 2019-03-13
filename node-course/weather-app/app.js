const request = require("request");

const url = 'https://api.darksky.net/forecast/9816c3e832b17813932c254367072a39/37.8267,-122.4233?lang=es'

const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3NheGVuYTI2MDkiLCJhIjoiY2p0N2Rya3E4MGpoeTQ5cGh5endkajY2ayJ9.UMw7ZgZU6ID_hKcyAKeWWg&limit=1'
//Lecture 32
// request({url: url}, (error, response) => {
//   const data= JSON.parse(response.body);
//   console.log(data.currently);
// });

//Lecture 33

request({url:url, json: true},(error,response) => {
  if(error) {
    console.log("Unable to connect to weather service");
  } else if(response.body.error) {
    console.log("Unable to find location");
  } else {
      console.log(response.body.daily.data[0].summary + ' It is currently '+response.body.currently.temperature);
  }

})
//Lecture 33 ends here
//Lectur 34

request({url:geoCodingUrl, json:true}, (error,response) => {
  if(error) {
    console.log("Unable to connect to geolocation service");
  } else if(response.body.features.length === 0) {
    console.log("Unable to find location");
  } else {
  console.log("Lattitde is " +response.body.features[0].center[1]+' and longitude is ' +response.body.features[0].center[0]);
  }

})
