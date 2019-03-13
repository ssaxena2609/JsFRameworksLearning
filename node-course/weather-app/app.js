//LECTURE 30

console.log("app of weather app starting");

setTimeout(() => {
  console.log("2 seconds break it is");
},2000);
setTimeout(() => {
  console.log("0 seconds break it is");
},0);
console.log("app of weather app stopping");
//OUTPUT
/*
app of weather app starting
app of weather app stopping
0 seconds break it is
2 seconds break it is
*/
