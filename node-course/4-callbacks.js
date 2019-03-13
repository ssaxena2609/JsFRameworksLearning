setTimeout(() => {
  console.log("2 minutes silence it was");
},2000);


const geocode = (address,callback) => {
   const data = {
     Lattitde : 0,
     longitude : 0
   }
   return data;
}
var data = geocode('Philadelphia');
console.log(data);

//The above example is synchronous. NOthing asynchronous is happening here
//Late we will be using request which will be asynchronous


const geocodeTimeOut = (address,callback) => {
  setTimeout(() => {
     const data = {
       Lattitde : 0,
       longitude : 0
     }
     return data;
   },2000);
}
var dataTimeOut = geocodeTimeOut('Philadelphia');
console.log(dataTimeOut);

//undefined output as call back will run after the callstack is empty or everything including main
//will be removed from stack, which will be done after execution of console.log(dataTimeOut);
//Here dataTimeOut will not receive any value as geocodeTimeOut will not returnany value


/*
We want one of our call back should finish b4 our main finishes so that we can access the data.catch
TO solve this
*/
const geocodeAsync = (address,callback) => {
  setTimeout(() => {
     const data = {
       Lattitde : 0,
       longitude : 0
     }
     callback(data);
   },2000);
}
geocodeAsync('Philadelphia', (data) => {
  console.log(data);
});

//Challemge
const add = (a,b,callback) => {
  const sum = a+b;
  return sum;
}
const total = add(1,4);
console.log(total);

//In asynchronous manner

const addTimeOUt = (a,b,callback) => {
  setTimeout(() => {
    const sum = a+b;
    return sum;
  },2000);
}
const totalTimeOUt = addTimeOUt(1,4);
console.log(totalTimeOUt); //undefined

const addAsync = (a,b,callback) => {
  setTimeout(() => {
    const sum = a+b;
    callback(sum);
  },2000);
};
addAsync(1,4,(totalSum) => {
  console.log(totalSum);
})
