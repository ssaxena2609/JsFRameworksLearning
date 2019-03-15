const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

// geoCode('Philadelphia New York', (error,response) => {
//   if(error) {
//     console.log(error)
//   } else {
//       console.log("Lattitde is " +response.Lattitde+' and longitude is ' +response.Longitude+ 'at '+response.Location);
//   }
// })
//
// forecast(75.7088,44.1545,(error,data)=> {
//    if(error) {
//      console.log(error)
//    } else {
//      console.log(data.summary + ' It is currently '+data.temperature);
//    }
// });

//CallBack chaining method Lecture 38

const enteredLocation= process.argv[2];
if(!enteredLocation) {
   console.log("LOcation not entered");
} else {
  geoCode(enteredLocation[2], (error,{Lattitde, Longitude, Location}) => {
    if(error) {
         return console.log(error);
      }
      console.log("Lattitde is " +Lattitde+' and longitude is ' +Longitude+ 'at '+Location);
      forecast(Lattitde,Longitude,(error,{summary, temperature})=> {
         if(error) {
            return console.log(error);
         }
         console.log(summary + ' It is currently '+temperature);
      });

  })
}
