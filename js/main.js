// Notes list that is going to be shown in the browser
const notes = [{
  _id: NotesApp.createNoteId(),
  title: 'Note title goes here!',
  text: 'This is my very first note text! 😀',
}, {
  _id: NotesApp.createNoteId(),
  title: 'Second awesome note!',
  text: 'This is my second note text!',
}];

const addNewNote = NotesApp.addNewNote;

// Named functions
function getNoteById(searchId) {
  let foundIndex;
  notes.forEach (function(note, index) {
    if (note._id === searchId) {
      foundIndex = index;
    }
  });
  return foundIndex;
};

const updateNote = function(_id, title, text, index) {
  // Replaces object in array with received one.
notes[index]._id = _id;
notes[index].text = _id;
notes[index].title = _id;
};

// Declared functions
const insertNote = function(_id, title, text) {
  // This should receive the title, text and _id of a note as params
  // and as its name says, you need to create a new note object and add it to list
    let note = {
        _id: _id,
        text: text,
        title: title,
    };
    note.push(note);
};

const saveNote = () => NotesApp.saveNote(function(_id, title, text) {
  // Iterate over notes
  // Validate if note already exists
  // If note was found, replace values
  // If not add it
  // What's do you think missing?
  let index = getNoteById(_id);
  if (index !== undefined) {
    updateNote (_id, title, text, index);
  } else {
    insertNote(_id, title, text);
  }
});

const onClickNote = (event) => NotesApp.onClick(event, function(_id) {
  console.log('Click button Add Note 🖱');
  // const note;
  // You will receive an _id of the note
  // Construct a note object with the same structure of the list
  // showNote function will render note in editor
  let note;
  let index = getNoteById(_id);
  if (index !== undefined) {
    note = notes[index]
  }
  NotesApp.showNote(note);
});

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  NotesApp.renderNotesList();
});




console.log('You already imported your js file 😎');
