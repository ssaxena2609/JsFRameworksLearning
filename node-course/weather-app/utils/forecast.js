const request = require("request");


const forecast = (lattitude , longitude , callback) => {
  const url = 'https://api.darksky.net/forecast/9816c3e832b17813932c254367072a39/' + lattitude + ',' + longitude
  request({url, json: true},(error,{body}) => {
    if(error) {
      callback("Unable to connect to weather service",undefined);
    } else if(body.error) {
      callback("Unable to find location",undefined);
    } else {
      callback(undefined, {
        temperature : body.currently.temperature,
        summary: body.daily.data[0].summary
      });

    }

  })
}

module.exports = forecast
