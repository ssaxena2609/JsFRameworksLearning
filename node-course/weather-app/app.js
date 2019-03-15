const request = require("request");
const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");


//Lecture 32
// request({url: url}, (error, response) => {
//   const data= JSON.parse(response.body);
//   console.log(data.currently);
// });

//Lecture 33

// request({url:url, json: true},(error,response) => {
//   if(error) {
//     console.log("Unable to connect to weather service");
//   } else if(response.body.error) {
//     console.log("Unable to find location");
//   } else {
//       console.log(response.body.daily.data[0].summary + ' It is currently '+response.body.currently.temperature);
//   }
//
// })
//Lecture 33 ends here

geoCode('Philadelphia New York', (error,response) => {
  if(error) {
    console.log(error)
  } else {
      console.log("Lattitde is " +response.Lattitde+' and longitude is ' +response.Longitude+ 'at '+response.Location);
  }
})

forecast(75.7088,44.1545,(error,data)=> {
   if(error) {
     console.log(error)
   } else {
     console.log(data.summary + ' It is currently '+data.temperature);
   }
});
