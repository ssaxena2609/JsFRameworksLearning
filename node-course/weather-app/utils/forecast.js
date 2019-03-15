const request = require("request");


const forecast = (lattitude , longitude , callback) => {
  const url = 'https://api.darksky.net/forecast/9816c3e832b17813932c254367072a39/' + lattitude + ',' + longitude
  request({url:url, json: true},(error,response) => {
    if(error) {
      callback("Unable to connect to weather service",undefined);
    } else if(response.body.error) {
      callback("Unable to find location",undefined);
    } else {
      callback(undefined, {
        temperature : response.body.currently.temperature,
        summary: response.body.daily.data[0].summary
      });

    }

  })
}

module.exports = forecast
