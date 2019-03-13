const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => ("Your notes");
const addNote = (title,body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => (note.title === title))
  if(duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log(chalk.red("Note title already exist..!"));
  }

};

const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync("notes.json",jsonData);
}
//Remove NOTE:

const removeNote = (title) => {
    console.log(title);
   const notes = loadNotes();
   const filteredNotes = notes.filter((note) => (note.title !== title));
   saveNotes(filteredNotes);
   if(notes.length  > filteredNotes.length) {
     console.log(chalk.green("Note deleted. The title of deleted note is "+title));
   }


}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch(error) {
    return [];
  }


};
module.exports =  {
  getNotes,addNote,loadNotes,removeNote
};
