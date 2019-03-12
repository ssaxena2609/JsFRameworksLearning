const chalk = require("chalk");
const text = require('./notes.js');
const yargs = require("yargs");

//Customisze yargs version
yargs.version("1.1.0")

console.log(process.argv);

//CReate add command
yargs.command({
 command : 'add',
 describe : 'Add a new note',
 builder: {
   title : {
     describe :'Note Title',
     demandOption: true,
     type: 'string'
   },
   body : { //LECTURE 17
     describe :'Adding a new note will add a note to the existing list',
     demandOption: true,
     type: 'string'
   }
 },
 handler: function(argv) {
   console.log("MY Title provided in arguments is "+argv.title);
  console.log("MY Title provided in arguments is "+argv.body);

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
