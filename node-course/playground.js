//Lecture 18
console.log('TO Explore JSon');
console.log('********************');
const fs = require('fs');

/*


Wriritng to file
*/
// const book = {
//   title: "TRain to Pakistan",
//   author: "KHushwant Singh"
// }
//
// const JsonBook = JSON.stringify(book);
// // console.log(JsonBook);
// //
// // console.log(JSON.parse(JsonBook));
//
// fs.writeFileSync('1-json.json',JsonBook);

/*
TO read the file
*/
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString();
// console.log(JSON.parse(dataJson).title);


//Challenge
const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data);
 data.name = "Sakshi";
 data.age = 28;
const updatedJsonData = JSON.stringify(data);
fs.writeFileSync('1-json.json',updatedJsonData);
