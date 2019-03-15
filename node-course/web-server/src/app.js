const path = require("path");
const express = require("express");

const app = express();


const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

// app.get('', (req,res) => {
//   res.send("<h1>Hello EXpress</h1>");
// })
// app.get('/help', (req,res) => {
//   res.send([{
//     name: 'Sakshi',
//   },{
//     name: 'VArun'
//   }]);
// })
// app.get('/about', (req,res) => {
//   res.send({
//     name: 'Sakshi',
//     subject: 'EXpress'
//   });
// })
app.get('/weather', (req,res) => {
  res.send({
    loaction: 'Philadelphia',
    temperature:15
  });
})




app.listen(3000,() => {
  console.log(":SErver is up");
})
