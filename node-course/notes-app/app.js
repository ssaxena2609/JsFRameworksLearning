// const fileSystem = require("fs");appendFileSync
//
// fileSystem.writeFileSync("notes.txt","THis is my first node application");
// fileSystem.appendFileSync("notes.txt"," THis is my appended text");
/**
***********************************
*/


// const name = "Sakshi";
// console.log("name is : "+name);
// const add = require('./utils.js');
// const sum = add(4,-2)
// console.log(sum);
const validator = require("validator");
const text = require('./notes.js');
console.log(validator.isEmail("Sakshimail.com"));

console.log(text());
