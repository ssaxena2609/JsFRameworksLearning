//Lecture 15
const chalk = require("chalk");
const text = require('./notes.js');
const yargs = require("yargs"); //Lect 16

const command = process.argv[2];
console.log("**** "+command);
if(command === 'add') {
  console.log("Adding new note");
} else if(command === 'remove') {
  console.log("Removing note");
} else {
  console.log("Wrong command");
}

//Lecture 16

//Customisze yargs version
yargs.version("1.1.0")

console.log(process.argv);

//CReate add command
yargs.command({
 command : 'add',
 describe : 'Add a new note',
 handler: function() {
   console.log("Adding a new note");
 }
})
//CReate remove command
yargs.command({
 command : 'remove',
 describe : 'Remove a note',
 handler: function() {
   console.log("Removing a new note");
  }
})

//CReate list command
yargs.command({
 command : 'list',
 describe : 'Listing all note',
 handler: function() {
   console.log("Listing out all the notes");
  }
})

//CReate read command
yargs.command({
 command : 'read',
 describe : 'Reading a note',
 handler: function() {
   console.log("Reading a note");
  }
})



console.log(yargs.argv);
