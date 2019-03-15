const path = require("path");
const express = require("express");

const app = express();


const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine','hbs');

app.get('', (req,res) => {
  res.render("index",{
    title: "weather app",
    name:"Sakshi"
  });
})

app.get('/about', (req,res) => {
  res.render("about",{
    description: "THis app is all about displaying weather for your city",
    temperature:"45"
  });
})

app.get('/help',(req,res) => {
  res.render('help', {
    ContactInfo: 1234567
  });
})

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
