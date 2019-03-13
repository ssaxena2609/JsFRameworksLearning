const chalk = require("chalk");
const notesUtilities = require('./notes.js');
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
  //Lecture 19
  notesUtilities.addNote(argv.title,argv.body);

 }
})
//CReate remove command
yargs.command({
 command : 'remove',
 describe : 'Remove a note',
 builder: {
   title : {
     describe: 'Enter Title To Remove',
     demandOption: true,
     type: 'string'
   }
 },
 handler: function(argv) {
   notesUtilities.removeNote(argv.title);
   console.log("Removed a note");
  }
})

//CReate list command
yargs.command({
 command : 'list',
 describe : 'Listing all note',
 handler: function() {
   console.log("Listing out all the notes");
   const dataArray = notesUtilities.loadNotes();
   dataArray.map((data) => {
     console.log(data.title+"&& "+data.body);
   })
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
